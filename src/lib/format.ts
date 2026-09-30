import { store } from '@/lib/store';

export function formatMoney(value: number): string {
  return `${store.currencySymbol} ${Math.round(value).toLocaleString(store.locale)}`;
}

export function formatDistanceToFreeShipping(amount: number): string {
  if (amount <= 0) return 'You have unlocked free delivery';
  return `Add ${formatMoney(amount)} more for free delivery`;
}

export function formatStock(quantity: number): string {
  if (quantity <= 0) return 'Out of stock';
  if (quantity <= 5) return `Only ${quantity} left`;
  if (quantity <= 12) return `Low stock — ${quantity} remaining`;
  return 'In stock, ready to ship';
}

