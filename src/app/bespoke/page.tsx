import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from '@/components/ui/product-primitives';
import { PageHero } from '@/components/ui/page-hero';
import { fulfilment, store } from '@/lib/store';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Bespoke & Bulk',
  description:
    'Custom sizes, hospitality projects, gifting and corporate orders from AMARTQ. Woven to order in small batches with a dedicated point of contact.',
  alternates: { canonical: '/bespoke' },
};

const services = [
  {
    title: 'Custom sizes',
    body: 'Anything outside our standard range, from a 48 in narrow single to a 90 in California king, or a fitted sheet at a depth we do not stock. Priced on the metre, no set-up fee.',
    lead: 'From 2 weeks',
  },
  {
    title: 'Hospitality & hospitality-fit',
    body: 'Bedsheets, pillowcases, runners and towels for boutique hotels and guesthouses. We can hold a colourway across a whole floor, reprint a run years later, and supply against a standing order.',
    lead: 'From 4 weeks',
  },
  {
    title: 'Gifting & corporate',
    body: 'Wrapped sets at any budget, with a card and a handwritten note. Volume pricing from 20 sets, and we can hold stock against a delivery window you choose.',
    lead: 'From 10 days',
  },
  {
    title: 'Interior & designers',
    body: 'Trade pricing, swatch kits on loan, custom colour matching to a client scheme, and your logo woven into the selvedge or embroidered on the corner.',
    lead: 'Ongoing',
  },
];

const process = [
  { step: '01', title: 'Tell us what you need', body: 'Sizes, quantities, colourway and your deadline. A rough idea is fine.' },
  { step: '02', title: 'We quote in 24 hours', body: 'With a sample or a photograph of the actual cloth, not a screen render.' },
  { step: '03', title: 'You approve a sample', body: 'We send a cut or a full piece. Nothing goes into production before you say yes.' },
  { step: '04', title: 'Woven and delivered', body: 'Made in small runs, checked by hand, and shipped in numbered batches you can count.' },
];

export default function BespokePage() {
  return (
    <>
      <PageHero
        eyebrow="Bespoke & bulk"
        title="Made to measure, in small runs"
        intro="We already weave in batches of 200 metres or less. Bespoke work is the same process with a different specification — a custom size, a held colourway, a repeating order. One point of contact throughout."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Bespoke & Bulk' }]}
        tone="dark"
      />

      {/* Services --------------------------------------------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-px bg-sand-200 sm:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="bg-sand-50 p-8 lg:p-10" data-reveal>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-display text-xl text-brand-900">{s.title}</h2>
                <span className="shrink-0 text-xs font-semibold text-accent-600">{s.lead}</span>
              </div>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Process ---------------------------------------------------- */}
      <section className="border-y border-sand-200 bg-white py-16 lg:py-24">
        <div className="container-page">
          <div className="mb-12 max-w-2xl" data-reveal>
            <p className="eyebrow mb-3 text-accent-600">How it works</p>
            <h2 className="text-section text-brand-900">Four steps, one contact</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              You will speak to the same person at every stage. No account manager handover, no
              re-explaining the brief.
            </p>
          </div>

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} data-reveal>
                <span className="font-display text-3xl text-sand-300">{p.step}</span>
                <h3 className="mt-3 font-display text-lg text-brand-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Terms + CTA ------------------------------------------------ */}
      <section className="container-page grid gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div data-reveal>
          <h2 className="text-section text-brand-900">The practical details</h2>
          <ul className="mt-8 space-y-4">
            {[
              'Minimum order is 10 pieces for gifting, 30 for hospitality.',
              'Custom colour matching needs a Pantone reference and adds two weeks.',
              '50% deposit to begin a production run, balance on dispatch.',
              'We hold a colourway on file for 24 months, so a re-run matches the original.',
              'Samples are on loan and returnable, so you are not paying for two of them.',
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed text-ink-soft">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex flex-col justify-center border border-sand-200 bg-sand-100 p-8 lg:p-10"
          data-reveal
        >
          <h2 className="text-section text-brand-900">Start a conversation</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Send us your sizes, quantities and deadline. You will have a real quote within 24
            hours, and an honest answer if we are not the right fit — we will say so rather than
            take the order.
          </p>

          <dl className="mt-8 space-y-3 border-y border-sand-300 py-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-ink-soft">Standard lead time</dt>
              <dd className="font-semibold text-brand-900">{fulfilment.deliveryDays.min}–{fulfilment.deliveryDays.max} working days</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-soft">Bespoke lead time</dt>
              <dd className="font-semibold text-brand-900">2–6 weeks</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-soft">Sample turnaround</dt>
              <dd className="font-semibold text-brand-900">3–5 working days</dd>
            </div>
          </dl>

          <a
            href={whatsappUrl(
              `Hello ${store.name}! I'd like to discuss a bespoke or bulk order. Here is what I need:\n• Product(s):\n• Sizes:\n• Quantity:\n• Colourway:\n• Deadline:`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent mt-8"
          >
            Request a quote
          </a>

          <p className="mt-4 text-xs text-sand-500">
            Prefer to talk first?{' '}
            <Link
              href="/contact"
              className="underline underline-offset-4 transition-colors hover:text-accent-600"
            >
              Find all our contact details
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
