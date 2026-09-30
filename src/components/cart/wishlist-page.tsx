'use client';

import Link from 'next/link';
import { Heart, Trash2 } from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/catalog';

export function WishlistPage() {
  const { wishlist, hydrated, toggleWishlist, clearWishlist } = useCart();
  const saved = products.filter((p) => wishlist.includes(p.slug));

  if (!hydrated) {
    return (
      <div className="container-page py-16">
        <div className="skeleton mb-10 h-12 w-64" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="skeleton aspect-4/5" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-10 lg:py-14">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3 text-accent-600">Saved</p>
          <h1 className="text-display text-brand-900">
            {saved.length === 0
              ? 'Your wishlist'
              : `${saved.length} saved ${saved.length === 1 ? 'piece' : 'pieces'}`}
          </h1>
        </div>
        {saved.length > 0 && (
          <button
            type="button"
            onClick={clearWishlist}
            className="text-xs text-ink-soft underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
          >
            Clear wishlist
          </button>
        )}
      </div>

      {saved.length === 0 ? (
        <div className="mx-auto max-w-md border border-dashed border-sand-300 py-20 text-center">
          <span className="mb-6 inline-grid size-16 place-items-center rounded-full bg-sand-200">
            <Heart size={24} className="text-sand-500" aria-hidden="true" />
          </span>
          <h2 className="font-display text-2xl text-brand-900">Nothing saved yet</h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Tap the heart on any product to keep it here. Your wishlist stays on this device —
            no account, nothing sent to us.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/shop" className="btn btn-primary">
              Browse the collection
            </Link>
            <Link href="/collections/bestsellers" className="btn btn-outline">
              See bestsellers
            </Link>
          </div>
        </div>
      ) : (
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {saved.map((p) => (
            <li key={p.slug} className="group/wish relative">
              <ProductCard product={p} />
              <button
                type="button"
                onClick={() => toggleWishlist(p.slug)}
                aria-label={`Remove ${p.name} from wishlist`}
                className="absolute top-3 right-3 z-10 grid size-9 place-items-center bg-white/90 text-brand-900 opacity-0 transition-opacity group-hover/wish:opacity-100 focus-visible:opacity-100"
              >
                <Trash2 size={15} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
