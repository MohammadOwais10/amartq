import Link from 'next/link';
import { Home, Search, ShoppingBag } from 'lucide-react';
import { visibleCategories as categories } from '@/lib/catalog';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col justify-center py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-6xl text-sand-300">404</p>
        <h1 className="mt-6 text-display text-brand-900">
          This page has been washed out of the load
        </h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          The link you followed does not lead anywhere, or the page has moved. The collection is
          still here, though.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/shop" className="btn btn-primary">
            <Search size={15} aria-hidden="true" />
            Search the collection
          </Link>
          <Link href="/" className="btn btn-outline">
            <Home size={15} aria-hidden="true" />
            Back to home
          </Link>
        </div>

        <div className="mt-14 border-t border-sand-200 pt-8">
          <p className="eyebrow mb-4 text-sand-500">Or start with a category</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/category/${c.slug}`}
                  className="inline-flex items-center gap-1.5 border border-sand-300 px-3.5 py-1.5 text-xs text-ink-soft transition-colors hover:border-brand-900 hover:text-brand-900"
                >
                  <ShoppingBag size={12} aria-hidden="true" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
