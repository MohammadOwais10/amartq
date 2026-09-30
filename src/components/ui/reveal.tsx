'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Adds `data-visible` to descendants marked `data-reveal` once they enter the
 * viewport. Purely progressive: without JS the CSS keeps them visible.
 */
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!targets.length) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach((el) => el.setAttribute('data-visible', 'true'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  return <div ref={ref}>{children}</div>;
}
