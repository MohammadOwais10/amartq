/**
 * Product copy and pricing for the 7 products described in
 * data/photo-descriptions.csv.
 *
 * `name` MUST match the `product_name` column in the CSV exactly.
 *
 * PRICING: every `price` here is a placeholder. Change the numbers in this
 * file and re-run `npm run catalogue:photos` — nothing else needs editing.
 */

export const productMeta = [
  {
    name: 'Printed Bedsheet',
    slug: 'printed-bedsheet',
    shortDescription: 'Soft printed cotton in a wide range of florals and geometrics.',
    description: [
      'The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.',
      'Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp.',
    ],
    collection: 'Printed Cotton',
    price: 4999,
    sizes: ['King — 274 × 274 cm', 'Super King — 300 × 300 cm'],
    specifications: [
      { label: 'Fabric', value: '100% combed cotton percale' },
      { label: 'Print', value: 'Screen printed' },
      { label: 'Thread count', value: '200 TC' },
      { label: 'Weave', value: 'Percale' },
    ],
    features: [
      'Breathable 200 TC percale that stays cool through a warm night',
      'Screen printed in small runs for deeper colour',
      'Deep hem finished for a flat, tidy drape',
      'Machine washable at 40°C',
    ],
    care: ['Machine wash at 40°C with similar colours', 'Tumble dry low', 'Do not bleach', 'Warm iron on reverse'],
    badges: ['bestseller'],
    surface: 'floral',
    tags: ['bedsheets', 'cotton', 'printed', 'floral', 'geometric', 'percale'],
  },
  {
    name: 'Printed Bedsheet Set',
    slug: 'printed-bedsheet-set',
    shortDescription: 'One bedsheet with two matching pillow covers.',
    description: [
      'Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.',
      'The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway.',
    ],
    collection: 'Printed Cotton',
    price: 6499,
    compareAtPrice: 7499,
    sizes: ['King Set — 274 × 274 cm + 2 × 50 × 75 cm', 'Super King Set — 300 × 300 cm + 2 × 50 × 75 cm'],
    specifications: [
      { label: 'Fabric', value: '100% combed cotton percale' },
      { label: 'Print', value: 'Screen printed' },
      { label: 'Thread count', value: '200 TC' },
      { label: 'Includes', value: '1 bedsheet + 2 pillow covers' },
    ],
    features: [
      'Bedsheet and two pillow covers cut from one bolt for a matched set',
      'Cool 200 TC percale that softens with every wash',
      'Wide range of printed designs',
      'Complete bed refresh in a single order',
    ],
    care: ['Machine wash at 40°C with similar colours', 'Tumble dry low', 'Do not bleach', 'Warm iron on reverse'],
    badges: ['sale', 'bestseller'],
    surface: 'floral',
    tags: ['bedsheets', 'bedding-set', 'cotton', 'printed', 'floral', 'geometric'],
  },
  {
    name: 'Block Print Bedsheet',
    slug: 'block-print-bedsheet',
    shortDescription: 'Hand block printed cotton, carved motifs on a white ground.',
    description: [
      'Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.',
      'The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways.',
    ],
    collection: 'Hand Block Print',
    price: 7999,
    sizes: ['King — 274 × 274 cm', 'Super King — 300 × 300 cm'],
    specifications: [
      { label: 'Fabric', value: '100% cotton' },
      { label: 'Print', value: 'Hand block printed' },
      { label: 'Ground', value: 'White' },
      { label: 'Motifs', value: 'Floral and geometric' },
    ],
    features: [
      'Printed by hand with carved wooden blocks',
      'Natural registration variation unique to each piece',
      'White ground with floral and geometric motifs',
      'Softens with every wash',
    ],
    care: ['Machine wash at 40°C, separately first time', 'Line dry in shade', 'Do not bleach', 'Warm iron on reverse'],
    badges: ['new'],
    surface: 'block',
    tags: ['bedsheets', 'cotton', 'block-print', 'handmade', 'floral', 'geometric'],
  },
  {
    name: 'Striped Bedsheet',
    slug: 'striped-bedsheet',
    shortDescription: 'Yarn dyed striped cotton in clean, balanced colourways.',
    description: [
      'Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.',
      'The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout.',
    ],
    collection: 'Yarn Dyed Stripe',
    price: 5499,
    sizes: ['King — 274 × 274 cm', 'Super King — 300 × 300 cm'],
    specifications: [
      { label: 'Fabric', value: '100% cotton' },
      { label: 'Stripe', value: 'Yarn dyed' },
      { label: 'Print', value: 'Woven in, not printed' },
    ],
    features: [
      'Yarn dyed — the colour is in the yarn, not on the surface',
      'Will not crack or fade along fold lines',
      'Balanced stripe width that reads well on a large bed',
      'Even hand and good weight throughout',
    ],
    care: ['Machine wash at 40°C with similar colours', 'Tumble dry low', 'Do not bleach', 'Warm iron'],
    badges: [],
    surface: 'stripe',
    tags: ['bedsheets', 'cotton', 'striped', 'yarn-dyed'],
  },
  {
    name: 'Patchwork Printed Bedsheet',
    slug: 'patchwork-printed-bedsheet',
    shortDescription: 'Patchwork print cotton — pieced panels in one flat sheet.',
    description: [
      'A patchwork print rather than a single repeating motif: pieced panels of different blocks laid together across the surface. It gives the bed the look of something assembled over years, in one piece.',
      'Printed on soft cotton with a matte finish. It reads richly flat on the bed and holds its colour through regular washing.',
    ],
    collection: 'Printed Cotton',
    price: 6999,
    sizes: ['King — 274 × 274 cm', 'Super King — 300 × 300 cm'],
    specifications: [
      { label: 'Fabric', value: '100% cotton' },
      { label: 'Print', value: 'Patchwork panel print' },
      { label: 'Motifs', value: 'Pieced geometric blocks' },
    ],
    features: [
      'Pieced-panel patchwork print across the whole surface',
      'Matte cotton finish that reads richly flat',
      'Holds colour through regular washing',
      'Available in two colourways',
    ],
    care: ['Machine wash at 40°C with similar colours', 'Tumble dry low', 'Do not bleach', 'Warm iron on reverse'],
    badges: ['limited'],
    surface: 'chevron',
    tags: ['bedsheets', 'cotton', 'patchwork', 'geometric', 'printed'],
  },
  {
    name: 'Jaipur Printed Bedsheet',
    slug: 'jaipur-printed-bedsheet',
    shortDescription: 'Jaipur-style print, dense multicolor on a warm ground.',
    description: [
      'A dense Jaipur print — the kind carried out of Rajasthan for centuries, with the small repeating figures and dense multicolor ground that make it unmistakable at a distance.',
      'Printed on cotton with enough weight to drape properly on a bed rather than sit on top of it. A distinctive piece for anyone who does not want another plain floral.',
    ],
    collection: 'Jaipur Print',
    price: 8499,
    sizes: ['King — 274 × 274 cm', 'Super King — 300 × 300 cm'],
    specifications: [
      { label: 'Fabric', value: '100% cotton' },
      { label: 'Print', value: 'Jaipur style' },
      { label: 'Ground', value: 'Multicolor' },
    ],
    features: [
      'Dense traditional Jaipur print with small repeating figures',
      'Full multicolor ground — distinctive on a bed',
      'Enough weight to drape rather than sit on top',
      'Printed on soft cotton',
    ],
    care: ['Machine wash at 40°C with similar colours', 'Line dry in shade', 'Do not bleach', 'Warm iron on reverse'],
    badges: ['limited'],
    surface: 'damask',
    tags: ['bedsheets', 'cotton', 'jaipur', 'printed', 'multicolor'],
  },
  {
    name: 'Floral Bedsheet',
    slug: 'floral-bedsheet',
    shortDescription: 'A printed floral on white, shown draped.',
    description: [
      'A floral print on a white ground, photographed draped so you can judge how it falls across a bed rather than how it looks folded on a table.',
      'Printed cotton with a soft matte hand. The white ground keeps the floral legible and the bed looking light in a room.',
    ],
    collection: 'Printed Cotton',
    price: 5999,
    sizes: ['King — 274 × 274 cm', 'Super King — 300 × 300 cm'],
    specifications: [
      { label: 'Fabric', value: '100% cotton' },
      { label: 'Print', value: 'Floral on white ground' },
    ],
    features: [
      'Floral print on a white ground',
      'Photographed draped to show the fall',
      'Soft matte cotton hand',
      'Keeps the bed looking light',
    ],
    care: ['Machine wash at 40°C with similar colours', 'Tumble dry low', 'Do not bleach', 'Warm iron on reverse'],
    badges: [],
    surface: 'floral',
    tags: ['bedsheets', 'cotton', 'floral', 'printed', 'white'],
  },
];
