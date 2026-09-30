'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, ShoppingBag, Trash2, Truck } from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import { QuantityStepper } from '@/components/ui/quantity-stepper';
import { fulfilment } from '@/lib/store';
import { money } from '@/lib/types';
import { formatDistanceToFreeShipping } from '@/lib/format';
import { cn } from '@/lib/utils';

export function CartPage() {
  const {
    lines,
    hydrated,
    subtotal,
    itemCount,
    setQuantity,
    remove,
    clear,
    shippingCost,
    amountToFreeShipping,
    qualifiesForFreeShipping,
  } = useCart();
  const router = useRouter();

  if (!hydrated) {
    return (
      <div className="container-page py-16">
        <div className="skeleton mb-4 h-3 w-24" />
        <div className="skeleton mb-12 h-12 w-64" />
        <div className="space-y-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-6">
              <div className="skeleton size-32" />
              <div className="flex-1 space-y-3">
                <div className="skeleton h-4 w-1/2" />
                <div className="skeleton h-3 w-1/4" />
                <div className="skeleton h-9 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-md text-center">
          <span className="mb-6 inline-grid size-20 place-items-center rounded-full bg-sand-200">
            <ShoppingBag size={30} className="text-sand-500" aria-hidden="true" />
          </span>
          <h1 className="text-display text-brand-900">Your bag is empty</h1>
          <p className="mt-4 text-ink-soft">
            Nothing in here yet. Have a look at our bestsellers — the 300-thread cotton bed
            sheets and the washed linen are where most people start.
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
      </div>
    );
  }

  const progress = Math.min(100, (subtotal / fulfilment.freeShippingThreshold) * 100);

  return (
    <div className="container-page py-10 lg:py-14">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3 text-accent-600">Your bag</p>
          <h1 className="text-display text-brand-900">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </h1>
        </div>
        <button
          type="button"
          onClick={clear}
          className="text-xs text-ink-soft underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
        >
          Empty bag
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14 xl:gap-20">
        {/* Lines ------------------------------------------------------ */}
        <div>
          <ul className="divide-y divide-sand-200 border-y border-sand-200">
            {lines.map((line) => (
              <li key={line.key} className="flex gap-4 py-6 sm:gap-6">
                <Link
                  href={`/product/${line.slug}`}
                  className="relative size-28 shrink-0 overflow-hidden bg-sand-100 sm:size-36"
                >
                  <Image
                    src={line.image}
                    alt={line.name}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </Link>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <Link
                        href={`/product/${line.slug}`}
                        className="line-clamp-2-safe font-display text-base leading-snug text-brand-900 transition-colors hover:text-accent-600"
                      >
                        {line.name}
                      </Link>
                      <p className="mt-1.5 text-xs text-ink-soft">
                        {line.colourway} &middot; {line.size}
                      </p>
                    </div>
                    <span className="shrink-0 text-base font-semibold tabular-nums text-ink">
                      {money(line.price * line.quantity)}
                    </span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                    <QuantityStepper
                      value={line.quantity}
                      onChange={(q) => setQuantity(line.key, q)}
                      label={`quantity of ${line.name}`}
                    />

                    <div className="flex items-center gap-4">
                      <span className="text-xs text-sand-500 tabular-nums">
                        {money(line.price)} each
                      </span>
                      <button
                        type="button"
                        onClick={() => remove(line.key)}
                        className="inline-flex items-center gap-1.5 text-xs text-ink-soft transition-colors hover:text-danger"
                      >
                        <Trash2 size={13} aria-hidden="true" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/shop"
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-brand-900 uppercase transition-colors hover:text-accent-600"
          >
            &larr; Continue shopping
          </Link>

          {/* Free shipping meter ------------------------------------ */}
          <div className="mt-10 border border-sand-200 bg-white p-5">
            <p className="flex items-center gap-2 text-sm text-ink-soft">
              <Truck size={16} className="shrink-0 text-accent-500" aria-hidden="true" />
              {qualifiesForFreeShipping ? (
                <span className="font-medium text-success">
                  Your order qualifies for free delivery
                </span>
              ) : (
                <span>{formatDistanceToFreeShipping(amountToFreeShipping)}</span>
              )}
            </p>
            <div
              className="mt-3 h-1 w-full overflow-hidden rounded-full bg-sand-200"
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
        </div>

        {/* Summary ---------------------------------------------------- */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-sand-200 bg-white p-6">
            <h2 className="eyebrow mb-5 text-brand-900">Order summary</h2>

            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-soft">
                  Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})
                </dt>
                <dd className="font-semibold tabular-nums text-ink">{money(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Delivery</dt>
                <dd
                  className={cn(
                    'font-semibold tabular-nums',
                    shippingCost === 0 ? 'text-success' : 'text-ink',
                  )}
                >
                  {shippingCost === 0 ? 'Free' : money(shippingCost)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Estimated tax</dt>
                <dd className="text-xs text-sand-500">Included</dd>
              </div>
            </dl>

            <div className="my-5 rule" aria-hidden="true" />

            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-brand-900">Total</span>
              <span className="font-display text-2xl tabular-nums text-brand-900">
                {money(subtotal + shippingCost)}
              </span>
            </div>

            <button
              type="button"
              onClick={() => router.push('/checkout')}
              className="btn btn-accent mt-6 w-full"
            >
              Checkout on WhatsApp
              <ArrowRight size={15} aria-hidden="true" />
            </button>

            <p className="mt-4 text-center text-[11px] leading-relaxed text-sand-500">
              No account and no card details on this site. You&rsquo;ll confirm your order and
              arrange payment directly on WhatsApp.
            </p>

            <div className="mt-5 space-y-2 border-t border-sand-200 pt-5 text-xs text-ink-soft">
              <p className="flex justify-between">
                <span>Delivery</span>
                <span className="font-medium text-brand-900">
                  {fulfilment.deliveryDays.min}–{fulfilment.deliveryDays.max} working days
                </span>
              </p>
              <p className="flex justify-between">
                <span>Returns</span>
                <span className="font-medium text-brand-900">
                  {fulfilment.returnWindowDays} days, free
                </span>
              </p>
              <p className="flex justify-between">
                <span>Payment</span>
                <span className="font-medium text-brand-900">
                  COD, transfer, card
                </span>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
