import type { Metadata } from 'next';
import { WishlistPage } from '@/components/cart/wishlist-page';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'The AMARTQ pieces you have saved for later.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/wishlist' },
};

export default function WishlistRoute() {
  return <WishlistPage />;
}
