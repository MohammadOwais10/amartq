'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/catalog';
import { store } from '@/lib/store';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'bestsellers', label: 'Bestsellers', match: (b: (typeof products)[number][]) => b.filter((p) => p.badges.includes('bestseller')) },
  { id: 'new', label: 'New In', match: (b: (typeof products)[number][]) => b.filter((p) => p.badges.includes('new')) },
  { id: 'sale', label: 'On Sale', match: (b: (typeof products)[number][]) => b.filter((p) => p.compareAtPrice) },
  { id: 'value', label: 'Under ' + store.currencySymbol + ' 6,000', match: (b: (typeof products)[number][]) => b.filter((p) => p.price <= 6000) },
] as const;

export function FeaturedProducts() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('bestsellers');
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];
  const list = tab.match(products).slice(0, 8);

  return (
    <section className="border-y border-sand-200 bg-white py-20 lg:py-28">
      <div className="container-page">
        <header className="mb-10" data-reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow mb-3 text-accent-600">The edit</p>
              <h2 className="text-section text-brand-900">Pieces our customers keep coming back for</h2>
            </div>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-brand-900 uppercase transition-colors hover:text-accent-600"
            >
              Shop all
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Product collections"
            className="mt-8 flex flex-wrap gap-x-1 gap-y-2 border-b border-sand-200"
          >
            {tabs.map((t) => {
              const count = t.match(products).length;
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setActive(t.id)}
                  className={cn(
                    'relative px-4 py-3 text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors',
                    isActive ? 'text-brand-900' : 'text-sand-500 hover:text-brand-700',
                  )}
                >
                  {t.label}
                  <span className="ml-1.5 text-[10px] text-sand-400 tabular-nums">{count}</span>
                  {isActive && (
                    <span
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-accent-500"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </header>

        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14"
        >
          {list.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
