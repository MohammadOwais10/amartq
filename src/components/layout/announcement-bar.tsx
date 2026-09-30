import { MessageCircle, Phone, Truck } from 'lucide-react';
import { contact, fulfilment, store } from '@/lib/store';
import { whatsappUrl } from '@/lib/whatsapp';

const messages = [
  {
    icon: Truck,
    text: `Free delivery on orders over ${store.currencySymbol} ${fulfilment.freeShippingThreshold.toLocaleString(store.locale)}`,
  },
  { icon: Truck, text: 'Dispatched within 24 hours' },
  { icon: MessageCircle, text: 'Order on WhatsApp — no account needed' },
  { icon: Phone, text: `Help: ${contact.phoneDisplay}` },
];

export function AnnouncementBar() {
  const loop = [...messages, ...messages];
  return (
    <div className="relative overflow-hidden bg-accent-500 text-white">
      <div className="flex w-max animate-marquee items-center py-2 motion-reduce:w-full motion-reduce:justify-center motion-reduce:animate-none">
        {loop.map((m, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2.5 px-6 text-[11px] font-semibold tracking-[0.14em] uppercase"
            aria-hidden={i >= messages.length}
          >
            <m.icon size={12} aria-hidden="true" />
            {m.text}
          </span>
        ))}
      </div>
      <a
        href={whatsappUrl(
          `Hello ${store.name}! I have a question about your products.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}
