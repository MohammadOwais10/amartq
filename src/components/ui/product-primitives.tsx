import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { discountPercent, money, type Product } from '@/lib/types';

export function Rating({
  value,
  count,
  size = 14,
  showCount = true,
  className,
}: {
  value: number;
  count?: number;
  size?: number;
  showCount?: boolean;
  className?: string;
}) {
  const pct = (value / 5) * 100;
  return (
    <span className={cn('inline-flex items-center gap-1.5', className)}>
      <span
        className="relative inline-flex"
        role="img"
        aria-label={`Rated ${value} out of 5`}
      >
        <span className="flex gap-px text-sand-300">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={size} strokeWidth={1.5} aria-hidden="true" />
          ))}
        </span>
        <span
          className="absolute inset-0 flex gap-px overflow-hidden text-accent-500"
          style={{ width: `${pct}%` }}
          aria-hidden="true"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={size} strokeWidth={1.5} className="shrink-0 fill-current" />
          ))}
        </span>
      </span>
      {showCount && count !== undefined && (
        <span className="text-xs text-ink-soft tabular-nums">{count}</span>
      )}
    </span>
  );
}

export function PriceTag({
  price,
  compareAtPrice,
  className,
  size = 'md',
}: {
  price: number;
  compareAtPrice?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const off = discountPercent(price, compareAtPrice);
  const priceSize =
    size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-sm' : 'text-base';
  return (
    <span className={cn('inline-flex items-baseline gap-2', className)}>
      <span
        className={cn(
          priceSize,
          'font-semibold tabular-nums',
          off ? 'text-accent-600' : 'text-ink',
        )}
      >
        {money(price)}
      </span>
      {off && (
        <>
          <span className="text-sm text-ink-soft line-through tabular-nums">
            {money(compareAtPrice!)}
          </span>
          <span className="sr-only">
            reduced from {money(compareAtPrice!)} by {off} percent
          </span>
        </>
      )}
    </span>
  );
}

const badgeStyles: Record<string, string> = {
  new: 'bg-brand-900 text-white',
  bestseller: 'bg-accent-500 text-brand-950',
  sale: 'bg-accent-600 text-white',
  limited: 'bg-ink text-white',
};

const badgeLabels: Record<string, string> = {
  new: 'New',
  bestseller: 'Bestseller',
  sale: 'Sale',
  limited: 'Limited',
};

export function ProductBadge({ badge }: { badge: Product['badges'][number] }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase',
        badgeStyles[badge],
      )}
    >
      {badgeLabels[badge]}
    </span>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('eyebrow text-accent-600', className)}>{children}</p>;
}

/** Small tick/cross used in benefit lists. */
export function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cn('size-4 text-accent-500', className)} aria-hidden="true">
      <path
        d="M2.5 8.5 6 12l7.5-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
