import { CtaSection as CtaSectionData } from '@/lib/website';

type CtaMinimalProps = {
  section: CtaSectionData;
};

export default function CtaMinimal({ section }: CtaMinimalProps) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-4xl border-y border-zinc-200 py-14 text-center">
        {section.eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
            {section.eyebrow}
          </p>
        )}

        <h3 className="mx-auto mt-5 max-w-3xl break-keep text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl">
          {section.title}
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
          {section.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-zinc-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800">
            {section.primaryButton}
          </button>

          {section.secondaryButton && (
            <button className="rounded-full border border-zinc-300 bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900">
              {section.secondaryButton}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}