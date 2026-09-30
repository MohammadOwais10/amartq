'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { cn } from '@/lib/utils';

const slides = [
    { src: '/images/websiteimgs/hero-4.png', alt: 'Close view of AMARTQ textile weave and pattern' },
  { src: '/images/websiteimgs/hero-1.png', alt: 'AMARTQ bedding styled in a softly lit bedroom' },
  { src: '/images/websiteimgs/hero-2.png', alt: 'Folded AMARTQ bed sheet showing print detail' },
  { src: '/images/websiteimgs/hero-3.png', alt: 'AMARTQ bed sheet draped over a made bed' },
];

const DURATION = 3600;

/** Cross-fade timing. Kept well under DURATION so the incoming image is fully
    resolved before the timer advances, instead of overlapping two fades. */
const FADE = 520;

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Set on a manual dot press. Without it the autoplay timer restarts on that
  // change too, so the slide you just chose kept rolling and appeared to
  // ignore the click. This holds autoplay off until the pointer leaves.
  const [manual, setManual] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );

  const go = useCallback((next: number) => setIndex((next + slides.length) % slides.length), []);

  const goManual = useCallback(
    (next: number) => {
      setManual(true);
      go(next);
    },
    [go],
  );

  useEffect(() => {
    if (paused || manual || reduced) return;
    const timer = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(timer);
  }, [index, paused, manual, reduced, go]);

  return (
    <div
      className="group relative aspect-3/2 overflow-hidden bg-sand-200 lg:h-[85vh] lg:aspect-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setManual(false);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={i === index ? s.alt : ''}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          // The first slide is the LCP element on the homepage.
          preload={i === 0}
          className={cn(
            'object-cover motion-reduce:transition-none',
            // Pure cross-fade. The previous version scaled the incoming image
            // from 1.04 down to 1.0, which read as a jump every time you
            // clicked a dot — a 4% zoom on a full-bleed photo is far more
            // visible than it sounds.
            // z-10 keeps the active slide above the others: all four are
            // absolutely stacked in DOM order, so without it the last slide
            // painted on top and could cross-fade through the wrong one.
            i === index
              ? `z-10 opacity-100 transition-opacity duration-[${FADE}ms] ease-out motion-reduce:transition-none`
              : 'z-0 opacity-0 transition-opacity duration-[700ms] ease-out motion-reduce:transition-none',
          )}
        />
      ))}

      {/* Dots in a frosted pill. The first version floated bare dots on the
          photo with only a drop-shadow for separation, which is unreliable
          over a light sheet. A translucent dark capsule guarantees contrast
          on any slide; the visual bar is 3px inside a 20px hit area, so the
          control stays tappable without looking bulky. */}
      {/* z-20: the slides are z-10, so without this the active image paints
          straight over the controls and they disappear entirely. Same bar
          treatment as the review carousel, minus the pill — the controls sit
          directly on the photo, so a dark capsule behind them was the thing
          making them look heavy. White-on-photo needs the drop-shadow that
          the review dots get for free on a white card. */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center px-4">
        <div
          role="tablist"
          aria-label="Hero images"
          className="flex items-center gap-1.5 drop-shadow-[0_1px_4px_rgb(0_0_0/0.6)]"
        >
          {slides.map((s, i) => {
            const active = i === index;
            return (
              <button
                key={s.src}
                type="button"
                role="tab"
                onClick={() => goManual(i)}
                aria-label={`Go to image ${i + 1} of ${slides.length}`}
                aria-selected={active}
                className="group/dot grid h-6 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'relative block h-1.5 overflow-hidden rounded-full transition-all duration-400',
                    active ? 'w-8 bg-white/45' : 'w-3 bg-white/75 group-hover/dot:w-4 group-hover/dot:bg-white',
                  )}
                >
                  {/* Kept even though the review dots are static: the hero
                      advances on a timer, so the fill is the only signal for
                      when the next slide is coming. */}
                  {active && (
                    <span
                      key={index}
                      className="absolute inset-0 origin-left rounded-full bg-accent-500"
                      style={{
                        animation: `amq-dot-progress ${DURATION}ms linear forwards`,
                        animationPlayState: paused || manual || reduced ? 'paused' : 'running',
                      }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Announces the current slide. The carousel auto-advances, so without
          this a screen reader user gets no signal that the image changed. */}
      <p className="sr-only" role="status" aria-live="polite">
        Image {index + 1} of {slides.length}: {slides[index].alt}
      </p>
    </div>
  );
}
