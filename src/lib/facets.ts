import { products, priceRange } from './catalog';
import { store } from './store';
import type { Product } from './types';

export type SortKey =
  | 'featured'
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'rating'
  | 'name-asc';

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest arrivals' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'name-asc', label: 'Alphabetical' },
];

export type ShopFilters = {
  category: string[];
  size: string[];
  colour: string[];
  material: string[];
  badge: string[];
  minPrice: number | null;
  maxPrice: number | null;
  inStock: boolean;
  query: string;
  sort: SortKey;
};

export const emptyFilters: ShopFilters = {
  category: [],
  size: [],
  colour: [],
  material: [],
  badge: [],
  minPrice: null,
  maxPrice: null,
  inStock: false,
  query: '',
  sort: 'featured',
};

/**
 * Price bands offered in the filter rail, in INR.
 *
 * Deliberately not derived from `store.currency` — the boundaries are a
 * merchandising decision about where the range breaks, and they only line up
 * with catalogue prices because both are authored in rupees.
 */
export const priceBands = [
  { label: 'Under 3,000', min: 0, max: 3000 },
  { label: '3,000 – 5,000', min: 3000, max: 5000 },
  { label: '5,000 – 7,000', min: 5000, max: 7000 },
  { label: '7,000 – 10,000', min: 7000, max: 10000 },
  { label: '10,000 and above', min: 10000, max: null },
].map((b) => ({ ...b, min: b.min, max: b.max as number | null }));

export function priceBandLabel(min: number | null, max: number | null): string {
  if (min === null && max === null) return 'Any price';
  const fmt = (n: number) => n.toLocaleString(store.locale);
  if (min !== null && max !== null) return `${store.currencySymbol} ${fmt(min)} – ${fmt(max)}`;
  if (min !== null) return `${store.currencySymbol} ${fmt(min)} and above`;
  return `Under ${store.currencySymbol} ${fmt(max ?? 0)}`;
}

/* ------------------------------------------------------------------ *
 * Facets
 * ------------------------------------------------------------------ */

function count<T extends string>(values: T[]): { value: T; count: number }[] {
  const map = new Map<T, number>();
  values.forEach((v) => map.set(v, (map.get(v) ?? 0) + 1));
  return [...map.entries()]
    .map(([value, n]) => ({ value, count: n }))
    .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
}

const materialLabels: Record<string, string> = {
  '300 Thread Count': 'Cotton · 300 TC',
  Sateen: 'Cotton · Sateen',
  'Washed Linen': 'Linen',
  'Brushed Flannel': 'Cotton · Flannel',
  'Quilt Sets': 'Wool · Quilt',
  Comforters: 'Microfibre',
  Protection: 'Protective',
  Pillows: 'Microfibre · Pillow',
  Velvet: 'Velvet',
  Bouclé: 'Bouclé',
  Embroidered: 'Embroidered Linen',
  Knit: 'Knit',
  Blackout: 'Blackout',
  Linen: 'Linen',
  Sheer: 'Voile',
  Macramé: 'Macramé',
  Wool: 'Merino Wool',
  Quilts: 'Quilted Cotton',
  Cashmere: 'Cashmere & Silk',
  Terry: 'Cotton Terry',
  Waffle: 'Waffle Weave',
  Mats: 'Terry Mat',
};

export type Facets = {
  categories: { value: string; count: number }[];
  sizes: { value: string; count: number }[];
  colours: { value: string; count: number; hex: string }[];
  materials: { value: string; label: string; count: number }[];
  badges: { value: string; label: string; count: number }[];
  price: { min: number; max: number };
};

let facetCache: Facets | null = null;

export function getFacets(): Facets {
  if (facetCache) return facetCache;

  const colours = new Map<string, { count: number; hex: string }>();
  products.forEach((p) =>
    p.colourways.forEach((c) => {
      const entry = colours.get(c.name) ?? { count: 0, hex: c.hex };
      entry.count += 1;
      colours.set(c.name, entry);
    }),
  );

  facetCache = {
    categories: count(products.map((p) => p.category)).sort(
      (a, b) =>
        products.findIndex((p) => p.category === a.value) -
        products.findIndex((p) => p.category === b.value),
    ),
    sizes: count(products.flatMap((p) => p.sizes)),
    colours: [...colours.entries()]
      .map(([value, v]) => ({ value, count: v.count, hex: v.hex }))
      .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value)),
    materials: count(products.map((p) => p.collection))
      .map(({ value, count: n }) => ({ value, label: materialLabels[value] ?? value, count: n }))
      .sort((a, b) => a.label.localeCompare(b.label)),
    badges: count(products.flatMap((p) => p.badges)).map(({ value, count: n }) => ({
      value,
      label:
        value === 'new' ? 'New in' : value === 'sale' ? 'On sale' : value === 'limited' ? 'Limited run' : 'Bestseller',
      count: n,
    })),
    price: { min: priceRange.min, max: priceRange.max },
  };
  return facetCache;
}

/* ------------------------------------------------------------------ *
 * Filtering + sorting
 * ------------------------------------------------------------------ */

const featuredRank = (p: Product) => {
  const badges = p.badges;
  if (badges.includes('bestseller')) return 0;
  if (badges.includes('new')) return 1;
  if (badges.includes('sale')) return 2;
  if (badges.includes('limited')) return 3;
  return 4;
};

export function applyFilters(items: Product[], f: ShopFilters): Product[] {
  const q = f.query.trim().toLowerCase();

  const filtered = items.filter((p) => {
    if (f.category.length && !f.category.includes(p.category)) return false;
    if (f.badge.length && !p.badges.some((b) => f.badge.includes(b))) return false;
    if (f.material.length && !f.material.includes(p.collection)) return false;
    if (f.size.length && !p.sizes.some((s) => f.size.includes(s))) return false;
    if (
      f.colour.length &&
      !p.colourways.some((c) => f.colour.includes(c.name) && !c.outOfStock)
    ) {
      return false;
    }
    if (f.inStock && p.stock <= 0) return false;
    if (f.minPrice !== null && p.price < f.minPrice) return false;
    if (f.maxPrice !== null && p.price > f.maxPrice) return false;

    if (q) {
      const haystack = [p.name, p.collection, p.shortDescription, p.category, ...p.tags]
        .join(' ')
        .toLowerCase();
      if (!q.split(/\s+/).every((token) => haystack.includes(token))) return false;
    }
    return true;
  });

  const sorted = [...filtered];
  switch (f.sort) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'newest':
      sorted.sort(
        (a, b) =>
          Number(b.badges.includes('new')) - Number(a.badges.includes('new')) ||
          featuredRank(a) - featuredRank(b),
      );
      break;
    default:
      sorted.sort(
        (a, b) => featuredRank(a) - featuredRank(b) || b.reviewCount - a.reviewCount,
      );
  }
  return sorted;
}

export function countActiveFilters(f: ShopFilters): number {
  return (
    f.category.length +
    f.size.length +
    f.colour.length +
    f.material.length +
    f.badge.length +
    (f.minPrice !== null || f.maxPrice !== null ? 1 : 0) +
    (f.inStock ? 1 : 0) +
    (f.query.trim() ? 1 : 0)
  );
}

/* ------------------------------------------------------------------ *
 * URL <-> state
 * ------------------------------------------------------------------ */

export function parseSearchParams(
  params: Record<string, string | string[] | undefined>,
): ShopFilters {
  const list = (v: string | string[] | undefined): string[] => {
    if (!v) return [];
    const raw = Array.isArray(v) ? v.join(',') : v;
    return raw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  };
  const num = (v: string | string[] | undefined): number | null => {
    const raw = Array.isArray(v) ? v[0] : v;
    if (raw === undefined || raw === '') return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  };
  const sort = (Array.isArray(params.sort) ? params.sort[0] : params.sort) as SortKey | undefined;

  return {
    category: list(params.category),
    size: list(params.size),
    colour: list(params.colour),
    material: list(params.material),
    badge: list(params.badge),
    minPrice: num(params.min),
    maxPrice: num(params.max),
    inStock: params.stock === '1' || params.stock === 'true',
    query: (Array.isArray(params.q) ? params.q[0] : params.q) ?? '',
    sort: sort && sortOptions.some((s) => s.value === sort) ? sort : 'featured',
  };
}

export function toSearchParams(f: ShopFilters): URLSearchParams {
  const p = new URLSearchParams();
  if (f.category.length) p.set('category', f.category.join(','));
  if (f.size.length) p.set('size', f.size.join(','));
  if (f.colour.length) p.set('colour', f.colour.join(','));
  if (f.material.length) p.set('material', f.material.join(','));
  if (f.badge.length) p.set('badge', f.badge.join(','));
  if (f.minPrice !== null) p.set('min', String(f.minPrice));
  if (f.maxPrice !== null) p.set('max', String(f.maxPrice));
  if (f.inStock) p.set('stock', '1');
  if (f.query.trim()) p.set('q', f.query.trim());
  if (f.sort !== 'featured') p.set('sort', f.sort);
  return p;
}
