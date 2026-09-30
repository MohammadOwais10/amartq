/**
 * AMARTQ store configuration.
 *
 * Single source of truth for commerce constants, contact details and
 * fulfilment rules. Swap the values here and the whole storefront follows.
 *
 * This is an Indian storefront: prices in INR, UPI and cash on delivery as the
 * default rails, and a Jaipur studio. Number and date formatting goes through
 * `store.locale` — never hardcode a locale, or prices will render with the
 * wrong digit grouping.
 */

export const store = {
  name: 'AMARTQ',
  legalName: 'AMARTQ',
  tagline: 'Considered textiles for considered homes.',
  description:
    'Premium bed sheets, bedding, cushions, curtains and home textiles, made in India from long-staple cotton, hand block prints, Ajrakh, wool and tussar silk.',
  url: 'https://amartquality.com',
  locale: 'en-IN',
  currency: 'INR',
  currencySymbol: '₹',
  /** Dial code without the +, used to normalise phone input at checkout. */
  dialCode: '91',
  foundedYear: 2016,
} as const;

export const contact = {
  whatsapp: '919829012345',
  phoneDisplay: '+91 98290 12345',
  email: 'hello@amartq.com',
  supportEmail: 'care@amartq.com',
  address: {
    line1: 'Studio 10, Bagru',
    line2: 'Block Print Quarter',
    city: 'Jaipur',
    country: 'India',
    postalCode: '302001',
  },
  hours: [
    { days: 'Monday – Saturday', time: '10:00 – 20:00' },
    { days: 'Sunday', time: 'Closed (WhatsApp orders still open)' },
  ],
} as const;

export const fulfilment = {
  /** Orders at or above this subtotal ship free. */
  freeShippingThreshold: 2999,
  standardShipping: 99,
  /** Estimated working days. */
  deliveryDays: { min: 2, max: 4 },
  /** Working days for an exchange or return request. */
  returnWindowDays: 7,
  /** Flat express surcharge on top of standard shipping. */
  expressSurcharge: 249,
} as const;

/**
 * Accepted tender types, in the order they should be shown.
 *
 * `icon` maps to a lucide-react export in the payment-methods component. These
 * are generic glyphs, not brand marks — Visa, Mastercard, UPI and the wallets
 * are all trademarks with their own usage guidelines, so nothing licensed is
 * needed to ship this.
 */
export const paymentMethods = [
  { id: 'cod', label: 'Cash on Delivery', icon: 'Banknote' },
  { id: 'upi', label: 'UPI', icon: 'Smartphone' },
  { id: 'bank', label: 'Bank Transfer', icon: 'Landmark' },
] as const;

export const social = [
  { label: 'Instagram', href: 'https://instagram.com/amartq' },
  { label: 'Facebook', href: 'https://facebook.com/amartq' },
  { label: 'Pinterest', href: 'https://pinterest.com/amartq' },
  { label: 'TikTok', href: 'https://tiktok.com/@amartq' },
] as const;

export const nav = {
  categories: ['bedsheets', 'bedding', 'cushions', 'curtains', 'throws', 'towels'],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Materials', href: '/materials' },
    { label: 'Bespoke & Bulk', href: '/bespoke' },
    { label: 'Know More', href: '/contact' },
  ],
  help: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Track Your Order', href: '/track-order' },
    { label: 'Shipping & Delivery', href: '/policies/shipping' },
    { label: 'Returns & Exchange', href: '/policies/returns' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'FAQs', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/policies/privacy' },
    { label: 'Terms of Service', href: '/policies/terms' },
    { label: 'Cookie Notice', href: '/policies/cookies' },
  ],
} as const;
