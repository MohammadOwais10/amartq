'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, Check, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { getCategory, products } from '@/lib/catalog';
import {
  applyFilters,
  countActiveFilters,
  emptyFilters,
  getFacets,
  parseSearchParams,
  priceBandLabel,
  priceBands,
  sortOptions,
  toSearchParams,
  type ShopFilters,
  type SortKey,
} from '@/lib/facets';
import { ProductCard } from '@/components/product/product-card';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 12;

function useFilterState() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => parseSearchParams(Object.fromEntries(searchParams.entries())),
    [searchParams],
  );

  const setFilters = useCallback(
    (next: ShopFilters, opts?: { replace?: boolean }) => {
      const params = toSearchParams(next);
      const qs = params.toString();
      const url = qs ? `${pathname}?${qs}` : pathname;
      if (opts?.replace) router.replace(url, { scroll: false });
      else router.push(url, { scroll: false });
    },
    [router, pathname],
  );

  const patch = useCallback(
    (partial: Partial<ShopFilters>) => setFilters({ ...filters, ...partial }),
    [filters, setFilters],
  );

  const toggle = useCallback(
    (key: 'category' | 'size' | 'colour' | 'material' | 'badge', value: string) => {
      const current = filters[key];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      setFilters({ ...filters, [key]: next });
    },
    [filters, setFilters],
  );

  const clear = useCallback(() => {
    const keepSort = filters.sort;
    const keepQuery = filters.query;
    setFilters({ ...emptyFilters, sort: keepSort, query: keepQuery });
  }, [filters.sort, filters.query, setFilters]);

  return { filters, patch, toggle, clear, setFilters };
}

function FilterGroup({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand-200 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="eyebrow text-brand-900">{title}</span>
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={cn('text-sand-400 transition-transform duration-300', open && 'rotate-180')}
        />
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
  count,
  swatch,
}: {
  checked: boolean;
  onChange: () => void;
  label: React.ReactNode;
  count?: number;
  swatch?: string;
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-3 py-1.5">
      <span className="relative grid size-4 shrink-0 place-items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={cn(
            'grid size-4 place-items-center border transition-all duration-200',
            checked
              ? 'border-brand-900 bg-brand-900'
              : 'border-sand-400 bg-white group-hover:border-brand-700',
          )}
        >
          {checked && <Check size={11} className="text-white" strokeWidth={3} />}
        </span>
      </span>
      {swatch && (
        <span
          className="size-3.5 shrink-0 rounded-full ring-1 ring-black/10"
          style={{ backgroundColor: swatch }}
          aria-hidden="true"
        />
      )}
      <span
        className={cn(
          'flex-1 text-sm transition-colors',
          checked ? 'font-medium text-brand-900' : 'text-ink-soft group-hover:text-brand-900',
        )}
      >
        {label}
      </span>
      {count !== undefined && (
        <span className="text-xs text-sand-500 tabular-nums">{count}</span>
      )}
    </label>
  );
}

function FilterPanel({
  filters,
  patch,
  toggle,
  clear,
  onNavigate,
  lockedCategory,
}: {
  filters: ShopFilters;
  patch: (p: Partial<ShopFilters>) => void;
  toggle: (k: 'category' | 'size' | 'colour' | 'material' | 'badge', v: string) => void;
  clear: () => void;
  onNavigate?: () => void;
  /** Set on a category page, where the route already decides the category. */
  lockedCategory?: string;
}) {
  const facets = getFacets();
  const active = countActiveFilters(filters);

  return (
    <div className="px-5 pb-8">
      <div className="flex items-center justify-between border-b border-sand-200 py-4">
        <p className="eyebrow text-brand-900">
          Filters{active > 0 && <span className="ml-1.5 text-accent-600">({active})</span>}
        </p>
        {active > 0 && (
          <button
            type="button"
            onClick={clear}
            className="text-xs text-ink-soft transition-colors hover:text-accent-600"
          >
            Clear all
          </button>
        )}
      </div>

      {/* On a category page the route owns the category, so a category
          checkbox would be ignored — tapping it would change the URL and
          nothing else. These are real links that navigate instead. */}
      {lockedCategory ? (
        <FilterGroup title="Category">
          <p className="mb-2 text-xs text-sand-500">Switch category</p>
          <ul className="space-y-0.5">
            {facets.categories.map((c) => {
              const isCurrent = c.value === lockedCategory;
              return (
                <li key={c.value}>
                  <Link
                    href={`/category/${c.value}`}
                    aria-current={isCurrent ? 'page' : undefined}
                    onClick={onNavigate}
                    className={cn(
                      'group flex items-center justify-between gap-2 border-l-2 py-1.5 pl-2.5 pr-1 text-sm transition-colors',
                      isCurrent
                        ? 'border-accent-600 font-medium text-brand-900'
                        : 'border-transparent text-ink-soft hover:border-sand-400 hover:text-brand-900',
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      {isCurrent && <Check size={12} className="text-accent-600" />}
                      {getCategory(c.value)?.name ?? c.value}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-xs text-sand-500 tabular-nums">{c.count}</span>
                      <ArrowRight
                        size={12}
                        aria-hidden="true"
                        className="text-sand-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-900"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </FilterGroup>
      ) : (
        <FilterGroup title="Category">
          {facets.categories.map((c) => (
            <Checkbox
              key={c.value}
              checked={filters.category.includes(c.value)}
              onChange={() => toggle('category', c.value)}
              label={getCategory(c.value)?.name ?? c.value}
              count={c.count}
            />
          ))}
        </FilterGroup>
      )}

      <FilterGroup title="Price">
        <div className="space-y-1">
          {priceBands.map((band) => {
            const activeBand =
              filters.minPrice === band.min && filters.maxPrice === band.max;
            return (
              <label
                key={band.label}
                className="flex cursor-pointer items-center gap-3 py-1.5"
              >
                <input
                  type="radio"
                  name="price-band"
                  checked={activeBand}
                  onChange={() => patch({ minPrice: band.min, maxPrice: band.max })}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    'grid size-4 shrink-0 place-items-center rounded-full border transition-all',
                    activeBand
                      ? 'border-brand-900'
                      : 'border-sand-400 peer-hover:border-brand-700',
                  )}
                >
                  {activeBand && <span className="size-2 rounded-full bg-brand-900" />}
                </span>
                <span
                  className={cn(
                    'flex-1 text-sm transition-colors',
                    activeBand ? 'font-medium text-brand-900' : 'text-ink-soft',
                  )}
                >
                  {band.label}
                </span>
              </label>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-sand-500">
          Showing {priceBandLabel(filters.minPrice, filters.maxPrice)}
        </p>
      </FilterGroup>

      <FilterGroup title="Pattern">
        {facets.materials.map((m) => (
          <Checkbox
            key={m.value}
            checked={filters.material.includes(m.value)}
            onChange={() => toggle('material', m.value)}
            label={m.label}
            count={m.count}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Size">
        <div className="flex flex-wrap gap-2">
          {facets.sizes.map((s) => {
            const on = filters.size.includes(s.value);
            return (
              <button
                key={s.value}
                type="button"
                onClick={() => toggle('size', s.value)}
                aria-pressed={on}
                className={cn(
                  'border px-2.5 py-1.5 text-xs font-medium transition-colors',
                  on
                    ? 'border-brand-900 bg-brand-900 text-white'
                    : 'border-sand-300 text-ink-soft hover:border-brand-700 hover:text-brand-900',
                )}
              >
                {s.value}
              </button>
            );
          })}
        </div>
      </FilterGroup>

      <FilterGroup title="Availability">
        <Checkbox
          checked={filters.inStock}
          onChange={() => patch({ inStock: !filters.inStock })}
          label="In stock only"
        />
        {facets.badges.map((b) => (
          <Checkbox
            key={b.value}
            checked={filters.badge.includes(b.value)}
            onChange={() => toggle('badge', b.value)}
            label={b.label}
            count={b.count}
          />
        ))}
      </FilterGroup>

      <div className="border-t border-sand-200 pt-5 lg:hidden">
        <button
          type="button"
          onClick={onNavigate}
          className="btn btn-primary w-full"
        >
          Show results
        </button>
      </div>
    </div>
  );
}

function ActiveChips({
  filters,
  patch,
  toggle,
  clear,
}: {
  filters: ShopFilters;
  patch: (p: Partial<ShopFilters>) => void;
  toggle: (k: 'category' | 'size' | 'colour' | 'material' | 'badge', v: string) => void;
  clear: () => void;
}) {
  const chips: { label: string; onRemove: () => void }[] = [];
  filters.category.forEach((v) =>
    chips.push({
      label: getCategory(v)?.name ?? v,
      onRemove: () => toggle('category', v),
    }),
  );
  filters.badge.forEach((v) =>
    chips.push({
      label: { new: 'New in', sale: 'On sale', bestseller: 'Bestseller', limited: 'Limited' }[v] ?? v,
      onRemove: () => toggle('badge', v),
    }),
  );
  filters.material.forEach((v) =>
    chips.push({ label: v, onRemove: () => toggle('material', v) }),
  );
  filters.colour.forEach((v) => chips.push({ label: v, onRemove: () => toggle('colour', v) }));
  filters.size.forEach((v) => chips.push({ label: v, onRemove: () => toggle('size', v) }));
  if (filters.minPrice !== null || filters.maxPrice !== null) {
    chips.push({
      label: priceBandLabel(filters.minPrice, filters.maxPrice),
      onRemove: () => patch({ minPrice: null, maxPrice: null }),
    });
  }
  if (filters.inStock) chips.push({ label: 'In stock', onRemove: () => patch({ inStock: false }) });
  if (filters.query.trim()) {
    chips.push({ label: `“${filters.query.trim()}”`, onRemove: () => patch({ query: '' }) });
  }

  if (!chips.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <button
          key={chip.label}
          type="button"
          onClick={chip.onRemove}
          className="inline-flex items-center gap-1.5 border border-sand-300 bg-white px-2.5 py-1.5 text-xs text-ink-soft transition-colors hover:border-brand-900 hover:text-brand-900"
        >
          {chip.label}
          <X size={11} aria-hidden="true" />
          <span className="sr-only">Remove filter</span>
        </button>
      ))}
      {chips.length > 1 && (
        <button
          type="button"
          onClick={clear}
          className="ml-1 text-xs text-ink-soft underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
        >
          Clear all
        </button>
      )}
    </div>
  );
}

export function ShopView({
  lockedCategory,
  heading,
  intro,
}: {
  lockedCategory?: string;
  heading?: string;
  intro?: string;
}) {
  const { filters, patch, toggle, clear } = useFilterState();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const topRef = useRef<HTMLDivElement>(null);

  // A category page is scoped by its route, not by the category facet, so the
  // facet is emptied here. Forcing it to [lockedCategory] instead would make
  // the filter look permanently active, and would let a stale ?category= in the
  // URL masquerade as a real selection. The product list is pre-scoped below.
  const effective: ShopFilters = useMemo(
    () => (lockedCategory ? { ...filters, category: [] } : filters),
    [filters, lockedCategory],
  );

  const results = useMemo(
    () => applyFilters(lockedCategory ? products.filter((p) => p.category === lockedCategory) : products, effective),
    [effective, lockedCategory],
  );

  // Reset pagination when the query changes, adjusting during render rather than
  // in an effect so we never flash a stale page of results.
  const queryKey = JSON.stringify(effective) + (lockedCategory ?? '');
  const [lastQueryKey, setLastQueryKey] = useState(queryKey);
  if (lastQueryKey !== queryKey) {
    setLastQueryKey(queryKey);
    setVisible(PAGE_SIZE);
  }

  useEffect(() => {
    if (!drawerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [drawerOpen]);

  const activeCount = countActiveFilters(effective);
  const shown = results.slice(0, visible);
  const title = heading ?? (filters.query ? `Results for “${filters.query}”` : 'All Products');

  return (
    <div ref={topRef} className="container-page py-10 lg:py-14">
      {/* Heading --------------------------------------------------- */}
      <div className="mb-8">
        {heading && <p className="eyebrow mb-3 text-accent-600">Shop</p>}
        <h1 className="text-display text-brand-900">{title}</h1>
        {intro ? (
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{intro}</p>
        ) : (
          <p className="mt-3 text-sm text-ink-soft">
            {results.length} {results.length === 1 ? 'product' : 'products'}
            {lockedCategory
              ? ` in ${getCategory(lockedCategory)?.name.toLowerCase()}`
              : ' in the AMARTQ collection'}
          </p>
        )}
      </div>

      <div className="grid gap-10 lg:grid-cols-[16rem_1fr] xl:gap-14">
        {/* Desktop rail ------------------------------------------- */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-1">
            <FilterPanel
              filters={effective}
              patch={patch}
              toggle={toggle}
              clear={clear}
              lockedCategory={lockedCategory}
            />
          </div>
        </aside>

        {/* Results ------------------------------------------------- */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sand-200 pb-4">
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-brand-900 tabular-nums">{results.length}</span>{' '}
              {results.length === 1 ? 'result' : 'results'}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center gap-2 border border-sand-300 bg-white px-3.5 py-2 text-xs font-semibold text-brand-900 lg:hidden"
              >
                <SlidersHorizontal size={13} aria-hidden="true" />
                Filters
                {activeCount > 0 && (
                  <span className="grid size-4 place-items-center rounded-full bg-accent-500 text-[10px] font-bold text-brand-950">
                    {activeCount}
                  </span>
                )}
              </button>

              <div className="relative">
                <label htmlFor="sort" className="sr-only">
                  Sort products
                </label>
                <select
                  id="sort"
                  value={effective.sort}
                  onChange={(e) => patch({ sort: e.target.value as SortKey })}
                  className="cursor-pointer border border-sand-300 bg-white py-2 pr-9 pl-3.5 text-xs font-medium text-brand-900"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      Sort: {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={13}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-sand-500"
                />
              </div>
            </div>
          </div>

          {activeCount > 0 && (
            <div className="mt-4">
              <ActiveChips filters={effective} patch={patch} toggle={toggle} clear={clear} />
            </div>
          )}

          {results.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-display text-xl text-brand-900">Nothing matches those filters</p>
              <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
                Try widening your price range, or clear a filter or two. If you are looking for
                something specific we may still be able to source it.
              </p>
              <button type="button" onClick={clear} className="btn btn-primary mt-6">
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
                {shown.map((product, i) => (
                  <ProductCard key={product.id} product={product} priority={i < 6} />
                ))}
              </div>

              {visible < results.length && (
                <div className="mt-14 flex flex-col items-center gap-4">
                  <p className="text-xs text-ink-soft tabular-nums">
                    Showing {shown.length} of {results.length}
                  </p>
                  <div className="h-0.5 w-40 overflow-hidden rounded-full bg-sand-200">
                    <div
                      className="h-full rounded-full bg-accent-500"
                      style={{ width: `${(shown.length / results.length) * 100}%` }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="btn btn-outline"
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile filter drawer -------------------------------------- */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[95] lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-brand-950/45 backdrop-blur-sm animate-fade-in"
          />
          <div className="absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-sand-50 shadow-lift animate-fade-in">
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-sand-200 px-5">
              <h2 className="font-display text-lg text-brand-900">Filters</h2>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close filters"
                className="-mr-2 grid size-10 place-items-center text-brand-900"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain">
              <FilterPanel
                filters={effective}
                patch={patch}
                toggle={toggle}
                clear={clear}
                onNavigate={() => setDrawerOpen(false)}
                lockedCategory={lockedCategory}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
