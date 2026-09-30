'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { BrandMark } from '@/components/ui/brand-mark';
import { products, visibleCategories as categories } from '@/lib/catalog';
import { fulfilment, store } from '@/lib/store';
import { money } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useCart } from '@/components/cart/cart-provider';
import { SearchDialog } from './search-dialog';

const companyLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'Materials', href: '/materials' },
  { label: 'Bespoke & Bulk', href: '/bespoke' },
  { label: 'Size Guide', href: '/size-guide' },
];

const helpLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Track Your Order', href: '/track-order' },
  { label: 'Shipping & Delivery', href: '/policies/shipping' },
  { label: 'Returns & Exchange', href: '/policies/returns' },
  { label: 'FAQs', href: '/faq' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount, openCart, wishlist } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const closeTimer = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation, adjusting during render so the menus are
  // never visible for a frame on the new route. Scrolled resets too: the next
  // route starts at scroll 0, so leaving this true briefly painted the
  // shrunken bar over the top of the new page before the scroll listener
  // caught up.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMegaOpen(false);
    setMobileOpen(false);
    setScrolled(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setMegaOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const featured = products.filter((p) => p.badges.includes('bestseller')).slice(0, 3);

  const openMega = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), 180);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'sticky top-0 z-50 bg-sand-50/92 backdrop-blur-md transition-shadow duration-300',
          scrolled ? 'shadow-[0_1px_0_0_var(--color-sand-200),0_10px_30px_-24px_rgba(9,37,74,0.4)]' : '',
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="container-page">
          <div
            className={cn(
              'flex items-center justify-between gap-4 transition-[height] duration-300',
              scrolled ? 'h-16' : 'h-16 lg:h-20',
            )}
          >
            {/* Left: mobile menu + desktop nav -------------------------------- */}
            <div className="flex flex-1 items-center gap-1">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="-ml-2 grid size-10 place-items-center text-brand-900 transition-colors hover:text-accent-600 lg:hidden"
              >
                <Menu size={20} aria-hidden="true" />
              </button>

              <nav aria-label="Primary" className="hidden lg:block">
                <ul className="flex items-center gap-1">
                  <li onMouseEnter={openMega} onFocus={openMega}>
                    <Link
                      href="/shop"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide text-brand-900 transition-colors hover:text-accent-600"
                      data-active={megaOpen}
                    >
                      Shop
                      <ChevronDown
                        size={13}
                        aria-hidden="true"
                        className={cn('transition-transform duration-300', megaOpen && 'rotate-180')}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/new-in"
                      className="block px-3 py-2 text-[13px] font-medium tracking-wide text-brand-900 transition-colors hover:text-accent-600"
                    >
                      New In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/bestsellers"
                      className="block px-3 py-2 text-[13px] font-medium tracking-wide text-brand-900 transition-colors hover:text-accent-600"
                    >
                      Bestsellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collections/sale"
                      className="block px-3 py-2 text-[13px] font-medium tracking-wide text-brand-900 transition-colors hover:text-accent-600"
                    >
                      Sale
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bespoke"
                      className="block px-3 py-2 text-[13px] font-medium tracking-wide text-brand-900 transition-colors hover:text-accent-600"
                    >
                      Bespoke
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Centre: logo ------------------------------------------------- */}
            <Link
              href="/"
              className="shrink-0 transition-opacity hover:opacity-70"
              aria-label={`${store.name} home`}
            >
              {/* The lockup is stacked: mark above wordmark. At 52px the
                  wordmark clears ~12px, which stays legible in a 72px bar. */}
              <BrandMark className="hidden sm:block" height={52} priority />
              <BrandMark className="sm:hidden" height={44} />
            </Link>

            {/* Right: actions ----------------------------------------------- */}
            <div className="flex flex-1 items-center justify-end gap-0.5">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Search products"
                className="grid size-10 place-items-center text-brand-900 transition-colors hover:text-accent-600"
              >
                <Search size={19} aria-hidden="true" />
              </button>

              <Link
                href="/wishlist"
                aria-label={`Wishlist, ${wishlist.length} item${wishlist.length === 1 ? '' : 's'}`}
                className="relative hidden size-10 place-items-center text-brand-900 transition-colors hover:text-accent-600 sm:grid"
              >
                <Heart size={19} aria-hidden="true" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 grid size-4 place-items-center rounded-full bg-accent-500 text-[9px] font-bold text-brand-950 tabular-nums">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <button
                type="button"
                onClick={openCart}
                aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
                className="relative -mr-2 grid size-10 place-items-center text-brand-900 transition-colors hover:text-accent-600"
              >
                <ShoppingBag size={19} aria-hidden="true" />
                {itemCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 grid size-[18px] place-items-center rounded-full bg-accent-500 text-[10px] font-bold text-brand-950 tabular-nums">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ================= Mega menu ======================================= */}
        {megaOpen && (
          <div
            onMouseEnter={openMega}
            className="absolute inset-x-0 top-full hidden border-t border-sand-200 bg-white shadow-lift lg:block animate-fade-in"
          >
            <div className="container-page grid grid-cols-12 gap-10 py-10">
              <div className="col-span-3">
                <p className="eyebrow mb-4 text-sand-500">Shop by room</p>
                <ul className="space-y-0.5">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/category/${c.slug}`}
                        className="group flex items-baseline justify-between gap-3 py-2"
                      >
                        <span className="font-display text-lg text-brand-900 transition-colors group-hover:text-accent-600">
                          {c.name}
                        </span>
                        <span className="text-[11px] text-sand-500 tabular-nums">
                          {products.filter((p) => p.category === c.slug).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-5 grid grid-cols-2 gap-x-8 gap-y-6 self-start">
                {categories.slice(0, 4).map((c) => (
                  <div key={c.slug}>
                    <Link
                      href={`/category/${c.slug}`}
                      className="eyebrow mb-2.5 block text-brand-900 transition-colors hover:text-accent-600"
                    >
                      {c.name}
                    </Link>
                    <ul className="space-y-1.5">
                      {products
                        .filter((p) => p.category === c.slug)
                        .slice(0, 3)
                        .map((p) => (
                          <li key={p.id}>
                            <Link
                              href={`/product/${p.slug}`}
                              className="line-clamp-2-safe text-[13px] text-ink-soft transition-colors hover:text-accent-600"
                            >
                              {p.name.replace(/ —.*$/, '')}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="col-span-4">
                <p className="eyebrow mb-4 text-sand-500">Bestsellers</p>
                <ul className="space-y-3">
                  {featured.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.slug}`}
                        className="group flex items-center gap-3.5"
                      >
                        <span className="relative size-16 shrink-0 overflow-hidden bg-sand-100">
                          <Image
                            src={p.colourways[0].images.drape}
                            alt=""
                            fill
                            sizes="64px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="line-clamp-2-safe block text-[13px] leading-snug font-medium text-brand-900 transition-colors group-hover:text-accent-600">
                            {p.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-ink-soft tabular-nums">
                            {money(p.price)}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/shop"
                  className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-accent-600 uppercase transition-colors hover:text-accent-800"
                >
                  View all {products.length} products
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="border-t border-sand-200 bg-sand-50">
              <div className="container-page flex flex-wrap items-center gap-x-10 gap-y-3 py-3.5">
                {companyLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-xs font-medium text-ink-soft transition-colors hover:text-accent-600"
                  >
                    {l.label}
                  </Link>
                ))}
                <span className="ml-auto hidden text-xs text-sand-500 lg:block">
                  Free delivery over {store.currencySymbol}{' '}
                  {fulfilment.freeShippingThreshold.toLocaleString(store.locale)}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= Mobile navigation =============================== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-brand-950/45 backdrop-blur-sm animate-fade-in"
          />
          <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-sand-50 shadow-panel animate-fade-in">
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-sand-200 px-5">
              <BrandMark height={34} />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="-mr-2 grid size-10 place-items-center text-brand-900"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
              <p className="eyebrow mb-3 text-sand-500">Shop</p>
              <ul className="space-y-0.5">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/category/${c.slug}`}
                      className="flex items-center justify-between border-b border-sand-200 py-3 font-display text-xl text-brand-900"
                    >
                      {c.name}
                      <span className="text-xs text-sand-500 tabular-nums">
                        {products.filter((p) => p.category === c.slug).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="eyebrow mb-3 text-sand-500">Company</p>
                  <ul className="space-y-2">
                    {companyLinks.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm text-ink-soft">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-3 text-sand-500">Help</p>
                  <ul className="space-y-2">
                    {helpLinks.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm text-ink-soft">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>

            <div className="shrink-0 border-t border-sand-200 p-5">
              <Link href="/shop" className="btn btn-primary w-full">
                Shop all products
              </Link>
            </div>
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
