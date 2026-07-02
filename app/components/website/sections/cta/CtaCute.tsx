import { CtaSection as CtaSectionData } from '@/lib/website';

type CtaCuteProps = {
  section: CtaSectionData;
};

export default function CtaCute({ section }: CtaCuteProps) {
  return (
    <section className="overflow-hidden bg-linear-to-br from-pink-50 via-rose-50 to-amber-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl rounded-[3rem] border border-pink-100 bg-white/90 p-8 text-center shadow-xl sm:p-12 lg:p-16">
       {section.eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
          {section.eyebrow}
        </p>
       )}

        <h3 className="mx-auto mt-5 max-w-3xl break-keep text-3xl font-bold leading-tight text-rose-950 sm:text-4xl lg:text-5xl">
          {section.title}
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-rose-700 sm:text-base sm:leading-8">
          {section.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-linear-to-r from-pink-400 to-rose-400 px-8 py-4 text-sm font-bold text-white shadow-md transition hover:opacity-90">
            {section.primaryButton}
          </button>

          {section.secondaryButton && (
            <button className="rounded-full border border-pink-200 bg-white px-8 py-4 text-sm font-bold text-pink-500 transition hover:border-pink-400 hover:bg-pink-50">
              {section.secondaryButton}
            </button>
          )}
        </div>

        <div className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-3">
          <span className="h-2 w-10 rounded-full bg-pink-300" />
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
        </div>
      </div>
    </section>
  );
}