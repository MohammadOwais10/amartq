# Product images — how to name your files

Put your photos in `public/images/productimgs/`. The app reads whatever is in that
folder at build time; there is no import list to maintain.

## Naming pattern

```
<product-slug>--<colourway-slug>--<view>.jpg
```

Everything is lowercase, words joined with hyphens. The `--` separators matter.

**Examples**

```
royal-cotton-bedsheet-300tc--ivory-bloom--drape.jpg
royal-cotton-bedsheet-300tc--ivory-bloom--detail.jpg
royal-cotton-bedsheet-300tc--ivory-bloom--flat.jpg
linen-bedsheet-washed--clay-rose--drape.jpg
```

## The three parts

### 1. Product slug

Must match the product slug in `data/photo-descriptions.csv` exactly — that CSV
is the source of truth, and the build drops any product with no matching photo.
The list of already-accepted names is in `data/photo-renames.tsv`. Or run:

```bash
npx tsx -e "import {products} from './src/lib/catalog'; products.forEach(p=>p.colourways.forEach(c=>console.log(p.slug+'--'+c.name.toLowerCase().replace(/[^a-z0-9]+/g,'-'))))"
```

### 2. Colourway slug

The colourway name lowercased, non-alphanumerics replaced with hyphens.

| Colourway name   | becomes          |
| ---------------- | ---------------- |
| Ivory Bloom      | `ivory-bloom`    |
| Cream Boucle     | `cream-boucle`   |
| 300 Thread Count | `300-thread-count` |

### 3. View

One of:

| View      | What it is                                    |
| --------- | --------------------------------------------- |
| `drape`   | The main hero shot. Used on cards and the cart. Strongly preferred. |
| `detail`  | Close-up of the weave or texture.             |
| `flat`    | Laid flat, full shape visible.                |

## Flexible on purpose

- **One photo is enough to keep a colourway.** Views you omit are simply not
  shown in the gallery. If you have no `drape`, the photo you did supply is used
  as the main image instead, so a detail-only colourway still works.
- **A `drape` with no colourway suffix works too.** `terry-bath-towel-set.jpg`
  is reused by every one of that product's colourways, and the build prints a
  warning naming it, because all of them then show the same photo. Prefer
  `<product>--<colourway>--<view>.jpg` per colourway whenever you can.

## What happens to products with no photos

A product with no matching file is **dropped from the catalogue** — it will not
appear on the home page, shop grid, category pages, search, or the sitemap.
Categories left with no products are dropped too. This is automatic, so you
only need to name what you actually have.

Category tiles and editorial/scene images are hand-maintained in
`src/lib/generated/images.ts` and live directly in `public/images/`; only
**product** photography comes from `productimgs/`.

## Then

```bash
npm run build
```

`build` runs `images:user` first, so this is all you need. To check what was
picked up without a full build:

```bash
npm run images:user
```

## Git

`public/images/productimgs/` is gitignored — 81 MB of phone photos do not belong in the
repository, and the processed output in `public/images/user/` is rebuilt on every
build. The originals stay on your machine.

## A note on file size

These are phone photos, some over 1.5 MB. Next.js will optimise them on
serving, but for faster first paint, resize to roughly 1600px on the long edge
before dropping them in. Export at 80–85% quality and keep them under ~400 KB.
