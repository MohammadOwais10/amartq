import { fulfilment, store } from '@/lib/store';

export type Policy = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  updated: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
};

export const policies: Policy[] = [
  {
    slug: 'shipping',
    title: 'Shipping & Delivery',
    shortTitle: 'Shipping',
    summary: 'How, when and how much it costs to get an AMARTQ order to you.',
    updated: '2026-01-15',
    sections: [
      {
        heading: 'Where we deliver',
        body: [
          'We deliver across India only — all 28 states and 8 union territories, including the North East, Jammu & Kashmir and Ladakh. We do not ship outside India at present.',
        ],
      },
      {
        heading: 'Cost and timing',
        body: [
          `Standard delivery within India is ${store.currencySymbol} ${fulfilment.standardShipping} and takes ${fulfilment.deliveryDays.min} to ${fulfilment.deliveryDays.max} working days after dispatch. Orders over ${store.currencySymbol} ${fulfilment.freeShippingThreshold.toLocaleString(store.locale)} ship free.`,
          `Express delivery is ${store.currencySymbol} ${fulfilment.standardShipping + fulfilment.expressSurcharge} and arrives in 1 to 2 working days if you order before 2pm. It is available in Jaipur, Delhi, Mumbai and Bengaluru.`,
        ],
      },
      {
        heading: 'Dispatch times',
        body: [
          'Orders confirmed before 2pm on a working day are dispatched the same day. Anything confirmed after that, or at the weekend, goes out the next working day.',
          'A small number of products are woven to order. Where that is the case the product page says so and gives a lead time, and we will not charge you until the cloth is actually on the loom.',
        ],
      },
      {
        heading: 'Serviceable PIN codes',
        body: [
          'Delivery is by courier and post-office partner, so every serviceable PIN code in India is covered. Remote and hilly pincodes can add a day or two, and we will say so when we confirm your order rather than after it has shipped.',
          'A few PIN codes are not served by our courier. If yours is one of them, message us before you order and we will tell you straight.',
        ],
      },
      {
        heading: 'If something goes wrong',
        body: [
          'If your tracking stops updating for more than three working days, message us with your order reference. Damaged or incorrect parcels are replaced on the next dispatch and do not need to come back to us.',
        ],
      },
    ],
  },
  {
    slug: 'returns',
    title: 'Returns & Exchange',
    shortTitle: 'Returns',
    summary: 'Our returns window, what we cover, and how to get a refund or an exchange.',
    updated: '2026-01-15',
    sections: [
      {
        heading: 'The window',
        body: [
          'You have 7 days from the day your order is delivered to start a return. Items must be unwashed, unused and in their original packaging.',
          'We pay the return courier. You do not need to pay postage to send something back, inside India.',
        ],
      },
      {
        heading: 'Exchanges',
        body: [
          'Exchanges are free and more common than refunds. We hold your replacement in the studio while the original is in transit, so you are not without a sheet in the meantime.',
          'If the size you need is not in stock, we will tell you before you commit and you can wait for the next run instead.',
        ],
      },
      {
        heading: 'Faulty or incorrect items',
        body: [
          'Manufacturing faults — a failed seam, a hem that has come loose, a broken zip — are replaced immediately on the next dispatch with no return required. Send us a photograph and we will process it the same day.',
          'If we sent you the wrong item or colour, we will collect it and send the right one. That is our mistake, so it costs you nothing.',
        ],
      },
      {
        heading: 'What we cannot accept',
        body: [],
        list: [
          'Items that have been washed, ironed, altered or otherwise used',
          'Items returned without tags or in damaged packaging',
          'Custom-made or personalised items, once production has started',
          'Gift wrap, where the wrapping itself has been removed',
        ],
      },
      {
        heading: 'Refunds',
        body: [
          'Refunds go back to your original payment method within 5 to 7 working days of the item reaching us and passing inspection.',
          'For cash on delivery orders there is no charge to reverse, so the refund is issued by bank transfer to an account in your name.',
        ],
      },
    ],
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    shortTitle: 'Privacy',
    summary: 'What we collect, why we collect it, and the fact that most of it never touches a server.',
    updated: '2026-01-15',
    sections: [
      {
        heading: 'The short version',
        body: [
          'This site has no accounts, no payment processing and no third-party advertising trackers. Your bag and your wishlist are stored in your own browser and are never transmitted to us.',
          'We only receive what you choose to type into a WhatsApp message or an email.',
        ],
      },
      {
        heading: 'What stays on your device',
        body: [
          'Your bag and your wishlist are stored in your browser’s local storage. Clearing your browser data removes them permanently, and we have no way to recover them.',
          'Because of this, a bag does not follow you between devices. Send us the items and we will re-add them for you.',
        ],
      },
      {
        heading: 'What we receive from you',
        body: [
          'When you check out, your name, mobile number, delivery address and any note you write are assembled into a WhatsApp message on your own device. You then send that message to us, and at that point it becomes information we hold.',
          'We use it for one purpose: to deliver your order and to answer you about it. We do not sell it, rent it, or pass it to marketing lists.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: [
          'Order records are kept for eight years, which is the period Indian tax and accounting rules expect for business records.',
          'Enquiry records that do not become orders are deleted after 24 months.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You can ask us for a copy of everything we hold about you, ask us to correct it, or ask us to delete it. Message us and we will action it within seven working days.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    shortTitle: 'Terms',
    summary: 'The terms you agree to by using this site and ordering from us.',
    updated: '2026-01-15',
    sections: [
      {
        heading: 'Orders are confirmed on WhatsApp',
        body: [
          'Adding something to your bag is not an order. Your order is placed when we have received your WhatsApp message and confirmed the details, including stock and price, with you.',
          'We reserve the right to decline an order, for example if an item is out of stock, if a price was listed in error, or if we cannot deliver to your address. If that happens you are refunded in full.',
        ],
      },
      {
        heading: 'Pricing',
        body: [
          `All prices are in Indian Rupees (${store.currency}) and include GST as applicable. Delivery is shown separately at checkout.`,
          'If a price is listed in error we will contact you before dispatch and you can decide whether to proceed at the corrected price or cancel.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'The AMARTQ name, the photography, the product designs and the copy on this site belong to us. You are welcome to share links and images of the products for personal, non-commercial use.',
        ],
      },
      {
        heading: 'Product colour',
        body: [
          'We photograph every product in daylight against a neutral background, and we colour-check before dispatch. Screens still vary, and different batches can vary slightly in tone. That variance is natural in dyed textiles and is not a fault.',
        ],
      },
      {
        heading: 'Governing law',
        body: [
          'These terms are governed by the laws of India, and the courts of Rajasthan have jurisdiction over any dispute.',
        ],
      },
    ],
  },
  {
    slug: 'cookies',
    title: 'Cookie Notice',
    shortTitle: 'Cookies',
    summary: 'The very short version: we set no cookies and run no trackers.',
    updated: '2026-01-15',
    sections: [
      {
        heading: 'What we use',
        body: [
          'This site sets no cookies. There is no advertising pixel, no analytics script, no session cookie and no cross-site tracking of any kind.',
        ],
      },
      {
        heading: 'What is stored instead',
        body: [
          'We use your browser’s local storage for two things: your bag and your wishlist.',
          'Local storage is not a cookie. It is not sent to us or to anyone else with any request, and it is not readable by any other website.',
        ],
      },
      {
        heading: 'Fonts and images',
        body: [
          'Typefaces are self-hosted and product imagery is served from our own domain, so visiting this page does not tell any third party that you were here.',
        ],
      },
      {
        heading: 'Clearing it',
        body: [
          'Clear site data for this domain in your browser settings and everything we store is gone. You will lose your bag and wishlist, and we cannot restore them.',
        ],
      },
    ],
  },
];

export const getPolicy = (slug: string) => policies.find((p) => p.slug === slug);
