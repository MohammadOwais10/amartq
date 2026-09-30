import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, Prose } from '@/components/ui/page-hero';
import { getPolicy, policies } from '@/lib/policies';
import { store } from '@/lib/store';
import { jsonLd } from '@/lib/utils';

type Props = PageProps<'/policies/[slug]'>;

export const dynamicParams = false;

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) return { title: 'Not found' };
  return {
    title: policy.title,
    description: policy.summary,
    alternates: { canonical: `/policies/${policy.slug}` },
    openGraph: {
      title: `${policy.title} — ${store.name}`,
      description: policy.summary,
      url: `${store.url}/policies/${policy.slug}`,
    },
  };
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: policy.title,
    description: policy.summary,
    url: `${store.url}/policies/${policy.slug}`,
    dateModified: policy.updated,
    publisher: { '@type': 'Organization', name: store.name, url: store.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />

      <PageHero
        eyebrow="Legal"
        title={policy.title}
        intro={policy.summary}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Policies', href: '/policies/shipping' },
          { label: policy.shortTitle },
        ]}
      />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[15rem_1fr] lg:gap-20 lg:py-24">
        <nav aria-label="Policies" className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-4 text-sand-500">All policies</p>
          <ul className="space-y-1.5">
            {policies.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/policies/${p.slug}`}
                  aria-current={p.slug === policy.slug ? 'page' : undefined}
                  className={`block border-l-2 py-1.5 pl-3.5 text-sm transition-colors ${
                    p.slug === policy.slug
                      ? 'border-accent-500 font-medium text-brand-900'
                      : 'border-sand-200 text-ink-soft hover:border-sand-400 hover:text-brand-900'
                  }`}
                >
                  {p.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-10 text-xs text-sand-500">
            Last updated{' '}
            <time dateTime={policy.updated}>
              {new Date(policy.updated).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </p>

          <Prose className="max-w-none">
            {policy.sections.map((s) => (
              <section key={s.heading} className="scroll-mt-28">
                <h2>{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </Prose>

          <div className="mt-14 border-t border-sand-200 pt-8">
            <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
              Something in here unclear? Ask us before you order and we will explain it properly
              rather than leaving you to guess.
            </p>
            <Link href="/contact" className="btn btn-outline mt-6">
              Ask a question
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
