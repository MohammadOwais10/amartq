'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Plus } from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import { Eyebrow, PriceTag, ProductBadge, Rating } from '@/components/ui/product-primitives';
import { lineKey, money, type Product } from '@/lib/types';
import { cn } from '@/lib/utils';

export function ProductCard({
  product,
  priority = false,
  className,
  showQuickAdd = true,
}: {
  product: Product;
  priority?: boolean;
  className?: string;
  showQuickAdd?: boolean;
}) {
  const { add, isWishlisted, toggleWishlist } = useCart();
  const [activeColourway, setActiveColourway] = useState(0);
  const [justAdded, setJustAdded] = useState(false);

  const colourway = product.colourways[activeColourway] ?? product.colourways[0];
  const soldOut = product.colourways.every((c) => c.outOfStock);
  const wished = isWishlisted(product.slug);
  // `flat` is only a swap target when it was actually photographed; otherwise
  // the card would flash a broken image after adding to the bag.
  const displayImage = justAdded ? colourway.images.flat || colourway.images.drape : colourway.images.drape;
  const hoverImage = colourway.images.detail;

  const quickAdd = () => {
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: colourway.images.drape,
      colourway: colourway.name,
      colourwayIndex: activeColourway,
      size: product.sizes[0],
      price: product.price,
      maxQuantity: Math.max(1, Math.min(10, product.stock)),
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <article
      className={cn(
        'group relative flex flex-col',
        className,
      )}
      data-reveal
    >
      <div className="relative overflow-hidden bg-sand-100">
        <Link
          href={`/product/${product.slug}`}
          className="block aspect-4/5"
          aria-label={`${product.name}, ${money(product.price)}`}
        >
          <Image
            src={displayImage}
            alt={`${product.name} — ${colourway.name}`}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, (min-width: 640px) 44vw, 88vw"
            className="object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
          />
          {/* Second view fades in on hover */}
          <Image
            src={hoverImage}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 28vw, (min-width: 640px) 44vw, 88vw"
            className="object-cover opacity-0 transition-opacity duration-700 ease-[var(--ease-out-expo)] group-hover:opacity-100"
          />
        </Link>

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="pointer-events-none absolute top-3 left-3 flex flex-col items-start gap-1.5">
            {product.badges.slice(0, 2).map((b) => (
              <ProductBadge key={b} badge={b} />
            ))}
          </div>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={wished}
          className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-white/85 text-brand-900 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-accent-600 focus-visible:bg-white"
        >
          <Heart
            size={15}
            aria-hidden="true"
            className={cn('transition-transform', wished && 'scale-110 fill-accent-500 text-accent-500')}
          />
        </button>

        {/* Quick add */}
        {showQuickAdd && !soldOut && (
          <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-[opacity,transform] duration-400 ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100 focus-within:translate-y-0 focus-within:opacity-100 max-md:translate-y-0 max-md:opacity-100">
            <button
              type="button"
              onClick={quickAdd}
              className="flex w-full items-center justify-center gap-2 bg-brand-950/92 py-3 text-[11px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm transition-colors duration-300 hover:bg-accent-500 hover:text-brand-950"
            >
              {justAdded ? (
                <>
                  <span aria-hidden="true">✓</span> Added
                </>
              ) : (
                <>
                  <Plus size={13} aria-hidden="true" /> Quick add
                </>
              )}
            </button>
          </div>
        )}

        {soldOut && (
          <div className="absolute inset-x-0 bottom-0 bg-brand-950/85 py-3 text-center text-[11px] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
            Sold out
          </div>
        )}
      </div>

      {/* Body ---------------------------------------------------------- */}
      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Eyebrow className="mb-1.5 text-sand-500">{product.collection}</Eyebrow>
            <h3 className="text-[15px] leading-snug">
              <Link
                href={`/product/${product.slug}`}
                className="text-brand-900 transition-colors hover:text-accent-600"
              >
                {product.name.replace(/ —.*$/, '')}
              </Link>
            </h3>
          </div>
          <PriceTag
            price={product.price}
            compareAtPrice={product.compareAtPrice}
            className="shrink-0 pt-0.5"
          />
        </div>

        <div className="mt-2 flex items-center gap-2">
          <Rating value={product.rating} count={product.reviewCount} />
        </div>

        {/* Colourways */}
        {product.colourways.length > 1 && (
          <div className="mt-3 flex items-center gap-1.5">
            {product.colourways.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setActiveColourway(i)}
                aria-label={`View ${c.name} colourway`}
                aria-pressed={i === activeColourway}
                title={c.name}
                style={{ backgroundColor: c.hex }}
                className={cn(
                  'size-4 rounded-full ring-1 ring-black/10 transition-transform duration-200',
                  i === activeColourway
                    ? 'scale-110 ring-2 ring-brand-900 ring-offset-2 ring-offset-sand-50'
                    : 'hover:scale-110',
                )}
              />
            ))}
            <span className="ml-1 text-[11px] text-sand-500">{colourway.name}</span>
          </div>
        )}
      </div>
    </article>
  );
}

export { lineKey };
