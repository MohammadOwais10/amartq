/**
 * Brand mark. Renders the supplied AMARTQ lockup.
 *
 * Two web assets are generated from public/images/logo/amartq-logo.png by
 * scripts/prepare-logo.mjs: the original dark artwork for light backgrounds,
 * and a knocked-out white version for the navy footer.
 */

import Image from 'next/image';
import { cn } from '@/lib/utils';

type MarkProps = {
  className?: string;
  /**
   * Rendered height in px. The lockup is stacked, so it needs a real slot
   * rather than being scaled down to a hairline like an inline wordmark.
   */
  height?: number;
  /** 'light' picks the reversed, white-on-transparent variant. */
  tone?: 'light' | 'dark';
  /** Only the above-the-fold logo should set this; three preloads is wasteful. */
  priority?: boolean;
};

/** Intrinsic size of the generated webp, before CSS scales it. */
const INTRINSIC_WIDTH = 191;
const INTRINSIC_HEIGHT = 144;
const ASPECT = INTRINSIC_WIDTH / INTRINSIC_HEIGHT;

export function BrandMark({
  className,
  height = 44,
  tone = 'dark',
  priority = false,
}: MarkProps) {
  const src =
    tone === 'light' ? '/images/logo/amartq-logo-light.webp' : '/images/logo/amartq-logo.webp';
  return (
    <Image
      src={src}
      alt="AMARTQ"
      width={INTRINSIC_WIDTH}
      height={INTRINSIC_HEIGHT}
      // The header caps the logo at 44px tall so the stacked lockup stays
      // legible; w-auto keeps the source aspect ratio.
      style={{ height: `${height}px`, width: 'auto' }}
      sizes={`${Math.round(height * ASPECT)}px`}
      className={cn('shrink-0', className)}
      priority={priority}
    />
  );
}

