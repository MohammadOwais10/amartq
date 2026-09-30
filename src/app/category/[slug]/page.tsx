import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Check } from 'lucide-react';
import { ShopView } from '@/components/shop/shop-view';
import { getCategory, getProductsByCategory, visibleCategories as categories } from '@/lib/catalog';
import { categoryArt } from '@/lib/generated/images';
import { store } from '@/lib/store';
import { jsonLd } from '@/lib/utils';

/** Categories without any photographed product are not valid routes. */
export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/category/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: 'Category not found' };

  const art = categoryArt[slug];
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/category/${slug}` },
    openGraph: {
      title: `${category.name} — ${store.name}`,
      description: category.description,
      url: `${store.url}/category/${slug}`,
      images: art ? [{ url: art.image, width: 1400, height: 1000, alt: category.name }] : undefined,
    },
  };
}

function CategoryFallback() {
  return (
    <div className="container-page py-10 lg:py-14">
      <div className="skeleton mb-4 h-3 w-24" />
      <div className="skeleton mb-10 h-12 w-80" />
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="space-y-3">
            <div className="skeleton aspect-4/5" />
            <div className="skeleton h-3.5 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function CategoryPage({ params }: PageProps<'/category/[slug]'>) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const art = categoryArt[slug];
  const count = getProductsByCategory(slug).length;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: store.url },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${store.url}/shop` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `${store.url}/category/${slug}` },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: `${store.url}/category/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd([breadcrumbSchema, collectionSchema]) }}
      />

      {/* Category hero ------------------------------------------------ */}
      <section className="relative overflow-hidden border-b border-sand-200 bg-brand-950 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-xs text-brand-300">
                <li>
                  <Link href="/" className="transition-colors hover:text-accent-500">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/shop" className="transition-colors hover:text-accent-500">
                    Shop
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  {category.name}
                </li>
              </ol>
            </nav>

            <p className="eyebrow mb-3 text-accent-500">
              {count} {count === 1 ? 'product' : 'products'}
            </p>
            <h1 className="text-display text-white">{category.name}</h1>
            <p className="mt-3 max-w-lg font-display text-lg italic text-brand-200">
              {category.tagline}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-brand-200">
              {category.description}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
              {category.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-brand-100">
                  <Check className="text-accent-500" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {category.sizes.map((s) => (
                <span
                  key={s}
                  className="border border-white/20 px-2.5 py-1 text-[11px] font-medium text-brand-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {art && (
            <div className="relative min-h-72 lg:min-h-full" data-reveal>
              <Image
                src={art.image}
                alt={`${category.name} by ${store.name}`}
                fill
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/20 to-transparent lg:block"
              />
            </div>
          )}
        </div>
      </section>

      <Suspense fallback={<CategoryFallback />}>
        <ShopView lockedCategory={slug} />
      </Suspense>
    </>
  );
}
