import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/page-hero';
import { Check } from '@/components/ui/product-primitives';
import { store } from '@/lib/store';
import { jsonLd } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Materials & Craft',
  description:
    'Long-staple cotton, washed Normandy linen, RWS wool and organic cotton. How each fibre is grown, spun, woven and finished at AMARTQ.',
  alternates: { canonical: '/materials' },
};

const fibres = [
  {
    name: 'Long-staple cotton',
    origin: 'Coimbatore, India',
    body: 'Extra-long staple cotton, combed and ring-spun. Longer fibres mean fewer stray ends, which is why our percale feels smooth from the first wash and goes on getting better rather than fuzzing up. We use 300 to 600 thread counts here and do not go higher — past that you are buying thread, not cloth.',
    specs: [
      ['Staple', '38–40mm extra-long'],
      ['Weave', 'Percale, 300–600 TC'],
      ['Finish', 'Peached on both faces'],
      ['Cert', 'OEKO-TEX Standard 100'],
    ],
  },
  {
    name: 'Washed Normandy linen',
    origin: 'Guimarães, Portugal',
    body: 'European flax grown in Normandy and woven by a fourth-generation mill in Portugal. We wash the linen before it ever becomes a product, so it arrives already soft and only gets better. Linen breathes, wicks moisture and lasts decades — but it creases, and that is the deal.',
    specs: [
      ['Fibre', 'European flax, long-line retted'],
      ['Weave', 'Plain weave, 165 GSM'],
      ['Finish', 'Stone-washed, enzyme softened'],
      ['Cert', 'OEKO-TEX, Masters of Linen'],
    ],
  },
  {
    name: 'RWS merino',
    origin: 'Biella, Italy',
    body: 'Non-mulesed merino from Responsible Wool Standard farms. Spun at 19.5 micron, which is fine enough to sit against skin without itching. Woven in Biella on looms that have been refining this cloth for a century, and finished with a light brushing for loft.',
    specs: [
      ['Micron', '19.5 extra-fine'],
      ['Weave', 'Twill, 340 GSM'],
      ['Finish', 'Double-brushed, breathable'],
      ['Cert', 'RWS, OEKO-TEX Standard 100'],
    ],
  },
  {
    name: 'Organic cotton terry',
    origin: 'Coimbatore, India',
    body: 'GOTS-certified organic cotton on traditional pile looms. We use a 600 GSM terry for bath sheets and a 400 GSM waffle for hand towels, both deep enough to stay absorbent after a year of washing rather than going thin in a month.',
    specs: [
      ['Weight', '400–600 GSM'],
      ['Weave', 'Terry and waffle'],
      ['Finish', 'Brushed loop, low-shrink'],
      ['Cert', 'GOTS, OEKO-TEX Standard 100'],
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Fibre is bought, not brokered',
    body: 'We buy from growers and ginners we have met. Fibre arrives with a certification document we keep on file for every batch.',
  },
  {
    step: '02',
    title: 'Spun and woven in small runs',
    body: 'Two hundred metres or less per run. It is inefficient and it means we are never forced to discount a colourway you did not choose.',
  },
  {
    step: '03',
    title: 'Washed and finished three times',
    body: 'Pre-wash, soften and final press. This is where most brands cut corners; it is the single biggest difference in how a sheet feels on arrival.',
  },
  {
    step: '04',
    title: 'Inspected, folded, boxed',
    body: 'Every piece is checked under daylight before it is folded. Rejects go to the seconds rack at a genuine discount, labelled as such.',
  },
];

export default function MaterialsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Materials & Craft',
    url: `${store.url}/materials`,
    about: fibres.map((f) => ({ '@type': 'Thing', name: f.name, description: f.body })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      <PageHero
        eyebrow="Materials & craft"
        title="Fibre first. Everything else is detail."
        intro="Most bedding brands lead with thread count because it is easy. We start with where the fibre came from and how it was grown, because that is what determines how a sheet feels in year three rather than week one."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Materials' }]}
        tone="dark"
      />

      {/* Fibres ------------------------------------------------------ */}
      <section className="container-page py-16 lg:py-24">
        <div className="space-y-16 lg:space-y-20">
          {fibres.map((f) => (
            <article
              key={f.name}
              className="grid gap-8 border-t border-sand-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
              data-reveal
            >
              <div>
                <p className="eyebrow mb-3 text-accent-600">{f.origin}</p>
                <h2 className="text-section text-brand-900">{f.name}</h2>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                  {f.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt className="eyebrow text-sand-500">{k}</dt>
                      <dd className="mt-1 text-sm text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="leading-relaxed text-ink-soft lg:pt-8">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Process ----------------------------------------------------- */}
      <section className="border-y border-sand-200 bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="mb-12 max-w-2xl" data-reveal>
            <p className="eyebrow mb-3 text-accent-600">How it comes together</p>
            <h2 className="text-section text-brand-900">Four stages, in order</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              The quality of a textile is decided long before anyone designs a colourway.
            </p>
          </div>

          <div className="grid gap-px bg-sand-200 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="bg-white p-7 lg:p-8" data-reveal>
                <span className="font-display text-3xl text-sand-300">{p.step}</span>
                <h3 className="mt-3 font-display text-lg text-brand-900">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care -------------------------------------------------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow mb-3 text-accent-600">Care & longevity</p>
            <h2 className="text-section text-brand-900">How to make it last</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              None of this is difficult, and all of it matters. A good sheet fails from heat and
              friction, not from being washed.
            </p>
            <Link href="/size-guide" className="btn btn-outline mt-8">
              Check the size guide
            </Link>
          </div>

          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2" data-reveal>
            {[
              'Wash at 40°C on a normal cycle, not hot',
              'Use mild detergent, skip fabric softener',
              'Line dry in shade — direct sun fades dye',
              'Skip the tumble dryer entirely where you can',
              'Wash dark colours separately for the first three washes',
              'Rotate and re-hem a worn sheet rather than replacing it',
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
