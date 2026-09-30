import type { MetadataRoute } from 'next';
import { store } from '@/lib/store';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Order flow and private state are not useful in an index.
        disallow: ['/cart', '/checkout', '/wishlist', '/search'],
      },
    ],
    sitemap: `${store.url}/sitemap.xml`,
    host: store.url,
  };
}
