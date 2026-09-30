'use client';

import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
  label = 'Quantity',
  className,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'inline-flex items-stretch border border-sand-300 bg-white',
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={`Decrease ${label.toLowerCase()}`}
        className="grid size-10 place-items-center text-ink-soft transition-colors hover:bg-sand-50 hover:text-brand-900 disabled:cursor-not-allowed disabled:opacity-35"
      >
        <Minus size={14} aria-hidden="true" />
      </button>
      <span
        className="grid min-w-9 place-items-center border-x border-sand-300 text-sm font-semibold tabular-nums"
        aria-live="polite"
      >
        <span className="sr-only">{label}: </span>
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`Increase ${label.toLowerCase()}`}
        className="grid size-10 place-items-center text-ink-soft transition-colors hover:bg-sand-50 hover:text-brand-900 disabled:cursor-not-allowed disabled:opacity-35"
      >
        <Plus size={14} aria-hidden="true" />
      </button>
    </div>
  );
}
