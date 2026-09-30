import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products, visibleCategories as categories } from '@/lib/catalog';

export function CategoryGrid() {
  return (
    <section className="container-page py-20 lg:py-28">
      <header className="mb-10 flex flex-wrap items-end justify-between gap-6" data-reveal>
        <div className="max-w-xl">
          <p className="eyebrow mb-3 text-accent-600">Shop by category</p>
          <h2 className="text-section text-brand-900">
            Everything a room needs, in one palette
          </h2>
        </div>
        <Link
          href="/shop"
          className="group inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-brand-900 uppercase transition-colors hover:text-accent-600"
        >
          All products
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => {
          // The tile shows a real photograph from the category, so the home
          // page is only ever displaying the customer's own product imagery.
          const inCategory = products.filter((p) => p.category === category.slug);
          const tile = inCategory[0];
          if (!tile?.colourways[0]?.images.drape) return null;
          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={`group relative flex flex-col justify-end overflow-hidden bg-sand-200 ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
            >
              <div
                className={
                  i === 0
                    ? 'relative aspect-4/5 lg:aspect-auto lg:h-full lg:min-h-[34rem]'
                    : 'relative aspect-16/10'
                }
              >
                <Image
                  src={tile.colourways[0].images.drape}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/88 via-brand-950/28 to-transparent"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                <p className="eyebrow mb-2 text-accent-400">{inCategory.length} designs</p>
                <h3 className="font-display text-2xl text-white lg:text-3xl">
                  {category.name}
                </h3>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-brand-100/90 line-clamp-2-safe">
                  {category.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase">
                  Explore
                  <ArrowRight
                    size={13}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
