import type { MetadataRoute } from 'next';
import { products, visibleCategories as categories } from '@/lib/catalog';
import { store } from '@/lib/store';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: '', priority: 1 },
    { path: '/shop', priority: 0.9 },
    { path: '/about', priority: 0.6 },
    { path: '/materials', priority: 0.6 },
    { path: '/bespoke', priority: 0.6 },
    { path: '/size-guide', priority: 0.5 },
    { path: '/faq', priority: 0.5 },
    { path: '/contact', priority: 0.5 },
    { path: '/track-order', priority: 0.3 },
    { path: '/collections/new-in', priority: 0.7 },
    { path: '/collections/bestsellers', priority: 0.7 },
    { path: '/collections/sale', priority: 0.7 },
  ].map((r) => ({
    url: `${store.url}${r.path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: r.priority,
  }));

  return [
    ...staticRoutes,
    ...categories.map((c) => ({
      url: `${store.url}/category/${c.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...products.map((p) => ({
      url: `${store.url}/product/${p.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
