/**
 * Turns data/photo-descriptions.csv into:
 *   1. correctly renamed photo files in public/images/productimgs
 *   2. src/lib/generated/user-catalogue.ts — the 7 products, their copy,
 *      pricing and colourway names (no images — those come from images:user)
 *
 * Naming follows docs/product-images.md:
 *   <product-slug>--<colourway-slug>--<view>.jpg
 *
 * Run: npm run catalogue:photos
 * Re-running is safe: files already renamed are detected and skipped.
 */
import { readFileSync, writeFileSync, existsSync, renameSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { productMeta } from '../data/product-meta.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const CSV = join(ROOT, 'data/photo-descriptions.csv');
const SRC_DIR = join(ROOT, 'public/images/productimgs');
const OUT_TS = join(ROOT, 'src/lib/generated/user-catalogue.ts');
const MAP_JSON = join(ROOT, 'data/photo-renames.json');
const MAP_TSV = join(ROOT, 'data/photo-renames.tsv');

const VIEWS = new Set(['drape', 'detail', 'flat']);

const slug = (s) =>
  s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

/** Minimal RFC4180-ish CSV parser — handles quoted fields containing commas. */
function parseCsv(text) {
  const rows = [];
  let field = '';
  let row = [];
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 1; } else quoted = false;
      } else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.length > 1);
}

/** Colour words -> hex, longest words first so "burgundy" beats "red". */
const COLOURS = [
  ['burgundy', '#6e1f2e'], ['charcoal', '#3b3f42'], ['chocolate', '#4a2f23'],
  ['terracotta', '#c2673f'], ['crimson', '#b3182b'], ['scarlet', '#c4342b'],
  ['emerald', '#146b4a'], ['turquoise', '#2f9c95'], ['indigo', '#2c3e7a'],
  ['lavender', '#b6a6d6'], ['magenta', '#b8338a'], ['chiffon', '#e6d7f0'],
  ['mustard', '#c9971f'], ['marigold', '#d99a12'], ['maroon', '#6d1f2c'],
  ['purple', '#6b3a8f'], ['violet', '#7d4fa0'], ['lilac', '#b39ddb'],
  ['coral', '#e2725b'], ['peach', '#f2b48c'], ['orange', '#e07a2f'],
  ['mauve', '#a78fae'], ['sage', '#9aab8e'], ['olive', '#7c8350'],
  ['mint', '#a8dcc4'], ['teal', '#1f7a7a'], ['aqua', '#6fc7cf'],
  ['navy', '#1f2f55'], ['beige', '#e2d3ba'], ['cream', '#f2ead6'],
  ['ivory', '#f4efe1'],   ['brown', '#6b4a2f'], ['coffee', '#5a3c28'],
  ['grey', '#9aa0a6'], ['gray', '#9aa0a6'], ['black', '#1c1c1c'],
  ['white', '#f7f7f5'], ['pink', '#e3899f'], ['rose', '#d4657f'],
  ['gold', '#c9a227'], ['blue', '#2f5fa8'], ['red', '#b5322c'],
  ['green', '#3f7d44'], ['yellow', '#e8c85a'],
  ['silver', '#c8ccd0'], ['multi', '#8a6f9e'], ['multicolor', '#8a6f9e'],
];

/** Best-effort swatch hex from a free-text colourway description. */
function hexFor(name) {
  const text = name.toLowerCase();
  const hits = COLOURS.filter(([word]) => new RegExp(`\\b${word}`).test(text));
  if (hits.length >= 2) return hits[1][1];
  if (hits.length === 1) return hits[0][1];
  // Stable neutral derived from the name, so the same colourway always gets
  // the same swatch and the palette does not flicker between builds.
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const grey = 118 + (h % 58);
  return `#${[grey, grey, grey].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

function main() {
  /* The raw phone photos in public/images/productimgs are gitignored, so a
     fresh clone (and every Vercel build) has no SRC_DIR. The generated
     catalogue is committed, so there is nothing to rebuild in that case —
     skip cleanly instead of crashing the deploy. */
  if (!existsSync(SRC_DIR)) {
    console.log(
      `No ${SRC_DIR.replace(ROOT, '')} — skipping. Using the committed\n` +
        `src/lib/generated/user-catalogue.ts. Run this locally with the photos present to rebuild.`,
    );
    return;
  }

  const rows = parseCsv(readFileSync(CSV, 'utf8'));
  const header = rows[0].map((h) => h.trim());
  const col = (n) => header.indexOf(n);
  const need = ['original_filename', 'product_name', 'category', 'colourway', 'view'];
  for (const n of need) {
    if (col(n) === -1) { console.error(`CSV is missing the "${n}" column`); process.exit(1); }
  }
  const body = rows.slice(1).map((r) => ({
    file: r[col('original_filename')].trim(),
    product: r[col('product_name')].trim(),
    category: r[col('category')].trim(),
    colourway: r[col('colourway')].trim(),
    pattern: (col('pattern') === -1 ? '' : r[col('pattern')].trim()).toLowerCase(),
    view: r[col('view')].trim().toLowerCase(),
  }));

  // ---- validate --------------------------------------------------------
  const problems = [];
  for (const r of body) {
    if (!VIEWS.has(r.view)) problems.push(`${r.file}: view must be drape|detail|flat (got "${r.view}")`);
    if (!r.product) problems.push(`${r.file}: empty product_name`);
    if (!r.colourway) problems.push(`${r.file}: empty colourway`);
  }
  const known = new Set(productMeta.map((p) => p.name));
  for (const name of new Set(body.map((r) => r.product))) {
    if (!known.has(name)) problems.push(`"${name}" has no entry in data/product-meta.mjs`);
  }
  if (problems.length) {
    console.error('\nCannot continue:\n' + problems.map((p) => `  - ${p}`).join('\n') + '\n');
    process.exit(1);
  }

  // ---- plan target names ------------------------------------------------
  const taken = new Set();
  const usedProduct = new Set();
  const plan = [];
  for (const r of body) {
    const meta = productMeta.find((p) => p.name === r.product);
    const typeSlug = slug(meta.slug);
    let cSlug = slug(r.colourway);
    let name = r.colourway;
    // Every photo is its own product, so a design name that repeats needs a
    // suffix to stay a unique product. Better than grouping colours, which is
    // what the shop deliberately no longer does.
    if (usedProduct.has(`${typeSlug}-${cSlug}`)) {
      let k = 2;
      while (usedProduct.has(`${typeSlug}-${cSlug}-${k}`)) k += 1;
      cSlug = `${cSlug}-${k}`;
      name = `${r.colourway} ${k}`;
    }
    const pSlug = `${typeSlug}-${cSlug}`;
    usedProduct.add(pSlug);
    // A single-design product has exactly one colourway, so the file carries a
    // constant colourway segment and the design lives in the product slug.
    let view = r.view;
    let n = 1;
    while (taken.has(`${pSlug}--design--${view}`)) {
      n += 1;
      view = `${r.view}${n}`;
    }
    const out = `${pSlug}--design--${view}.jpg`;
    taken.add(out);
    plan.push({ ...r, pSlug, cSlug, cwName: name, pattern: r.pattern || 'printed', out });
  }

  // ---- rename -----------------------------------------------------------
  // Previous renames are replayed so the script stays re-runnable after the CSV
  // is edited: a row whose original name is long gone is traced through the old
  // map to whatever file it became, and that file is moved to the new target.
  const onDisk = new Set(readdirSync(SRC_DIR));
  let previous = {};
  if (existsSync(MAP_JSON)) {
    try { previous = Object.fromEntries(JSON.parse(readFileSync(MAP_JSON, 'utf8')).map((r) => [r.file, r.out])); }
    catch { previous = {}; }
  }

  const renames = [];
  let done = 0;
  for (const p of plan) {
    const src = join(SRC_DIR, p.file);
    const dst = join(SRC_DIR, p.out);
    const prev = previous[p.file];
    const prevPath = prev ? join(SRC_DIR, prev) : null;

    if (p.file === p.out && onDisk.has(p.out)) { renames.push({ ...p, status: 'unchanged' }); continue; }
    if (prev && prev === p.out && onDisk.has(prev)) { renames.push({ ...p, status: 'already' }); continue; }

    // Prefer the untouched original; fall back to this row's previous name.
    const from = onDisk.has(p.file) ? src : prevPath && onDisk.has(prev) ? prevPath : null;
    if (from) {
      if (onDisk.has(p.out)) {
        console.error(`Refusing to overwrite existing ${p.out}`);
        process.exit(1);
      }
      renameSync(from, dst);
      done += 1;
      renames.push({ ...p, status: from === src ? 'renamed' : 're-renamed' });
    } else if (onDisk.has(p.out)) {
      renames.push({ ...p, status: 'already' });
    } else {
      console.error(`Missing source photo: ${p.file}\n  expected it in public/images/productimgs`);
      process.exit(1);
    }
  }

  writeFileSync(MAP_JSON, JSON.stringify(renames, null, 2));
  writeFileSync(
    MAP_TSV,
    ['original_filename\tnew_filename\tproduct\tcolourway\tview\tstatus']
      .concat(renames.map((r) => [r.file, r.out, r.pSlug, r.cwName, r.view, r.status].join('\t')))
      .join('\n') + '\n',
  );

  // ---- build the catalogue ---------------------------------------------
  // One product per photo. There is no colour grouping: each design is its own
  // shoppable product, and the 7 bed sheet types become the filter categories.
  const products = plan.map((p, i) => {
    const meta = productMeta.find((m) => m.name === p.product);
    return {
      id: `AMQ-${String(i + 1).padStart(3, '0')}`,
      slug: p.pSlug,
      name: p.cwName,
      shortDescription: meta.shortDescription,
      description: meta.description,
      category: slug(meta.slug),
      collection: p.pattern,
      price: meta.price,
      compareAtPrice: meta.compareAtPrice ?? null,
      sizes: meta.sizes,
      specifications: meta.specifications,
      features: meta.features,
      care: meta.care,
      badges: meta.badges,
      surface: meta.surface,
      tags: [...meta.tags, p.pattern],
      colourways: [
        { name: p.cwName, slug: 'design', hex: hexFor(p.cwName) },
      ],
    };
  });

  // Filter categories, one per bed sheet type, in the order they first appear.
  const ordered = [];
  for (const p of plan) {
    const meta = productMeta.find((m) => m.name === p.product);
    const s = slug(meta.slug);
    if (!ordered.some((c) => c.slug === s)) {
      ordered.push({ meta, slug: s });
    }
  }
  const categories = ordered.map(({ meta, slug: s }, i) => ({
    slug: s,
    name: meta.name,
    tagline: meta.shortDescription,
    description: meta.description.join(' '),
    highlights: meta.features,
    sizes: meta.sizes,
    order: i + 1,
  }));

  const photoCount = new Map(plan.map((p) => [p.product, 0]));
  for (const p of plan) photoCount.set(p.product, photoCount.get(p.product) + 1);

  const totalCw = products.reduce((n, p) => n + p.colourways.length, 0);

  writeFileSync(
    OUT_TS,
    `/**
 * GENERATED FILE — do not edit by hand.
 * Source: data/photo-descriptions.csv + data/product-meta.mjs
 * Regenerate: npm run catalogue:photos
 *
 * Metadata only. Image URLs live in src/lib/generated/user-images.ts.
 */

export type UserCatalogueColourway = { name: string; slug: string; hex: string };

export type UserCatalogueProduct = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string[];
  category: string;
  collection: string;
  price: number;
  compareAtPrice: number | null;
  sizes: string[];
  specifications: { label: string; value: string }[];
  features: string[];
  care: string[];
  badges: ('new' | 'bestseller' | 'sale' | 'limited')[];
  surface: 'solid' | 'stripe' | 'pinstripe' | 'check' | 'dot' | 'chevron' | 'weave' | 'herringbone' | 'block' | 'leaf' | 'floral' | 'damask' | 'terrazzo' | 'wave' | 'boucle' | 'terry';
  tags: string[];
  colourways: UserCatalogueColourway[];
};

export type UserCatalogueCategory = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  sizes: string[];
  order: number;
};

export const userCatalogue: UserCatalogueProduct[] = ${JSON.stringify(products, null, 2)};

export const userCategories: UserCatalogueCategory[] = ${JSON.stringify(categories, null, 2)};

export const userCatalogueSlugs = new Set<string>(${JSON.stringify(products.map((p) => `'${p.slug}'`))});
`,
  );

  console.log(`\nPhotos: ${plan.length} described, ${done} renamed now, ${plan.length - done} already correct`);
  console.log(`Products: ${products.length} (one per photo, no colour grouping)`);
  console.log(`\nFilter categories:`);
  for (const c of categories) {
    console.log(`  ${c.name.padEnd(26)} ${String(photoCount.get(c.name)).padStart(3)} designs`);
  }
  console.log(`\nTotal colourways: ${totalCw} (one each)`);
  console.log(`Wrote ${OUT_TS.replace(ROOT, '')}`);
  console.log(`Rename map: data/photo-renames.tsv (reversible)\n`);
}

main();
