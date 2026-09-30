import type { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { CategoryGrid } from '@/components/home/category-grid';
import { FeaturedProducts } from '@/components/home/featured-products';
import { MaterialsStrip, StorySection } from '@/components/home/story-section';

import { Testimonials, WhatsAppCta } from '@/components/home/testimonials';
import { ServiceStrip } from '@/components/home/service-strip';
import { store } from '@/lib/store';

export const metadata: Metadata = {
  title: `${store.name} — Premium Bed Sheets, Bedding & Home Textiles`,
  description: store.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <StorySection />
      <MaterialsStrip />
      <Testimonials />
      <WhatsAppCta />
    </>
  );
}
