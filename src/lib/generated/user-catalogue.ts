/**
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

export const userCatalogue: UserCatalogueProduct[] = [
  {
    "id": "AMQ-001",
    "slug": "printed-bedsheet-multicolor-floral-and-geometric",
    "name": "Multicolor floral and geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "abstract",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "abstract"
    ],
    "colourways": [
      {
        "name": "Multicolor floral and geometric",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-002",
    "slug": "printed-bedsheet-pink-blue-and-white-geometric",
    "name": "Pink, blue and white geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Pink, blue and white geometric",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-003",
    "slug": "printed-bedsheet-blue-pink-and-beige-geometric",
    "name": "Blue, pink and beige geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Blue, pink and beige geometric",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-004",
    "slug": "printed-bedsheet-red-blue-and-beige-geometric",
    "name": "Red, blue and beige geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Red, blue and beige geometric",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-005",
    "slug": "printed-bedsheet-blue-teal-and-multicolor-geometric",
    "name": "Blue, teal and multicolor geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Blue, teal and multicolor geometric",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-006",
    "slug": "printed-bedsheet-blue-and-multicolor-floral",
    "name": "Blue and multicolor floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Blue and multicolor floral",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-007",
    "slug": "printed-bedsheet-red-and-beige-striped-geometric",
    "name": "Red and beige striped geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "striped",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "striped"
    ],
    "colourways": [
      {
        "name": "Red and beige striped geometric",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-008",
    "slug": "printed-bedsheet-set-navy-mustard-and-white-botanical",
    "name": "Navy mustard and white botanical",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Navy mustard and white botanical",
        "slug": "design",
        "hex": "#1f2f55"
      }
    ]
  },
  {
    "id": "AMQ-009",
    "slug": "printed-bedsheet-set-red-green-and-white-floral",
    "name": "Red green and white floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Red green and white floral",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-010",
    "slug": "printed-bedsheet-set-teal-grey-and-white-arch-geometric",
    "name": "Teal grey and white arch geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Teal grey and white arch geometric",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-011",
    "slug": "printed-bedsheet-set-black-grey-and-white-medallion-geometric",
    "name": "Black grey and white medallion geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Black grey and white medallion geometric",
        "slug": "design",
        "hex": "#1c1c1c"
      }
    ]
  },
  {
    "id": "AMQ-012",
    "slug": "printed-bedsheet-set-black-grey-and-white-floral-medallion",
    "name": "Black grey and white floral medallion",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Black grey and white floral medallion",
        "slug": "design",
        "hex": "#1c1c1c"
      }
    ]
  },
  {
    "id": "AMQ-013",
    "slug": "printed-bedsheet-set-pink-cream-and-gold-floral",
    "name": "Pink cream and gold floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Pink cream and gold floral",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-014",
    "slug": "printed-bedsheet-set-blush-cream-and-taupe-floral-border",
    "name": "Blush cream and taupe floral border",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Blush cream and taupe floral border",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-015",
    "slug": "printed-bedsheet-set-teal-brown-and-cream-botanical",
    "name": "Teal brown and cream botanical",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Teal brown and cream botanical",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-016",
    "slug": "printed-bedsheet-set-teal-rust-and-cream-botanical",
    "name": "Teal rust and cream botanical",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Teal rust and cream botanical",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-017",
    "slug": "printed-bedsheet-set-olive-cream-and-sage-botanical",
    "name": "Olive cream and sage botanical",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Olive cream and sage botanical",
        "slug": "design",
        "hex": "#7c8350"
      }
    ]
  },
  {
    "id": "AMQ-018",
    "slug": "printed-bedsheet-set-dusty-rose-cream-and-sage-floral",
    "name": "Dusty rose cream and sage floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Dusty rose cream and sage floral",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-019",
    "slug": "printed-bedsheet-set-teal-mustard-and-cream-floral-border",
    "name": "Teal mustard and cream floral border",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Teal mustard and cream floral border",
        "slug": "design",
        "hex": "#1f7a7a"
      }
    ]
  },
  {
    "id": "AMQ-020",
    "slug": "printed-bedsheet-set-charcoal-white-and-grey-floral",
    "name": "Charcoal white and grey floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Charcoal white and grey floral",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-021",
    "slug": "printed-bedsheet-set-red-sage-and-cream-floral",
    "name": "Red sage and cream floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Red sage and cream floral",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-022",
    "slug": "printed-bedsheet-beige-grey-and-blue-floral",
    "name": "Beige, grey and blue floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Beige, grey and blue floral",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-023",
    "slug": "printed-bedsheet-multicolor-floral",
    "name": "Multicolor floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Multicolor floral",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-024",
    "slug": "printed-bedsheet-grey-and-mauve-floral",
    "name": "Grey and mauve floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Grey and mauve floral",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-025",
    "slug": "printed-bedsheet-pink-and-multicolor-floral",
    "name": "Pink and multicolor floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Pink and multicolor floral",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-026",
    "slug": "floral-bedsheet-white-with-pink-floral",
    "name": "White with pink floral",
    "shortDescription": "A printed floral on white, shown draped.",
    "description": [
      "A floral print on a white ground, photographed draped so you can judge how it falls across a bed rather than how it looks folded on a table.",
      "Printed cotton with a soft matte hand. The white ground keeps the floral legible and the bed looking light in a room."
    ],
    "category": "floral-bedsheet",
    "collection": "floral",
    "price": 5999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Floral on white ground"
      }
    ],
    "features": [
      "Floral print on a white ground",
      "Photographed draped to show the fall",
      "Soft matte cotton hand",
      "Keeps the bed looking light"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "floral",
      "printed",
      "white",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with pink floral",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-027",
    "slug": "printed-bedsheet-white-with-red-floral",
    "name": "White with red floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with red floral",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-028",
    "slug": "printed-bedsheet-multicolor-floral-and-striped",
    "name": "Multicolor floral and striped",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Multicolor floral and striped",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-029",
    "slug": "jaipur-printed-bedsheet-multicolor-jaipur-print",
    "name": "Multicolor Jaipur print",
    "shortDescription": "Jaipur-style print, dense multicolor on a warm ground.",
    "description": [
      "A dense Jaipur print — the kind carried out of Rajasthan for centuries, with the small repeating figures and dense multicolor ground that make it unmistakable at a distance.",
      "Printed on cotton with enough weight to drape properly on a bed rather than sit on top of it. A distinctive piece for anyone who does not want another plain floral."
    ],
    "category": "jaipur-printed-bedsheet",
    "collection": "abstract",
    "price": 8499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Jaipur style"
      },
      {
        "label": "Ground",
        "value": "Multicolor"
      }
    ],
    "features": [
      "Dense traditional Jaipur print with small repeating figures",
      "Full multicolor ground — distinctive on a bed",
      "Enough weight to drape rather than sit on top",
      "Printed on soft cotton"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "limited"
    ],
    "surface": "damask",
    "tags": [
      "bedsheets",
      "cotton",
      "jaipur",
      "printed",
      "multicolor",
      "abstract"
    ],
    "colourways": [
      {
        "name": "Multicolor Jaipur print",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-030",
    "slug": "printed-bedsheet-white-with-red-floral-2",
    "name": "White with red floral 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with red floral 2",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-031",
    "slug": "printed-bedsheet-white-with-blue-and-mustard-floral",
    "name": "White with blue and mustard floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue and mustard floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-032",
    "slug": "printed-bedsheet-multicolor-floral-and-geometric-2",
    "name": "Multicolor floral and geometric 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "abstract",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "abstract"
    ],
    "colourways": [
      {
        "name": "Multicolor floral and geometric 2",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-033",
    "slug": "printed-bedsheet-white-with-blue-floral",
    "name": "White with blue floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-034",
    "slug": "printed-bedsheet-white-with-blue-floral-2",
    "name": "White with blue floral 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue floral 2",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-035",
    "slug": "printed-bedsheet-white-with-navy-floral",
    "name": "White with navy floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with navy floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-036",
    "slug": "printed-bedsheet-multicolor-floral-and-striped-2",
    "name": "Multicolor floral and striped 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Multicolor floral and striped 2",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-037",
    "slug": "printed-bedsheet-set-blue-floral",
    "name": "Blue floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Blue floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-038",
    "slug": "printed-bedsheet-white-with-multicolor-floral-and-striped",
    "name": "White with multicolor floral and striped",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with multicolor floral and striped",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-039",
    "slug": "printed-bedsheet-multicolor-floral-and-geometric-3",
    "name": "Multicolor floral and geometric 3",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "abstract",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "abstract"
    ],
    "colourways": [
      {
        "name": "Multicolor floral and geometric 3",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-040",
    "slug": "printed-bedsheet-multicolor-floral-and-geometric-4",
    "name": "Multicolor floral and geometric 4",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "abstract",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "abstract"
    ],
    "colourways": [
      {
        "name": "Multicolor floral and geometric 4",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-041",
    "slug": "printed-bedsheet-blue-and-grey-geometric",
    "name": "Blue and grey geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Blue and grey geometric",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-042",
    "slug": "printed-bedsheet-blue-grey-and-multicolor-floral",
    "name": "Blue, grey and multicolor floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Blue, grey and multicolor floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-043",
    "slug": "printed-bedsheet-burgundy-floral",
    "name": "Burgundy floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Burgundy floral",
        "slug": "design",
        "hex": "#6e1f2e"
      }
    ]
  },
  {
    "id": "AMQ-044",
    "slug": "printed-bedsheet-navy-blue-paisley",
    "name": "Navy blue paisley",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "paisley",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "paisley"
    ],
    "colourways": [
      {
        "name": "Navy blue paisley",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-045",
    "slug": "printed-bedsheet-multicolor-floral-2",
    "name": "Multicolor floral 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Multicolor floral 2",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-046",
    "slug": "printed-bedsheet-grey-and-blue-floral",
    "name": "Grey and blue floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Grey and blue floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-047",
    "slug": "printed-bedsheet-grey-with-burgundy-elephant-motifs",
    "name": "Grey with burgundy elephant motifs",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "abstract",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "abstract"
    ],
    "colourways": [
      {
        "name": "Grey with burgundy elephant motifs",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-048",
    "slug": "patchwork-printed-bedsheet-multicolor-geometric-patchwork",
    "name": "Multicolor geometric patchwork",
    "shortDescription": "Patchwork print cotton — pieced panels in one flat sheet.",
    "description": [
      "A patchwork print rather than a single repeating motif: pieced panels of different blocks laid together across the surface. It gives the bed the look of something assembled over years, in one piece.",
      "Printed on soft cotton with a matte finish. It reads richly flat on the bed and holds its colour through regular washing."
    ],
    "category": "patchwork-printed-bedsheet",
    "collection": "geometric",
    "price": 6999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Patchwork panel print"
      },
      {
        "label": "Motifs",
        "value": "Pieced geometric blocks"
      }
    ],
    "features": [
      "Pieced-panel patchwork print across the whole surface",
      "Matte cotton finish that reads richly flat",
      "Holds colour through regular washing",
      "Available in two colourways"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "limited"
    ],
    "surface": "chevron",
    "tags": [
      "bedsheets",
      "cotton",
      "patchwork",
      "geometric",
      "printed",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Multicolor geometric patchwork",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-049",
    "slug": "printed-bedsheet-multicolor-floral-3",
    "name": "Multicolor floral 3",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Multicolor floral 3",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-050",
    "slug": "printed-bedsheet-grey-geometric",
    "name": "Grey geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Grey geometric",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-051",
    "slug": "printed-bedsheet-navy-blue-floral",
    "name": "Navy blue floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Navy blue floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-052",
    "slug": "printed-bedsheet-sage-floral",
    "name": "Sage floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Sage floral",
        "slug": "design",
        "hex": "#9aab8e"
      }
    ]
  },
  {
    "id": "AMQ-053",
    "slug": "printed-bedsheet-light-blue-floral",
    "name": "Light blue floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Light blue floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-054",
    "slug": "printed-bedsheet-set-white-with-red-and-grey-geometric",
    "name": "White with red and grey geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with red and grey geometric",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-055",
    "slug": "printed-bedsheet-set-white-with-pink-and-grey-geometric",
    "name": "White with pink and grey geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with pink and grey geometric",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-056",
    "slug": "printed-bedsheet-set-white-with-red-floral",
    "name": "White with red floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with red floral",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-057",
    "slug": "printed-bedsheet-pink-geometric",
    "name": "Pink geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Pink geometric",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-058",
    "slug": "printed-bedsheet-white-with-blue-floral-3",
    "name": "White with blue floral 3",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue floral 3",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-059",
    "slug": "printed-bedsheet-purple-floral",
    "name": "Purple floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Purple floral",
        "slug": "design",
        "hex": "#6b3a8f"
      }
    ]
  },
  {
    "id": "AMQ-060",
    "slug": "printed-bedsheet-grey-floral",
    "name": "Grey floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Grey floral",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-061",
    "slug": "printed-bedsheet-set-white-with-blue-floral",
    "name": "White with blue floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-062",
    "slug": "printed-bedsheet-grey-geometric-circles",
    "name": "Grey geometric circles",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Grey geometric circles",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-063",
    "slug": "printed-bedsheet-grey-geometric-2",
    "name": "Grey geometric 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Grey geometric 2",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-064",
    "slug": "printed-bedsheet-light-blue-geometric",
    "name": "Light blue geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Light blue geometric",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-065",
    "slug": "patchwork-printed-bedsheet-blue-and-white-patchwork",
    "name": "Blue and white patchwork",
    "shortDescription": "Patchwork print cotton — pieced panels in one flat sheet.",
    "description": [
      "A patchwork print rather than a single repeating motif: pieced panels of different blocks laid together across the surface. It gives the bed the look of something assembled over years, in one piece.",
      "Printed on soft cotton with a matte finish. It reads richly flat on the bed and holds its colour through regular washing."
    ],
    "category": "patchwork-printed-bedsheet",
    "collection": "geometric",
    "price": 6999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Patchwork panel print"
      },
      {
        "label": "Motifs",
        "value": "Pieced geometric blocks"
      }
    ],
    "features": [
      "Pieced-panel patchwork print across the whole surface",
      "Matte cotton finish that reads richly flat",
      "Holds colour through regular washing",
      "Available in two colourways"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "limited"
    ],
    "surface": "chevron",
    "tags": [
      "bedsheets",
      "cotton",
      "patchwork",
      "geometric",
      "printed",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Blue and white patchwork",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-066",
    "slug": "printed-bedsheet-grey-geometric-3",
    "name": "Grey geometric 3",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Grey geometric 3",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-067",
    "slug": "printed-bedsheet-brown-geometric",
    "name": "Brown geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Brown geometric",
        "slug": "design",
        "hex": "#6b4a2f"
      }
    ]
  },
  {
    "id": "AMQ-068",
    "slug": "printed-bedsheet-sage-floral-2",
    "name": "Sage floral 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Sage floral 2",
        "slug": "design",
        "hex": "#9aab8e"
      }
    ]
  },
  {
    "id": "AMQ-069",
    "slug": "printed-bedsheet-beige-floral",
    "name": "Beige floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Beige floral",
        "slug": "design",
        "hex": "#e2d3ba"
      }
    ]
  },
  {
    "id": "AMQ-070",
    "slug": "printed-bedsheet-white-with-blue-floral-4",
    "name": "White with blue floral 4",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue floral 4",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-071",
    "slug": "printed-bedsheet-mauve-geometric-circles",
    "name": "Mauve geometric circles",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Mauve geometric circles",
        "slug": "design",
        "hex": "#a78fae"
      }
    ]
  },
  {
    "id": "AMQ-072",
    "slug": "printed-bedsheet-beige-geometric",
    "name": "Beige geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Beige geometric",
        "slug": "design",
        "hex": "#e2d3ba"
      }
    ]
  },
  {
    "id": "AMQ-073",
    "slug": "printed-bedsheet-set-white-with-multicolor-floral",
    "name": "White with multicolor floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with multicolor floral",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-074",
    "slug": "printed-bedsheet-pink-geometric-circles",
    "name": "Pink geometric circles",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Pink geometric circles",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-075",
    "slug": "printed-bedsheet-set-indigo-rust-and-cream-botanical",
    "name": "Indigo rust and cream botanical",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Indigo rust and cream botanical",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-076",
    "slug": "printed-bedsheet-set-dusty-rose-grey-and-cream-geometric",
    "name": "Dusty rose grey and cream geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Dusty rose grey and cream geometric",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-077",
    "slug": "printed-bedsheet-set-coral-teal-and-cream-floral",
    "name": "Coral teal and cream floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Coral teal and cream floral",
        "slug": "design",
        "hex": "#1f7a7a"
      }
    ]
  },
  {
    "id": "AMQ-078",
    "slug": "printed-bedsheet-set-navy-grey-and-cream-geometric",
    "name": "Navy grey and cream geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Navy grey and cream geometric",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-079",
    "slug": "printed-bedsheet-set-sage-cream-and-charcoal-geometric",
    "name": "Sage cream and charcoal geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Sage cream and charcoal geometric",
        "slug": "design",
        "hex": "#9aab8e"
      }
    ]
  },
  {
    "id": "AMQ-080",
    "slug": "printed-bedsheet-set-sage-blue-and-cream-geometric",
    "name": "Sage blue and cream geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Sage blue and cream geometric",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-081",
    "slug": "printed-bedsheet-set-lavender-cream-and-charcoal-diamond",
    "name": "Lavender cream and charcoal diamond",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Lavender cream and charcoal diamond",
        "slug": "design",
        "hex": "#b6a6d6"
      }
    ]
  },
  {
    "id": "AMQ-082",
    "slug": "printed-bedsheet-set-taupe-cream-and-brown-geometric",
    "name": "Taupe cream and brown geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Taupe cream and brown geometric",
        "slug": "design",
        "hex": "#6b4a2f"
      }
    ]
  },
  {
    "id": "AMQ-083",
    "slug": "printed-bedsheet-set-olive-grey-and-cream-check",
    "name": "Olive grey and cream check",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "check",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "check"
    ],
    "colourways": [
      {
        "name": "Olive grey and cream check",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-084",
    "slug": "printed-bedsheet-set-mint-teal-and-cream-floral",
    "name": "Mint teal and cream floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Mint teal and cream floral",
        "slug": "design",
        "hex": "#1f7a7a"
      }
    ]
  },
  {
    "id": "AMQ-085",
    "slug": "printed-bedsheet-set-red-cream-and-blue-patchwork",
    "name": "Red cream and blue patchwork",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Red cream and blue patchwork",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-086",
    "slug": "printed-bedsheet-set-blue-rust-and-cream-striped-geometric",
    "name": "Blue rust and cream striped geometric",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "geometric",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Blue rust and cream striped geometric",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-087",
    "slug": "printed-bedsheet-set-turquoise-cream-and-rust-floral",
    "name": "Turquoise cream and rust floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Turquoise cream and rust floral",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-088",
    "slug": "printed-bedsheet-set-blue-cream-and-red-floral-medallion",
    "name": "Blue cream and red floral medallion",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Blue cream and red floral medallion",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-089",
    "slug": "printed-bedsheet-set-blue-peach-and-cream-floral",
    "name": "Blue peach and cream floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Blue peach and cream floral",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-090",
    "slug": "printed-bedsheet-set-royal-blue-white-and-gold-floral",
    "name": "Royal blue white and gold floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Royal blue white and gold floral",
        "slug": "design",
        "hex": "#c9a227"
      }
    ]
  },
  {
    "id": "AMQ-091",
    "slug": "printed-bedsheet-set-royal-blue-orange-and-cream-floral",
    "name": "Royal blue orange and cream floral",
    "shortDescription": "One bedsheet with two matching pillow covers.",
    "description": [
      "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set.",
      "The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway."
    ],
    "category": "printed-bedsheet-set",
    "collection": "floral",
    "price": 6499,
    "compareAtPrice": 7499,
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Includes",
        "value": "1 bedsheet + 2 pillow covers"
      }
    ],
    "features": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "sale",
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "bedding-set",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Royal blue orange and cream floral",
        "slug": "design",
        "hex": "#f2ead6"
      }
    ]
  },
  {
    "id": "AMQ-092",
    "slug": "block-print-bedsheet-white-with-red-floral-and-geometric-border",
    "name": "White with red floral and geometric border",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with red floral and geometric border",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-093",
    "slug": "block-print-bedsheet-white-with-black-floral",
    "name": "White with black floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with black floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-094",
    "slug": "block-print-bedsheet-white-with-red-and-green-floral",
    "name": "White with red and green floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with red and green floral",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-095",
    "slug": "block-print-bedsheet-white-with-red-floral",
    "name": "White with red floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with red floral",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-096",
    "slug": "block-print-bedsheet-white-with-black-and-red-floral",
    "name": "White with black and red floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with black and red floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-097",
    "slug": "block-print-bedsheet-white-with-black-and-beige-geometric",
    "name": "White with black and beige geometric",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "geometric",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with black and beige geometric",
        "slug": "design",
        "hex": "#1c1c1c"
      }
    ]
  },
  {
    "id": "AMQ-098",
    "slug": "block-print-bedsheet-white-with-navy-and-multicolor-floral",
    "name": "White with navy and multicolor floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with navy and multicolor floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-099",
    "slug": "block-print-bedsheet-blue-green-and-beige-geometric",
    "name": "Blue, green and beige geometric",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "geometric",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Blue, green and beige geometric",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-100",
    "slug": "block-print-bedsheet-white-and-brown-floral",
    "name": "White and brown floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White and brown floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-101",
    "slug": "block-print-bedsheet-white-with-multicolor-floral-and-geometric",
    "name": "White with multicolor floral and geometric",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with multicolor floral and geometric",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-102",
    "slug": "block-print-bedsheet-blue-beige-and-brown-floral",
    "name": "Blue, beige and brown floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "Blue, beige and brown floral",
        "slug": "design",
        "hex": "#6b4a2f"
      }
    ]
  },
  {
    "id": "AMQ-103",
    "slug": "block-print-bedsheet-beige-and-blue-geometric",
    "name": "Beige and blue geometric",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "geometric",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Beige and blue geometric",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-104",
    "slug": "block-print-bedsheet-white-with-multicolor-botanical-and-geometric",
    "name": "White with multicolor botanical and geometric",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "abstract",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "abstract"
    ],
    "colourways": [
      {
        "name": "White with multicolor botanical and geometric",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-105",
    "slug": "block-print-bedsheet-white-with-green-and-blue-floral",
    "name": "White with green and blue floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with green and blue floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-106",
    "slug": "block-print-bedsheet-white-with-navy-and-red-geometric",
    "name": "White with navy and red geometric",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "geometric",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with navy and red geometric",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-107",
    "slug": "block-print-bedsheet-white-with-mustard-blue-and-red-floral",
    "name": "White with mustard, blue and red floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with mustard, blue and red floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-108",
    "slug": "block-print-bedsheet-white-with-orange-and-blue-geometric",
    "name": "White with orange and blue geometric",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "geometric",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with orange and blue geometric",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-109",
    "slug": "block-print-bedsheet-white-with-blue-and-mustard-floral",
    "name": "White with blue and mustard floral",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue and mustard floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-110",
    "slug": "block-print-bedsheet-white-with-blue-and-grey-botanical-blocks",
    "name": "White with blue and grey botanical blocks",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "geometric",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with blue and grey botanical blocks",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-111",
    "slug": "block-print-bedsheet-white-with-blue-and-red-geometric",
    "name": "White with blue and red geometric",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "geometric",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with blue and red geometric",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-112",
    "slug": "block-print-bedsheet-white-with-red-and-green-floral-2",
    "name": "White with red and green floral 2",
    "shortDescription": "Hand block printed cotton, carved motifs on a white ground.",
    "description": [
      "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper.",
      "The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways."
    ],
    "category": "block-print-bedsheet",
    "collection": "floral",
    "price": 7999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Print",
        "value": "Hand block printed"
      },
      {
        "label": "Ground",
        "value": "White"
      },
      {
        "label": "Motifs",
        "value": "Floral and geometric"
      }
    ],
    "features": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "care": [
      "Machine wash at 40°C, separately first time",
      "Line dry in shade",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "new"
    ],
    "surface": "block",
    "tags": [
      "bedsheets",
      "cotton",
      "block-print",
      "handmade",
      "floral",
      "geometric",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with red and green floral 2",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-113",
    "slug": "printed-bedsheet-white-with-navy-and-multicolor-floral",
    "name": "White with navy and multicolor floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with navy and multicolor floral",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-114",
    "slug": "printed-bedsheet-white-with-multicolor-floral",
    "name": "White with multicolor floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with multicolor floral",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-115",
    "slug": "printed-bedsheet-white-with-pink-and-blue-floral",
    "name": "White with pink and blue floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with pink and blue floral",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-116",
    "slug": "printed-bedsheet-white-with-multicolor-floral-border",
    "name": "White with multicolor floral border",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with multicolor floral border",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-117",
    "slug": "printed-bedsheet-white-with-orange-and-teal-floral",
    "name": "White with orange and teal floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with orange and teal floral",
        "slug": "design",
        "hex": "#1f7a7a"
      }
    ]
  },
  {
    "id": "AMQ-118",
    "slug": "printed-bedsheet-white-with-blue-and-green-floral",
    "name": "White with blue and green floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue and green floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-119",
    "slug": "printed-bedsheet-white-with-blue-and-green-floral-2",
    "name": "White with blue and green floral 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue and green floral 2",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-120",
    "slug": "printed-bedsheet-blue-grey-and-beige-geometric",
    "name": "Blue, grey and beige geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Blue, grey and beige geometric",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-121",
    "slug": "printed-bedsheet-brown-blue-and-mauve-geometric",
    "name": "Brown, blue and mauve geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Brown, blue and mauve geometric",
        "slug": "design",
        "hex": "#6b4a2f"
      }
    ]
  },
  {
    "id": "AMQ-122",
    "slug": "printed-bedsheet-blue-pink-and-beige-paisley",
    "name": "Blue, pink and beige paisley",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "paisley",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "paisley"
    ],
    "colourways": [
      {
        "name": "Blue, pink and beige paisley",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-123",
    "slug": "printed-bedsheet-beige-and-pink-floral",
    "name": "Beige and pink floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Beige and pink floral",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-124",
    "slug": "printed-bedsheet-white-with-brown-geometric-border",
    "name": "White with brown geometric border",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with brown geometric border",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-125",
    "slug": "printed-bedsheet-white-with-pink-floral-and-geometric-border",
    "name": "White with pink floral and geometric border",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with pink floral and geometric border",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-126",
    "slug": "printed-bedsheet-white-with-sage-and-grey-floral",
    "name": "White with sage and grey floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with sage and grey floral",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-127",
    "slug": "printed-bedsheet-white-with-blue-floral-5",
    "name": "White with blue floral 5",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue floral 5",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-128",
    "slug": "printed-bedsheet-white-with-grey-geometric",
    "name": "White with grey geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with grey geometric",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-129",
    "slug": "printed-bedsheet-white-with-pink-and-green-floral",
    "name": "White with pink and green floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with pink and green floral",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-130",
    "slug": "printed-bedsheet-white-with-multicolor-floral-2",
    "name": "White with multicolor floral 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with multicolor floral 2",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-131",
    "slug": "printed-bedsheet-white-with-green-floral",
    "name": "White with green floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with green floral",
        "slug": "design",
        "hex": "#3f7d44"
      }
    ]
  },
  {
    "id": "AMQ-132",
    "slug": "printed-bedsheet-white-with-pink-and-green-floral-2",
    "name": "White with pink and green floral 2",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with pink and green floral 2",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-133",
    "slug": "printed-bedsheet-white-with-brown-geometric",
    "name": "White with brown geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "White with brown geometric",
        "slug": "design",
        "hex": "#f7f7f5"
      }
    ]
  },
  {
    "id": "AMQ-134",
    "slug": "printed-bedsheet-white-with-multicolor-floral-3",
    "name": "White with multicolor floral 3",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with multicolor floral 3",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-135",
    "slug": "printed-bedsheet-white-with-blue-and-multicolor-floral",
    "name": "White with blue and multicolor floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue and multicolor floral",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-136",
    "slug": "printed-bedsheet-white-with-blue-and-green-floral-3",
    "name": "White with blue and green floral 3",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue and green floral 3",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-137",
    "slug": "printed-bedsheet-white-with-blue-floral-6",
    "name": "White with blue floral 6",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "White with blue floral 6",
        "slug": "design",
        "hex": "#2f5fa8"
      }
    ]
  },
  {
    "id": "AMQ-138",
    "slug": "printed-bedsheet-pink-blue-and-grey-geometric",
    "name": "Pink, blue and grey geometric",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "geometric",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "geometric"
    ],
    "colourways": [
      {
        "name": "Pink, blue and grey geometric",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-139",
    "slug": "printed-bedsheet-multicolor-paisley-and-floral",
    "name": "Multicolor paisley and floral",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "paisley",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "paisley"
    ],
    "colourways": [
      {
        "name": "Multicolor paisley and floral",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-140",
    "slug": "printed-bedsheet-multicolor-floral-and-geometric-5",
    "name": "Multicolor floral and geometric 5",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Multicolor floral and geometric 5",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-141",
    "slug": "printed-bedsheet-multicolor-floral-and-striped-3",
    "name": "Multicolor floral and striped 3",
    "shortDescription": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": [
      "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick.",
      "Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp."
    ],
    "category": "printed-bedsheet",
    "collection": "floral",
    "price": 4999,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% combed cotton percale"
      },
      {
        "label": "Print",
        "value": "Screen printed"
      },
      {
        "label": "Thread count",
        "value": "200 TC"
      },
      {
        "label": "Weave",
        "value": "Percale"
      }
    ],
    "features": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron on reverse"
    ],
    "badges": [
      "bestseller"
    ],
    "surface": "floral",
    "tags": [
      "bedsheets",
      "cotton",
      "printed",
      "floral",
      "geometric",
      "percale",
      "floral"
    ],
    "colourways": [
      {
        "name": "Multicolor floral and striped 3",
        "slug": "design",
        "hex": "#8a6f9e"
      }
    ]
  },
  {
    "id": "AMQ-142",
    "slug": "striped-bedsheet-red-pink-and-orange-stripes",
    "name": "Red, pink and orange stripes",
    "shortDescription": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": [
      "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.",
      "The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout."
    ],
    "category": "striped-bedsheet",
    "collection": "striped",
    "price": 5499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Stripe",
        "value": "Yarn dyed"
      },
      {
        "label": "Print",
        "value": "Woven in, not printed"
      }
    ],
    "features": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron"
    ],
    "badges": [],
    "surface": "stripe",
    "tags": [
      "bedsheets",
      "cotton",
      "striped",
      "yarn-dyed",
      "striped"
    ],
    "colourways": [
      {
        "name": "Red, pink and orange stripes",
        "slug": "design",
        "hex": "#e3899f"
      }
    ]
  },
  {
    "id": "AMQ-143",
    "slug": "striped-bedsheet-green-black-and-red-stripes",
    "name": "Green, black and red stripes",
    "shortDescription": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": [
      "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.",
      "The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout."
    ],
    "category": "striped-bedsheet",
    "collection": "striped",
    "price": 5499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Stripe",
        "value": "Yarn dyed"
      },
      {
        "label": "Print",
        "value": "Woven in, not printed"
      }
    ],
    "features": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron"
    ],
    "badges": [],
    "surface": "stripe",
    "tags": [
      "bedsheets",
      "cotton",
      "striped",
      "yarn-dyed",
      "striped"
    ],
    "colourways": [
      {
        "name": "Green, black and red stripes",
        "slug": "design",
        "hex": "#b5322c"
      }
    ]
  },
  {
    "id": "AMQ-144",
    "slug": "striped-bedsheet-pink-mauve-and-grey-stripes",
    "name": "Pink, mauve and grey stripes",
    "shortDescription": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": [
      "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.",
      "The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout."
    ],
    "category": "striped-bedsheet",
    "collection": "striped",
    "price": 5499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Stripe",
        "value": "Yarn dyed"
      },
      {
        "label": "Print",
        "value": "Woven in, not printed"
      }
    ],
    "features": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron"
    ],
    "badges": [],
    "surface": "stripe",
    "tags": [
      "bedsheets",
      "cotton",
      "striped",
      "yarn-dyed",
      "striped"
    ],
    "colourways": [
      {
        "name": "Pink, mauve and grey stripes",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-145",
    "slug": "striped-bedsheet-pink-mauve-and-grey-stripes-2",
    "name": "Pink, mauve and grey stripes 2",
    "shortDescription": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": [
      "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.",
      "The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout."
    ],
    "category": "striped-bedsheet",
    "collection": "striped",
    "price": 5499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Stripe",
        "value": "Yarn dyed"
      },
      {
        "label": "Print",
        "value": "Woven in, not printed"
      }
    ],
    "features": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron"
    ],
    "badges": [],
    "surface": "stripe",
    "tags": [
      "bedsheets",
      "cotton",
      "striped",
      "yarn-dyed",
      "striped"
    ],
    "colourways": [
      {
        "name": "Pink, mauve and grey stripes 2",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-146",
    "slug": "striped-bedsheet-peach-yellow-and-lavender-stripes",
    "name": "Peach, yellow and lavender stripes",
    "shortDescription": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": [
      "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.",
      "The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout."
    ],
    "category": "striped-bedsheet",
    "collection": "striped",
    "price": 5499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Stripe",
        "value": "Yarn dyed"
      },
      {
        "label": "Print",
        "value": "Woven in, not printed"
      }
    ],
    "features": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron"
    ],
    "badges": [],
    "surface": "stripe",
    "tags": [
      "bedsheets",
      "cotton",
      "striped",
      "yarn-dyed",
      "striped"
    ],
    "colourways": [
      {
        "name": "Peach, yellow and lavender stripes",
        "slug": "design",
        "hex": "#f2b48c"
      }
    ]
  },
  {
    "id": "AMQ-147",
    "slug": "striped-bedsheet-mint-green-white-and-grey-stripes",
    "name": "Mint green, white and grey stripes",
    "shortDescription": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": [
      "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.",
      "The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout."
    ],
    "category": "striped-bedsheet",
    "collection": "striped",
    "price": 5499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Stripe",
        "value": "Yarn dyed"
      },
      {
        "label": "Print",
        "value": "Woven in, not printed"
      }
    ],
    "features": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron"
    ],
    "badges": [],
    "surface": "stripe",
    "tags": [
      "bedsheets",
      "cotton",
      "striped",
      "yarn-dyed",
      "striped"
    ],
    "colourways": [
      {
        "name": "Mint green, white and grey stripes",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-148",
    "slug": "striped-bedsheet-pink-mauve-and-grey-stripes-3",
    "name": "Pink, mauve and grey stripes 3",
    "shortDescription": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": [
      "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.",
      "The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout."
    ],
    "category": "striped-bedsheet",
    "collection": "striped",
    "price": 5499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Stripe",
        "value": "Yarn dyed"
      },
      {
        "label": "Print",
        "value": "Woven in, not printed"
      }
    ],
    "features": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron"
    ],
    "badges": [],
    "surface": "stripe",
    "tags": [
      "bedsheets",
      "cotton",
      "striped",
      "yarn-dyed",
      "striped"
    ],
    "colourways": [
      {
        "name": "Pink, mauve and grey stripes 3",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  },
  {
    "id": "AMQ-149",
    "slug": "striped-bedsheet-pink-mauve-and-grey-stripes-4",
    "name": "Pink, mauve and grey stripes 4",
    "shortDescription": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": [
      "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does.",
      "The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout."
    ],
    "category": "striped-bedsheet",
    "collection": "striped",
    "price": 5499,
    "compareAtPrice": null,
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "specifications": [
      {
        "label": "Fabric",
        "value": "100% cotton"
      },
      {
        "label": "Stripe",
        "value": "Yarn dyed"
      },
      {
        "label": "Print",
        "value": "Woven in, not printed"
      }
    ],
    "features": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "care": [
      "Machine wash at 40°C with similar colours",
      "Tumble dry low",
      "Do not bleach",
      "Warm iron"
    ],
    "badges": [],
    "surface": "stripe",
    "tags": [
      "bedsheets",
      "cotton",
      "striped",
      "yarn-dyed",
      "striped"
    ],
    "colourways": [
      {
        "name": "Pink, mauve and grey stripes 4",
        "slug": "design",
        "hex": "#9aa0a6"
      }
    ]
  }
];

export const userCategories: UserCatalogueCategory[] = [
  {
    "slug": "printed-bedsheet",
    "name": "Printed Bedsheet",
    "tagline": "Soft printed cotton in a wide range of florals and geometrics.",
    "description": "The everyday sheet, and the one we sell most of. A 100% cotton percale with a tight, even weave — cool and matte against the skin, and it holds that hand after washing rather than going slick. Each design is screen printed in small runs, so the colour depth is richer than mass production and no two pieces are quite identical. Line dry in shade and the print stays crisp.",
    "highlights": [
      "Breathable 200 TC percale that stays cool through a warm night",
      "Screen printed in small runs for deeper colour",
      "Deep hem finished for a flat, tidy drape",
      "Machine washable at 40°C"
    ],
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "order": 1
  },
  {
    "slug": "printed-bedsheet-set",
    "name": "Printed Bedsheet Set",
    "tagline": "One bedsheet with two matching pillow covers.",
    "description": "Everything on the bed in one decision. A printed cotton bedsheet paired with two matching pillow covers, cut from the same bolt so the pattern lines up across the whole set. The percale is tight and even — cool, matte, and it survives repeated laundering without the shine that flattens lower thread counts. This is the set we most often see bought a second time in a different colourway.",
    "highlights": [
      "Bedsheet and two pillow covers cut from one bolt for a matched set",
      "Cool 200 TC percale that softens with every wash",
      "Wide range of printed designs",
      "Complete bed refresh in a single order"
    ],
    "sizes": [
      "King Set — 274 × 274 cm + 2 × 50 × 75 cm",
      "Super King Set — 300 × 300 cm + 2 × 50 × 75 cm"
    ],
    "order": 2
  },
  {
    "slug": "floral-bedsheet",
    "name": "Floral Bedsheet",
    "tagline": "A printed floral on white, shown draped.",
    "description": "A floral print on a white ground, photographed draped so you can judge how it falls across a bed rather than how it looks folded on a table. Printed cotton with a soft matte hand. The white ground keeps the floral legible and the bed looking light in a room.",
    "highlights": [
      "Floral print on a white ground",
      "Photographed draped to show the fall",
      "Soft matte cotton hand",
      "Keeps the bed looking light"
    ],
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "order": 3
  },
  {
    "slug": "jaipur-printed-bedsheet",
    "name": "Jaipur Printed Bedsheet",
    "tagline": "Jaipur-style print, dense multicolor on a warm ground.",
    "description": "A dense Jaipur print — the kind carried out of Rajasthan for centuries, with the small repeating figures and dense multicolor ground that make it unmistakable at a distance. Printed on cotton with enough weight to drape properly on a bed rather than sit on top of it. A distinctive piece for anyone who does not want another plain floral.",
    "highlights": [
      "Dense traditional Jaipur print with small repeating figures",
      "Full multicolor ground — distinctive on a bed",
      "Enough weight to drape rather than sit on top",
      "Printed on soft cotton"
    ],
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "order": 4
  },
  {
    "slug": "patchwork-printed-bedsheet",
    "name": "Patchwork Printed Bedsheet",
    "tagline": "Patchwork print cotton — pieced panels in one flat sheet.",
    "description": "A patchwork print rather than a single repeating motif: pieced panels of different blocks laid together across the surface. It gives the bed the look of something assembled over years, in one piece. Printed on soft cotton with a matte finish. It reads richly flat on the bed and holds its colour through regular washing.",
    "highlights": [
      "Pieced-panel patchwork print across the whole surface",
      "Matte cotton finish that reads richly flat",
      "Holds colour through regular washing",
      "Available in two colourways"
    ],
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "order": 5
  },
  {
    "slug": "block-print-bedsheet",
    "name": "Block Print Bedsheet",
    "tagline": "Hand block printed cotton, carved motifs on a white ground.",
    "description": "Printed by hand with carved wooden blocks, one repeat at a time. The slight registration variation between motifs is not a defect — it is the signature of block printing and the reason the surface reads as cloth rather than paper. The white ground keeps the print the focus, and the cotton is soft enough to sleep against straight from the line. Every design is available across a wide range of colourways.",
    "highlights": [
      "Printed by hand with carved wooden blocks",
      "Natural registration variation unique to each piece",
      "White ground with floral and geometric motifs",
      "Softens with every wash"
    ],
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "order": 6
  },
  {
    "slug": "striped-bedsheet",
    "name": "Striped Bedsheet",
    "tagline": "Yarn dyed striped cotton in clean, balanced colourways.",
    "description": "Yarn dyed rather than printed, so the stripe runs through the cloth instead of sitting on top of it. That means the colour will not crack or fade at the fold lines the way a printed stripe does. The stripes are set at a width that stays calm on a large bed — bold enough to read across the room, quiet enough to sleep under. A good weight and an even hand throughout.",
    "highlights": [
      "Yarn dyed — the colour is in the yarn, not on the surface",
      "Will not crack or fade along fold lines",
      "Balanced stripe width that reads well on a large bed",
      "Even hand and good weight throughout"
    ],
    "sizes": [
      "King — 274 × 274 cm",
      "Super King — 300 × 300 cm"
    ],
    "order": 7
  }
];

export const userCatalogueSlugs = new Set<string>(["'printed-bedsheet-multicolor-floral-and-geometric'","'printed-bedsheet-pink-blue-and-white-geometric'","'printed-bedsheet-blue-pink-and-beige-geometric'","'printed-bedsheet-red-blue-and-beige-geometric'","'printed-bedsheet-blue-teal-and-multicolor-geometric'","'printed-bedsheet-blue-and-multicolor-floral'","'printed-bedsheet-red-and-beige-striped-geometric'","'printed-bedsheet-set-navy-mustard-and-white-botanical'","'printed-bedsheet-set-red-green-and-white-floral'","'printed-bedsheet-set-teal-grey-and-white-arch-geometric'","'printed-bedsheet-set-black-grey-and-white-medallion-geometric'","'printed-bedsheet-set-black-grey-and-white-floral-medallion'","'printed-bedsheet-set-pink-cream-and-gold-floral'","'printed-bedsheet-set-blush-cream-and-taupe-floral-border'","'printed-bedsheet-set-teal-brown-and-cream-botanical'","'printed-bedsheet-set-teal-rust-and-cream-botanical'","'printed-bedsheet-set-olive-cream-and-sage-botanical'","'printed-bedsheet-set-dusty-rose-cream-and-sage-floral'","'printed-bedsheet-set-teal-mustard-and-cream-floral-border'","'printed-bedsheet-set-charcoal-white-and-grey-floral'","'printed-bedsheet-set-red-sage-and-cream-floral'","'printed-bedsheet-beige-grey-and-blue-floral'","'printed-bedsheet-multicolor-floral'","'printed-bedsheet-grey-and-mauve-floral'","'printed-bedsheet-pink-and-multicolor-floral'","'floral-bedsheet-white-with-pink-floral'","'printed-bedsheet-white-with-red-floral'","'printed-bedsheet-multicolor-floral-and-striped'","'jaipur-printed-bedsheet-multicolor-jaipur-print'","'printed-bedsheet-white-with-red-floral-2'","'printed-bedsheet-white-with-blue-and-mustard-floral'","'printed-bedsheet-multicolor-floral-and-geometric-2'","'printed-bedsheet-white-with-blue-floral'","'printed-bedsheet-white-with-blue-floral-2'","'printed-bedsheet-white-with-navy-floral'","'printed-bedsheet-multicolor-floral-and-striped-2'","'printed-bedsheet-set-blue-floral'","'printed-bedsheet-white-with-multicolor-floral-and-striped'","'printed-bedsheet-multicolor-floral-and-geometric-3'","'printed-bedsheet-multicolor-floral-and-geometric-4'","'printed-bedsheet-blue-and-grey-geometric'","'printed-bedsheet-blue-grey-and-multicolor-floral'","'printed-bedsheet-burgundy-floral'","'printed-bedsheet-navy-blue-paisley'","'printed-bedsheet-multicolor-floral-2'","'printed-bedsheet-grey-and-blue-floral'","'printed-bedsheet-grey-with-burgundy-elephant-motifs'","'patchwork-printed-bedsheet-multicolor-geometric-patchwork'","'printed-bedsheet-multicolor-floral-3'","'printed-bedsheet-grey-geometric'","'printed-bedsheet-navy-blue-floral'","'printed-bedsheet-sage-floral'","'printed-bedsheet-light-blue-floral'","'printed-bedsheet-set-white-with-red-and-grey-geometric'","'printed-bedsheet-set-white-with-pink-and-grey-geometric'","'printed-bedsheet-set-white-with-red-floral'","'printed-bedsheet-pink-geometric'","'printed-bedsheet-white-with-blue-floral-3'","'printed-bedsheet-purple-floral'","'printed-bedsheet-grey-floral'","'printed-bedsheet-set-white-with-blue-floral'","'printed-bedsheet-grey-geometric-circles'","'printed-bedsheet-grey-geometric-2'","'printed-bedsheet-light-blue-geometric'","'patchwork-printed-bedsheet-blue-and-white-patchwork'","'printed-bedsheet-grey-geometric-3'","'printed-bedsheet-brown-geometric'","'printed-bedsheet-sage-floral-2'","'printed-bedsheet-beige-floral'","'printed-bedsheet-white-with-blue-floral-4'","'printed-bedsheet-mauve-geometric-circles'","'printed-bedsheet-beige-geometric'","'printed-bedsheet-set-white-with-multicolor-floral'","'printed-bedsheet-pink-geometric-circles'","'printed-bedsheet-set-indigo-rust-and-cream-botanical'","'printed-bedsheet-set-dusty-rose-grey-and-cream-geometric'","'printed-bedsheet-set-coral-teal-and-cream-floral'","'printed-bedsheet-set-navy-grey-and-cream-geometric'","'printed-bedsheet-set-sage-cream-and-charcoal-geometric'","'printed-bedsheet-set-sage-blue-and-cream-geometric'","'printed-bedsheet-set-lavender-cream-and-charcoal-diamond'","'printed-bedsheet-set-taupe-cream-and-brown-geometric'","'printed-bedsheet-set-olive-grey-and-cream-check'","'printed-bedsheet-set-mint-teal-and-cream-floral'","'printed-bedsheet-set-red-cream-and-blue-patchwork'","'printed-bedsheet-set-blue-rust-and-cream-striped-geometric'","'printed-bedsheet-set-turquoise-cream-and-rust-floral'","'printed-bedsheet-set-blue-cream-and-red-floral-medallion'","'printed-bedsheet-set-blue-peach-and-cream-floral'","'printed-bedsheet-set-royal-blue-white-and-gold-floral'","'printed-bedsheet-set-royal-blue-orange-and-cream-floral'","'block-print-bedsheet-white-with-red-floral-and-geometric-border'","'block-print-bedsheet-white-with-black-floral'","'block-print-bedsheet-white-with-red-and-green-floral'","'block-print-bedsheet-white-with-red-floral'","'block-print-bedsheet-white-with-black-and-red-floral'","'block-print-bedsheet-white-with-black-and-beige-geometric'","'block-print-bedsheet-white-with-navy-and-multicolor-floral'","'block-print-bedsheet-blue-green-and-beige-geometric'","'block-print-bedsheet-white-and-brown-floral'","'block-print-bedsheet-white-with-multicolor-floral-and-geometric'","'block-print-bedsheet-blue-beige-and-brown-floral'","'block-print-bedsheet-beige-and-blue-geometric'","'block-print-bedsheet-white-with-multicolor-botanical-and-geometric'","'block-print-bedsheet-white-with-green-and-blue-floral'","'block-print-bedsheet-white-with-navy-and-red-geometric'","'block-print-bedsheet-white-with-mustard-blue-and-red-floral'","'block-print-bedsheet-white-with-orange-and-blue-geometric'","'block-print-bedsheet-white-with-blue-and-mustard-floral'","'block-print-bedsheet-white-with-blue-and-grey-botanical-blocks'","'block-print-bedsheet-white-with-blue-and-red-geometric'","'block-print-bedsheet-white-with-red-and-green-floral-2'","'printed-bedsheet-white-with-navy-and-multicolor-floral'","'printed-bedsheet-white-with-multicolor-floral'","'printed-bedsheet-white-with-pink-and-blue-floral'","'printed-bedsheet-white-with-multicolor-floral-border'","'printed-bedsheet-white-with-orange-and-teal-floral'","'printed-bedsheet-white-with-blue-and-green-floral'","'printed-bedsheet-white-with-blue-and-green-floral-2'","'printed-bedsheet-blue-grey-and-beige-geometric'","'printed-bedsheet-brown-blue-and-mauve-geometric'","'printed-bedsheet-blue-pink-and-beige-paisley'","'printed-bedsheet-beige-and-pink-floral'","'printed-bedsheet-white-with-brown-geometric-border'","'printed-bedsheet-white-with-pink-floral-and-geometric-border'","'printed-bedsheet-white-with-sage-and-grey-floral'","'printed-bedsheet-white-with-blue-floral-5'","'printed-bedsheet-white-with-grey-geometric'","'printed-bedsheet-white-with-pink-and-green-floral'","'printed-bedsheet-white-with-multicolor-floral-2'","'printed-bedsheet-white-with-green-floral'","'printed-bedsheet-white-with-pink-and-green-floral-2'","'printed-bedsheet-white-with-brown-geometric'","'printed-bedsheet-white-with-multicolor-floral-3'","'printed-bedsheet-white-with-blue-and-multicolor-floral'","'printed-bedsheet-white-with-blue-and-green-floral-3'","'printed-bedsheet-white-with-blue-floral-6'","'printed-bedsheet-pink-blue-and-grey-geometric'","'printed-bedsheet-multicolor-paisley-and-floral'","'printed-bedsheet-multicolor-floral-and-geometric-5'","'printed-bedsheet-multicolor-floral-and-striped-3'","'striped-bedsheet-red-pink-and-orange-stripes'","'striped-bedsheet-green-black-and-red-stripes'","'striped-bedsheet-pink-mauve-and-grey-stripes'","'striped-bedsheet-pink-mauve-and-grey-stripes-2'","'striped-bedsheet-peach-yellow-and-lavender-stripes'","'striped-bedsheet-mint-green-white-and-grey-stripes'","'striped-bedsheet-pink-mauve-and-grey-stripes-3'","'striped-bedsheet-pink-mauve-and-grey-stripes-4'"]);
