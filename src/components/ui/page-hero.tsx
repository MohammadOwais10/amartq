import Link from 'next/link';
import { cn } from '@/lib/utils';

export type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
  tone = 'light',
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  tone?: 'light' | 'dark';
  className?: string;
  children?: React.ReactNode;
}) {
  const dark = tone === 'dark';
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b',
        dark ? 'border-white/10 bg-brand-950 text-white ' : 'border-sand-200 bg-sand-100',
        className,
      )}
    >
      {/* Ambient wash — brand-500 at 12% is the only step on the navy ramp with
          enough luminance to read as a glow without greying the ground. Kept
          behind the content and clipped to the section so the blur cannot lift
          the border or bleed into the page below. */}
      {dark && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-[12%] size-[34rem] rounded-full bg-brand-500/12 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-[10%] size-[26rem] rounded-full bg-brand-400/10 blur-3xl"
          />
        </>
      )}

      <div className="container-page relative py-14 lg:py-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol
              className={cn(
                'flex flex-wrap items-center gap-1.5 text-xs',
                dark ? 'text-brand-300' : 'text-ink-soft',
              )}
            >
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-accent-500"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className={dark ? 'text-white' : 'text-brand-900'}>
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className={cn('eyebrow mb-4', dark ? 'text-accent-500' : 'text-accent-600')}>
            {eyebrow}
          </p>
        )}
        <h1 className={cn('text-display text-3xl', dark ? 'text-white' : 'text-brand-900')}>{title}</h1>
        {intro && (
          <div
            className={cn(
              'mt-5 max-w-2xl text-base leading-relaxed',
              dark ? 'text-brand-100' : 'text-ink-soft',
            )}
          >
            {intro}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'max-w-2xl space-y-5 leading-relaxed text-ink-soft',
        '[&_a]:text-brand-900 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent-600',
        '[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-brand-900',
        '[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:text-brand-900',
        '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-accent-500',
        '[&_strong]:font-semibold [&_strong]:text-ink',
        className,
      )}
    >
      {children}
    </div>
  );
}
