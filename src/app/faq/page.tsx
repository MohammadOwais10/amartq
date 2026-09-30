import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/ui/page-hero';
import { fulfilment, store } from '@/lib/store';
import { whatsappUrl } from '@/lib/whatsapp';
import { jsonLd } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers about AMARTQ delivery, returns, sizing, fabric care, payment, custom orders and how to order on WhatsApp.',
  alternates: { canonical: '/faq' },
};

type Faq = { q: string; a: string[] };
const groups: { title: string; items: Faq[] }[] = [
  {
    title: 'Ordering',
    items: [
      {
        q: 'How do I place an order?',
        a: [
          'Add what you want to your bag and go to checkout. Fill in your name, mobile number and address, and we will build your order as a WhatsApp message on your own phone. You confirm it with our team, agree how you want to pay, and we dispatch.',
          'There is no account to create and no card details are collected on this site.',
        ],
      },
      {
        q: 'Do I need an account?',
        a: [
          'No. An account would give you order tracking, but we are a small team and a WhatsApp thread with a named person does the same job better. We keep your order history against your mobile number, so we always know what you sent last time.',
        ],
      },
      {
        q: 'Can I order a colourway that is not shown?',
        a: [
          'Often, yes. We keep four to six dye lots alive for most fabrics. Message us with the product and the colour you have in mind and we will tell you honestly whether it is in stock, needs a new run, or is not something we can make.',
        ],
      },
    ],
  },
  {
    title: 'Delivery',
    items: [
      {
        q: 'How much is delivery and how long does it take?',
        a: [
          `Standard delivery is ${store.currencySymbol} ${fulfilment.standardShipping} and takes ${fulfilment.deliveryDays.min} to ${fulfilment.deliveryDays.max} working days. Orders over ${store.currencySymbol} ${fulfilment.freeShippingThreshold.toLocaleString(store.locale)} ship free.`,
          'Express delivery is available in Jaipur, Delhi, Mumbai and Bengaluru for ' +
            store.currencySymbol +
            ' ' +
            (fulfilment.standardShipping + fulfilment.expressSurcharge) +
            ' and arrives in 1 to 2 working days if you order before 2pm.',
        ],
      },
      {
        q: 'Do you deliver outside India?',
        a: [
          'Not at present. We deliver across India only — all 28 states and 8 union territories, including the North East, Jammu & Kashmir and Ladakh. We are not able to ship outside India, so please do not send payment for an international order.',
        ],
      },
      {
        q: 'Can I track my order?',
        a: [
          'Yes. Every order gets a courier reference by WhatsApp as soon as it leaves us, and the same thread carries the delivery updates. You can also check a status any time on our track your order page.',
        ],
      },
    ],
  },
  {
    title: 'Returns & exchanges',
    items: [
      {
        q: 'What is your returns policy?',
        a: [
          `You have ${fulfilment.returnWindowDays} days from delivery to return anything unwashed, unused and in its original packaging. We cover the return courier, so the return costs you nothing.`,
          'Refunds land back with your original payment method within 5 to 7 working days of the item reaching us. Full detail is on our returns policy page.',
        ],
      },
      {
        q: 'Can I exchange for a different size?',
        a: [
          'Yes, and it is more common than a refund. We will hold the replacement for you while the original is in transit so you are not without a sheet in the meantime.',
        ],
      },
      {
        q: 'What if something arrives faulty?',
        a: [
          'Send us a photo and we will replace it on the next dispatch, no return needed for anything with a manufacturing fault. That includes seams, hems and zips.',
        ],
      },
    ],
  },
  {
    title: 'Fabric & care',
    items: [
      {
        q: 'Will sheets shrink on the first wash?',
        a: [
          'We pre-wash everything before it leaves the mill, so shrinkage on a gentle first wash is minimal. Wash at 40°C, not hot, and line dry in shade, and you will see under 2% for cotton and almost none for linen.',
        ],
      },
      {
        q: 'Why does linen crease so much?',
        a: [
          'Because that is what linen does, and it is the reason we love it. Linen is a stiff plain-weave fibre that relaxes as it moves. Hang it, do not iron it, and the creases soften into character within a few weeks.',
        ],
      },
      {
        q: 'How do I stop colour fading?',
        a: [
          'Wash dark colours separately for the first three washes, and never dry them in direct sun. UV is far more damaging to dye than washing temperature.',
        ],
      },
    ],
  },
  {
    title: 'Payment',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: [
          'Cash on delivery anywhere we deliver, UPI for advance orders, and bank transfer for larger purchases. We confirm the method with you on WhatsApp before dispatch.',
        ],
      },
      {
        q: 'Is it safe to pay on WhatsApp?',
        a: [
          'We never ask for your card details, PIN or OTP on WhatsApp and we never will. Advance payment is by bank transfer to an account in the business name, and we send you the transfer receipt.',
        ],
      },
    ],
  },
];

export default function FaqPage() {
  const flat = groups.flatMap((g) => g.items);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: flat.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a.join(' ') },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      <PageHero
        eyebrow="Help"
        title="Questions, answered properly"
        intro="The things people actually ask us. If yours is not here, message us — we would rather have the conversation than have you guess."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]}
      />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[16rem_1fr] lg:gap-20 lg:py-24">
        {/* Group nav ------------------------------------------------- */}
        <nav aria-label="FAQ sections" className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-4 text-sand-500">Sections</p>
          <ul className="space-y-1.5">
            {groups.map((g) => (
              <li key={g.title}>
                <a
                  href={`#${g.title.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                  className="block text-sm text-ink-soft transition-colors hover:text-accent-600"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 border border-sand-200 bg-white p-5">
            <p className="text-sm font-semibold text-brand-900">Still stuck?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              We answer WhatsApp messages ourselves, usually within the hour.
            </p>
            <a href={whatsappUrl(`Hello ${store.name}! I have a question about a product.`)} className="btn btn-outline mt-4 w-full">
              Message us
            </a>
          </div>
        </nav>

        {/* Answers --------------------------------------------------- */}
        <div className="space-y-14">
          {groups.map((g) => (
            <section
              key={g.title}
              id={g.title.toLowerCase().replace(/[^a-z]+/g, '-')}
              className="scroll-mt-28"
            >
              <h2 className="text-section border-b border-sand-200 pb-4 text-brand-900">
                {g.title}
              </h2>
              <dl className="mt-2 divide-y divide-sand-200">
                {g.items.map((i) => (
                  <div key={i.q} className="py-6">
                    <dt className="font-display text-lg text-brand-900">{i.q}</dt>
                    <dd className="mt-2.5 space-y-3 leading-relaxed text-ink-soft">
                      {i.a.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}

          <div className="rounded-sm border border-sand-200 bg-sand-100 p-7">
            <h2 className="font-display text-xl text-brand-900">Not answered here?</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">
              Send the question on WhatsApp and you will get a straight answer from someone who
              works here, not a ticket number.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl(`Hello ${store.name}! I have a question about a product.`)} className="btn btn-accent">
                Message on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-outline">
                Other ways to reach us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
