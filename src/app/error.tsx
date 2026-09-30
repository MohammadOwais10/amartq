'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home, RotateCcw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[70vh] flex-col justify-center py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-display text-5xl text-sand-300">Oops</p>
        <h1 className="mt-6 text-display text-brand-900">Something went wrong</h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          This is on us, not on you. Try again — and if it keeps happening, message us and we will
          sort it out.
        </p>

        {error.digest && (
          <p className="mt-4 text-xs text-sand-500">
            Reference: <span className="tabular-nums">{error.digest}</span>
          </p>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn btn-primary">
            <RotateCcw size={15} aria-hidden="true" />
            Try again
          </button>
          <Link href="/" className="btn btn-outline">
            <Home size={15} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
