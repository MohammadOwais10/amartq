import { userProducts } from './generated/user-images';
import { userCatalogue, userCategories } from './generated/user-catalogue';
import type { Category, Colourway, Product } from './types';

const legacyCategories: Category[] = [
  {
    slug: 'bedsheets',
    name: 'Bed Sheets',
    tagline: 'Long-staple cotton, woven for 300+ threads',
    description:
      'Our bed sheets are woven from long-staple cotton on a sateen or percale loom, then enzyme-washed so they feel soft from the very first night. Reinforced hems, corner ties and a fitted sheet engineered to stay put on any mattress.',
    highlights: ['300–600 thread count', 'Reactive-dyed, colourfast', 'Corner-tied fitted sheets'],
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    order: 1,
  },
  {
    slug: 'bedding',
    name: 'Bedding',
    tagline: 'Complete sets, quilts and protectors',
    description:
      'Everything your bed needs to feel like a hotel: quilted covers, all-season comforters, hypoallergenic pillow pairs and waterproof mattress protectors. Built as matched sets so the whole room reads as one design.',
    highlights: ['Hygiene-grade filling', 'Box-washable quilted covers', 'Breathable, non-synthetic'],
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    order: 2,
  },
  {
    slug: 'cushions',
    name: 'Cushions & Pillows',
    tagline: 'Velvet, bouclé, linen and knit',
    description:
      'Cushion covers in pile velvet, looped bouclé, embroidered linen and chunky knit — each with a concealed zip and generous 18-inch sizing that suits both standard inserts and our feather refills. Insert sold separately.',
    highlights: ['Concealed YKK zips', 'Sold as cover only', 'Matching refills available'],
    sizes: ['14" × 14"', '16" × 16"', '18" × 18"', '20" × 20"'],
    order: 3,
  },
  {
    slug: 'curtains',
    name: 'Curtains & Drapes',
    tagline: 'Blackout, linen, sheer and velvet',
    description:
      'Curtains engineered for real rooms: three-passage blackout for bright facades, heavyweight washed linen for relaxed draping, and matte voile sheers that soften daylight without losing it. All panels hang on 8 eyelets and are sold as a pair.',
    highlights: ['Sold as a pair', '8 eyelet heading', 'Up to 3m drop, hemmable'],
    sizes: ['6ft × 8ft', '8ft × 8ft', '8ft × 10ft', 'Custom'],
    order: 4,
  },
  {
    slug: 'throws',
    name: 'Throws & Blankets',
    tagline: 'Wool, cashmere, cotton and macramé',
    description:
      'The layer that makes a bed. Our throws run from breathable cotton quilt to featherweight cashmere, and are finished with hand-tied or machine-stitched edges that survive years of use and washing.',
    highlights: ['OEKO-TEX certified', 'Hand-finished edges', 'Year-round weight'],
    sizes: ['50" × 70"', '60" × 80"', 'Twin', 'Queen'],
    order: 5,
  },
  {
    slug: 'towels',
    name: 'Bath & Hand Towels',
    tagline: 'High-absorbency terry and waffle weave',
    description:
      'Towels woven from long-staple cotton on a high-twist yarn that stays soft through repeated laundering. Deep, generous hems; a border that stays flat; and a waffle weave that dries fast in humid climates.',
    highlights: ['600 GSM terry', 'Zero-twist softener-free', 'Sets available'],
    sizes: ['Hand 16" × 28"', 'Bath 30" × 60"', 'Bath Sheet 35" × 72"'],
    order: 6,
  },
];

/**
 * Filter categories. When the CSV catalogue has entries it supplies one
 * category per bed sheet type, so the shop filters by type rather than by
 * colour group. The legacy list is only a fallback for an empty catalogue.
 */
export const categories: Category[] = userCategories.length
  ? userCategories.map((c) => ({
      slug: c.slug,
      name: c.name,
      tagline: c.tagline,
      description: c.description,
      highlights: c.highlights,
      sizes: c.sizes,
      order: c.order,
    }))
  : legacyCategories;

export const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));

/**
 * Colourways come exclusively from the photography the user supplied in
 * public/images/productimgs, keyed by the manifest built by scripts/build-user-images.
 *
 * A product with no matching photo has no colourways and is dropped from the
 * catalogue entirely, so the storefront never shows a product that cannot be
 * bought. The generated art in public/images is not used as a fallback.
 */
function colourwaysFor(slug: string, outOfStock: number[] = []): Colourway[] {
  const user = userProducts.find((p) => p.slug === slug);
  if (!user) return [];

  return user.colourways.map((c, i) => ({
    name: c.name,
    hex: c.hex,
    images: toViewMap(c.images as never),
    outOfStock: outOfStock.includes(i),
  }));
}

/** Accepts either the fixed drape/detail/flat record or a longer user list. */
function toViewMap(
  images: Record<string, string> | { view: string; src: string }[],
): Record<'drape' | 'detail' | 'flat', string> {
  if (Array.isArray(images)) {
    const out = { drape: '', detail: '', flat: '' } as Record<string, string>;
    for (const img of images) {
      const view = img.view.replace(/\d+$/, '');
      if (!out[view]) out[view] = img.src;
    }
    // Cards, the search dialog, the header and the cart thumbnail all use
    // `drape` as the primary image, so a colourway shot only as a detail (or
    // flat) would otherwise render as a broken image. Promote whichever view
    // exists so every photographed colourway always has something to show.
    if (!out.drape) out.drape = out.detail || out.flat;
    return out as { drape: string; detail: string; flat: string };
  }
  return images as { drape: string; detail: string; flat: string };
}

type Seed = Omit<Product, 'id' | 'colourways' | 'rating' | 'reviewCount' | 'category'> &
  Partial<Pick<Product, 'rating' | 'reviewCount'>> & { outOfStock?: number[] };

const seeds: Seed[] = [
  /* ==================== BED SHEETS ==================== */
  {
    slug: 'royal-cotton-bedsheet-300tc',
    name: 'Royal Cotton Bed Sheet — 300 TC',
    shortDescription: '300-thread-count long-staple cotton percale with a cool, matte hand.',
    description: [
      'Our flagship bed sheet is woven in Coimbatore from 100% long-staple combed cotton. The percale weave is tight and even, which gives it that cool, matte hand that stays breathable through a warm night — and resists the shine that flattens lower thread counts after a dozen washes.',
      'Every fitted sheet is cut with 35cm of drop on all four sides, so it grips a mattress up to 35cm deep without riding up. Corner ties are internal, so nothing catches on your skin or shows under the sheet.',
    ],
    collection: '300 Thread Count',
    price: 12900,
    compareAtPrice: 16500,
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    specifications: [
      { label: 'Material', value: '100% long-staple combed cotton' },
      { label: 'Thread count', value: '300 TC, percale weave' },
      { label: 'Fitted drop', value: '35 cm on all four sides' },
      { label: 'Pillowcases included', value: '2 per set' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100' },
    ],
    features: [
      'Cool, matte percale hand that never goes shiny',
      'Internal corner ties — no scratchy knots',
      'Reactive-dyed for colour that survives 60+ washes',
      'Gets softer with every wash, never pills',
    ],
    care: [
      'Machine wash cold on a gentle cycle',
      'Use mild detergent, skip fabric softener',
      'Tumble dry low or line dry in shade',
      'Warm iron on the reverse side',
    ],
    badges: ['bestseller', 'sale'],
    stock: 48,
    sku: 'AM-BS-300',
    tags: ['cotton', 'percale', 'bedsheet', '300 tc', 'bed sheet'],
    surface: 'pinstripe',
    rating: 4.8,
    reviewCount: 412,
  },
  {
    slug: 'sateen-bedsheet-king',
    name: 'Lustre Sateen Bed Sheet — King',
    shortDescription: 'Silky sateen with a cool underside and a subtle pearl sheen.',
    description: [
      'Sateen is made with a longer yarn float on the surface, which is where its silk-like lustre comes from. We use a 400-thread sateen here: smooth enough to feel indulgent, dense enough that the cool hand sits on the underside where you actually feel it.',
      'The King set is cut to 274 × 274 cm — a generous oversize that fully covers a UK/Ireland King mattress and tucks neatly under the base.',
    ],
    collection: 'Sateen',
    price: 18500,
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    specifications: [
      { label: 'Material', value: '100% long-staple cotton sateen' },
      { label: 'Thread count', value: '400 TC, sateen weave' },
      { label: 'King flat sheet', value: '274 × 274 cm' },
      { label: 'Fitted depth', value: '40 cm' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100' },
    ],
    features: [
      'Pearl lustre from a long-float sateen weave',
      'Cool underside, soft top — built for year-round use',
      'Oversized King cut for full mattress coverage',
      'Dries quickly; resists creasing',
    ],
    care: [
      'Machine wash warm on a gentle cycle',
      'Do not bleach',
      'Tumble dry low',
      'Cool iron while slightly damp',
    ],
    badges: ['bestseller'],
    stock: 32,
    sku: 'AM-BS-SAT',
    tags: ['sateen', 'king bed', 'cotton', 'silk feel'],
    surface: 'solid',
    rating: 4.7,
    reviewCount: 268,
  },
  {
    slug: 'linen-bedsheet-washed',
    name: 'Washed Linen Bed Sheet',
    shortDescription: 'European flax, stone-washed for an immediate relaxed hand.',
    description: [
      'Made from 100% European flax grown in Normandy and woven in Guimarães, this linen arrives already stone-washed and softened — you do not have to break it in. Linen breathes better than cotton in heat, regulates temperature in cold, and only improves with age.',
      'The weave is intentionally relaxed rather than perfectly uniform. That slight slub is not a defect; it is the signature of a real flax fibre and the reason the fabric drapes the way it does.',
    ],
    collection: 'Washed Linen',
    price: 22400,
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    specifications: [
      { label: 'Material', value: '100% European flax linen, 165 GSM' },
      { label: 'Finish', value: 'Stone-washed, softened' },
      { label: 'Origin', value: 'Flax from Normandy; woven in Portugal' },
      { label: 'Fitted depth', value: '35 cm' },
    ],
    features: [
      'Naturally thermoregulating in both directions',
      'Pre-softened — no break-in period',
      'Antimicrobial by nature; needs less washing',
      'Grows softer and more lustrous with age',
    ],
    care: [
      'Machine wash cold, gentle cycle',
      'Line dry flat if you want it crisp, tumble low for relaxed',
      'Skip fabric softener — it coats the fibre',
      'Warm iron while damp',
    ],
    badges: ['new'],
    stock: 21,
    sku: 'AM-BS-LIN',
    tags: ['linen', 'flax', 'bed sheet', 'stonewashed'],
    surface: 'weave',
    rating: 4.9,
    reviewCount: 154,
  },
  {
    slug: 'flannel-bedsheet-winter',
    name: 'Brushed Flannel Bed Sheet',
    shortDescription: 'Double-brushed cotton flannel, checked in Tartan and Charcoal.',
    description: [
      'Brushed twice on both faces, this flannel is the sheet for winter. The brushing raises the fibre nap, which traps air against your skin and turns an ordinary mattress into something genuinely warm.',
      'We cut it generously and add a 40cm drop so it stays put under a winter duvet, where sheets usually work loose.',
    ],
    collection: 'Brushed Flannel',
    price: 9800,
    compareAtPrice: 12400,
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    specifications: [
      { label: 'Material', value: '100% cotton flannel, 170 GSM' },
      { label: 'Finish', value: 'Double-brushed, both faces' },
      { label: 'Fitted depth', value: '40 cm' },
      { label: 'Pattern', value: 'Woven Tartan check, not printed' },
    ],
    features: [
      'Raised fibre nap traps warmth without weight',
      'Woven check — will not fade or pill like a print',
      'Generous 40cm fitted drop',
      'Softens dramatically in the first three washes',
    ],
    care: [
      'Machine wash warm',
      'Tumble dry low to maintain the nap',
      'Do not iron the brushed side',
      'Wash with like colours',
    ],
    badges: ['sale'],
    stock: 64,
    sku: 'AM-BS-FLA',
    tags: ['flannel', 'winter', 'checked', 'cotton', 'warm'],
    surface: 'check',
    rating: 4.6,
    reviewCount: 331,
  },

  /* ==================== BEDDING ==================== */
  {
    slug: 'merino-quilt-bedding-set',
    name: 'Merino Quilt Bedding Set',
    shortDescription: 'A reversible wool quilt with cover, sham and two pillowcases.',
    description: [
      'A year-round quilt built around a merino wool batting — warm enough for a cool room, breathable enough that it never stuffy. The wool is machine-washable, which matters: most wool quilts are not.',
      'The set ships as four pieces — quilted cover, matching sham, and two pillowcases — so the whole bed coordinates from one box.',
    ],
    collection: 'Quilt Sets',
    price: 34500,
    compareAtPrice: 42000,
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    specifications: [
      { label: 'Material', value: '100% merino wool batting, cotton shell' },
      { label: 'Fill', value: '220 GSM, machine-washable wool' },
      { label: 'Pieces included', value: 'Quilt, 1 sham, 2 pillowcases' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100; RWS wool' },
    ],
    features: [
      'Machine-washable merino wool — rare in wool quilts',
      'Breathable warmth; suitable for year-round use',
      'Fully reversible cover with a button closure',
      'Box-washed so it is soft straight out of the bag',
    ],
    care: [
      'Machine wash cold on a gentle cycle',
      'Dry flat or tumble low with dryer balls',
      'Do not dry clean',
      'Shake out and re-drape while damp',
    ],
    badges: ['bestseller', 'sale'],
    stock: 27,
    sku: 'AM-BD-QWS',
    tags: ['quilt', 'merino', 'wool', 'bedding set', 'comforter set'],
    surface: 'weave',
    rating: 4.9,
    reviewCount: 196,
  },
  {
    slug: 'all-season-comforter-microfibre',
    name: 'All-Season Microfibre Comforter',
    shortDescription: 'Siliconised microfibre fill in a brushed cotton shell. Light, warm, washable.',
    description: [
      'A comforter engineered for climates that turn quickly. The siliconised microfibre fill is hollow and springy, so it insulates without the dead weight of a dense polyester — and when you compress it, it rebounds instead of staying flat.',
      'The shell is brushed cotton, not polyester, which means it feels like bedding rather than camping gear.',
    ],
    collection: 'Comforters',
    price: 16900,
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    specifications: [
      { label: 'Fill', value: 'Siliconised hollow microfibre, 250 GSM' },
      { label: 'Shell', value: '110 GSM brushed cotton' },
      { label: 'Construction', value: 'Baffle-box, 6-sided' },
      { label: 'Care', value: 'Machine washable, dries fast' },
    ],
    features: [
      'Lightweight warmth — not a heavy winter comforter',
      'Baffle-box construction keeps the fill evenly lofted',
      'Fully machine washable; dries in a fraction of the time',
      'Hypoallergenic; no feather or down',
    ],
    care: [
      'Machine wash cold, gentle cycle',
      'Tumble dry low with dryer balls to restore loft',
      'Do not iron or dry clean',
      'Wash before first use to soften',
    ],
    badges: [],
    stock: 55,
    sku: 'AM-BD-COM',
    tags: ['comforter', 'microfibre', 'all season', 'duvet'],
    surface: 'weave',
    rating: 4.5,
    reviewCount: 389,
  },
  {
    slug: 'mattress-protector-waterproof',
    name: 'Waterproof Mattress Protector',
    shortDescription: 'Breathable, quiet, and genuinely waterproof — with a 10-year warranty.',
    description: [
      'A mattress protector is only worth having if it is completely waterproof and completely silent. Ours uses a thin molecularly-bonded membrane that blocks liquid while still passing vapour, so it does not turn your bed into a sauna.',
      'The quilted top is 300-thread cotton and the skirt is full 360° elastic, so it stays fitted even on a mattress with a thick border.',
    ],
    collection: 'Protection',
    price: 7400,
    compareAtPrice: 9200,
    sizes: ['Single', 'Queen', 'King', 'Super King'],
    specifications: [
      { label: 'Membrane', value: 'Breathable PU, fully waterproof' },
      { label: 'Top', value: '300 TC cotton, quilted' },
      { label: 'Skirt', value: '360° elastic, 30 cm drop' },
      { label: 'Warranty', value: '10 years' },
    ],
    features: [
      'Vapour-permeable — breathable, not a plastic wrap',
      'Silent; no crinkling underweight',
      '10-year warranty against manufacturing defects',
      'Machine washable at 60°C',
    ],
    care: [
      'Machine wash at 60°C',
      'Close zip before washing',
      'Tumble dry low',
      'Do not iron or bleach',
    ],
    badges: ['sale'],
    stock: 88,
    sku: 'AM-BD-MP',
    tags: ['mattress protector', 'waterproof', 'protection'],
    surface: 'weave',
    rating: 4.7,
    reviewCount: 522,
  },
  {
    slug: 'bedding-pillow-pair-microfibre',
    name: 'Microfibre Pillow Pair',
    shortDescription: 'Hotel-density loft, hypoallergenic and washable at home.',
    description: [
      'Two pillows with the density you get in a good hotel: enough loft to hold its shape, not so much that you feel a wall. The fill is siliconised hollow microfibre, which springs back after every night instead of flattening by month three.',
      'Both covers zip off completely. When the season turns you wash them and they come back as good as new.',
    ],
    collection: 'Pillows',
    price: 5900,
    sizes: ['Standard', 'King'],
    specifications: [
      { label: 'Fill', value: 'Siliconised hollow microfibre' },
      { label: 'Size', value: '48 × 74 cm (Standard) / 48 × 90 cm (King)' },
      { label: 'Fill weight', value: '900 g per pillow' },
      { label: 'Cover', value: 'Removable, zip, 144 TC cotton' },
    ],
    features: [
      'Medium-firm hotel density',
      'Zip-off covers — wash at home, no dry clean',
      'Hypoallergenic and dust-mite resistant',
      'Recovers loft after every wash',
    ],
    care: [
      'Remove covers and machine wash at 40°C',
      'Wash pillow shell on a gentle cycle',
      'Tumble dry low with dryer balls',
      'Do not bleach or dry clean',
    ],
    badges: [],
    stock: 120,
    sku: 'AM-BD-PP',
    tags: ['pillow', 'microfibre', 'bed pillow', 'hypoallergenic'],
    surface: 'terry',
    rating: 4.4,
    reviewCount: 276,
  },

  /* ==================== CUSHIONS ==================== */
  {
    slug: 'velvet-cushion-cover-16',
    name: 'Pile Velvet Cushion Cover — 16"',
    shortDescription: 'Dense cotton pile velvet with a deep, light-absorbing colour.',
    description: [
      'Velvet is one of the few textiles that changes as you move around it — the pile catches light differently from every angle, which is why it reads as expensive in a way flat-woven fabric never quite does.',
      'We use a dense short-pile cotton velvet rather than a long-pile polyester, so it resists crushing and lies flat against a chair back rather than flopping.',
    ],
    collection: 'Velvet',
    price: 4600,
    sizes: ['14" × 14"', '16" × 16"', '18" × 18"'],
    specifications: [
      { label: 'Material', value: '100% cotton pile velvet, 280 GSM' },
      { label: 'Pile', value: 'Short dense pile, crush-resistant' },
      { label: 'Closure', value: 'Concealed YKK zip' },
      { label: 'Contents', value: 'Cover only — insert sold separately' },
    ],
    features: [
      'Short dense pile that resists crushing',
      'Concealed YKK zip with a reinforced pull',
      'Colourfast — no rubbing or fading to grey',
      'Sold as cover only; pairs with our feather insert',
    ],
    care: [
      'Dry clean recommended',
      'Spot clean spills immediately with a damp cloth',
      'Do not machine wash — pile will mat',
      'Do not tumble dry',
    ],
    badges: ['bestseller'],
    stock: 73,
    sku: 'AM-CS-VEL',
    tags: ['velvet', 'cushion cover', 'cushion', 'decorative pillow'],
    surface: 'boucle',
    rating: 4.8,
    reviewCount: 143,
  },
  {
    slug: 'boucle-cushion-18',
    name: 'Looped Bouclé Cushion Cover — 18"',
    shortDescription: 'Textural bouclé in cream, dove or caramel. A whole room in one cushion.',
    description: [
      'Bouclé is looped yarn, and the loop is what gives it that irregular, hand-tufted look. Ours is a wool-blend loop over a cotton base — warm to the touch, structurally honest, and it hides the fact that most sofas are not perfectly clean.',
      'The loops are dense enough to resist flattening but soft enough that the cover can go straight into a domestic machine.',
    ],
    collection: 'Bouclé',
    price: 5200,
    sizes: ['16" × 16"', '18" × 18"', '20" × 20"'],
    specifications: [
      { label: 'Material', value: '52% wool, 38% cotton, 10% nylon' },
      { label: 'Weave', value: 'Looped bouclé, 340 GSM' },
      { label: 'Closure', value: 'Concealed YKK zip' },
      { label: 'Contents', value: 'Cover only' },
    ],
    features: [
      'Irregular looped texture for visual depth',
      'Wool blend for warmth and resilience',
      'Machine washable at 30°C',
      'Concealed zip, no visible seam front-on',
    ],
    care: [
      'Machine wash cold on a gentle cycle',
      'Use a mesh bag to protect the loops',
      'Air dry flat; do not tumble hot',
      'Do not bleach',
    ],
    badges: ['new'],
    stock: 41,
    sku: 'AM-CS-BOU',
    tags: ['boucle', 'cushion cover', 'texture', 'wool'],
    surface: 'boucle',
    rating: 4.9,
    reviewCount: 88,
  },
  {
    slug: 'embroidered-linen-cushion-20',
    name: 'Embroidered Linen Cushion Cover — 20"',
    shortDescription: 'Washed linen with hand-guided tonal embroidery.',
    description: [
      'A large statement cushion in washed linen, embroidered with a tonal floral motif. The embroidery is tonal — same colour, different thread direction — so it reads as texture in raking light rather than as a printed pattern.',
      'At 20 inches this is sized to anchor a sectional rather than perch on it.',
    ],
    collection: 'Embroidered',
    price: 6800,
    sizes: ['18" × 18"', '20" × 20"'],
    specifications: [
      { label: 'Material', value: '100% washed linen' },
      { label: 'Emroidery', value: 'Tonal, hand-guided, 12,000 stitches' },
      { label: 'Closure', value: 'Concealed YKK zip' },
      { label: 'Contents', value: 'Cover only' },
    ],
    features: [
      'Tonal embroidery visible in raking light',
      'Oversized 20" for sectional anchoring',
      'Washed linen base — soft and relaxed',
      'Enclosed seams on all four sides',
    ],
    care: [
      'Machine wash cold, gentle cycle',
      'Wash inside a pillowcase to protect the embroidery',
      'Line dry in shade',
      'Cool iron on the reverse',
    ],
    badges: ['limited'],
    stock: 16,
    sku: 'AM-CS-EMB',
    tags: ['embroidered', 'linen', 'cushion', 'statement', 'large cushion'],
    surface: 'floral',
    rating: 4.7,
    reviewCount: 61,
  },
  {
    slug: 'knit-throw-cushion-14',
    name: 'Chunky Knit Cushion Cover — 14"',
    shortDescription: 'Heavy ribbed knit in mustard, forest or oatmeal.',
    description: [
      'A chunky, flat-knit rib that looks substantial in the hand and slouches attractively rather than sitting stiff. The knit is dense enough to hold its shape around a firm insert.',
      'This is the cushion that makes a plain corner of a sofa look considered, and it works equally well at the foot of a bed.',
    ],
    collection: 'Knit',
    price: 3900,
    sizes: ['14" × 14"', '16" × 16"'],
    specifications: [
      { label: 'Material', value: '100% cotton, 8-gauge knit' },
      { label: 'Weight', value: '410 GSM' },
      { label: 'Closure', value: 'Concealed YKK zip' },
      { label: 'Contents', value: 'Cover only' },
    ],
    features: [
      'Heavy 8-gauge rib that holds its shape',
      'Structured slouch, never shapeless',
      'Enclosed seams throughout',
      'Machine washable, no shrinkage',
    ],
    care: [
      'Machine wash cold, gentle cycle',
      'Do not hang — fold and dry flat',
      'Do not bleach or tumble hot',
      'Cool iron if needed',
    ],
    badges: [],
    stock: 92,
    sku: 'AM-CS-KNT',
    tags: ['knit', 'cushion cover', 'mustard', 'chunky'],
    surface: 'herringbone',
    rating: 4.5,
    reviewCount: 117,
  },

  /* ==================== CURTAINS ==================== */
  {
    slug: 'blackout-curtain-eyelet',
    name: 'Three-Passage Blackout Curtain',
    shortDescription: 'True blackout lining in graphite, navy or taupe. Sold as a pair.',
    description: [
      'Most "blackout" curtains are just a thick fabric — they dim the room but still glow at the edges and around the top. This one is a three-passage weave with an opaque backing, which is what it takes to turn a bedroom into a bedroom at noon.',
      'The face fabric is a matte twill that hangs straight and stays there. Panels are sold as a pair with 8 metal eyelets, already pressed and ready to hang.',
    ],
    collection: 'Blackout',
    price: 12800,
    compareAtPrice: 15500,
    sizes: ['6ft × 8ft', '8ft × 8ft', '8ft × 10ft', 'Custom'],
    specifications: [
      { label: 'Material', value: 'Matte twill face, blackout backing' },
      { label: 'Light blocking', value: '3-passage; 99% blackout' },
      { label: 'Heading', value: '8 metal eyelets per panel' },
      { label: 'Pieces', value: 'Sold as a pair' },
    ],
    features: [
      'Genuine three-passage blackout — not just thick fabric',
      'Opaque backing eliminates edge and top glow',
      'Matte face that hangs straight and stays pressed',
      'Sold as a pair; eyelets pre-punched and reinforced',
    ],
    care: [
      'Machine wash cold, gentle cycle',
      'Wash inside out to protect the blackout backing',
      'Line dry — do not tumble dry the backing',
      'Cool iron on the face side',
    ],
    badges: ['bestseller', 'sale'],
    stock: 34,
    sku: 'AM-CU-BLK',
    tags: ['blackout curtains', 'curtains', 'bedroom', 'pair'],
    surface: 'solid',
    rating: 4.8,
    reviewCount: 203,
  },
  {
    slug: 'linen-curtain-eyelet',
    name: 'Washed Linen Curtain',
    shortDescription: 'Relaxed washed linen that softens daylight and never looks fussy.',
    description: [
      'Linen this heavy drapes in wide, soft vertical folds rather than sharp pleats — which is the whole point. It filters daylight rather than blocking it, so a room feels open and warm.',
      'Our washed linen is stone-finished before it is cut, so the panels arrive soft and slightly relaxed out of the bag, and the creasing that linen lives with reads as texture rather than a defect.',
    ],
    collection: 'Linen',
    price: 11500,
    sizes: ['6ft × 8ft', '8ft × 8ft', '8ft × 10ft', 'Custom'],
    specifications: [
      { label: 'Material', value: '100% washed European flax linen, 210 GSM' },
      { label: 'Heading', value: '8 metal eyelets per panel' },
      { label: 'Light filtering', value: 'Filters 40–50% of daylight' },
      { label: 'Pieces', value: 'Sold as a pair' },
    ],
    features: [
      'Softens daylight without losing brightness',
      'Stone-washed — relaxed drape, soft from the start',
      'Heavy enough for wide, generous folds',
      'Sold as a pair with reinforced eyelets',
    ],
    care: [
      'Machine wash cold, gentle cycle',
      'Line dry; shake out before hanging',
      'Cool iron while damp for a crisper drape',
      'Dry clean if you prefer to preserve the texture',
    ],
    badges: ['new'],
    stock: 26,
    sku: 'AM-CU-LIN',
    tags: ['linen curtains', 'curtains', 'sheers', 'living room'],
    surface: 'weave',
    rating: 4.7,
    reviewCount: 129,
  },
  {
    slug: 'sheer-voile-curtain',
    name: 'Sheer Voile Curtain',
    shortDescription: 'Feather-light voile that diffuses light and keeps privacy.',
    description: [
      'Voile is a fine, open plain weave. It does not block light — it breaks it into something soft enough to read a book by, while still obscuring the view from outside.',
      'The best use is layered: sheer voile behind a blackout or linen panel, so you get total privacy at night and beautiful diffused light by day.',
    ],
    collection: 'Sheer',
    price: 6200,
    sizes: ['6ft × 8ft', '8ft × 8ft', '8ft × 10ft', 'Custom'],
    specifications: [
      { label: 'Material', value: '100% polyester voile, 70 GSM' },
      { label: 'Heading', value: '8 metal eyelets per panel' },
      { label: 'Light filtering', value: 'Diffuses ~60% of light' },
      { label: 'Pieces', value: 'Sold as a pair' },
    ],
    features: [
      'Diffuses glare while preserving daylight',
      'Enough opacity for daytime privacy',
      'Layerable under blackout or linen panels',
      'Crisp, wrinkle-resistant plain weave',
    ],
    care: [
      'Machine wash cold on a gentle cycle',
      'Do not bleach',
      'Line dry; hangs without pressing',
      'Cool iron if needed',
    ],
    badges: [],
    stock: 60,
    sku: 'AM-CU-VOI',
    tags: ['sheer curtains', 'voile', 'curtains', 'layering'],
    surface: 'dot',
    rating: 4.4,
    reviewCount: 174,
  },
  {
    slug: 'velvet-drape-panel',
    name: 'Velvet Drape Panel',
    shortDescription: 'Heavyweight velvet drapes with a matte face and deep colour.',
    description: [
      'Velvet drapes are a commitment — a heavy, saturated fabric that eats a wall. Ours is a 340 GSM cotton velvet, chosen for a matte face that reads as richness rather than costume.',
      'The weight is the feature. These panels pool slightly on the floor and hold a deep vertical fold, which is what makes them look expensive.',
    ],
    collection: 'Velvet',
    price: 17900,
    sizes: ['8ft × 8ft', '8ft × 10ft', 'Custom'],
    specifications: [
      { label: 'Material', value: '100% cotton velvet, 340 GSM' },
      { label: 'Heading', value: '8 metal eyelets per panel' },
      { label: 'Pieces', value: 'Sold as a pair' },
      { label: 'Max drop', value: '300 cm, hemmable' },
    ],
    features: [
      'Heavy 340 GSM weight for a deep vertical fold',
      'Matte face — rich, not shiny',
      'Pools naturally on the floor',
      'Custom drop available to order',
    ],
    care: [
      'Dry clean recommended',
      'Steam from the reverse to refresh the pile',
      'Do not brush the face',
      'Store rolled, never folded',
    ],
    badges: ['limited'],
    stock: 14,
    sku: 'AM-CU-VDP',
    tags: ['velvet curtains', 'drapes', 'curtains', 'heavy'],
    surface: 'boucle',
    rating: 4.9,
    reviewCount: 46,
  },

  /* ==================== THROWS ==================== */
  {
    slug: 'macrame-throw',
    name: 'Macramé Cotton Throw',
    shortDescription: 'Hand-loomed cotton throw with a knotted, open-weave grid.',
    description: [
      'Thrown over the foot of a bed, a macramé throw adds a layer of texture that no duvet can. Ours is hand-loomed from undyed cotton rope, with a knotted grid that stays square after washing.',
      'It reads Scandinavian without being costume — the knots are functional, holding the structure together, not decorative tassels.',
    ],
    collection: 'Macramé',
    price: 9500,
    sizes: ['50" × 70"', '60" × 80"'],
    specifications: [
      { label: 'Material', value: '100% undyed cotton rope' },
      { label: 'Construction', value: 'Hand-loomed knotted grid' },
      { label: 'Weight', value: '1.1 kg' },
      { label: 'Care', value: 'Machine washable, 30°C' },
    ],
    features: [
      'Hand-loomed; each piece takes roughly 6 hours',
      'Undyed natural cotton — no chemical bleaching',
      'Structured grid that resists sagging',
      'Machine washable at 30°C',
    ],
    care: [
      'Machine wash cold at 30°C, gentle cycle',
      'Use mild detergent',
      'Air dry flat; do not wring',
      'Do not bleach or tumble dry hot',
    ],
    badges: ['new'],
    stock: 19,
    sku: 'AM-TH-MAC',
    tags: ['macrame', 'throw', 'cotton', 'blanket', 'texture'],
    surface: 'weave',
    rating: 4.6,
    reviewCount: 92,
  },
  {
    slug: 'merino-wool-throw',
    name: 'Merino Wool Throw',
    shortDescription: 'Pure merino in camel, charcoal or forest. Warm without weight.',
    description: [
      'Merino is finer than ordinary wool, which is why this throw is warm without the bulk. It breathes, regulates temperature, and is naturally odour-resistant — so it stays fresh far longer between washes than a synthetic throw.',
      'The herringbone is woven, not printed, so the two-tone structure is part of the cloth and cannot wear off.',
    ],
    collection: 'Wool',
    price: 19900,
    sizes: ['50" × 70"', '60" × 80"', 'Twin', 'Queen'],
    specifications: [
      { label: 'Material', value: '100% extra-fine merino wool, 19.5 micron' },
      { label: 'Weight', value: '1.4 kg' },
      { label: 'Certification', value: 'RWS certified; OEKO-TEX Standard 100' },
      { label: 'Care', value: 'Dry clean or cold gentle wash' },
    ],
    features: [
      '19.5 micron merino — next-to-skin soft, never itchy',
      'Naturally temperature-regulating',
      'Woven herringbone that will not wear off',
      'RWS-certified responsible wool',
    ],
    care: [
      'Dry clean recommended',
      'Alternatively wash cold on a wool cycle',
      'Dry flat, never hang',
      'Do not tumble dry or bleach',
    ],
    badges: ['bestseller'],
    stock: 23,
    sku: 'AM-TH-MER',
    tags: ['wool throw', 'merino', 'blanket', 'camel', 'herringbone'],
    surface: 'herringbone',
    rating: 4.9,
    reviewCount: 157,
  },
  {
    slug: 'quilted-cotton-throw',
    name: 'Quilted Cotton Throw',
    shortDescription: 'Box-quilted cotton in ivory, navy or sage. Machine washable, always.',
    description: [
      'A quilted throw that behaves like bedding: it goes straight into a domestic machine at 60°C and comes out soft, without the shrinkage that dooms most quilts.',
      'The box-quilting keeps the batting evenly distributed so it never shifts into lumps in the middle of the panel.',
    ],
    collection: 'Quilts',
    price: 11900,
    compareAtPrice: 14500,
    sizes: ['50" × 70"', '60" × 80"', 'Queen'],
    specifications: [
      { label: 'Material', value: '100% cotton shell and batting' },
      { label: 'Construction', value: 'Box-quilted, 8 cm channels' },
      { label: 'Weight', value: '900 g' },
      { label: 'Care', value: 'Machine washable at 60°C' },
    ],
    features: [
      'Machine washable at 60°C — a genuine bedding quilt',
      'Box-quilting prevents shifting and lumping',
      'Pre-shrunk cotton shell',
      'Light enough for summer, layered enough for winter',
    ],
    care: [
      'Machine wash at 60°C',
      'Tumble dry low',
      'Do not dry clean',
      'Warm iron if desired',
    ],
    badges: ['sale'],
    stock: 47,
    sku: 'AM-TH-QCT',
    tags: ['quilted throw', 'cotton', 'blanket', 'machine washable'],
    surface: 'block',
    rating: 4.5,
    reviewCount: 208,
  },
  {
    slug: 'cashmere-blanket',
    name: 'Cashmere & Silk Blanket',
    shortDescription: 'Grade-A Mongolian cashmere with silk. The softest thing we make.',
    description: [
      'Our finest cashmere is long-fibre Grade-A Mongolian, combed rather than carded, which is why it does not pill after a month. A small silk content adds drape and a faint sheen along the fold.',
      'This is a blanket for the sofa, the end of the bed, and the cold shoulder on a winter night. It is also the only thing we make that we would ask you to hand-wash.',
    ],
    collection: 'Cashmere',
    price: 38900,
    sizes: ['50" × 70"', '60" × 80"'],
    specifications: [
      { label: 'Material', value: '90% Grade-A Mongolian cashmere, 10% silk' },
      { label: 'Weight', value: '620 gsm' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100' },
      { label: 'Care', value: 'Hand wash cold or dry clean' },
    ],
    features: [
      'Long-fibre Grade-A cashmere — resists pilling',
      '10% silk for drape and subtle sheen',
      'Breathable warmth, no weight',
      'Woven in a tight twill that holds its density',
    ],
    care: [
      'Hand wash cold with wool detergent, or dry clean',
      'Do not wring — press water out gently',
      'Dry flat away from direct heat',
      'Store folded with cedar, never on a hanger',
    ],
    badges: ['limited'],
    stock: 7,
    sku: 'AM-TH-CSH',
    tags: ['cashmere', 'blanket', 'luxury', 'silk', 'premium'],
    surface: 'weave',
    rating: 5,
    reviewCount: 38,
  },

  /* ==================== TOWELS ==================== */
  {
    slug: 'terry-bath-towel-set',
    name: '600 GSM Terry Bath Towel Set',
    shortDescription: 'High-twist cotton terry, zero-twist, in a set of four.',
    description: [
      'GSM is the number that matters in towels, and 600 is where terry stops feeling thin and starts feeling substantial. The pile is looped on both faces for absorbency, with a high-twist yarn holding the loops in place.',
      'The set is two bath towels, two hand towels and one face cloth, with flat hems that stay flat instead of curling after twenty washes.',
    ],
    collection: 'Terry',
    price: 8400,
    compareAtPrice: 10500,
    sizes: ['Bath 30" × 60"', 'Bath Sheet 35" × 72"'],
    specifications: [
      { label: 'Material', value: '100% long-staple cotton terry' },
      { label: 'Weight', value: '600 GSM' },
      { label: 'Set includes', value: '2 bath, 2 hand, 1 face cloth' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100' },
    ],
    features: [
      '600 GSM — real weight, not inflated thread count',
      'Zero-twist yarn stays soft without softener',
      'Flat double-stitched hems that do not curl',
      'Five-piece set in one box',
    ],
    care: [
      'Machine wash warm; add towels to a full load',
      'Skip fabric softener — it reduces absorbency',
      'Tumble dry on medium heat',
      'Wash new towels separately for the first cycle',
    ],
    badges: ['bestseller', 'sale'],
    stock: 76,
    sku: 'AM-TW-TER',
    tags: ['bath towel', 'terry', 'towel set', '600 gsm', 'cotton towels'],
    surface: 'terry',
    rating: 4.7,
    reviewCount: 341,
  },
  {
    slug: 'hand-towel-set',
    name: 'Hand Towel & Face Cloth Set',
    shortDescription: 'Six pieces in matching colourways. The finishing detail most rooms are missing.',
    description: [
      'A coordinated hand towel set is the detail that separates a considered bathroom from a functional one. Six pieces — three hand towels, three face cloths — in one of our three colourways.',
      'Sized properly: a hand towel at 50 × 100 cm actually dries a hand, which most do not.',
    ],
    collection: 'Terry',
    price: 4200,
    sizes: ['Hand 16" × 28" ×3', 'Face 12" × 12" ×3'],
    specifications: [
      { label: 'Material', value: '100% cotton terry, 500 GSM' },
      { label: 'Set includes', value: '3 hand towels, 3 face cloths' },
      { label: 'Hand towel size', value: '50 × 100 cm' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100' },
    ],
    features: [
      'Six matching pieces, one colourway',
      'Properly sized — 50 × 100 cm actually dries a hand',
      'Zero-twist yarn, soft without softener',
      'Flat hems that stay flat',
    ],
    care: [
      'Machine wash warm',
      'Skip fabric softener',
      'Tumble dry medium',
      'Wash with like colours',
    ],
    badges: [],
    stock: 95,
    sku: 'AM-TW-HND',
    tags: ['hand towel', 'face cloth', 'towel set', 'bathroom'],
    surface: 'terry',
    rating: 4.6,
    reviewCount: 158,
  },
  {
    slug: 'waffle-weave-towel',
    name: 'Waffle Weave Towel',
    shortDescription: 'Textured waffle weave that dries fast and packs small.',
    description: [
      'Waffle weave holds its raised grid through the wash cycle, which creates far more surface area than flat terry. The practical result: it dries in roughly half the time and packs down to almost nothing.',
      'The grid also gives it a slight scrub — softer than a loofah, but enough to feel clean.',
    ],
    collection: 'Waffle',
    price: 5600,
    sizes: ['Bath 30" × 60"', 'Hand 16" × 28"'],
    specifications: [
      { label: 'Material', value: '100% cotton waffle weave, 450 GSM' },
      { label: 'Cell size', value: '6 mm grid' },
      { label: 'Drying time', value: '~50% faster than terry' },
      { label: 'Certification', value: 'OEKO-TEX Standard 100' },
    ],
    features: [
      'Dries in about half the time of flat terry',
      'Compresses to a fraction of the packed size',
      'Slight scrub from the raised grid',
      'Grid survives repeated laundering',
    ],
    care: [
      'Machine wash warm, gentle cycle',
      'Tumble dry low to keep the grid raised',
      'Do not use fabric softener',
      'Do not iron',
    ],
    badges: ['new'],
    stock: 38,
    sku: 'AM-TW-WAF',
    tags: ['waffle towel', 'quick dry', 'travel towel', 'textured'],
    surface: 'weave',
    rating: 4.5,
    reviewCount: 74,
  },
  {
    slug: 'bath-mat-anti-slip',
    name: 'Anti-Slip Bath Mat',
    shortDescription: 'Deep pile terry with a rubberised non-slip backing. Machine washable.',
    description: [
      'The most important thing a bath mat does is not slip. Ours has a moulded rubber backing that grips tile even when wet, plus a dense 900 GSM pile that feels substantial underfoot.',
      'It is fully machine washable and quick-drying, which separates it from the mats that stay damp and eventually smell.',
    ],
    collection: 'Mats',
    price: 4900,
    sizes: ['50" × 80"', '30" × 50"'],
    specifications: [
      { label: 'Material', value: '100% cotton pile, rubber backing' },
      { label: 'Weight', value: '900 GSM' },
      { label: 'Non-slip', value: 'Moulded rubber, wet-grip' },
      { label: 'Care', value: 'Machine washable, fast dry' },
    ],
    features: [
      'Moulded rubber backing grips wet tile',
      '900 GSM dense pile — cushioned underfoot',
      'Quick-drying; does not stay damp or smell',
      'Machine washable at 40°C',
    ],
    care: [
      'Machine wash at 40°C',
      'Do not use fabric softener',
      'Hang to dry; tumble low if needed',
      'Check the backing periodically for wear',
    ],
    badges: [],
    stock: 52,
    sku: 'AM-TW-MAT',
    tags: ['bath mat', 'non slip', 'bathroom', 'terry mat'],
    surface: 'terry',
    rating: 4.4,
    reviewCount: 189,
  },
];

/**
 * Products are limited to those with a colourway that has a real photo, so the
 * storefront never shows a product the user cannot actually buy. If no user
 * photography has been added yet, fall back to the full generated catalogue so
 * development is not blocked.
 */
/**
 * Real products, built from data/photo-descriptions.csv via
 * src/lib/generated/user-catalogue.ts. One product per photo — there is no
 * colour grouping. The 7 bed sheet types become the filter categories, so the
 * shop filters by type and every design is separately shoppable.
 */
function buildFromUserCatalogue(): Product[] {
  return userCatalogue.map((p) => {
    const photographed = new Map(
      (userProducts.find((u) => u.slug === p.slug)?.colourways ?? []).map((c) => [c.name, c]),
    );

    const colourways: Colourway[] = p.colourways
      .map((c) => {
        const entry = photographed.get(c.name);
        if (!entry) return null;
        const images = toViewMap(entry.images);
        if (!images.drape) return null;
        return { name: c.name, hex: c.hex, images };
      })
      .filter((c): c is Colourway => c !== null);

    return {
      id: p.id,
      slug: p.slug,
      name: p.name,
      shortDescription: p.shortDescription,
      description: p.description,
      category: p.category,
      collection: p.collection,
      price: p.price,
      compareAtPrice: p.compareAtPrice ?? undefined,
      sizes: p.sizes,
      specifications: p.specifications,
      features: p.features,
      care: p.care,
      badges: p.badges,
      surface: p.surface,
      tags: p.tags,
      stock: 12,
      sku: `AMQ-${p.id}`,
      rating: 4.6,
      reviewCount: 0,
      colourways,
    };
  });
}

export const allProducts: Product[] = userCatalogue.length
  ? buildFromUserCatalogue()
  : seeds.map((s, i) => {
  const { outOfStock, ...rest } = s;
  return {
    ...rest,
    id: `AMQ-${String(i + 1).padStart(3, '0')}`,
    category: (s.slug.startsWith('bath') || s.slug.startsWith('hand-') || s.slug.startsWith('waffle'))
      ? 'towels'
      : categoryFromSlug(s.slug),
    colourways: colourwaysFor(s.slug, outOfStock ?? []),
    rating: s.rating ?? 4.6,
    reviewCount: s.reviewCount ?? 0,
  };
});

/**
 * The catalogue is whatever has a real photo. A product with no image in
 * public/images/productimgs has no colourways, and is filtered out here — so it never
 * reaches the shop grid, category pages, search, or the sitemap.
 */
export const products: Product[] = allProducts.filter((p) => p.colourways.length > 0);

/** Categories that still have at least one photographed product. */
export const visibleCategories: Category[] = categories.filter((c) =>
  products.some((p) => p.category === c.slug),
);

export const productBySlug = new Map(products.map((p) => [p.slug, p]));

export function getProduct(slug: string): Product | undefined {
  return productBySlug.get(slug);
}

export function getCategory(slug: string): Category | undefined {
  return categoryBySlug.get(slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

function categoryFromSlug(slug: string): string {
  if (slug.includes('cushion') || slug.includes('cushions')) return 'cushions';
  if (slug.includes('curtain') || slug.includes('voile') || slug.includes('drape')) return 'curtains';
  if (slug.includes('throw') || slug.includes('macrame') || slug.includes('cashmere')) return 'throws';
  if (slug.includes('towel') || slug.includes('mat-')) return 'towels';
  if (slug.includes('bedsheet') || slug.includes('sateen') || slug.includes('linen-bedsheet') || slug.includes('flannel')) return 'bedsheets';
  return 'bedding';
}

// Guarded: with no photographed products the spread is empty and Math.min()
// would be Infinity, which would render as an "₹ Infinity" price filter.
export const priceRange = {
  min: products.length ? Math.min(...products.map((p) => p.price)) : 0,
  max: products.length ? Math.max(...products.map((p) => p.price)) : 0,
};

export const fabricSummary: { name: string; note: string; detail: string }[] = [
  {
    name: 'Long-staple cotton',
    note: 'Combed, long fibre',
    detail:
      'Long-staple cotton has longer fibres, which means fewer pills and a softer hand that survives repeated laundering. Most cheap cotton uses short fibre, which feels fine once and then does not.',
  },
  {
    name: 'European flax linen',
    note: 'Washed, breathable',
    detail:
      'Flax grown in Normandy and woven in Portugal. Linen is one of the few natural fibres that manages heat in both directions — it pulls moisture away when you are warm and insulates when you are not.',
  },
  {
    name: 'Merino wool',
    note: '19.5 micron, RWS certified',
    detail:
      'Finer than ordinary wool, and therefore not itchy against skin. Merino is also naturally odour-resistant, which is why a wool throw stays fresh far longer between washes than a synthetic one.',
  },
  {
    name: 'Responsible sourcing',
    note: 'OEKO-TEX Standard 100',
    detail:
      'Every fibre we use is tested for harmful substances and certified to OEKO-TEX Standard 100. Our wool is additionally RWS certified, which traces the farm it came from.',
  },
];
