import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/catalog';
import { store } from '@/lib/store';

type Collection = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  badge?: 'new' | 'sale' | 'bestseller';
  max?: number;
};

const collections: Collection[] = [
  {
    slug: 'new-in',
    title: 'New In',
    eyebrow: 'Just landed',
    intro:
      'The newest colourways and weaves from our autumn run. Small batches — most sell through in a few weeks.',
    badge: 'new',
  },
  {
    slug: 'bestsellers',
    title: 'Bestsellers',
    eyebrow: 'Customer favourites',
    intro:
      'The pieces our customers reorder, recommend and come back for. If you are unsure where to start, start here.',
    badge: 'bestseller',
  },
  {
    slug: 'sale',
    title: 'On Sale',
    eyebrow: 'Reduced',
    intro:
      'End-of-run colourways and overstock, at up to 30% off. Same fabric, same construction, same guarantee — just fewer left.',
    badge: 'sale',
  },

];

function resolve(collection: Collection) {
  let list = products;
  if (collection.badge) list = list.filter((p) => p.badges.includes(collection.badge!));
  if (collection.max !== undefined) list = list.filter((p) => p.price <= collection.max!);
  return list;
}

/** The collection list is fixed, so unknown slugs are a genuine 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/collections/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return { title: 'Collection not found' };
  return {
    title: collection.title,
    description: collection.intro,
    alternates: { canonical: `/collections/${slug}` },
    openGraph: {
      title: `${collection.title} — ${store.name}`,
      description: collection.intro,
      url: `${store.url}/collections/${slug}`,
    },
  };
}

export default async function CollectionPage({ params }: PageProps<'/collections/[slug]'>) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const list = resolve(collection);

  return (
    <>
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="container-page py-14 lg:py-20">
          <p className="eyebrow mb-3 text-accent-600">{collection.eyebrow}</p>
          <h1 className="text-display text-brand-900">{collection.title}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{collection.intro}</p>
        </div>
      </section>

      <div className="container-page py-12 lg:py-16">
        {list.length === 0 ? (
          <p className="py-20 text-center text-ink-soft">This collection is empty right now.</p>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
            {list.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 8} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
