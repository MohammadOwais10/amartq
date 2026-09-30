/**
 * Turns the hand-supplied logo into the two web assets the site renders.
 *
 *   node scripts/prepare-logo.mjs
 *
 * Reads   public/images/logo/amartq-logo.png   (the original you drop in)
 * Writes  public/images/logo/amartq-logo.webp        dark artwork, light backgrounds
 *         public/images/logo/amartq-logo-light.webp   reversed, dark backgrounds
 *
 * The reversed variant keeps the orange accents and turns everything dark
 * (the navy wordmark) to white, which is the usual treatment for a logo sitting
 * on the navy footer. Splitting on luminance rather than hue is deliberate:
 * the navy and the orange are both saturated, so a hue test would not separate
 * them, but they sit far apart on the brightness axis.
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoDir = path.join(root, 'public', 'images', 'logo');
const SOURCE = path.join(logoDir, 'amartq-logo.png');
const DARK_OUT = path.join(logoDir, 'amartq-logo.webp');
const LIGHT_OUT = path.join(logoDir, 'amartq-logo-light.webp');

/**
 * The lockup is stacked (mark above the wordmark) rather than side-by-side, so
 * it needs a taller slot than a horizontal one would. 48px is about the
 * largest that still sits comfortably in the 64px header, at 3x for retina.
 */
const RENDER_HEIGHT = 48;
const SCALE = 3;

/** Rec. 709 luminance, 0 (black) to 1 (white). */
const luma = (r, g, b) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

/**
 * Above this the pixel is bright enough to be an accent (the orange) and is
 * left alone. Below it the pixel is dark artwork and becomes white.
 */
const DARK_CUTOFF = 0.4;

async function main() {
  const raw = await readFile(SOURCE);
  const { data, info } = await sharp(raw)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const light = Buffer.from(data);
  let lightened = 0;
  let kept = 0;

  for (let i = 0; i < data.length; i += channels) {
    if (data[i + 3] === 0) continue;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (luma(r, g, b) < DARK_CUTOFF) {
      light[i] = 255;
      light[i + 1] = 255;
      light[i + 2] = 255;
      lightened++;
    } else {
      // Accent colours get a touch more brightness so they stay legible on navy.
      light[i] = Math.min(255, Math.round(r * 1.12));
      light[i + 1] = Math.min(255, Math.round(g * 1.12));
      light[i + 2] = Math.min(255, Math.round(b * 1.12));
      kept++;
    }
  }

  // The supplied PNG has a wide transparent margin baked in (roughly 110px
  // vertically, 45px horizontally), which would shrink the logo inside its own
  // box. Trimming makes the asset tight to the artwork.
  const TRIM = { background: '#00000000', threshold: 2 };
  const trimmed = await sharp(raw).trim(TRIM).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const t = { width: trimmed.info.width, height: trimmed.info.height, channels: trimmed.info.channels };

  const targetWidth = Math.round((t.width / t.height) * RENDER_HEIGHT * SCALE);
  const resize = { height: RENDER_HEIGHT * SCALE, withoutEnlargement: false };

  const base = sharp(trimmed.data, { raw: t });
  const reversed = sharp(light, { raw: { width, height, channels } });

  const [darkBuf, lightBuf] = await Promise.all([
    base.clone().resize(resize).webp({ quality: 92, alphaQuality: 100 }).toBuffer(),
    reversed.clone().resize(resize).webp({ quality: 92, alphaQuality: 100 }).toBuffer(),
  ]);

  await writeFile(DARK_OUT, darkBuf);
  await writeFile(LIGHT_OUT, lightBuf);

  const kb = (b) => `${(b.length / 1024).toFixed(1)} kB`;
  console.log(`source       ${width}x${height}  ${kb(raw)}`);
  console.log(`trimmed to   ${t.width}x${t.height}  (ratio ${(t.width / t.height).toFixed(2)})`);
  console.log(`rendered at  ${targetWidth}x${RENDER_HEIGHT * SCALE}`);
  console.log(`reversed     ${lightened} px knocked to white, ${kept} accent px kept`);
  console.log(`\namartq-logo.webp        ${kb(darkBuf)}`);
  console.log(`amartq-logo-light.webp   ${kb(lightBuf)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
