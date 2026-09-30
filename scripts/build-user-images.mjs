/**
 * Reads user-supplied photography from public/images/productimgs, normalises it, and
 * writes a manifest the app imports. Products and colourways with no matching
 * file are reported so the catalogue can be trimmed to what has a real photo.
 *
 * Source files are optimised into public/images/user/ with clean names, so URLs
 * never contain spaces or parentheses and every asset is a consistent size.
 *
 * Run: npm run images:user
 */
import { readdirSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';
import { userCatalogue } from '../src/lib/generated/user-catalogue.ts';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC_DIR = join(ROOT, 'public/images/productimgs');
const OUT_DIR = join(ROOT, 'public/images/user');
const OUT_TS = join(ROOT, 'src/lib/generated/user-images.ts');

const VIEWS = ['drape', 'detail', 'flat'];
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

/** Long edge of the exported WebP. */
const LONG_EDGE = 1400;
const QUALITY = 82;

const slug = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Sort views so drape leads, then detail, then flat, then numbered extras. */
const viewRank = (v) => {
  const base = v.replace(/\d+$/, '');
  const n = parseInt(v.replace(/\D/g, ''), 10) || 0;
  const i = VIEWS.indexOf(base);
  return (i === -1 ? 99 : i) * 100 + n;
};

async function main() {
  if (!existsSync(SRC_DIR)) {
    console.error(`No directory at ${SRC_DIR}`);
    process.exit(1);
  }

  // Product and colourway names come from the generated user catalogue, which is
  // built from data/photo-descriptions.csv. Reading names from the app catalogue
  // instead would make each run depend on the previous run's image output.
  const catalog = userCatalogue.map((p) => ({
    slug: p.slug,
    colourways: p.colourways.map((c) => ({ name: c.name, slug: c.slug, hex: c.hex })),
  }));
  const bySlug = new Map(catalog.map((p) => [p.slug, p]));

  const files = readdirSync(SRC_DIR)
    .filter((f) => IMAGE_EXT.has(extname(f).toLowerCase()))
    .sort();

  /** productSlug -> colourwaySlug -> Map(view -> publicUrl) */
  const found = new Map();
  const unknown = [];
  const unmatched = [];
  const writes = new Map();
  /** Source photos reused by more than one colourway, for the warning report. */
  const sharedSources = new Set();

  const record = (productSlug, colourSlug, view, file) => {
    if (!found.has(productSlug)) found.set(productSlug, new Map());
    const byColour = found.get(productSlug);
    const key = colourSlug ?? '';
    if (!byColour.has(key)) byColour.set(key, new Map());
    byColour.get(key).set(view, { view, file });
  };

  for (const file of files) {
    const stem = basename(file, extname(file));
    const parts = stem.split('--').map(slug).filter(Boolean);

    if (parts.length === 1) {
      if (bySlug.has(parts[0])) record(parts[0], null, 'drape', file);
      else unknown.push(file);
      continue;
    }

    const [productSlug, maybeColour, maybeView] = parts;
    const product = bySlug.get(productSlug);
    if (!product) {
      unknown.push(file);
      continue;
    }

    const colourSlugs = product.colourways.map((c) => c.slug);

    // product--view
    if (VIEWS.includes(maybeColour) && !maybeView) {
      record(productSlug, null, maybeColour, file);
      continue;
    }

    if (!colourSlugs.includes(maybeColour)) {
      unmatched.push({ file, reason: `no colourway "${maybeColour}" on ${productSlug}` });
      continue;
    }

    record(productSlug, maybeColour, maybeView ?? 'drape', file);
  }

  // ---- resolve each product/colourway to its final image list ----------
  const kept = [];
  const dropped = [];
  const emitted = [];

  for (const product of catalog) {
    const entries = found.get(product.slug);
    if (!entries || entries.size === 0) {
      dropped.push({ slug: product.slug, reason: 'no images' });
      continue;
    }

    const productLevel = [...(entries.get('')?.values() ?? [])].sort(
      (a, b) => viewRank(a.view) - viewRank(b.view),
    );
    for (const v of productLevel) v.fromProductLevel = true;
    const colourways = [];

    for (const cw of product.colourways) {
      const cwSlug = cw.slug;
      const own = [...(entries.get(cwSlug)?.values() ?? [])].sort((a, b) =>
        viewRank(a.view) - viewRank(b.view),
      );
      const views = own.length ? own : productLevel;
      if (!views.length) continue;

      const images = views.map((v) => {
        // A single product-level photo (e.g. bedsheet-king.jpg) is reused by
        // every colourway, so it is only written once. Every colourway that
        // shares that source must point at the one file that actually exists,
        // otherwise the extra colourways 404 on their image.
        const existing = writes.get(v.file);
        const outName = existing?.outName ?? `${product.slug}--${cwSlug}--${v.view}.webp`;
        if (!existing) {
          writes.set(v.file, { outName, view: v.view });
          emitted.push(outName);
          if (v.fromProductLevel) sharedSources.add(v.file);
        }
        return { view: v.view, src: `/images/user/${outName}` };
      });

      colourways.push({ name: cw.name, hex: cw.hex, images });
    }

    if (!colourways.length) {
      dropped.push({ slug: product.slug, reason: 'no usable images' });
      continue;
    }
    kept.push({ slug: product.slug, colourways });
  }

  // ---- convert --------------------------------------------------------
  rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(OUT_DIR, { recursive: true });

  let converted = 0;
  for (const [file, { outName }] of writes) {
    const input = join(SRC_DIR, file);
    const out = join(OUT_DIR, outName);
    try {
      await sharp(input)
        .rotate()
        .resize({ width: LONG_EDGE, height: LONG_EDGE, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(out);
      converted++;
    } catch (err) {
      console.error(`  ! failed to convert ${file}: ${err.message}`);
    }
  }

  // ---- manifest -------------------------------------------------------
  const body = `/**
 * GENERATED FILE — do not edit by hand.
 * Source: public/images/productimgs
 * Regenerate: npm run images:user
 */

export type UserImage = { view: string; src: string };

export type UserProduct = {
  slug: string;
  colourways: { name: string; hex: string; images: UserImage[] }[];
};

export const userProducts: UserProduct[] = ${JSON.stringify(kept, null, 2)};

export const userProductSlugs = new Set(${JSON.stringify(kept.map((p) => `\`${p.slug}\``))});
`;

  writeFileSync(OUT_TS, body);

  // ---- report ---------------------------------------------------------
  const totalColourways = catalog.reduce((n, p) => n + p.colourways.length, 0);
  const keptColourways = kept.reduce((n, p) => n + p.colourways.length, 0);

  console.log(`\nScanned ${files.length} file(s) in public/images/productimgs`);
  console.log(`Converted ${converted} to WebP (max ${LONG_EDGE}px, q${QUALITY})`);
  console.log(`Products with photos  : ${kept.length} of ${catalog.length}`);
  console.log(`Colourways with photos: ${keptColourways} of ${totalColourways}`);

  if (sharedSources.size) {
    console.log(`\n${sharedSources.size} photo(s) reused across colourways:`);
    sharedSources.forEach((f) =>
      console.log(`  - ${basename(f)}\n      every colourway shows this one photo; add per-colourway files for real variants`),
    );
  }

  if (dropped.length) {
    console.log(`\n${dropped.length} product(s) dropped for having no photo:`);
    dropped.forEach((d) => console.log(`  - ${d.slug}`));
  }
  if (unmatched.length) {
    console.log(`\n${unmatched.length} file(s) matched a product but not a colourway:`);
    unmatched.forEach((u) => console.log(`  - ${u.file}\n      ${u.reason}`));
  }
  if (unknown.length) {
    console.log(`\n${unknown.length} file(s) did not match any product slug:`);
    unknown.forEach((f) => console.log(`  - ${f}`));
    console.log('\n  Expected: <product-slug>--<colourway-slug>--<view>.jpg');
    console.log('  See docs/product-images.md');
  }
  if (!files.length) {
    console.log('\nNo images found yet. See docs/product-images.md for the naming pattern.');
  }

  console.log(`\nWrote src/lib/generated/user-images.ts and ${emitted.length} image(s) to public/images/user/\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
