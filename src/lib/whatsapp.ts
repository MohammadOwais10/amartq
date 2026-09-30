/**
 * WhatsApp order plumbing.
 *
 * AMARTQ has no payment gateway: a customer builds a cart, fills in delivery
 * details, and we hand a structured order to the sales WhatsApp number. The
 * message is deliberately formatted so a human can read it and key it into
 * the fulfilment system in under a minute.
 */

import { contact, store } from './store';
import { lineKey, money, type CartLine, type CustomerDetails, type ShippingOption } from './types';

const DASH = '────────────────────';

function orderReference(date = new Date()): string {
  const stamp = date.toISOString().slice(2, 10).replace(/-/g, '');
  const suffix = String(Math.floor(Math.random() * 900) + 100);
  return `AMQ-${stamp}-${suffix}`;
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type OrderTotals = {
  subtotal: number;
  shipping: number;
  total: number;
  savings: number;
};

/* ------------------------------------------------------------------ *
 * Message builders
 * ------------------------------------------------------------------ */

export function buildOrderMessage(
  lines: CartLine[],
  customer: CustomerDetails,
  option: ShippingOption,
  totals: OrderTotals,
): string {
  const ref = orderReference();
  const out: string[] = [];

  out.push(`*NEW ORDER — ${store.name}*`);
  out.push(`Ref: ${ref}`);
  out.push('');
  out.push('*ITEMS*');
  out.push(DASH);
  lines.forEach((line, i) => {
    out.push(
      `${i + 1}. ${line.name} — ${line.colourway} / ${line.size}`,
    );
    out.push(`   ${line.quantity} × ${money(line.price)} = ${money(line.price * line.quantity)}`);
  });
  out.push(DASH);
  out.push(`Subtotal: ${money(totals.subtotal)}`);
  out.push(
    totals.shipping === 0
      ? 'Shipping: FREE'
      : `Shipping (${option.label}): ${money(totals.shipping)}`,
  );
  out.push(`*TOTAL: ${money(totals.total)}*`);
  out.push('');
  out.push('*DELIVER TO*');
  out.push(DASH);
  out.push(`Name: ${customer.name}`);
  out.push(`Phone: ${customer.phone}`);
  out.push(`Address: ${customer.address}`);
  out.push(`City: ${customer.city}`);
  out.push(`Delivery: ${option.label} (${option.detail})`);

  if (customer.notes.trim()) {
    out.push('');
    out.push('*NOTES*');
    out.push(customer.notes.trim());
  }

  out.push('');
  out.push(`Placed from ${store.url}`);
  out.push(`GSTIN: ${contact.gstin}`);
  out.push('_Please confirm availability and the delivery window._');

  return out.join('\n');
}

export function buildProductEnquiry(args: {
  name: string;
  slug: string;
  colourway: string;
  size: string;
  quantity: number;
  price: number;
}): string {
  const { name, slug, colourway, size, quantity, price } = args;
  return [
    `Hello ${store.name}! I'd like to order:`,
    '',
    `*${name}*`,
    `Colour: ${colourway}`,
    `Size: ${size}`,
    `Quantity: ${quantity}`,
    `Price: ${money(price)}`,
    '',
    `Product link: ${store.url}/product/${slug}`,
    '',
    'Please confirm availability and delivery time. Thank you.',
  ].join('\n');
}

/** Share text for product pages. */
export function shareUrl(path: string): string {
  return `${store.url}${path}`;
}

export { orderReference, lineKey };
