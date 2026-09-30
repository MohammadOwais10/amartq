import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { CartDrawer } from '@/components/cart/cart-drawer';
import { CartProvider } from '@/components/cart/cart-provider';
import { Reveal } from '@/components/ui/reveal';
import { contact, store } from '@/lib/store';
import { jsonLd } from '@/lib/utils';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  metadataBase: new URL(store.url),
  title: {
    default: `${store.name} — Premium Bed Sheets, Bedding & Home Textiles`,
    template: `%s | ${store.name}`,
  },
  description: store.description,
  applicationName: store.name,
  authors: [{ name: store.legalName }],
  creator: store.legalName,
  publisher: store.legalName,
  category: 'Home & Living',
  keywords: [
    'bed sheets',
    'home textiles',
    'bedding',
    'cushions',
    'curtains',
    'cotton bed sheet',
    'linen bedding',
    'velvet cushion covers',
    'bath towels',
    'Indian home textiles',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: store.name,
    title: `${store.name} — Premium Bed Sheets, Bedding & Home Textiles`,
    description: store.description,
    url: store.url,
    locale: store.locale,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${store.name} — considered textiles for considered homes`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${store.name} — Premium Bed Sheets, Bedding & Home Textiles`,
    description: store.description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { telephone: true, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBF9F6' },
    { media: '(prefers-color-scheme: dark)', color: '#09254A' },
  ],
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: store.name,
  legalName: store.legalName,
  url: store.url,
  logo: `${store.url}/icon`,
  description: store.description,
  foundingDate: String(store.foundedYear),
  email: contact.email,
  telephone: contact.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressLocality: contact.address.city,
    postalCode: contact.address.postalCode,
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: contact.phoneDisplay,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  ],
  sameAs: [
    'https://instagram.com/amartq',
    'https://facebook.com/amartq',
    'https://pinterest.com/amartq',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: store.name,
  url: store.url,
  inLanguage: 'en',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${store.url}/shop?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd([organisationSchema, websiteSchema]),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-brand-900 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <CartProvider>
          <AnnouncementBar />
          <SiteHeader />
          <main id="main">
            <Reveal>{children}</Reveal>
          </main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
