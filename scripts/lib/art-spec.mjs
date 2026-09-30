/**
 * AMARTQ art direction.
 * Each product gets colourways; each colourway is rendered as a woven fabric
 * sheet in three views (drape / detail / flat) for the storefront imagery.
 */

export const BRAND = {
  navy: '#09254A',
  orange: '#FF7900',
};

/** slug -> [ baseColour, accentColour, surfaceTreatment ] per colourway. */
export const colourways = {
  /* ---------------- bed sheets ---------------- */
  'royal-cotton-bedsheet-300tc': [
    ['Ivory Bloom', '#F2ECE0', '#D6C7AE', 'pinstripe'],
    ['Sky Wash', '#C4D4DE', '#8AA2B4', 'solid'],
    ['Sage Field', '#9BA98B', '#6D7F61', 'weave'],
  ],
  'sateen-bedsheet-king': [
    ['Pearl White', '#F7F4EF', '#D9D2C6', 'solid'],
    ['Deep Navy', '#12305C', '#09254A', 'solid'],
    ['Champagne', '#E4D2B4', '#C6A97E', 'wave'],
  ],
  'linen-bedsheet-washed': [
    ['Natural Flax', '#E6DCCB', '#C4B49A', 'weave'],
    ['Clay Rose', '#D8B3A6', '#B08C7D', 'solid'],
    ['Olive Stone', '#A7A98C', '#7F8265', 'weave'],
  ],
  'flannel-bedsheet-winter': [
    ['Charcoal Check', '#3B3F47', '#22262D', 'check'],
    ['Rust Plaid', '#9B4F2C', '#6E3418', 'check'],
    ['Forest Plaid', '#33503F', '#1F3328', 'check'],
  ],

  /* ---------------- bedding ---------------- */
  'merino-quilt-bedding-set': [
    ['Oatmeal', '#E3DACA', '#C2B49B', 'weave'],
    ['Midnight', '#12294D', '#0A1D3A', 'solid'],
    ['Terracotta', '#C0703F', '#96502A', 'boucle'],
  ],
  'all-season-comforter-microfibre': [
    ['Cloud White', '#F5F2EC', '#DCD5C8', 'solid'],
    ['Dune', '#D9C6A8', '#B79E7C', 'weave'],
    ['Ink', '#2B303A', '#171B22', 'weave'],
  ],
  'mattress-protector-waterproof': [
    ['Cool Grey', '#C9CDD3', '#A2A8B1', 'weave'],
    ['Pure White', '#F4F4F2', '#DEDEDB', 'terry'],
  ],
  'bedding-pillow-pair-microfibre': [
    ['Hotel White', '#F7F6F3', '#E0DFD9', 'terry'],
    ['Slate', '#9BA3AD', '#727A85', 'weave'],
  ],

  /* ---------------- cushions ---------------- */
  'velvet-cushion-cover-16': [
    ['Emerald', '#1F5C4A', '#123B2F', 'boucle'],
    ['Burnt Orange', '#C1551E', '#8E3A10', 'boucle'],
    ['Midnight Blue', '#152F57', '#0A1B33', 'boucle'],
  ],
  'boucle-cushion-18': [
    ['Cream Boucle', '#EDE3D4', '#CFC0AA', 'boucle'],
    ['Dove', '#C4C4C2', '#A0A09E', 'boucle'],
    ['Caramel', '#C08B52', '#996A36', 'boucle'],
  ],
  'embroidered-linen-cushion-20': [
    ['Ecru', '#EFE7D8', '#D2C4AA', 'floral'],
    ['Dusty Rose', '#DFC1B7', '#BC9A8E', 'floral'],
    ['Indigo', '#3A4E76', '#26365A', 'floral'],
  ],
  'knit-throw-cushion-14': [
    ['Mustard', '#D69B3B', '#AC7524', 'herringbone'],
    ['Forest', '#33513F', '#1F3428', 'herringbone'],
    ['Oatmeal', '#DED3C1', '#BFB09A', 'herringbone'],
  ],

  /* ---------------- curtains ---------------- */
  'blackout-curtain-eyelet': [
    ['Graphite', '#41454E', '#25282E', 'solid'],
    ['Deep Navy', '#123058', '#09254A', 'solid'],
    ['Warm Taupe', '#A99880', '#7F7059', 'weave'],
  ],
  'linen-curtain-eyelet': [
    ['Natural', '#EBE2D3', '#CDC0AB', 'weave'],
    ['Sage', '#A3AE96', '#7C8A6D', 'weave'],
    ['Dusk Blue', '#8497AC', '#5F7389', 'weave'],
  ],
  'sheer-voile-curtain': [
    ['Soft White', '#F4F1EA', '#DDD7CA', 'dot'],
    ['Blush', '#EBD6D0', '#D3B6AE', 'dot'],
  ],
  'velvet-drape-panel': [
    ['Deep Teal', '#1E4F55', '#0F3438', 'boucle'],
    ['Aubergine', '#4B2B45', '#2E182A', 'boucle'],
    ['Camel', '#B98A57', '#8E6539', 'boucle'],
  ],

  /* ---------------- throws ---------------- */
  'macrame-throw': [
    ['Natural Cotton', '#EDE5D7', '#CFC3AB', 'weave'],
    ['Blush', '#E4C9C2', '#C2A098', 'weave'],
    ['Slate', '#B0B6BC', '#868D95', 'weave'],
  ],
  'merino-wool-throw': [
    ['Camel', '#C08A52', '#966A38', 'herringbone'],
    ['Charcoal', '#3A3D44', '#212429', 'herringbone'],
    ['Forest', '#2F4C3B', '#1D3227', 'herringbone'],
  ],
  'quilted-cotton-throw': [
    ['Ivory', '#F0EADD', '#D4C7B0', 'block'],
    ['Navy', '#143159', '#09254A', 'block'],
    ['Sage', '#9FAA8C', '#74805F', 'block'],
  ],
  'cashmere-blanket': [
    ['Heather Grey', '#B4B2AE', '#8C8A86', 'weave'],
    ['Camel', '#C89A63', '#9C7440', 'weave'],
    ['Navy', '#1B3157', '#09254A', 'weave'],
  ],

  /* ---------------- towels ---------------- */
  'terry-bath-towel-set': [
    ['Pure White', '#F4F3EF', '#DEDCD5', 'terry'],
    ['Sage', '#A6B096', '#7E8A6C', 'terry'],
    ['Charcoal', '#3E4249', '#282B31', 'terry'],
  ],
  'hand-towel-set': [
    ['Ivory', '#F1EDE4', '#D8D1C2', 'terry'],
    ['Dusty Blue', '#A9BACB', '#8195A9', 'terry'],
    ['Blush', '#E6CEC7', '#C7A79E', 'terry'],
  ],
  'waffle-weave-towel': [
    ['Sand', '#DCCDB5', '#BCA98C', 'weave'],
    ['Charcoal', '#3A3E45', '#23262B', 'weave'],
    ['Sage', '#A3AD92', '#7B8668', 'weave'],
  ],
  'bath-mat-anti-slip': [
    ['Stone', '#CFC6B4', '#ABA08C', 'terry'],
    ['Navy', '#153059', '#0B2244', 'terry'],
  ],
};

/** Category card art: which colourway + surface to borrow. */
export const categoryArt = {
  bedsheets: { product: 'royal-cotton-bedsheet-300tc', colourway: 0, view: 'drape' },
  bedding: { product: 'merino-quilt-bedding-set', colourway: 1, view: 'drape' },
  cushions: { product: 'velvet-cushion-cover-16', colourway: 1, view: 'drape' },
  curtains: { product: 'linen-curtain-eyelet', colourway: 0, view: 'drape' },
  throws: { product: 'merino-wool-throw', colourway: 0, view: 'drape' },
  towels: { product: 'terry-bath-towel-set', colourway: 0, view: 'drape' },
};

export const views = ['drape', 'detail', 'flat'];

export const scenes = {
  hero: { fn: 'bedScene', w: 2000, h: 1250, accent: BRAND.orange },
  heroSecondary: { fn: 'curtainScene', w: 1600, h: 1200, accent: BRAND.orange },
  story: { fn: 'stackScene', w: 1600, h: 1200, accent: BRAND.orange },
  craft: { fn: 'stackScene', w: 1600, h: 1200, accent: BRAND.navy },
  roomBedding: { fn: 'bedScene', w: 1600, h: 1100, accent: BRAND.navy },
  roomCurtains: { fn: 'curtainScene', w: 1600, h: 1100, accent: BRAND.navy },
  roomCushions: { fn: 'stackScene', w: 1600, h: 1100, accent: BRAND.orange },
};
