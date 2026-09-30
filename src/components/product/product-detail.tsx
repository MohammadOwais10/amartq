'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Heart,
  Maximize2,
  MessageCircle,
  Minus,
  Plus,
  Ruler,
  Share2,
  Truck,
} from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import { ImageZoom } from '@/components/product/image-zoom';
import { QuantityStepper } from '@/components/ui/quantity-stepper';
import { Eyebrow, PriceTag, ProductBadge, Rating } from '@/components/ui/product-primitives';
import { fulfilment, store } from '@/lib/store';
import { discountPercent, money, type Product } from '@/lib/types';
import { formatStock } from '@/lib/format';
import { buildProductEnquiry, shareUrl, whatsappUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sand-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="eyebrow text-brand-900">{title}</span>
        {open ? (
          <Minus size={15} className="text-sand-500" aria-hidden="true" />
        ) : (
          <Plus size={15} className="text-sand-500" aria-hidden="true" />
        )}
      </button>
      {open && <div className="pb-5 text-sm leading-relaxed text-ink-soft">{children}</div>}
    </div>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const { add, isWishlisted, toggleWishlist } = useCart();
  const [colourwayIndex, setColourwayIndex] = useState(0);
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState<'drape' | 'detail' | 'flat'>('drape');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const zoomTriggerRef = useRef<HTMLButtonElement>(null);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const colourway = product.colourways[colourwayIndex];
  const images = useMemo<{ key: 'drape' | 'detail' | 'flat'; src: string; alt: string }[]>(
    // Views the user did not photograph are dropped rather than rendered as
    // broken thumbnails. Duplicate sources are dropped too: when a design was
    // only shot flat, toViewMap promotes that photo into `drape`, which would
    // otherwise show the same picture twice in the gallery.
    () => {
      const seen = new Set<string>();
      return [
        { key: 'drape' as const, src: colourway.images.drape, alt: `${product.name} in ${colourway.name} — full view` },
        { key: 'detail' as const, src: colourway.images.detail, alt: `${product.name} in ${colourway.name} — close-up of the weave` },
        { key: 'flat' as const, src: colourway.images.flat, alt: `${product.name} in ${colourway.name} — laid flat` },
      ].filter((i) => {
        if (!i.src || seen.has(i.src)) return false;
        seen.add(i.src);
        return true;
      });
    },
    [colourway, product.name],
  );

  const outOfStock = colourway.outOfStock || product.stock <= 0;
  const off = discountPercent(product.price, product.compareAtPrice);

  // Derived rather than synchronised: if the chosen size is not offered for the
  // current product, fall back to the first one without an extra render pass.
  const activeSize = product.sizes.includes(size) ? size : product.sizes[0];

  const handleAdd = () => {
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: colourway.images.drape,
      colourway: colourway.name,
      colourwayIndex,
      size: activeSize,
      price: product.price,
      quantity,
      maxQuantity: Math.max(1, Math.min(10, product.stock)),
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  const handleShare = async () => {
    const url = shareUrl(`/product/${product.slug}`);
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, text: product.shortDescription, url });
        return;
      } catch {
        // User cancelled — fall through to clipboard.
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the link is in the address bar anyway.
    }
  };

  return (
    <div className="container-page py-8 lg:py-12">
      {/* Breadcrumb ------------------------------------------------- */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-soft">
          <li>
            <Link href="/" className="transition-colors hover:text-accent-600">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/shop" className="transition-colors hover:text-accent-600">
              Shop
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/category/${product.category}`}
              className="capitalize transition-colors hover:text-accent-600"
            >
              {product.category.replace('-', ' ')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-brand-900" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        {/* ================= Gallery ================= */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <button
            ref={zoomTriggerRef}
            type="button"
            onClick={() => setLightbox(0)}
            aria-label="Zoom image"
            className="group relative block aspect-4/5 w-full cursor-zoom-in overflow-hidden bg-sand-100"
          >
            <Image
              key={`${colourwayIndex}-${view}`}
              src={images.find((i) => i.key === view)?.src ?? images[0].src}
              alt={images.find((i) => i.key === view)?.alt ?? ''}
              fill
              preload
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="animate-fade-in object-cover"
            />

            {product.badges.length > 0 && (
              <div className="pointer-events-none absolute top-4 left-4 flex flex-col items-start gap-2">
                {product.badges.map((b) => (
                  <ProductBadge key={b} badge={b} />
                ))}
              </div>
            )}

            <span
              aria-hidden="true"
              className="absolute right-4 bottom-4 grid size-11 place-items-center rounded-full bg-white/90 text-brand-900 backdrop-blur-sm transition-transform group-hover:scale-105"
            >
              <Maximize2 size={16} />
            </span>
          </button>

          {/* Thumbs — only meaningful when a design was shot from more than
              one angle. Every design here has a single photo, so the row is
              hidden rather than showing one lonely thumbnail. */}
          {images.length > 1 && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            {images.map((img) => (
              <button
                key={img.key}
                type="button"
                onClick={() => setView(img.key)}
                aria-label={`Show ${img.key} view`}
                aria-pressed={view === img.key}
                className={cn(
                  'relative aspect-4/5 overflow-hidden bg-sand-100 transition-all duration-300',
                  view === img.key
                    ? 'ring-2 ring-brand-900 ring-offset-2 ring-offset-sand-50'
                    : 'opacity-65 hover:opacity-100',
                )}
              >
                <Image src={img.src} alt="" fill sizes="160px" className="object-cover" />
              </button>
            ))}
          </div>
          )}
        </div>

        {/* ================= Buy box ================= */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Eyebrow className="text-sand-500">{product.collection}</Eyebrow>
            {off && (
              <span className="bg-accent-100 px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] text-accent-800 uppercase">
                Save {off}%
              </span>
            )}
          </div>

          <h1 className="mt-3 text-display leading-[1.05] text-brand-900">{product.name}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Rating value={product.rating} count={product.reviewCount} size={15} />
            <span className="h-3.5 w-px bg-sand-300" aria-hidden="true" />
            <span className="text-xs text-ink-soft">SKU {product.sku}</span>
          </div>

          <div className="mt-6">
            <PriceTag price={product.price} compareAtPrice={product.compareAtPrice} size="lg" />
            <p className="mt-1.5 text-xs text-ink-soft">
              Inclusive of all taxes · {product.sizes.length} sizes available
            </p>
          </div>

          <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
            {product.description[0]}
          </p>

          {/* Colourways -------------------------------------------- */}
          {/* One design per product, so a single-colourway picker is noise. */}
          {product.colourways.length > 1 && (
          <div className="mt-8">
            <div className="mb-3 flex items-baseline justify-between">
              <p className="eyebrow text-brand-900">Colour</p>
              <p className="text-xs text-ink-soft">{colourway.name}</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {product.colourways.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColourwayIndex(i)}
                  disabled={c.outOfStock}
                  aria-label={`${c.name}${c.outOfStock ? ' — out of stock' : ''}`}
                  aria-pressed={i === colourwayIndex}
                  title={c.outOfStock ? `${c.name} (out of stock)` : c.name}
                  className={cn(
                    'group relative size-11 rounded-full transition-all duration-300',
                    c.outOfStock && 'cursor-not-allowed opacity-40',
                    i === colourwayIndex &&
                      'scale-110 ring-2 ring-brand-900 ring-offset-2 ring-offset-sand-50',
                  )}
                  style={{ backgroundColor: c.hex }}
                >
                  {c.outOfStock && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="h-px w-full rotate-45 bg-white/70" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          )}

          {/* Sizes -------------------------------------------------- */}
          <div className="mt-7">
            <div className="mb-3 flex items-baseline justify-between">
              <p className="eyebrow text-brand-900">Size</p>
              <Link
                href="/size-guide"
                className="inline-flex items-center gap-1.5 text-xs text-ink-soft transition-colors hover:text-accent-600"
              >
                <Ruler size={12} aria-hidden="true" />
                Size guide
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  aria-pressed={activeSize === s}
                  className={cn(
                    'min-w-16 border px-3.5 py-2.5 text-sm font-medium transition-all duration-200',
                    activeSize === s
                      ? 'border-brand-900 bg-brand-900 text-white'
                      : 'border-sand-300 bg-white text-ink-soft hover:border-brand-700 hover:text-brand-900',
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + add ----------------------------------------- */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <QuantityStepper
              value={quantity}
              onChange={setQuantity}
              max={Math.max(1, Math.min(10, product.stock))}
            />
            <button
              type="button"
              onClick={handleAdd}
              disabled={outOfStock}
              className={cn('btn flex-1 min-w-48', added ? 'btn-accent' : 'btn-primary')}
            >
              {outOfStock
                ? 'Out of stock'
                : added
                  ? 'Added to bag ✓'
                  : `Add to bag — ${money(product.price * quantity)}`}
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(product.slug)}
              aria-label={
                isWishlisted(product.slug) ? 'Remove from wishlist' : 'Save to wishlist'
              }
              aria-pressed={isWishlisted(product.slug)}
              className="grid size-12 shrink-0 place-items-center border border-sand-300 bg-white text-brand-900 transition-colors hover:border-brand-900 hover:bg-brand-900 hover:text-white"
            >
              <Heart
                size={17}
                className={cn(
                  isWishlisted(product.slug) && 'fill-current',
                )}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* WhatsApp + share --------------------------------------- */}
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(
                buildProductEnquiry({
                  name: product.name,
                  slug: product.slug,
                  colourway: colourway.name,
                  size: activeSize,
                  quantity,
                  price: product.price,
                }),
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex-1 min-w-48"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Order on WhatsApp
            </a>
            <button type="button" onClick={handleShare} className="btn btn-ghost-light !border-sand-300 !bg-transparent !text-brand-900 hover:!bg-brand-900 hover:!text-white">
              <Share2 size={15} aria-hidden="true" />
              {copied ? 'Link copied' : 'Share'}
            </button>
          </div>

          {/* Stock -------------------------------------------------- */}
          <p
            className={cn(
              'mt-5 flex items-center gap-2 text-xs font-medium',
              outOfStock ? 'text-danger' : 'text-success',
            )}
          >
            <span
              className={cn(
                'size-1.5 rounded-full',
                outOfStock ? 'bg-danger' : 'bg-success',
              )}
              aria-hidden="true"
            />
            {formatStock(outOfStock ? 0 : product.stock)}
          </p>

          {/* Delivery ----------------------------------------------- */}
          <div className="mt-6 flex items-start gap-3 border border-sand-200 bg-white p-4">
            <Truck size={17} className="mt-0.5 shrink-0 text-accent-500" aria-hidden="true" />
            <div className="text-xs leading-relaxed text-ink-soft">
              <p className="font-semibold text-brand-900">
                Free delivery over {store.currencySymbol}{' '}
                {fulfilment.freeShippingThreshold.toLocaleString(store.locale)}
              </p>
              <p className="mt-0.5">
                Dispatched within 24 hours · 2–4 working days nationwide · cash on delivery
                available.
              </p>
            </div>
          </div>

          {/* Accordions --------------------------------------------- */}
          <div className="mt-8">
            <Accordion title="Description" defaultOpen>
              {product.description.map((para, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : ''}>
                  {para}
                </p>
              ))}
            </Accordion>

            <Accordion title="Features">
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="Specification">
              <dl className="divide-y divide-sand-200">
                {product.specifications.map((s) => (
                  <div key={s.label} className="flex justify-between gap-6 py-2.5">
                    <dt className="text-ink-soft">{s.label}</dt>
                    <dd className="text-right font-medium text-brand-900">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Accordion>

            <Accordion title="Care instructions">
              <ul className="list-inside list-disc space-y-1.5 marker:text-accent-500">
                {product.care.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="Shipping & returns">
              <p>
                Orders placed before 2pm are dispatched the same working day. Standard delivery
                is 2–4 working days nationwide. If a piece is not right, tell us within{' '}
                {store.foundedYear > 0 ? '7' : '7'} days of delivery and we will arrange an
                exchange or a full refund — unwashed and unused, no restocking fee.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* ================= Lightbox ================= */}
      {lightbox !== null && (
        <ImageZoom
          key={lightbox}
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
          returnFocusTo={zoomTriggerRef}
        />
      )}
    </div>
  );
}
