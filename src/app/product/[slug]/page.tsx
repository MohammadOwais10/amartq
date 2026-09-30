import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ProductDetail } from '@/components/product/product-detail';
import { ProductCard } from '@/components/product/product-card';
import { getProduct, products } from '@/lib/catalog';
import { store } from '@/lib/store';
import { jsonLd } from '@/lib/utils';


/**
 * The catalogue is driven by user photography, so the set of valid slugs is
 * known at build time. Anything outside it is a genuine 404 rather than a
 * 200 with a not-found body.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/product/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Product not found' };

  const image = product.colourways[0].images.drape;
  const description = `${product.shortDescription} ${product.specifications[0]?.label ?? ''}: ${product.specifications[0]?.value ?? ''}.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      type: 'website',
      title: `${product.name} — ${store.name}`,
      description,
      url: `${store.url}/product/${product.slug}`,
      images: [{ url: image, width: 1200, height: 1500, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description,
      images: [image],
    },
  };
}

export default async function ProductPage({ params }: PageProps<'/product/[slug]'>) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug)
    .map((p) => ({
      product: p,
      score:
        (p.category === product.category ? 4 : 0) +
        (p.collection === product.collection ? 3 : 0) +
        p.tags.filter((t) => product.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((r) => r.product);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    sku: product.sku,
    mpn: product.id,
    image: product.colourways.map((c) => `${store.url}${c.images.drape}`),
    brand: { '@type': 'Brand', name: store.name },
    category: product.category,
    material: product.specifications[0]?.value,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      '@type': 'Offer',
      url: `${store.url}/product/${product.slug}`,
      priceCurrency: store.currency,
      price: product.price,
      availability:
        product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: store.legalName },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: store.url },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${store.url}/shop` },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.category,
        item: `${store.url}/category/${product.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.name,
        item: `${store.url}/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd([productSchema, breadcrumbSchema]) }}
      />
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-white py-16 lg:py-20">
          <div className="container-page">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-section text-brand-900">Pairs well with</h2>
              <Link
                href={`/category/${product.category}`}
                className="text-[11px] font-semibold tracking-[0.14em] text-brand-900 uppercase transition-colors hover:text-accent-600"
              >
                More {product.category} →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} showQuickAdd />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
