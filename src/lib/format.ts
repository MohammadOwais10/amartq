import { money } from '@/lib/types';

export function formatDistanceToFreeShipping(amount: number): string {
  if (amount <= 0) return 'You have unlocked free delivery';
  return `Add ${money(amount)} more for free delivery`;
}

export function formatStock(quantity: number): string {
  if (quantity <= 0) return 'Out of stock';
  if (quantity <= 5) return `Only ${quantity} left`;
  if (quantity <= 12) return `Low stock — ${quantity} remaining`;
  return 'In stock, ready to ship';
}

