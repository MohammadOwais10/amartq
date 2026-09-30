import { store, fulfilment } from './store';

export type SurfaceTreatment =
  | 'solid'
  | 'stripe'
  | 'pinstripe'
  | 'check'
  | 'dot'
  | 'chevron'
  | 'weave'
  | 'herringbone'
  | 'block'
  | 'leaf'
  | 'floral'
  | 'damask'
  | 'terrazzo'
  | 'wave'
  | 'boucle'
  | 'terry';

export type ProductBadge = 'new' | 'bestseller' | 'sale' | 'limited';

export type Category = {
  slug: string;
  name: string;
  /** Short line used in menus and cards. */
  tagline: string;
  /** Long-form copy for the category landing page. */
  description: string;
  highlights: string[];
  sizes: string[];
  order: number;
};

export type Colourway = {
  name: string;
  hex: string;
  images: Record<'drape' | 'detail' | 'flat', string>;
  /** Optional stock override per colourway. */
  outOfStock?: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  /** One-line, used on cards. */
  shortDescription: string;
  /** Paragraphs for the product page. */
  description: string[];
  category: string;
  /** Secondary grouping, e.g. "300 thread count" or "Velvet". */
  collection: string;
  price: number;
  compareAtPrice?: number;
  colourways: Colourway[];
  sizes: string[];
  /** Free-text spec table rows. */
  specifications: { label: string; value: string }[];
  features: string[];
  care: string[];
  badges: ProductBadge[];
  rating: number;
  reviewCount: number;
  stock: number;
  sku: string;
  tags: string[];
  surface: SurfaceTreatment;
};

export type CartLine = {
  /** `${productId}:${colourwayIndex}:${size}` — stable cart identity. */
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  colourway: string;
  colourwayIndex: number;
  size: string;
  price: number;
  quantity: number;
  maxQuantity: number;
};

export type CustomerDetails = {
  name: string;
  phone: string;
  address: string;
  city: string;
  notes: string;
  delivery: 'standard' | 'express';
};

export type ShippingOption = {
  id: CustomerDetails['delivery'];
  label: string;
  detail: string;
  price: number;
};

export const shippingOptions: ShippingOption[] = [
  {
    id: 'standard',
    label: 'Standard delivery',
    detail: `${fulfilment.deliveryDays.min}–${fulfilment.deliveryDays.max} working days`,
    price: fulfilment.standardShipping,
  },
  {
    id: 'express',
    label: 'Express delivery',
    detail: '1–2 working days, order before 2pm',
    price: fulfilment.standardShipping + fulfilment.expressSurcharge,
  },
];

export function money(value: number): string {
  return `${store.currencySymbol} ${Math.round(value).toLocaleString(store.locale)}`;
}

export function discountPercent(price: number, compareAtPrice?: number): number | null {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

export function lineKey(productId: string, colourwayIndex: number, size: string): string {
  return `${productId}:${colourwayIndex}:${size}`;
}
