import type { Metadata } from 'next';
import { CartPage } from '@/components/cart/cart-page';

export const metadata: Metadata = {
  title: 'Your Bag',
  description: 'Review the items in your AMARTQ bag before checking out on WhatsApp.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/cart' },
};

export default function CartRoute() {
  return <CartPage />;
}
