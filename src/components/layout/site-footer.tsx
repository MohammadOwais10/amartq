import Link from 'next/link';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { BrandMark } from '@/components/ui/brand-mark';
import { PaymentMethods } from '@/components/ui/payment-methods';
import { contact, nav, store } from '@/lib/store';
import { whatsappUrl } from '@/lib/whatsapp';

/**
 * Shop destinations are merchandised collections, not the catalogue's category
 * slugs — those are filter buckets for bed-sheet types ("Printed Bedsheet",
 * "Block Print Bedsheet") and read as internal taxonomy in site navigation.
 * The header already exposes categories for drilling down; the footer links to
 * intent. Slugs must exist in app/collections/[slug]/page.tsx.
 */
const shopLinks = [
  { label: 'All Products', href: '/shop' },
  { label: 'New In', href: '/collections/new-in' },
  { label: 'Bestsellers', href: '/collections/bestsellers' },
  { label: 'Sale', href: '/collections/sale' },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-950 text-brand-100">
      <TopRule />

      {/* Primary ------------------------------------------------------------ */}
      <div className="container-page grid gap-x-8 gap-y-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${store.name} — home`} className="inline-block">
            <BrandMark tone="light" height={48} />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-300">
            {store.tagline} {store.description}
          </p>

          <address className="mt-7 not-italic">
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl(`Hello ${store.name}! I have a question.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-brand-200 transition-colors hover:text-accent-500"
                >
                  <MessageCircle size={15} aria-hidden="true" className="shrink-0" />
                  <span className="sr-only">WhatsApp </span>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneDisplay.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2.5 text-brand-200 transition-colors hover:text-accent-500"
                >
                  <Phone size={15} aria-hidden="true" className="shrink-0" />
                  <span className="sr-only">Call </span>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-brand-300">
                <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.city}, Distt. {contact.address.district}
                  <br />
                  {contact.address.state} {contact.address.postalCode}
                </span>
              </li>
            </ul>
          </address>

      
        </div>

        <FooterColumn title="Shop" className="lg:col-span-2">
          {shopLinks.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Company" className="lg:col-span-2">
          {nav.company.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Help" className="lg:col-span-2">
          {nav.help.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Legal" className="lg:col-span-2">
          {nav.legal.map((l) => (
            <FooterLink key={l.href} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterColumn>
      </div>

      {/* Payments & legal --------------------------------------------------- */}
      <div className="border-t border-white/8">
        <div className="container-page flex flex-col items-start gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className="eyebrow shrink-0 text-brand-400">We accept</h2>
            <PaymentMethods />
          </div>

          <p className="text-xs text-brand-100 sm:text-right">
            &copy; {year} {store.legalName}. All rights reserved.
            <span className="mx-2 text-brand-500" aria-hidden="true">
              &middot;
            </span>
            <Link href="/policies/privacy" className="transition-colors hover:text-accent-500">
              Privacy
            </Link>
            <span className="mx-2 text-brand-500" aria-hidden="true">
              &middot;
            </span>
            <Link href="/policies/terms" className="transition-colors hover:text-accent-500">
              Terms
            </Link>
          </p>
          <p className="mt-1.5 text-xs text-brand-100 sm:text-right">
            GSTIN {contact.gstin}
          </p>
        </div>
      </div>

    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <nav className={className} aria-label={title}>
      <h2 className="eyebrow mb-4 text-brand-400">{title}</h2>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </nav>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-brand-200 transition-colors hover:text-accent-500">
        {children}
      </Link>
    </li>
  );
}

/**
 * Full-bleed light rule that gives the footer a top edge. The band above the
 * footer is also brand-950 on most routes, so without this the two read as one
 * continuous block.
 *
 * A warm-to-cool sweep across the lightest steps of the brand palette —
 * accent-200 through sand-50 to brand-100. Deliberately not a tricolour: the
 * saffron/white/green arrangement is India's national flag, which the National
 * Flag Code of India restricts, so it is not used here.
 */
/**
 * Plain orange rule. accent-500 is the logo's own orange (the warm pixels in
 * amartq-logo.png sit at #fc6801), so this is the brand colour sampled rather
 * than invented. Kept flat and thin — a glow or a fade here reads as a smudge
 * against the navy.
 */
function TopRule() {
  return <div aria-hidden="true" className="h-1.5 w-full bg-accent-500" />;
}
