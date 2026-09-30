import { Banknote, Landmark, Smartphone } from 'lucide-react';
import { paymentMethods } from '@/lib/store';
import { cn } from '@/lib/utils';

/**
 * Accepted payment methods.
 *
 * A compact left-aligned row of icon + label. These are generic lucide glyphs,
 * not brand marks: UPI, Visa, Mastercard and the mobile wallets are all
 * trademarks with their own usage guidelines, so no licensed artwork is needed
 * to ship this. If you later want the real marks, add an `image` field to
 * paymentMethods in lib/store.ts and swap the Icon for it.
 */

const icons = {
  Banknote,
  Landmark,
  Smartphone,
} as const;

export function PaymentMethods({ className }: { className?: string }) {
  return (
    <ul
      className={cn('flex flex-wrap items-center gap-x-4 gap-y-2', className)}
      aria-label="Accepted payment methods"
    >
      {paymentMethods.map((m) => {
        const Icon = icons[m.icon];
        return (
          <li key={m.id} className="group flex items-center gap-1.5">
            <Icon
              size={13}
              aria-hidden="true"
              strokeWidth={1.75}
              className="shrink-0 text-brand-400 transition-colors group-hover:text-accent-500"
            />
            <span className="text-[11px] font-medium tracking-wide text-brand-200">
              {m.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
