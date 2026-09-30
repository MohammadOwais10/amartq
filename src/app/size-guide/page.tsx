import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Prose } from '@/components/ui/page-hero';
import { fulfilment } from '@/lib/store';
import { jsonLd } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Size Guide',
  description:
    'Bedding sizes in inches and centimetres, how to measure your mattress, and what to order if you are between sizes.',
  alternates: { canonical: '/size-guide' },
};

const bedSizes = [
  { name: 'Single', in: '38 × 75 in', cm: '96 × 190 cm', uk: '3 ft', au: '91 × 203 cm' },
  { name: 'Super Single', in: '42 × 75 in', cm: '107 × 190 cm', uk: '3 ft 6 in', au: '107 × 203 cm' },
  { name: 'Double / Full', in: '54 × 75 in', cm: '137 × 190 cm', uk: '4 ft 6 in', au: '137 × 203 cm' },
  { name: 'Queen', in: '60 × 80 in', cm: '152 × 203 cm', uk: '5 ft', au: '152 × 203 cm' },
  { name: 'King', in: '76 × 80 in', cm: '193 × 203 cm', uk: '6 ft 3 in', au: '193 × 203 cm' },
  { name: 'Super King', in: '72 × 84 in', cm: '183 × 213 cm', uk: '6 ft', au: '183 × 213 cm' },
];

const sheetSets = [
  {
    name: 'Bed Sheet Set',
    includes: '1 fitted sheet + 1 flat sheet + 2 pillowcases',
    sizes: 'Single, Queen, King, Super King',
    note: 'Doubles and Queens use the same size flat sheet.',
  },
  {
    name: 'Fitted Sheet Only',
    includes: '1 fitted sheet',
    sizes: 'Single through Super King',
    note: 'Sold in depths of 10 in, 12 in and 16 in. Choose the one that matches your mattress plus 2 in.',
  },
  {
    name: 'Flat Sheet Only',
    includes: '1 flat sheet',
    sizes: 'Single, Double, Queen, King, Super King',
    note: 'Order one size up from your bed if you like an oversized drape.',
  },
  {
    name: 'Duvet / Quilt Cover',
    includes: '1 cover',
    sizes: 'Single, Double, Queen, King, Super King',
    note: 'Order the same size as your duvet insert, not your mattress.',
  },
  {
    name: 'Pillowcase',
    includes: '2 pillowcases',
    sizes: 'Standard 19 × 39 in, King 20 × 36 in',
    note: 'Sold as a pair. Deep option adds 2 in of depth for a 16 in pillow.',
  },
  {
    name: 'Curtains',
    includes: '2 panels',
    sizes: 'Custom width, standard drops of 84, 96, 108 in',
    note: 'Fullness of 1.5× to 2× the track width gives a proper pleated look.',
  },
];

const measuring = [
  {
    title: 'Measure the mattress, not the bed frame',
    body: 'Measure length and width across the middle of the mattress, top to bottom and side to side. Measure depth from the top edge to the base — this is what decides your fitted sheet pocket size.',
  },
  {
    title: 'Add an inch of give on depth',
    body: 'Fitted sheets are cut with a fitted pocket that sits flush. A mattress 14 in deep wants a 16 in pocket. It should feel snug, not like a drum.',
  },
  {
    title: 'Between two sizes? Size up',
    body: 'For a fitted sheet, size up on depth. For a flat sheet, size up on width so it has enough to tuck. A flat sheet that is too short cannot be fixed.',
  },
  {
    title: 'Still unsure? Ask us',
    body: 'Send us the mattress measurements on WhatsApp and we will tell you exactly which one to order, including what to do if it is not a standard size.',
  },
];

export default function SizeGuidePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I measure my mattress for a fitted sheet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Measure length, width and depth at the middle of the mattress. Depth is measured from the top of the mattress down to the base. Choose a pocket 2 in deeper than your mattress.',
        },
      },
      {
        '@type': 'Question',
        name: 'What size should I order if I am between sizes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Size up. For a fitted sheet, go up on depth. For a flat sheet, go up on width so there is enough to tuck on each side.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      <PageHero
        eyebrow="Size guide"
        title="Get the size right the first time"
        intro="Most returns we see are sizing, and almost all of them are preventable. Two minutes with a tape measure is worth more than a return form."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Size Guide' }]}
      />

      {/* Bedding sizes ----------------------------------------------- */}
      <section className="container-page py-16 lg:py-20">
        <h2 className="text-section text-brand-900" data-reveal>
          Standard bed sizes
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft" data-reveal>
          Sizes are named differently in different markets, so we list the dimensions in both
          inches and centimetres. Check the centimetre column rather than the name — it is the
          measurement that matters when you are matching a mattress.
        </p>

        <div className="mt-8 overflow-x-auto" data-reveal>
          <table className="w-full min-w-3xl border-collapse text-left text-sm">
            <caption className="sr-only">Standard bed sizes in inches, centimetres and Australian sizing</caption>
            <thead>
              <tr className="border-b border-sand-300">
                <th scope="col" className="py-3 pr-4 font-semibold text-brand-900">Size</th>
                <th scope="col" className="py-3 pr-4 font-semibold text-brand-900">Inches</th>
                <th scope="col" className="py-3 pr-4 font-semibold text-brand-900">Centimetres</th>
                <th scope="col" className="py-3 pr-4 font-semibold text-brand-900">UK</th>
                <th scope="col" className="py-3 font-semibold text-brand-900">Australia</th>
              </tr>
            </thead>
            <tbody>
              {bedSizes.map((b) => (
                <tr key={b.name} className="border-b border-sand-200 last:border-0">
                  <th scope="row" className="py-3.5 pr-4 font-medium text-brand-900">{b.name}</th>
                  <td className="py-3.5 pr-4 tabular-nums text-ink-soft">{b.in}</td>
                  <td className="py-3.5 pr-4 tabular-nums text-ink-soft">{b.cm}</td>
                  <td className="py-3.5 pr-4 tabular-nums text-sand-500">{b.uk}</td>
                  <td className="py-3.5 tabular-nums text-sand-500">{b.au}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What each product includes ---------------------------------- */}
      <section className="border-y border-sand-200 bg-white py-16 lg:py-20">
        <div className="container-page">
          <h2 className="text-section text-brand-900" data-reveal>
            What each product includes
          </h2>
          <div className="mt-8 grid gap-px bg-sand-200 sm:grid-cols-2 lg:grid-cols-3">
            {sheetSets.map((s) => (
              <article key={s.name} className="bg-sand-50 p-7" data-reveal>
                <h3 className="font-display text-lg text-brand-900">{s.name}</h3>
                <p className="mt-2 text-sm text-ink">{s.includes}</p>
                <p className="mt-3 text-sm text-ink-soft">
                  <span className="font-semibold text-brand-900">Sizes: </span>
                  {s.sizes}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-sand-500">{s.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Measuring --------------------------------------------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow mb-3 text-accent-600">How to measure</p>
            <h2 className="text-section text-brand-900">Four things to get right</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              You need a tape measure and about two minutes. Everything else follows from these.
            </p>
            <div className="mt-8 rounded-sm border border-accent-200 bg-accent-50 p-5">
              <p className="text-sm leading-relaxed text-accent-900">
                Not confident? Message{' '}
                <Link href="/contact" className="font-semibold underline underline-offset-4">
                  our team
                </Link>{' '}
                with your measurements. We would rather answer a question than process a return.
              </p>
            </div>
          </div>

          <ol className="space-y-8" data-reveal>
            {measuring.map((m, i) => (
              <li key={m.title} className="flex gap-5">
                <span className="font-display text-2xl text-sand-300 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <h3 className="font-display text-lg text-brand-900">{m.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-soft">{m.body}</p>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Returns ----------------------------------------------------- */}
      <section className="border-t border-sand-200 bg-sand-100 py-14">
        <div className="container-page">
          <Prose className="max-w-3xl">
            <h2>Wrong size? Returns are free.</h2>
            <p>
              If a size is not right, send it back within {fulfilment.returnWindowDays} days
              unwashed
              and unused and we will cover the return shipping — that includes the cost of the
              courier, not just ours. See our{' '}
              <Link href="/policies/returns">returns policy</Link> for the full detail, or read
              about exchanges on the{' '}
              <Link href="/faq">FAQ</Link>.
            </p>
          </Prose>
        </div>
      </section>
    </>
  );
}
