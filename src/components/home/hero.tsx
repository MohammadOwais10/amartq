import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { HeroCarousel } from '@/components/home/hero-carousel';
import { fulfilment, store } from '@/lib/store';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-sand-200 bg-sand-50">
      {/* Ambient brand wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -left-40 size-[46rem] rounded-full bg-accent-500/6 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-56 size-[40rem] rounded-full bg-brand-900/6 blur-3xl"
      />

      {/* Mobile needs breathing room; from lg up the 85vh image sets the height. */}
      <div className="container-page relative grid items-stretch gap-14 py-12 lg:grid-cols-12 lg:gap-12 lg:py-0 xl:gap-20">
        {/* Copy ------------------------------------------------------- */}
        <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-5" data-reveal>
          <p className="eyebrow mb-9 flex items-center gap-4 text-sand-700">
            <span className="h-px w-10 bg-sand-400" aria-hidden="true" />
            The AMARTQ Collection
          </p>

          <h1 className="font-display text-[3.25rem] leading-[1.02] font-light tracking-[-0.02em] text-brand-900 sm:text-6xl lg:text-7xl">
            The Art of
            <br />
            Beautiful Living
          </h1>

          <p className="mt-9 max-w-md text-[15px] leading-[1.85] text-ink-soft sm:text-base">
            Refined bedding and home textiles designed to bring comfort, character, and timeless
            elegance to your everyday spaces.
          </p>

          <div className="mt-11 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link href="/shop" className="btn btn-accent group">
              Explore the collection
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>

            <Link href="/about" className="btn btn-outline-soft">
              Our story
            </Link>
          </div>

          {/* Hairline meta row */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-sand-200 pt-8">
            <span className="flex items-center gap-2.5">
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={11} className="fill-accent-500 text-accent-500" />
                ))}
              </span>
              <span className="text-xs text-ink-soft">
                <strong className="font-medium text-ink">4.8</strong> from 2,400+ reviews
              </span>
            </span>

            <span className="hidden h-3 w-px bg-sand-300 sm:block" aria-hidden="true" />

            <span className="text-xs text-ink-soft">
              Complimentary delivery over {store.currencySymbol}{' '}
              {fulfilment.freeShippingThreshold.toLocaleString(store.locale)}
            </span>
          </div>
        </div>

        {/* Image ------------------------------------------------------ */}
        <div
          className="relative lg:col-span-6 lg:col-start-7 xl:col-span-7 xl:col-start-6"
          data-reveal
        >
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
