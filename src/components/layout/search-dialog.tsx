'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { search, popularSearches } from '@/lib/search';
import { money } from '@/lib/types';
import { cn } from '@/lib/utils';

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const hits = useMemo(() => (query.trim() ? search(query) : []), [query]);
  const activeIndex = hits.length ? Math.min(active, hits.length - 1) : 0;

  const close = useCallback(() => {
    onClose();
    // Clear on the way out, so reopening always starts from a clean field.
    setQuery('');
    setActive(0);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (!hits.length) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((i) => (i + 1) % hits.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((i) => (i - 1 + hits.length) % hits.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const hit = hits[activeIndex];
        if (hit) {
          close();
          router.push(hit.kind === 'product' ? `/product/${hit.product.slug}` : `/category/${hit.slug}`);
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, hits, activeIndex, close, router]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  const submit = (value: string) => {
    const q = value.trim();
    close();
    router.push(q ? `/shop?q=${encodeURIComponent(q)}` : '/shop');
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-brand-950/45 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        className="relative w-full max-w-2xl bg-white shadow-lift animate-scale-in"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(query);
          }}
          className="flex items-center gap-3 border-b border-sand-200 px-5"
        >
          <Search size={18} className="shrink-0 text-sand-500" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bed sheets, linen, cushions…"
            className="h-16 w-full bg-transparent text-base outline-none placeholder:text-sand-500"
            aria-label="Search products"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close search"
            className="grid size-8 shrink-0 place-items-center text-ink-soft transition-colors hover:text-brand-900"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </form>

        <div className="max-h-[52vh] overflow-y-auto overscroll-contain">
          {!query.trim() && (
            <div className="p-5">
              <p className="eyebrow mb-3 text-sand-500">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="border border-sand-300 px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-brand-900 hover:bg-brand-900 hover:text-white"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && hits.length === 0 && (
            <div className="px-5 py-10 text-center">
              <p className="font-display text-lg text-brand-900">No matches for “{query}”</p>
              <p className="mt-1.5 text-sm text-ink-soft">
                Try a fabric, a room, or a category — or{' '}
                <a
                  href={`/contact`}
                  className="link-underline text-brand-900"
                >
                  ask us on WhatsApp
                </a>
                .
              </p>
            </div>
          )}

          {hits.length > 0 && (
            <ul className="p-2">
              {hits.map((hit, i) => {
                const isActive = i === active;
                if (hit.kind === 'category') {
                  return (
                    <li key={`c-${hit.slug}`}>
                      <Link
                        href={`/category/${hit.slug}`}
                        onClick={close}
                        className={cn(
                          'flex items-center justify-between gap-4 px-3 py-3 transition-colors',
                          isActive ? 'bg-sand-100' : 'hover:bg-sand-50',
                        )}
                      >
                        <span>
                          <span className="eyebrow block text-sand-500">Category</span>
                          <span className="block font-display text-base text-brand-900">
                            {hit.name}
                          </span>
                        </span>
                        <ArrowUpRight size={16} className="text-sand-400" aria-hidden="true" />
                      </Link>
                    </li>
                  );
                }
                const product = hit.product;
                const image = product.colourways[0].images.drape;
                return (
                  <li key={product.id}>
                    <Link
                      href={`/product/${product.slug}`}
                      onClick={close}
                      onMouseEnter={() => setActive(i)}
                      className={cn(
                        'flex items-center gap-4 px-3 py-2.5 transition-colors',
                        isActive ? 'bg-sand-100' : 'hover:bg-sand-50',
                      )}
                    >
                      <span className="relative size-14 shrink-0 overflow-hidden bg-sand-100">
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-sm text-brand-900">
                          {product.name}
                        </span>
                        <span className="block truncate text-xs text-ink-soft">
                          {product.collection} · {product.sizes.slice(0, 2).join(', ')}
                        </span>
                      </span>
                      <span className="shrink-0 text-sm font-semibold tabular-nums text-ink">
                        {money(product.price)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-sand-200 px-5 py-3 text-[11px] text-sand-500">
          <span className="hidden gap-3 sm:flex">
            <kbd className="border border-sand-300 px-1.5 py-0.5">↑</kbd>
            <kbd className="border border-sand-300 px-1.5 py-0.5">↓</kbd>
            <span>navigate</span>
            <kbd className="ml-2 border border-sand-300 px-1.5 py-0.5">↵</kbd>
            <span>select</span>
            <kbd className="ml-2 border border-sand-300 px-1.5 py-0.5">esc</kbd>
            <span>close</span>
          </span>
          <button
            type="button"
            onClick={() => submit(query)}
            className="ml-auto font-semibold tracking-[0.1em] text-brand-900 uppercase hover:text-accent-600"
          >
            See all results
          </button>
        </div>
      </div>
    </div>
  );
}
