import type { MetadataRoute } from 'next';
import { store } from '@/lib/store';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${store.name} — ${store.tagline}`,
    short_name: store.name,
    description: store.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#09254A',
    categories: ['shopping', 'lifestyle', 'home'],
    lang: store.locale,
    icons: [{ src: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' }],
  };
}
