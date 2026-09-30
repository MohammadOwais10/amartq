'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertCircle,
  ArrowLeft,
  Check,
  Copy,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  User,
} from 'lucide-react';
import { useCart } from '@/components/cart/cart-provider';
import { fulfilment, store } from '@/lib/store';
import { money, shippingOptions, type CustomerDetails } from '@/lib/types';
import { buildOrderMessage, whatsappUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

type Errors = Partial<Record<keyof CustomerDetails, string>>;

const empty: CustomerDetails = {
  name: '',
  phone: '',
  address: '',
  city: '',
  notes: '',
  delivery: 'standard',
};

/**
 * Indian mobile: 10 digits starting 6–9, optionally prefixed with +91, 91, or
 * a leading 0. Accepts the shapes people actually paste in, including spaced
 * and dashed groups which are stripped before this runs.
 */
const PHONE_RE = /^(?:\+?91|0)?[6-9]\d{9}$/;

export function CheckoutFlow() {
  const { lines, hydrated, subtotal, clear } = useCart();
  const [details, setDetails] = useState<CustomerDetails>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const option =
    shippingOptions.find((o) => o.id === details.delivery) ?? shippingOptions[0];

  const shippingCost =
    subtotal >= fulfilment.freeShippingThreshold || subtotal === 0 ? 0 : option.price;
  const total = subtotal + shippingCost;

  const message = useMemo(
    () =>
      buildOrderMessage(
        lines,
        details,
        option,
        { subtotal, shipping: shippingCost, total, savings: 0 },
      ),
    [lines, details, option, subtotal, shippingCost, total],
  );

  const validate = (d: CustomerDetails): Errors => {
    const e: Errors = {};
    if (d.name.trim().length < 2) e.name = 'Please tell us your name';
    const digits = d.phone.replace(/[\s-]/g, '');
    if (!PHONE_RE.test(digits)) {
      e.phone = 'Enter a valid 10-digit mobile number, e.g. 98290 12345';
    }
    if (d.address.trim().length < 8) e.address = 'Please include your street address';
    if (d.city.trim().length < 2) e.city = 'Which city should we deliver to?';
    return e;
  };

  const set = (patch: Partial<CustomerDetails>) => {
    const next = { ...details, ...patch };
    setDetails(next);
    if (Object.keys(touched).length) setErrors(validate(next));
  };

  const blur = (field: keyof CustomerDetails) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(details));
  };

  const valid = Object.keys(validate(details)).length === 0;

  const send = () => {
    const found = validate(details);
    setErrors(found);
    setTouched({ name: true, phone: true, address: true, city: true, notes: true });
    if (Object.keys(found).length) {
      document
        .querySelector<HTMLElement>('[data-invalid="true"]')
        ?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (!hydrated) {
    return (
      <div className="container-page py-16">
        <div className="skeleton h-12 w-72" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div className="space-y-5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="skeleton h-14" />
            ))}
          </div>
          <div className="skeleton h-80" />
        </div>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-display text-brand-900">There is nothing to check out</h1>
          <p className="mt-4 text-ink-soft">
            Your bag is empty, so there is no order to send. Add a piece or two and come back.
          </p>
          <Link href="/shop" className="btn btn-primary mt-8">
            Browse the collection
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-lg text-center">
          <span className="mb-6 inline-grid size-16 place-items-center rounded-full bg-success/10">
            <Check size={28} className="text-success" aria-hidden="true" />
          </span>
          <h1 className="text-display text-brand-900">Order sent to WhatsApp</h1>
          <p className="mt-4 leading-relaxed text-ink-soft">
            If WhatsApp opened, you&rsquo;re nearly done — send the message and we&rsquo;ll confirm
            stock, apply any colourway swaps you want, and give you a delivery window, usually
            within two hours.
          </p>
          <p className="mt-4 text-sm text-ink-soft">
            If nothing opened, copy the order below and send it to{' '}
            <a
              href={whatsappUrl(`Hello ${store.name}! I'd like to place an order.`)}
              className="link-underline font-semibold text-brand-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {store.name} on WhatsApp
            </a>
            .
          </p>

          <div className="mt-8 border border-sand-200 bg-white p-5 text-left">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="eyebrow text-brand-900">Your order</p>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(message);
                    setCopied(true);
                    window.setTimeout(() => setCopied(false), 2000);
                  } catch {
                    // Clipboard blocked; the text is selectable below.
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs text-ink-soft transition-colors hover:text-accent-600"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="max-h-64 overflow-y-auto font-sans text-xs leading-relaxed whitespace-pre-wrap text-ink-soft">
              {message}
            </pre>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                clear();
                setSubmitted(false);
                setDetails(empty);
              }}
              className="btn btn-outline "
            >
              Place another order
            </button>
            <Link href="/shop" className="btn btn-primary">
              Back to shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-10 lg:py-14">
      <Link
        href="/cart"
        className="mb-8 inline-flex items-center gap-2 text-xs text-ink-soft transition-colors hover:text-accent-600"
      >
        <ArrowLeft size={13} aria-hidden="true" />
        Back to bag
      </Link>

      <div className="mb-10">
        <p className="eyebrow mb-3 text-accent-600">Checkout</p>
        <h1 className="text-display text-brand-900">Where should this go?</h1>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
          Fill this in and we&rsquo;ll build your order and hand it to you as a WhatsApp message.
          Nothing is charged on this site — you confirm everything with our team first.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14 xl:gap-20">
        {/* Form ------------------------------------------------------ */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="space-y-8"
          noValidate
        >
          <fieldset>
            <legend className="mb-4 flex items-center gap-2.5">
              <User size={16} className="text-accent-500" aria-hidden="true" />
              <span className="eyebrow text-brand-900">Contact</span>
            </legend>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Full name"
                value={details.name}
                onChange={(v) => set({ name: v })}
                onBlur={() => blur('name')}
                error={touched.name ? errors.name : undefined}
                autoComplete="name"
                placeholder="Ayesha Khan"
              />
              <Field
                id="phone"
                label="Mobile number"
                type="tel"
                value={details.phone}
                onChange={(v) => set({ phone: v })}
                onBlur={() => blur('phone')}
                error={touched.phone ? errors.phone : undefined}
                autoComplete="tel"
                placeholder="98290 12345"
                prefix={`+${store.dialCode}`}
                hint="We use this for delivery updates only."
              />
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-4 flex items-center gap-2.5">
              <MapPin size={16} className="text-accent-500" aria-hidden="true" />
              <span className="eyebrow text-brand-900">Delivery address</span>
            </legend>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field
                  id="address"
                  label="Street address"
                  value={details.address}
                  onChange={(v) => set({ address: v })}
                  onBlur={() => blur('address')}
                  error={touched.address ? errors.address : undefined}
                  autoComplete="street-address"
                  placeholder="House / flat, street, area"
                />
              </div>
              <Field
                id="city"
                label="City"
                value={details.city}
                onChange={(v) => set({ city: v })}
                onBlur={() => blur('city')}
                error={touched.city ? errors.city : undefined}
                autoComplete="address-level2"
                placeholder="Jaipur"
              />
              <div>
                <label htmlFor="delivery" className="label">
                  Delivery speed
                </label>
                <div className="relative">
                  <select
                    id="delivery"
                    value={details.delivery}
                    onChange={(e) =>
                      set({ delivery: e.target.value as CustomerDetails['delivery'] })
                    }
                    className="field cursor-pointer"
                  >
                    {shippingOptions.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label} — {o.detail} (
                        {subtotal >= fulfilment.freeShippingThreshold
                          ? 'Free'
                          : money(o.price)}
                        )
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-4 flex items-center gap-2.5">
              <MessageCircle size={16} className="text-accent-500" aria-hidden="true" />
              <span className="eyebrow text-brand-900">Anything we should know?</span>
            </legend>
            <label htmlFor="notes" className="sr-only">
              Order notes
            </label>
            <textarea
              id="notes"
              rows={4}
              value={details.notes}
              onChange={(e) => set({ notes: e.target.value })}
              placeholder="Gift wrapping, a preferred delivery window, a swap you are considering…"
              className="field resize-y"
            />
          </fieldset>

          <div className="rounded-sm border border-accent-200 bg-accent-50 p-4">
            <p className="flex gap-2.5 text-xs leading-relaxed text-accent-900">
              <ShieldCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>
                Your details go straight into a WhatsApp message on your own device. Nothing is
                stored on a server and no payment information is ever collected here.
              </span>
            </p>
          </div>
        </form>

        {/* Summary ---------------------------------------------------- */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-sand-200 bg-white p-6">
            <h2 className="eyebrow mb-5 text-brand-900">
              Your order ({lines.length} {lines.length === 1 ? 'line' : 'lines'})
            </h2>

            <ul className="mb-5 max-h-72 space-y-4 overflow-y-auto pr-1">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-3">
                  <span className="relative size-14 shrink-0 overflow-hidden bg-sand-100">
                    <Image
                      src={line.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                    <span className="absolute -top-1 -right-1 grid size-5 place-items-center rounded-full bg-brand-900 text-[10px] font-bold text-white tabular-nums">
                      {line.quantity}
                    </span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="line-clamp-2-safe block text-xs leading-snug text-brand-900">
                      {line.name}
                    </span>
                    <span className="mt-0.5 block text-[11px] text-ink-soft">
                      {line.colourway} &middot; {line.size}
                    </span>
                  </span>
                  <span className="shrink-0 text-xs font-semibold tabular-nums text-ink">
                    {money(line.price * line.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-2.5 border-t border-sand-200 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-ink-soft">Subtotal</span>
                <span className="font-semibold tabular-nums">{money(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft">{option.label}</span>
                <span
                  className={cn(
                    'font-semibold tabular-nums',
                    shippingCost === 0 ? 'text-success' : 'text-ink',
                  )}
                >
                  {shippingCost === 0 ? 'Free' : money(shippingCost)}
                </span>
              </div>
            </div>

            <div className="my-4 rule" aria-hidden="true" />

            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-brand-900">Total</span>
              <span className="font-display text-2xl tabular-nums text-brand-900">
                {money(total)}
              </span>
            </div>

            {subtotal < fulfilment.freeShippingThreshold && (
              <p className="mt-2 text-[11px] text-sand-500">
                Add {money(fulfilment.freeShippingThreshold - subtotal)} for free delivery
              </p>
            )}

            <button
              type="button"
              onClick={send}
              className="btn btn-accent mt-6 w-full"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Send order on WhatsApp
            </button>

            {!valid && (
              <p className="mt-3 flex items-start gap-1.5 text-[11px] text-ink-soft">
                <AlertCircle size={12} className="mt-0.5 shrink-0" aria-hidden="true" />
                Fill in your name, mobile and address so we can deliver.
              </p>
            )}

            <ul className="mt-5 space-y-2.5 border-t border-sand-200 pt-5 text-xs text-ink-soft">
              <li className="flex gap-2">
                <Truck size={13} className="mt-0.5 shrink-0 text-accent-500" aria-hidden="true" />
                Dispatched within 24 hours of your confirmation
              </li>
              <li className="flex gap-2">
                <Phone size={13} className="mt-0.5 shrink-0 text-accent-500" aria-hidden="true" />
                Cash on delivery, bank transfer or card on request
              </li>
              <li className="flex gap-2">
                <ShieldCheck size={13} className="mt-0.5 shrink-0 text-accent-500" aria-hidden="true" />
                {fulfilment.returnWindowDays}-day returns, unwashed and unused
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  type = 'text',
  autoComplete,
  placeholder,
  prefix,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  prefix?: string;
  hint?: string;
}) {
  const invalid = Boolean(error);
  return (
    <div data-invalid={invalid}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-sm text-sand-500 select-none">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={invalid}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={cn('field', prefix && 'pl-14', error && 'border-danger')}
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
          <AlertCircle size={12} aria-hidden="true" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-sand-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
