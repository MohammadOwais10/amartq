import type { Metadata } from 'next';
import { CheckoutFlow } from '@/components/cart/checkout-flow';

export const metadata: Metadata = {
  title: 'Checkout',
  description:
    'Complete your AMARTQ order. No account or card needed — confirm your order and arrange payment securely on WhatsApp.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/checkout' },
};

export default function CheckoutRoute() {
  return <CheckoutFlow />;
}
