import type { Metadata } from 'next';
import { MessageCircle, Package, PackageCheck, Phone, Truck } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { contact, fulfilment, store } from '@/lib/store';
import { whatsappUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Track Your Order',
  description:
    'Check the status of an AMARTQ order using your order reference and mobile number.',
  alternates: { canonical: '/track-order' },
  robots: { index: true, follow: true },
};

const stages = [
  {
    title: 'Order confirmed',
    body: 'We have your order on WhatsApp and confirmed the details with you.',
    days: 'Same day',
    icon: MessageCircle,
  },
  {
    title: 'Packed',
    body: 'Picked, checked under daylight, folded and boxed.',
    days: 'Within 24 hours',
    icon: Package,
  },
  {
    title: 'Dispatched',
    body: 'Collected by the courier. You get a tracking reference on WhatsApp at this point.',
    days: 'Day 1–2',
    icon: Truck,
  },
  {
    title: 'Out for delivery',
    body: 'The rider contacts you before arriving. Cash on delivery is collected if that is what you chose.',
    days: `Day ${fulfilment.deliveryDays.min}–${fulfilment.deliveryDays.max}`,
    icon: PackageCheck,
  },
];

export default function TrackOrderPage() {
  return (
    <>
      <PageHero
        eyebrow="Order tracking"
        title="Where is my order?"
        intro="Every order reference and courier update lives in the same WhatsApp thread you started. If you have that thread, you already have the tracking — the quickest route to a real answer is to message us with your reference."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Track Your Order' }]}
      />

      <section className="border-b border-sand-200 bg-white">
        <div className="container-page py-14 lg:py-16">
          {/* The action, not the explanation. Someone opening /track-order
              wants a status, so the WhatsApp thread leads and the reasoning
              about portals comes after as reassurance. */}
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
            <div data-reveal>
              <h2 className="text-section text-brand-900">
                Send us your order reference
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                We do not run a tracking portal. That is a deliberate choice, not a missing
                feature: a courier reference inside a chat thread lets you ask a real question,
                change a delivery address, or split an order across two addresses without
                starting again.
              </p>

              <a
                href={whatsappUrl(
                  `Hello ${store.name}! I'd like to check on an order. My order reference is: `,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent mt-8"
              >
                Check my order on WhatsApp
              </a>

              <p className="mt-5 text-xs text-ink-soft">
                We reply with the exact stage and hand over the courier tracking link.
              </p>
            </div>

            {/* Fallbacks, as a side panel. Two ways to be identified, which
                is the actual content — a phone number and a date. */}
            <div className="border border-sand-200 bg-sand-50 p-6 lg:p-7" data-reveal>
              <h3 className="font-display text-lg text-brand-900">Lost the reference?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                No problem. Send us the mobile number you ordered with and the rough date, and we
                will find it.
              </p>
              <a
                href={`tel:${contact.whatsapp}`}
                className="mt-5 inline-flex items-center gap-2.5 font-display text-lg text-brand-900 transition-colors hover:text-accent-600"
              >
                <Phone size={17} aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stages ------------------------------------------------------ */}
      <section className="container-page py-16 lg:py-24">
        <div className="mb-12 max-w-2xl" data-reveal>
          <p className="eyebrow mb-3 text-accent-600">What to expect</p>
          <h2 className="text-section text-brand-900">Four stages, and when each happens</h2>
        </div>

        {/* Four stages run left-to-right as a stepper. The track is one
            relative wrapper holding an absolutely-positioned rule that spans
            the full width at icon-centre height; each stage sits on top of
            it. A flex-1 rule inside each card could never reach the next
            card's icon, which left a gap at every column boundary. */}
        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Connector, behind the icons. lg-only because on stacked layouts a
              horizontal rule would read as a divider between cards. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-6 hidden h-px bg-sand-300 lg:block"
          />

          {stages.map((s) => (
            <li key={s.title} className="relative flex flex-col" data-reveal>
              <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-accent-300 bg-sand-50 text-accent-600">
                <s.icon size={20} />
              </span>

              <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-sand-500 uppercase tabular-nums">
                {s.days}
              </p>
              <h3 className="mt-2 font-display text-xl text-brand-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>

        {/* Full width, no column-offset maths. The last stage is the one
            people actually wait on, so it gets the emphasis. */}
        <div
          className="mt-12 flex flex-col gap-3 border-l-2 border-accent-500 bg-sand-50 px-6 py-6 sm:flex-row sm:items-center sm:gap-6"
          data-reveal
        >
          <p className="font-display text-lg text-brand-900">Need it sooner?</p>
          <p className="text-sm leading-relaxed text-ink-soft">
            Deliveries land between{' '}
            <span className="font-semibold text-brand-900">
              {fulfilment.deliveryDays.min} and {fulfilment.deliveryDays.max} working days
            </span>{' '}
            after dispatch, nationwide. Message us before the order is packed and we will tell you
            honestly whether an earlier slot is possible.
          </p>
        </div>
      </section>
    </>
  );
}
