import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { products } from '@/lib/catalog';
import { store } from '@/lib/store';
import { jsonLd } from '@/lib/utils';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Our Story',
  description: `Founded in ${store.foundedYear}, AMARTQ makes premium bed sheets, bedding, cushions, curtains and home textiles, woven to order in long-staple cotton, European linen and responsibly sourced wool. Here is how we work, and why.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `Our Story — ${store.name}`,
    description: 'Why we make fewer textiles, and make them properly.',
    url: `${store.url}/about`,
  },
};

const timeline = [
  {
    year: '2016',
    title: 'A frustration, not a business plan',
    body: 'We bought bed sheets that felt wonderful in a shop and shapeless after three washes. It took us two years to find a mill willing to weave at the thread count we wanted.',
  },
  {
    year: '2018',
    title: 'The first collection',
    body: 'Six products. Four hundred and 300-thread percale, three colourways, sold to friends and family until we ran out of the first run twice.',
  },
  {
    year: '2021',
    title: 'Moving into linen',
    body: 'We found a partner in Guimarães who wash their flax before weaving. It cost us more and it was worth every rupee we spent — linen that is soft on arrival, not after a month.',
  },
  {
    year: '2023',
    title: 'Certified fibres only',
    body: 'Every fibre we now use carries OEKO-TEX Standard 100, and our wool is RWS certified. It cost us two suppliers.',
  },
  {
    year: '2026',
    title: 'Woven to order',
    body: 'We moved to small-batch, made-to-order production. Less waste, less warehouse, and colourways we would otherwise be forced to discount.',
  },
];

const principles = [
  {
    title: 'Publish the fibre, not the count',
    body: 'Thread count is a marketing number. We tell you the staple length, the mill and the certification, because those are what actually determine how a sheet feels in year three.',
  },
  {
    title: 'Small runs, no forced discounts',
    body: 'We weave in runs of 200 metres or less. It is less efficient and it means we never end up clearing a warehouse of a colourway you did not want.',
  },
  {
    title: 'One palette across the house',
    body: 'Ecru, sage, clay, navy, charcoal. Our colourways carry across sheets, throws, cushions and curtains, so a whole room coordinates from one order.',
  },
  {
    title: 'Repair before replace',
    body: 'Send us a torn sheet or a shedding cushion. We will re-hem it or replace the insert rather than talk you into something new.',
  },
];

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Our Story',
    url: `${store.url}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: store.name,
      foundingDate: String(store.foundedYear),
      description: store.description,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      <PageHero
        eyebrow={`Since ${store.foundedYear}`}
        title="We make fewer things, and we make them properly."
        intro="AMARTQ started because we were tired of bed sheets that felt like a treat in a shop and like a disappointment by March. The company that followed is a direct answer to that."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our Story' }]}
        tone="dark"
      />

      {/* Story ------------------------------------------------------- */}
      <section className="container-page grid gap-12 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-24">
        <div data-reveal>
          <p className="eyebrow mb-4 text-accent-600">The short version</p>
          <h2 className="text-section text-brand-900">
            A textile company run by people who notice thread counts
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
            <p>
              We are not a fashion brand that occasionally sells bedding. Every product we make
              is a textile, every textile is woven by a mill we have visited, and every claim on
              a product page is one we are prepared to back.
            </p>
            <p>
              That means fewer SKUs, longer lead times on the things we make to order, and prices
              that reflect what good fibre and a fair mill actually cost. It also means when
              something goes wrong — and it does — you speak to the same small team that decided
              to stock it.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-sand-200 pt-8 sm:grid-cols-3">
            {[
              { k: 'Products', v: `${products.length} in the range` },
              { k: 'Certification', v: 'OEKO-TEX 100' },
              { k: 'Wool', v: 'RWS certified' },
            ].map((s) => (
              <div key={s.k}>
                <dt className="eyebrow text-sand-500">{s.k}</dt>
                <dd className="mt-1.5 font-display text-xl text-brand-900">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative" data-reveal>
          <div className="relative aspect-4/5 overflow-hidden bg-sand-200">
            <Image
              src="/images/websiteimgs/about-bg.png"
              alt="AMARTQ textiles in the studio"
              fill
              preload
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Timeline ---------------------------------------------------- */}
      <section className="border-y border-sand-200 bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="mb-12 max-w-2xl" data-reveal>
            <p className="eyebrow mb-3 text-accent-600">How we got here</p>
            <h2 className="text-section text-brand-900">Ten years, five decisions</h2>
          </div>

          {/* The rule is drawn per item rather than as a border on the <ol>.
              Each segment runs from its dot's centre to the next dot's centre,
              and the last item draws none, so the rule ends at the final dot
              with no trailing stub. `h-full` is deliberate: the <li> has
              `pb-12`, so the rule already spans the gap between items, and
              any extra height overshoots the next dot. Padding lives on the
              <li> so `left-0` is the rule's position, which keeps the dot on
              the line at every width. */}
          <ol className="relative">
            {timeline.map((item, i) => (
              <li
                key={item.year}
                className="relative pb-12 pl-8 last:pb-0 lg:pl-12"
                data-reveal
              >
                {/* Rule first, dot second: later siblings paint on top, so the
                    solid dot covers the rule instead of being crossed by it. */}
                {i < timeline.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-3 h-full w-px bg-sand-300"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 size-4 -translate-x-1/2 rounded-full border-2 border-accent-500 bg-accent-500"
                />
                <p className="font-display text-2xl text-accent-600">{item.year}</p>
                <h3 className="mt-2 font-display text-xl text-brand-900">{item.title}</h3>
                <p className="mt-2.5 max-w-2xl leading-relaxed text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles -------------------------------------------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="mb-12 max-w-2xl" data-reveal>
          <p className="eyebrow mb-3 text-accent-600">How we work</p>
          <h2 className="text-section text-brand-900">Four rules we do not bend</h2>
        </div>

        <div className="grid gap-px bg-sand-200 sm:grid-cols-2">
          {principles.map((p, i) => (
            <article key={p.title} className="bg-sand-50 p-8 lg:p-10" data-reveal>
              <span className="mb-5 flex size-9 items-center justify-center rounded-full border border-accent-300 text-sm font-semibold text-accent-600 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl text-brand-900">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Sourcing ---------------------------------------------------- */}
      <section className="border-t border-sand-200 bg-sand-100 py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow mb-3 text-accent-600">Sourcing</p>
            <h2 className="text-section text-brand-900">Where things are made</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We keep our supply chain deliberately short and our relationships long. Every mill
              below was visited in person before we placed a first order.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              When a mill raises prices or changes a finishing process, we hear about it before it
              reaches a product page. That is the whole point of knowing six suppliers instead of
              fifty.
            </p>

            <div className="mt-8 border-l-2 border-accent-500 pl-5">
              <p className="font-display text-lg text-brand-900">
                Six mills. One country. No brokers in between.
              </p>
            </div>
          </div>

          {/* Six mills reads as a set of places, not a sentence, so they get
              cards rather than leader-line rows — each one keeps its own
              address without depending on the eye scanning across a rule. */}
          <div className="lg:col-span-7" data-reveal>
            <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl text-brand-900">India</h3>
              <p className="text-sm text-sand-600">Spinning, weaving, printing and finishing</p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                { place: 'Coimbatore', state: 'Tamil Nadu', what: 'Cotton percale and sateen, 300–600 TC' },
                { place: 'Jaipur', state: 'Rajasthan', what: 'Hand block printing and finishing' },
                { place: 'Aurangabad', state: 'Maharashtra', what: 'Terry and waffle towel looms' },
                { place: 'Ludhiana', state: 'Punjab', what: 'Woollen weaving and pashmina blending' },
                { place: 'Kachchh', state: 'Gujarat', what: 'Ajrakh resist printing' },
                { place: 'Bhagalpur', state: 'Bihar', what: 'Tussar silk weaving and finishing' },
              ].map((m) => (
                <li
                  key={m.place}
                  className="group border border-sand-200 bg-sand-50 p-5 transition-colors hover:border-accent-300 hover:bg-white"
                >
                  <span className="flex items-center gap-2">
                    <MapPin
                      size={15}
                      className="shrink-0 text-accent-600 transition-transform group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-brand-900">{m.place}</span>
                    <span className="text-xs text-sand-500">{m.state}</span>
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                    {m.what}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Flagship CTA ------------------------------------------------ */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        {/* Ambient wash — the accent only reads on a near-black ground, and it
            gives the band depth that a flat brand-900 fill does not. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-[12%] size-[34rem] rounded-full bg-brand-500/12 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-[10%] size-[26rem] rounded-full bg-brand-400/10 blur-3xl"
        />

        <div className="container-page relative py-20 lg:py-28">
          {/* Centred, single measure. The reassurance items read as the answer
              to the objection in the copy, so they belong underneath it rather
              than in a competing column. */}
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <p className="eyebrow mb-4 text-accent-400">Start here</p>
            <h2 className="text-section text-white text-balance-tight">
              Not sure which piece suits your room?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-brand-200">
              Every bed sheet we make starts as the same long-staple combed cotton, woven on the
              same looms in Coimbatore. What changes is the thread count, the weave and the finish
              &mdash; and that is exactly what we will walk you through on WhatsApp.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl(
                  `Hello ${store.name}! I'd like some help choosing a bed sheet — could we talk through thread count, sizing and colourways?`,
                )}
                className="btn btn-accent group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Ask us on WhatsApp
              </a>
              <Link href="/shop" className="btn btn-ghost-light">
                Browse the range
              </Link>
            </div>

            <p className="mt-5 text-xs text-brand-400">
              A real person replies &mdash; usually within the hour.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
