import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { ArrowDown } from 'lucide-react';
import { ShopView } from '@/components/shop/shop-view';
import { getCategory, getProductsByCategory, visibleCategories as categories } from '@/lib/catalog';
import { store } from '@/lib/store';
import { money } from '@/lib/types';
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

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/category/${slug}` },
    openGraph: {
      title: `${category.name} — ${store.name}`,
      description: category.description,
      url: `${store.url}/category/${slug}`,
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

  const items = getProductsByCategory(slug);
  const count = items.length;

  /* Price span, so the hero can say what this category actually costs. */
  const prices = items.map((p) => p.price);
  const from = prices.length ? Math.min(...prices) : 0;

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

      {/* Category hero ------------------------------------------------
          Type only: category name, how many designs exist, what they cost from,
          and the description. Same ambient wash as PageHero so the two dark
          heroes on the site read as one family. */}
      <section className="relative overflow-hidden border-b border-sand-200 bg-brand-950 text-white">
        {/* Same ambient wash as PageHero, so the two dark heroes on the site
            read as one family. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-[10%] size-[30rem] rounded-full bg-brand-500/12 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-[8%] size-[24rem] rounded-full bg-brand-400/10 blur-3xl"
        />

        <div className="container-page relative py-14 lg:py-20">
          {/* Copy ------------------------------------------------------ */}
          <div>
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-brand-300">
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

            <p className="eyebrow mb-4 text-accent-500">
              {count} {count === 1 ? 'design' : 'designs'}
              {from > 0 && (
                <>
                  <span aria-hidden="true" className="mx-2 text-brand-500">
                    &middot;
                  </span>
                  from {money(from)}
                </>
              )}
            </p>

            <h1 className="text-display text-white">{category.name}</h1>

            <p className="mt-4 max-w-xl font-display text-xl italic leading-snug text-brand-200">
              {category.tagline}
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-brand-200">{category.description}</p>

            <a
              href="#designs"
              className="btn btn-outline mt-9 border-white/25 text-white hover:border-white/50 hover:bg-white/10"
            >
              See all {count}
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Grid — id is the target for the hero's "See all" jump. */}
      <div id="designs" className="scroll-mt-24">
        <Suspense fallback={<CategoryFallback />}>
          <ShopView lockedCategory={slug} />
        </Suspense>
      </div>
    </>
  );
}
