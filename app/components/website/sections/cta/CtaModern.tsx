import { CtaSection as CtaSectionData } from '@/lib/website';

type CtaModernProps = {
  section: CtaSectionData;
};

export default function CtaModern({ section }: CtaModernProps) {
  return (
    <section className="overflow-hidden bg-zinc-950 px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-zinc-800 bg-zinc-900 p-8 shadow-2xl sm:p-12 lg:p-16">
        <div className="text-center">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-5 max-w-3xl break-keep text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            {section.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-bold text-zinc-950 transition hover:opacity-90">
              {section.primaryButton}
            </button>

            {section.secondaryButton && (
              <button className="rounded-2xl border border-zinc-700 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300">
                {section.secondaryButton}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}