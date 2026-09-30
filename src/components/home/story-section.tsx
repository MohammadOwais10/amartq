import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Ruler, Scissors, Sparkles } from 'lucide-react';
import { fabricSummary, productBySlug } from '@/lib/catalog';

const steps = [
  {
    icon: Leaf,
    title: 'Fibre selected',
    body: 'Long-staple cotton, Normandy flax and RWS-certified merino — chosen on staple length, not price per kilo.',
  },
  {
    icon: Ruler,
    title: 'Woven to spec',
    body: 'Percale, sateen, herringbone and basket weaves run on looms we have used for over a decade, in runs of 200 metres or less.',
  },
  {
    icon: Scissors,
    title: 'Cut and finished',
    body: 'Pattern-cut, with reinforced hems, internal corner ties and hand-finished edges that survive the wash cycle.',
  },
  {
    icon: Sparkles,
    title: 'Washed & pressed',
    body: 'Every piece is pre-washed and hand-finished before it is boxed, so it arrives soft rather than stiff.',
  },
];

export function StorySection() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div className="grid lg:grid-cols-2">
        {/* Image ------------------------------------------------------ */}
        <div className="relative min-h-[24rem] lg:min-h-[44rem]" data-reveal>
          <Image
            src="/images/websiteimgs/how_its_made.png"
            alt="How an AMARTQ bed sheet is made"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          {/* Warm brand wash rising from the left edge */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-accent-700/15"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-950/40"
          />
        </div>

        {/* Copy ------------------------------------------------------- */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24" data-reveal>
          <p className="eyebrow mb-4 text-accent-500">How it&rsquo;s made</p>
          <h2 className="text-section text-white">
            We make fewer things, and we make them properly.
          </h2>


          <ol className="mt-12 border-t border-white/12 pt-12">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="group grid grid-cols-[2.75rem_1fr] gap-x-6 pb-11 last:pb-0"
                data-reveal
              >
                {/* Rail: icon + connector */}
                <span className="relative flex flex-col items-center">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-accent-500/35 bg-accent-500/12 transition-colors duration-300 group-hover:border-accent-400/70 group-hover:bg-accent-500/20">
                    <step.icon
                      size={17}
                      strokeWidth={1.5}
                      className="text-accent-400"
                      aria-hidden="true"
                    />
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mt-3 w-px flex-1 bg-gradient-to-b from-accent-500/40 via-white/10 to-transparent"
                    />
                  )}
                </span>

                {/* Copy */}
                <span className="pt-1.5">
                  <span className="flex items-baseline gap-3.5">
                    <span className="font-display text-[11px] tracking-[0.2em] text-accent-500 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl text-white">{step.title}</span>
                  </span>
                  <span className="mt-2.5 block max-w-md text-sm leading-[1.75] text-brand-300">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function MaterialsStrip() {
  const [cotton, linen, wool, care] = fabricSummary;

  const cottonHex = productBySlug.get('royal-cotton-bedsheet-300tc')?.colourways[0]?.hex
    ?? productBySlug.get('printed-bedsheet-multicolor-floral-and-geometric')?.colourways[0]?.hex
    ?? '#8a6f9e';

  const linenHex = productBySlug.get('linen-bedsheet-washed')?.colourways[0]?.hex
    ?? productBySlug.get('printed-bedsheet-beige-grey-and-blue-floral')?.colourways[0]?.hex
    ?? '#9aa0a6';

  const woolHex = productBySlug.get('merino-wool-throw')?.colourways[0]?.hex
    ?? productBySlug.get('printed-bedsheet-blue-teal-and-multicolor-geometric')?.colourways[0]?.hex
    ?? '#2f5fa8';

  const careHex = '#09254A';

  const swatches = [cottonHex, linenHex, woolHex, careHex];

  return (
    <section className="container-page py-20 lg:py-28">
      <header className="mb-12 max-w-2xl" data-reveal>
        <p className="eyebrow mb-3 text-accent-600">Materials</p>
        <h2 className="text-section text-brand-900">
          We publish the fibre, not just the thread count
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Thread count tells you how dense a sheet is. It tells you nothing about how the fibre
          was grown, how long it is, or whether the mill treats its workers well. Here is what we
          actually use.
        </p>
      </header>

      <div className="grid gap-px bg-sand-200 sm:grid-cols-2 lg:grid-cols-4">
        {[cotton, linen, wool, care].map((fibre, i) => (
          <article key={fibre.name} className="bg-sand-50 p-7" data-reveal>
            <span
              className="mb-6 block size-11 rounded-full ring-1 ring-black/8"
              style={{ background: swatches[i] }}
              aria-hidden="true"
            />
            <h3 className="font-display text-lg text-brand-900">{fibre.name}</h3>
            <p className="mt-1 text-[11px] font-semibold tracking-[0.12em] text-accent-600 uppercase">
              {fibre.note}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{fibre.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-10" data-reveal>
        <Link href="/materials" className="link-underline text-sm font-semibold text-brand-900">
          Full material specifications →
        </Link>
      </div>
    </section>
  );
}
