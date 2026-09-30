'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import { fulfilment } from '@/lib/store';
import { lineKey, shippingOptions, type CartLine, type ShippingOption } from '@/lib/types';

const CART_KEY = 'amartq.cart.v1';
const WISHLIST_KEY = 'amartq.wishlist.v1';
const MAX_PER_LINE = 10;

/* ------------------------------------------------------------------ *
 * localStorage store
 *
 * The cart and wishlist live in localStorage and are read through
 * useSyncExternalStore rather than mirrored into useState by an effect. That
 * keeps the server and client markup identical (the server snapshot is always
 * empty) and avoids a cascading render on every page load. The pure helpers
 * below describe each mutation as data, so the reducer and the store agree.
 * ------------------------------------------------------------------ */

type Listener = () => void;

const listeners = new Map<string, Set<Listener>>();

function emit(key: string) {
  listeners.get(key)?.forEach((l) => l());
}

/**
 * Parsed snapshots, cached against the exact string they came from.
 *
 * useSyncExternalStore compares successive snapshots with Object.is, and
 * JSON.parse hands back a fresh array every call. Returning a new array on each
 * getSnapshot call makes React believe the store changed on every read, which
 * loops until it throws "Maximum update depth exceeded". Caching on the raw
 * string keeps the identity stable until the underlying value really changes.
 */
const parsed = new Map<string, { raw: string | null; value: unknown }>();

function read<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    const hit = parsed.get(key);
    if (hit && hit.raw === raw) return hit.value as T;
    // An empty value is not cached: the mutation helpers below pass a throwaway
    // fallback, and caching one of those would let a random array identity
    // become the store's snapshot. An empty store always yields the caller's
    // own stable fallback instead.
    if (!raw) {
      parsed.delete(key);
      return fallback;
    }
    const value = JSON.parse(raw) as T;
    parsed.set(key, { raw, value });
    return value;
  } catch {
    // Corrupt or unreadable value: treat it as empty rather than crashing.
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Private browsing or a full quota. The cart still works for this session.
  }
  emit(key);
}

function subscribe(key: string, onChange: Listener) {
  const set = listeners.get(key) ?? new Set<Listener>();
  set.add(onChange);
  listeners.set(key, set);

  // Keeps other tabs in step.
  const onStorage = (e: StorageEvent) => {
    if (e.key === key) onChange();
  };
  window.addEventListener('storage', onStorage);

  return () => {
    set.delete(onChange);
    if (set.size === 0) listeners.delete(key);
    window.removeEventListener('storage', onStorage);
  };
}

// Stable empty references, so the server snapshot never changes identity.
const EMPTY_LINES: CartLine[] = [];
const EMPTY_WISHLIST: string[] = [];

const subscribeNoop = () => () => {};

/* ------------------------------------------------------------------ *
 * Pure cart operations
 * ------------------------------------------------------------------ */

function addLine(lines: CartLine[], line: CartLine): CartLine[] {
  const existing = lines.find((l) => l.key === line.key);
  if (existing) {
    return lines.map((l) =>
      l.key === line.key
        ? { ...l, quantity: Math.min(MAX_PER_LINE, l.quantity + line.quantity) }
        : l,
    );
  }
  return [
    ...lines,
    { ...line, quantity: Math.min(MAX_PER_LINE, Math.max(1, line.quantity)) },
  ];
}

function setLineQuantity(lines: CartLine[], key: string, quantity: number): CartLine[] {
  if (quantity <= 0) return lines.filter((l) => l.key !== key);
  return lines.map((l) =>
    l.key === key ? { ...l, quantity: Math.min(MAX_PER_LINE, quantity) } : l,
  );
}

function toggleSlug(slugs: string[], slug: string): string[] {
  return slugs.includes(slug) ? slugs.filter((s) => s !== slug) : [...slugs, slug];
}

/* ------------------------------------------------------------------ *
 * Context
 * ------------------------------------------------------------------ */

export type AddToCartInput = Omit<CartLine, 'key' | 'quantity'> & { quantity?: number };

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  /** False during SSR and the first client render, true once storage is live. */
  hydrated: boolean;
  isOpen: boolean;
  lastAdded: CartLine | null;
  shipping: ShippingOption;
  add: (input: AddToCartInput) => void;
  remove: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  shippingCost: number;
  qualifiesForFreeShipping: boolean;
  amountToFreeShipping: number;
  wishlist: string[];
  toggleWishlist: (slug: string) => void;
  clearWishlist: () => void;
  isWishlisted: (slug: string) => boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<CartLine | null>(null);
  const [shipping] = useState<ShippingOption>(shippingOptions[0]);

  const lines = useSyncExternalStore(
    useCallback((cb: Listener) => subscribe(CART_KEY, cb), []),
    useCallback(() => read<CartLine[]>(CART_KEY, EMPTY_LINES), []),
    () => EMPTY_LINES,
  );

  const wishlist = useSyncExternalStore(
    useCallback((cb: Listener) => subscribe(WISHLIST_KEY, cb), []),
    useCallback(() => read<string[]>(WISHLIST_KEY, EMPTY_WISHLIST), []),
    () => EMPTY_WISHLIST,
  );

  // useSyncExternalStore reports the server snapshot on the hydration render,
  // then the real one immediately after, so this is the hydration flag.
  const hydrated = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  const add = useCallback((input: AddToCartInput) => {
    const quantity = input.quantity ?? 1;
    const key = lineKey(input.productId, input.colourwayIndex, input.size);
    const line: CartLine = { ...input, key, quantity };
    write(CART_KEY, addLine(read<CartLine[]>(CART_KEY, []), line));
    setLastAdded(line);
    setIsOpen(true);
  }, []);

  const remove = useCallback(
    (key: string) => write(CART_KEY, read<CartLine[]>(CART_KEY, []).filter((l) => l.key !== key)),
    [],
  );

  const setQuantity = useCallback(
    (key: string, quantity: number) =>
      write(CART_KEY, setLineQuantity(read<CartLine[]>(CART_KEY, []), key, quantity)),
    [],
  );

  const clear = useCallback(() => write(CART_KEY, []), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const toggleWishlist = useCallback(
    (slug: string) => write(WISHLIST_KEY, toggleSlug(read<string[]>(WISHLIST_KEY, []), slug)),
    [],
  );

  const clearWishlist = useCallback(() => write(WISHLIST_KEY, []), []);

  const isWishlisted = useCallback((slug: string) => wishlist.includes(slug), [wishlist]);

  // Clear the "just added" highlight after a moment.
  useEffect(() => {
    if (!lastAdded) return;
    const id = window.setTimeout(() => setLastAdded(null), 2400);
    return () => window.clearTimeout(id);
  }, [lastAdded]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = lines.reduce((n, l) => n + l.quantity, 0);
    const subtotal = lines.reduce((n, l) => n + l.price * l.quantity, 0);
    const qualifies = subtotal >= fulfilment.freeShippingThreshold;
    return {
      lines,
      itemCount,
      subtotal,
      hydrated,
      isOpen,
      lastAdded,
      shipping,
      add,
      remove,
      setQuantity,
      clear,
      openCart,
      closeCart,
      shippingCost: qualifies || subtotal === 0 ? 0 : shipping.price,
      qualifiesForFreeShipping: qualifies,
      amountToFreeShipping: Math.max(0, fulfilment.freeShippingThreshold - subtotal),
      wishlist,
      toggleWishlist,
      clearWishlist,
      isWishlisted,
    };
  }, [
    lines,
    hydrated,
    isOpen,
    lastAdded,
    shipping,
    add,
    remove,
    setQuantity,
    clear,
    openCart,
    closeCart,
    wishlist,
    toggleWishlist,
    clearWishlist,
    isWishlisted,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
