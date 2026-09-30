import type { Metadata } from 'next';
import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { contact, social, store } from '@/lib/store';
import { whatsappUrl } from '@/lib/whatsapp';
import { jsonLd } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Talk to the AMARTQ team on WhatsApp or by phone. We answer every message ourselves, usually within the hour.`,
  alternates: { canonical: '/contact' },
};

const faqs = [
  {
    q: 'What is the fastest way to reach us?',
    a: 'WhatsApp. It is the same channel we use to confirm orders, so you will get an answer from a person who can actually action it.',
  },
  {
    q: 'How quickly will I hear back?',
    a: 'Most messages get a reply within the hour. Orders and after-sales questions are prioritised, so if it is urgent, say so in the message.',
  },
  {
    q: 'Can I order in bulk or for a hotel?',
    a: 'Yes. Use the bespoke form on the Bespoke & Bulk page, or message us directly with your room count and sizes.',
  },
];

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${store.url}/contact`,
    name: store.name,
    description: store.description,
    url: store.url,
    image: `${store.url}/images/websiteimgs/about-bg.png`,
    telephone: contact.phoneDisplay,
    sameAs: social.map((s) => s.href),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contact.phoneDisplay,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      <PageHero
        eyebrow="Contact"
        title="Talk to someone who can help"
        intro="No ticketing system, no chatbot. Messages go to the same small team that designs and stocks the products, and we answer most within the hour."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        tone="dark"
      />

      {/* Primary channel -------------------------------------------
          WhatsApp gets the whole band because it is the only channel the
          copy promises an hourly answer on. Phone and location drop to a
          compact row underneath, so the page has one loud action instead of
          three equal ones. */}
      <section className="border-b border-sand-200 bg-white">
        <div className="container-page py-14 lg:py-16">
          <a
            href={whatsappUrl(`Hello ${store.name}! I'd like to ask about a product.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-6 border border-sand-200 bg-sand-50 p-7 transition-colors hover:border-success/40 hover:bg-success/[0.03] sm:flex-row sm:items-center sm:p-8"
            data-reveal
          >
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-success/10 text-success">
              <MessageCircle size={24} aria-hidden="true" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-display text-2xl text-brand-900">Message us on WhatsApp</span>
                <span className="bg-success/10 px-2 py-0.5 text-xs text-success">Fastest reply</span>
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                Product questions, order changes, custom sizes. {contact.phoneDisplay} &mdash; the
                same channel we confirm orders on, so you reach someone who can actually action it.
              </span>
            </span>

            <span className="btn btn-primary shrink-0">
              Open WhatsApp
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>

          {/* Secondary channels — inline, not cards. They are fallbacks,
              so they should read as quieter than the primary. */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2" data-reveal>
            <a
              href={`tel:${contact.whatsapp}`}
              className="group flex h-full items-start gap-4 border border-sand-200 bg-white p-6 transition-colors hover:border-brand-900/25"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sand-200 text-brand-900 transition-colors group-hover:bg-sand-300">
                <Phone size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg text-brand-900">Call us</span>
                <span className="mt-1 block text-sm text-ink-soft">
                  {contact.phoneDisplay} &mdash; {contact.hours[0].days}, {contact.hours[0].time}.
                  Faster on WhatsApp.
                </span>
              </span>
            </a>
            <div className="flex h-full items-start gap-4 border border-sand-200 bg-white p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sand-200 text-brand-900">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg text-brand-900">Where we are</span>
                <span className="mt-1 block text-sm text-ink-soft">
                  {contact.address.city}, Distt. {contact.address.district}, {contact.address.state}{' '}
                  {contact.address.postalCode}. Dispatches from here across India.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick answers + social ------------------------------------- */}
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
        {/* Left rail carries the routing promise and the social links, so
            the Q&A column is left with a single job. */}
        <div data-reveal>
          <h2 className="text-section text-brand-900">Quick answers</h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Most questions are answered before you need to ask. If yours is not here, message us
            and a person will pick it up.
          </p>

          <div className="mt-8 border-t border-sand-200 pt-8">
            <h3 className="eyebrow text-accent-600">Follow along</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-sand-300 px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-brand-900 hover:text-brand-900"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Three short Q&As as cards. A divided list reads as a legal page;
            these are conversational, so they stay open and legible. */}
        <ul className="space-y-px bg-sand-200" data-reveal>
          {faqs.map((f) => (
            <li key={f.q} className="bg-white p-6 lg:p-7">
              <h3 className="font-display text-lg text-brand-900">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
