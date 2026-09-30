'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Minus, Plus, ShoppingBag, Trash2, Truck, X } from 'lucide-react';
import { useCart } from './cart-provider';
import { fulfilment, store } from '@/lib/store';
import { money } from '@/lib/types';
import { formatDistanceToFreeShipping } from '@/lib/format';

export function CartDrawer() {
  const { lines, isOpen, closeCart, subtotal, itemCount, setQuantity, remove, qualifiesForFreeShipping, amountToFreeShipping, hydrated } =
    useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
      if (e.key !== 'Tab') return;
      // Trap focus inside the drawer.
      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const progress = Math.min(
    100,
    (subtotal / fulfilment.freeShippingThreshold) * 100,
  );

  return (
    <div className="fixed inset-0 z-[95]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-brand-950/45 backdrop-blur-sm animate-fade-in"
      />

      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-sand-50 shadow-panel animate-fade-in"
      >
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-sand-200 px-5">
          <h2 className="font-display text-lg text-brand-900">
            Your Bag
            {itemCount > 0 && (
              <span className="ml-2 text-sm text-ink-soft tabular-nums">({itemCount})</span>
            )}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="-mr-2 grid size-10 place-items-center text-brand-900 transition-colors hover:text-accent-600"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        {!hydrated ? (
          <div className="flex-1 space-y-4 p-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="skeleton size-24 shrink-0" />
                <div className="flex-1 space-y-2 py-1">
                  <div className="skeleton h-3.5 w-3/4" />
                  <div className="skeleton h-3 w-1/2" />
                  <div className="skeleton h-7 w-28" />
                </div>
              </div>
            ))}
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="mb-5 grid size-16 place-items-center rounded-full bg-sand-200">
              <ShoppingBag size={24} className="text-sand-500" aria-hidden="true" />
            </span>
            <p className="font-display text-xl text-brand-900">Your bag is empty</p>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">
              Start with the pieces our customers come back for — 300-thread bed sheets and
              washed linen.
            </p>
            <Link href="/shop" onClick={closeCart} className="btn btn-primary mt-6">
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Free-shipping progress ------------------------------------- */}
            <div className="shrink-0 border-b border-sand-200 bg-white px-5 py-3.5">
              <p className="flex items-center gap-2 text-xs text-ink-soft">
                <Truck size={14} className="shrink-0 text-accent-500" aria-hidden="true" />
                {qualifiesForFreeShipping ? (
                  <span className="font-medium text-success">
                    You&rsquo;ve unlocked free delivery
                  </span>
                ) : (
                  <span>{formatDistanceToFreeShipping(amountToFreeShipping)}</span>
                )}
              </p>
              <div
                className="mt-2 h-1 w-full overflow-hidden rounded-full bg-sand-200"
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progress toward free delivery"
              >
                <div
                  className="h-full rounded-full bg-accent-500 transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-sand-200 overflow-y-auto overscroll-contain px-5">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 py-5">
                  <Link
                    href={`/product/${line.slug}`}
                    onClick={closeCart}
                    className="relative size-24 shrink-0 overflow-hidden bg-sand-100"
                  >
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <Link
                      href={`/product/${line.slug}`}
                      onClick={closeCart}
                      className="line-clamp-2-safe text-sm leading-snug font-medium text-brand-900 hover:text-accent-600"
                    >
                      {line.name}
                    </Link>
                    <p className="mt-1 text-xs text-ink-soft">
                      {line.colourway} · {line.size}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                      <div className="inline-flex items-stretch border border-sand-300">
                        <button
                          type="button"
                          onClick={() => setQuantity(line.key, line.quantity - 1)}
                          aria-label={`Decrease quantity of ${line.name}`}
                          className="grid size-8 place-items-center text-ink-soft transition-colors hover:bg-sand-100 disabled:opacity-40"
                          disabled={line.quantity <= 1}
                        >
                          <Minus size={12} aria-hidden="true" />
                        </button>
                        <span className="grid min-w-8 place-items-center border-x border-sand-300 text-xs font-semibold tabular-nums">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(line.key, line.quantity + 1)}
                          aria-label={`Increase quantity of ${line.name}`}
                          className="grid size-8 place-items-center text-ink-soft transition-colors hover:bg-sand-100 disabled:opacity-40"
                          disabled={line.quantity >= 10}
                        >
                          <Plus size={12} aria-hidden="true" />
                        </button>
                      </div>

                      <span className="text-sm font-semibold tabular-nums text-ink">
                        {money(line.price * line.quantity)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(line.key)}
                    aria-label={`Remove ${line.name} from bag`}
                    className="h-fit p-1 text-sand-400 transition-colors hover:text-danger"
                  >
                    <Trash2 size={15} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>

            <footer className="shrink-0 border-t border-sand-200 bg-white p-5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-ink-soft">Subtotal</span>
                <span className="font-display text-xl tabular-nums text-brand-900">
                  {money(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-sand-500">
                Delivery calculated at checkout · taxes included
              </p>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn btn-accent mt-4 w-full"
              >
                Checkout on WhatsApp
              </Link>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-sand-500">
                <Check className="size-3" />
                No account needed · reply within 2 hours
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs text-ink-soft transition-colors hover:text-brand-900"
              >
                or{' '}
                <span className="link-underline">
                  keep shopping ({store.currencySymbol} {fulfilment.freeShippingThreshold.toLocaleString(store.locale)} for free delivery)
                </span>
              </button>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
