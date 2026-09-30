'use client';

import { useState } from 'react';
import { MessageCircle, Star } from 'lucide-react';
import { contact, store } from '@/lib/store';
import { whatsappUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const reviews = [
  {
    name: 'Ayesha K.',
    city: 'Jaipur',
    rating: 5,
    title: 'The 300 TC sheets were worth every rupee',
    body: 'I have bought cheap cotton sheets for years and they always went rough and shapeless within a month. Six months in, these are still soft and the fitted sheet has not budged once. The Midnight colourway is a deep navy that photographs far better than it sounds.',
    product: 'Royal Cotton Bed Sheet — 300 TC',
  },
  {
    name: 'Rahul K.',
    city: 'Mumbai',
    rating: 5,
    title: 'Finally, a blackout curtain that works',
    body: 'My bedroom faces a streetlight directly. Every "blackout" I have bought before let light leak around the edges. These do not. I also appreciate that they arrived already pressed — no ironing a metre of stiff lining.',
    product: 'Three-Passage Blackout Curtain',
  },
  {
    name: 'Sana M.',
    city: 'Bengaluru',
    rating: 4,
    title: 'The linen is even better in person',
    body: 'I was worried about the price for linen. It arrived stone-washed and genuinely soft, not crisp and starched like linen usually does. It has relaxed beautifully over two months. Docking one star only because delivery took four days.',
    product: 'Washed Linen Bed Sheet',
  },
  {
    name: 'Hamza T.',
    city: 'Delhi',
    rating: 5,
    title: 'Ordered on WhatsApp, sorted in ten minutes',
    body: 'No account, no card forms, just a message with the order. They confirmed stock, gave me a delivery window, and the throw arrived two days early. Whoever built this checkout deserves a raise.',
    product: 'Merino Wool Throw',
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  return (
    <section className="border-y border-sand-200 bg-sand-100 py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Rating summary -------------------------------------------- */}
        <div className="lg:col-span-4" data-reveal>
          <p className="eyebrow mb-3 text-accent-600">Customer reviews</p>
          <h2 className="text-section text-brand-900">2,400+ reviews, 4.8 average</h2>

          <div className="mt-8 space-y-2.5">
            {[
              { stars: 5, pct: 86 },
              { stars: 4, pct: 10 },
              { stars: 3, pct: 3 },
              { stars: 2, pct: 1 },
              { stars: 1, pct: 0 },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-3">
                <span className="w-10 shrink-0 text-xs text-ink-soft tabular-nums">
                  {row.stars} star
                </span>
                <span
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-sand-300"
                  role="img"
                  aria-label={`${row.pct}% of reviews are ${row.stars} star`}
                >
                  <span
                    className="block h-full rounded-full bg-accent-500"
                    style={{ width: `${row.pct}%` }}
                  />
                </span>
                <span className="w-9 shrink-0 text-right text-xs text-ink-soft tabular-nums">
                  {row.pct}%
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Reviews are collected from verified WhatsApp orders only. We do not remove negative
            ones — we fix the problem and reply.
          </p>
        </div>

        {/* Review carousel ------------------------------------------- */}
        <div className="lg:col-span-8" data-reveal>
          <figure className="flex h-full flex-col justify-between border border-sand-200 bg-white p-8 sm:p-12">
            <div>
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star key={i} size={15} className="fill-accent-500 text-accent-500" />
                ))}
              </div>
              <blockquote className="mt-6">
                <p className="font-display text-xl leading-snug text-brand-900 sm:text-2xl">
                  &ldquo;{review.title}&rdquo;
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
                  {review.body}
                </p>
              </blockquote>
            </div>

            <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-sand-200 pt-6">
              <div>
                <p className="text-sm font-semibold text-ink">{review.name}</p>
                <p className="text-xs text-ink-soft">
                  {review.city} · Verified purchase
                </p>
                <p className="mt-1.5 text-xs text-sand-500">Purchased: {review.product}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-1.5" role="tablist" aria-label="Choose a review">
                  {reviews.map((r, i) => (
                    <button
                      key={r.name}
                      role="tab"
                      aria-selected={i === active}
                      aria-label={`Review ${i + 1} of ${reviews.length} by ${r.name}`}
                      onClick={() => setActive(i)}
                      className={cn(
                        'h-1.5 rounded-full transition-all duration-400',
                        i === active ? 'w-8 bg-accent-500' : 'w-3 bg-sand-300 hover:bg-sand-400',
                      )}
                    />
                  ))}
                </div>
                <a
                  href={whatsappUrl(`Hello ${store.name}! I have a question about my order.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-900 transition-colors hover:text-accent-600"
                >
                  <MessageCircle size={13} aria-hidden="true" />
                  Ask us
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/** Final conversion band — the WhatsApp order call to action. */
export function WhatsAppCta() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      {/* Ambient gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-[-10%] size-[36rem] rounded-full bg-accent-500/12 blur-3xl animate-pulse-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-[-10%] size-[28rem] rounded-full bg-accent-400/8 blur-3xl animate-pulse-slow delay-1000"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[50rem] rounded-full bg-gradient-to-r from-accent-500/3 via-transparent to-accent-400/2 blur-3xl opacity-30"
      />

      <div className="container-page relative grid gap-10 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-7" data-reveal>
          <p className="eyebrow mb-4 text-accent-400 tracking-wider uppercase">Order in one message</p>
          <h2 className="text-section text-white leading-tight">
            No account, no card forms, no checkout friction.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-200">
            Build your bag, tell us where it&rsquo;s going, and send it to us on WhatsApp. A real
            person confirms stock, applies any colourway swap you want, and sends a delivery
            window — usually within two hours.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl(`Hello ${store.name}! I'd like to place an order.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                Start on WhatsApp
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </a>


            <a
              href={`tel:${contact.phoneDisplay.replace(/\s/g, '')}`}
              className="btn group relative overflow-hidden border border-white/80 text-white bg-white/10 hover:bg-white/10 hover:border-white text-sm px-4 py-3.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Or call {contact.phoneDisplay}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* Phone mock ------------------------------------------------- */}
        <div className="lg:col-span-5 lg:justify-self-end" data-reveal>
          <div className="relative mx-auto max-w-sm">
            {/* Glow ring */}
            <div className="absolute inset-[-4px] rounded-[1.25rem] bg-gradient-to-br from-accent-500/30 via-transparent to-accent-400/20 blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
            
            <div className="relative group border border-white/8 bg-gradient-to-b from-brand-900/80 to-brand-950/90 p-1.5 rounded-[1.125rem] backdrop-blur-xl">
              <div className="border border-white/6 bg-brand-950/50 rounded-[1rem] p-5">
                <div className="flex items-center gap-3 border-b border-white/8 pb-3">
                  <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-accent-500 to-accent-400 text-brand-950 shadow-lg shadow-accent-500/25 animate-pulse-soft">
                    <MessageCircle size={16} aria-hidden="true" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-white truncate">{store.name} Orders</span>
                    <span className="block text-[11px] font-medium text-success flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-success animate-pulse" aria-hidden="true" />
                      Online now
                    </span>
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="max-w-[85%] rounded-lg rounded-tl-[1.5rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] bg-gradient-to-r from-white/8 to-white/4 px-4 py-3 animate-slide-in-left">
                    <p className="text-xs leading-relaxed text-brand-100">
                      Hi! Send us your bag and we&rsquo;ll confirm stock and delivery within the hour.
                    </p>
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] bg-gradient-to-r from-accent-500 to-accent-400 px-4 py-3 shadow-lg shadow-accent-500/30 animate-slide-in-right">
                    <p className="text-xs leading-relaxed text-brand-950 font-medium">
                      I&rsquo;d like the 300 TC bed sheet in Midnight, King size, and a wool throw in camel.
                    </p>
                  </div>
                  <div className="max-w-[85%] rounded-lg rounded-tl-[1.5rem] rounded-bl-[1.5rem] rounded-br-[1.5rem] bg-gradient-to-r from-white/8 to-white/4 px-4 py-3 animate-slide-in-left">
                    <p className="text-xs leading-relaxed text-brand-100">
                      Both in stock. Total <span className="font-semibold">{store.currencySymbol} 9,498</span> with free delivery. Delivering Thursday 2–5pm — shall I confirm?
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 border-t border-white/8 pt-3">
                  <span className="size-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
                  <span className="text-[11px] font-medium text-brand-300">Typical reply <span className="text-brand-100">10 minutes</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
