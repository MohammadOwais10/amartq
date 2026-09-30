import { Suspense } from 'react';
import type { Metadata } from 'next';
import { ShopView } from '@/components/shop/shop-view';
import { store } from '@/lib/store';

export const metadata: Metadata = {
  title: 'Shop All',
  description:
    'Browse the full AMARTQ collection: bed sheets, bedding sets, cushion covers, curtains and drapes, throws, blankets and bath towels in long-staple cotton, European linen and merino wool.',
  alternates: { canonical: '/shop' },
  openGraph: {
    title: `Shop All — ${store.name}`,
    description:
      'Bed sheets, bedding, cushions, curtains and home textiles in long-staple cotton, European linen and merino wool.',
    url: `${store.url}/shop`,
  },
};

function ShopFallback() {
  return (
    <div className="container-page py-10 lg:py-14">
      <div className="skeleton mb-3 h-3 w-16" />
      <div className="skeleton mb-8 h-12 w-72" />
      <div className="grid gap-10 lg:grid-cols-[16rem_1fr]">
        <div className="hidden space-y-4 lg:block">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="skeleton h-10" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="space-y-3">
              <div className="skeleton aspect-4/5" />
              <div className="skeleton h-3.5 w-3/4" />
              <div className="skeleton h-3 w-1/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopFallback />}>
      <ShopView />
    </Suspense>
  );
}
