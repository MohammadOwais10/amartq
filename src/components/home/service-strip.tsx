import { Headphones, PackageCheck, RefreshCw, Truck } from 'lucide-react';
import { fulfilment, store } from '@/lib/store';

const items = [
  {
    icon: Truck,
    title: `Free delivery over ${store.currencySymbol} ${fulfilment.freeShippingThreshold.toLocaleString(store.locale)}`,
    body: `${fulfilment.deliveryDays.min}–${fulfilment.deliveryDays.max} working days nationwide, cash on delivery available.`,
  },
  {
    icon: PackageCheck,
    title: 'Dispatched within 24 hours',
    body: 'Cut, pressed and boxed the day you order. Nothing sits in a warehouse for a week.',
  },
  {
    icon: RefreshCw,
    title: `${fulfilment.returnWindowDays}-day returns`,
    body: 'Unwashed and unused, we refund in full. No restocking fee, no argument.',
  },
  {
    icon: Headphones,
    title: 'Real people on WhatsApp',
    body: 'Size, colourway or fabric questions answered by someone who sews for a living.',
  },
];

export function ServiceStrip() {
  return (
    <section className="border-b border-sand-200 bg-sand-100">
      <div className="container-page grid gap-x-8 gap-y-7 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3.5" data-reveal>
            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-white">
              <item.icon size={16} className="text-accent-500" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[13px] font-semibold text-brand-900">{item.title}</span>
              <span className="mt-1 block text-xs leading-relaxed text-ink-soft">{item.body}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
