/**
 * Scene and category art.
 *
 * Hand-maintained. The product-level generated art that used to live here
 * (productArt / colourwayImages, ~700 lines for placeholder images of seed
 * products that no longer exist) was removed along with scripts/generate-images.mjs.
 * Product photography now comes exclusively from public/images/productimgs via
 * src/lib/generated/user-images.ts, which is built by scripts/build-user-images.mjs.
 */

/**
 * Keyed by the category slugs in src/lib/generated/user-catalogue.ts, which
 * are all bedsheet types. The four merchandising buckets these used to be
 * keyed by (cushions, curtains, throws, towels) no longer exist as
 * categories, so their art is gone.
 */
export const categoryArt: Record<string, { name: string; hex: string; image: string }> = {
  "printed-bedsheet": {
    "name": "Ivory Bloom",
    "hex": "#F2ECE0",
    "image": "/images/cat-bedsheets.webp"
  },
  "floral-bedsheet": {
    "name": "Ivory Bloom",
    "hex": "#F2ECE0",
    "image": "/images/cat-bedsheets.webp"
  },
  "block-print-bedsheet": {
    "name": "Ivory Bloom",
    "hex": "#F2ECE0",
    "image": "/images/cat-bedsheets.webp"
  },
  "jaipur-printed-bedsheet": {
    "name": "Ivory Bloom",
    "hex": "#F2ECE0",
    "image": "/images/cat-bedsheets.webp"
  },
  "striped-bedsheet": {
    "name": "Ivory Bloom",
    "hex": "#F2ECE0",
    "image": "/images/cat-bedsheets.webp"
  },
  "printed-bedsheet-set": {
    "name": "Midnight",
    "hex": "#12294D",
    "image": "/images/cat-bedding.webp"
  },
  "patchwork-printed-bedsheet": {
    "name": "Midnight",
    "hex": "#12294D",
    "image": "/images/cat-bedding.webp"
  }
};

export const sceneArt: Record<string, string> = {
  "story": "/images/scene-story.webp",
  "roomBedding": "/images/scene-roomBedding.webp",
  "roomCurtains": "/images/scene-roomCurtains.webp",
  "roomCushions": "/images/scene-roomCushions.webp"
};
