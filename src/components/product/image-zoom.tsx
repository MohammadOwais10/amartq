'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export type ZoomImage = { src: string; alt: string };

const MIN_SCALE = 1;
const MAX_SCALE = 5;
/** Pointer travel, in px, before a press counts as a drag rather than a tap. */
const DRAG_THRESHOLD = 6;

/**
 * Full-screen image viewer for a product photo.
 *
 * Tapping the image zooms in; tapping the area around it closes. Because the
 * image is letterboxed with object-contain, "around it" is the real letterbox
 * margin, worked out from the intrinsic size — not a guess based on the
 * element box, which always fills the screen.
 */
export function ImageZoom({
  images,
  index,
  onClose,
  onIndexChange,
  returnFocusTo,
}: {
  images: ZoomImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
  /** Focused when the viewer closes, so keyboard users land back on the photo
   *  they opened rather than at the top of the document. */
  returnFocusTo?: React.RefObject<HTMLElement | null>;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const pointerStart = useRef<{ id: number; x: number; y: number } | null>(null);
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);
  const activePointers = useRef(new Map<number, { x: number; y: number }>());
  const moved = useRef(false);
  const suppressClick = useRef(false);

  const [scale, setScale] = useState(MIN_SCALE);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const image = images[index];
  const zoomed = scale > MIN_SCALE;

  const clampScale = useCallback((n: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, n)), []);

  const reset = useCallback(() => {
    setScale(MIN_SCALE);
    setOffset({ x: 0, y: 0 });
  }, []);

  /**
   * The rectangle the picture is actually drawn in, in viewport coordinates,
   * accounting for object-contain letterboxing plus the current pan and zoom.
   */
  const imageRect = useCallback(() => {
    const vp = viewportRef.current;
    const img = imgRef.current;
    if (!vp || !img) return null;
    const box = vp.getBoundingClientRect();
    const nw = img.naturalWidth;
    const nh = img.naturalHeight;
    if (!nw || !nh) return null;

    const fit = Math.min(box.width / nw, box.height / nh);
    const w = nw * fit * scale;
    const h = nh * fit * scale;
    // transform is translate then scale, so the centre lands on the viewport
    // centre displaced by the pan offset.
    const cx = box.left + box.width / 2 + offset.x;
    const cy = box.top + box.height / 2 + offset.y;
    return { left: cx - w / 2, top: cy - h / 2, right: cx + w / 2, bottom: cy + h / 2 };
  }, [scale, offset]);

  const isOverImage = useCallback(
    (clientX: number, clientY: number) => {
      const r = imageRect();
      if (!r) return true;
      return clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom;
    },
    [imageRect],
  );

  /** Zoom about a point so the pixel under the cursor stays under the cursor. */
  const zoomAt = useCallback(
    (next: number, clientX?: number, clientY?: number) => {
      const target = clampScale(next);
      if (target === scale) return;
      if (target === MIN_SCALE) {
        setScale(target);
        setOffset({ x: 0, y: 0 });
        return;
      }
      if (clientX === undefined || clientY === undefined) {
        setScale(target);
        return;
      }
      const box = viewportRef.current?.getBoundingClientRect();
      if (!box) {
        setScale(target);
        return;
      }
      const cx = clientX - box.left - box.width / 2;
      const cy = clientY - box.top - box.height / 2;
      const ratio = target / scale;
      // Pan is applied from the current offset so zoom and pan commit together.
      // Updaters stay pure here because StrictMode may invoke them twice.
      setOffset((o) => ({ x: cx - (cx - o.x) * ratio, y: cy - (cy - o.y) * ratio }));
      setScale(target);
    },
    [scale, clampScale],
  );

  // ---- lifecycle --------------------------------------------------------
  // The parent mounts this with key={index}, so moving to another image remounts
  // and resets zoom/pan/loading without a state-syncing effect.

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (images.length > 1) {
        if (e.key === 'ArrowRight') onIndexChange((index + 1) % images.length);
        if (e.key === 'ArrowLeft') onIndexChange((index - 1 + images.length) % images.length);
      }
      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [images.length, index, onClose, onIndexChange]);

  // Lock the page behind the viewer. The scrollbar is replaced with padding of
  // the same width so the page underneath does not shift sideways on open.
  useEffect(() => {
    const { body } = document;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    // Captured now: cleanup runs after the parent may have re-rendered.
    const focusTarget = returnFocusTo?.current ?? null;
    body.style.overflow = 'hidden';
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    dialogRef.current?.focus();
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
      focusTarget?.focus();
    };
  }, [returnFocusTo]);

  // ---- wheel / trackpad -------------------------------------------------
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    // Registered natively because React's onWheel is passive, so it cannot
    // preventDefault and the page would scroll behind the viewer.
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomAt(scale * (1 - e.deltaY * 0.002), e.clientX, e.clientY);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [scale, zoomAt]);

  // ---- pointer: drag to pan, pinch to zoom ------------------------------
  const onPointerDown = (e: React.PointerEvent) => {
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (activePointers.current.size === 2) {
      const [a, b] = [...activePointers.current.values()];
      pinchStart.current = { distance: Math.hypot(a.x - b.x, a.y - b.y), scale };
      moved.current = true;
      suppressClick.current = true;
      return;
    }
    pointerStart.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    moved.current = false;
    if (zoomed) setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!activePointers.current.has(e.pointerId)) return;
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.current.size === 2 && pinchStart.current) {
      const [a, b] = [...activePointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchStart.current.distance > 0) {
        zoomAt((pinchStart.current.scale * distance) / pinchStart.current.distance);
      }
      return;
    }

    const start = pointerStart.current;
    if (!start || start.id !== e.pointerId || !zoomed) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (!moved.current && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      moved.current = true;
      // A drag must not be reported as a click, or releasing would toggle zoom
      // or close the viewer.
      suppressClick.current = true;
    }
    if (moved.current) {
      setOffset((o) => ({ x: o.x + dx, y: o.y + dy }));
      pointerStart.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    }
  };

  const endPointer = (e: React.PointerEvent) => {
    activePointers.current.delete(e.pointerId);
    if (activePointers.current.size < 2) pinchStart.current = null;
    if (pointerStart.current?.id === e.pointerId) pointerStart.current = null;
    setDragging(false);
  };

  // ---- clicks -----------------------------------------------------------
  const onViewportClick = (e: React.MouseEvent) => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    if (isOverImage(e.clientX, e.clientY)) {
      if (zoomed) reset();
      else zoomAt(2.2);
    } else {
      onClose();
    }
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || 'Product image'}
      tabIndex={-1}
      className="fixed inset-0 z-[110] animate-fade-in"
    >
      {/* Dim backdrop. Purely visual: the click logic lives on the viewport so
          it can tell image from letterbox margin. */}
      <div className="absolute inset-0 bg-brand-950/95" aria-hidden="true" />

      <div
        ref={viewportRef}
        onClick={onViewportClick}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        className="absolute inset-0 touch-none select-none overflow-hidden"
      >
        <Image
          ref={imgRef}
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          draggable={false}
          onLoad={() => setLoaded(true)}
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})` }}
          className={cn(
            'object-contain transition-transform duration-200 ease-out',
            dragging && 'transition-none',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
        />
      </div>

      {/* Controls sit on their own layer so pressing + or - does not register
          as a click on the backdrop. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-white/10 p-1 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => zoomAt(scale - 0.5)}
            disabled={scale <= MIN_SCALE}
            aria-label="Zoom out"
            className="grid size-9 place-items-center rounded-full text-white transition-colors hover:bg-white/15 disabled:opacity-30"
          >
            −
          </button>
          <span className="min-w-14 text-center text-xs text-white/80 tabular-nums">
            {loaded ? `${Math.round(scale * 100)}%` : ''}
          </span>
          <button
            type="button"
            onClick={() => zoomAt(scale + 0.5)}
            disabled={scale >= MAX_SCALE}
            aria-label="Zoom in"
            className="grid size-9 place-items-center rounded-full text-white transition-colors hover:bg-white/15 disabled:opacity-30"
          >
            +
          </button>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onIndexChange((index - 1 + images.length) % images.length); }}
            aria-label="Previous image"
            className="absolute top-1/2 left-2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onIndexChange((index + 1) % images.length); }}
            aria-label="Next image"
            className="absolute top-1/2 right-2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:right-6"
          >
            ›
          </button>
        </>
      )}

      <p className="pointer-events-none absolute inset-x-0 top-0 p-5 text-center text-xs text-white/50">
        {images.length > 1 ? `${index + 1} / ${images.length} · ` : ''}
        {zoomed ? 'Click the image to zoom out' : 'Click the image to zoom · click outside to close'}
      </p>
    </div>
  );
}
