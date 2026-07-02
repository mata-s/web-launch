import { CtaSection as CtaSectionData } from '@/lib/website';

type CtaDarkProps = {
  section: CtaSectionData;
};

export default function CtaDark({ section }: CtaDarkProps) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl rounded-[2.5rem] border border-zinc-800 bg-zinc-950 p-8 text-center shadow-2xl sm:p-12 lg:p-16">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-violet-500/10" />
        <div className="absolute bottom-0 left-0 h-28 w-28 rounded-tr-full bg-cyan-500/10" />

        <div className="relative">
           {section.eyebrow && (
            <p className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
              {section.eyebrow}
            </p>
           )}
          <h3 className="mx-auto mt-6 max-w-3xl break-keep text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            {section.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-linear-to-r from-violet-500 to-cyan-400 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
              {section.primaryButton}
            </button>

            {section.secondaryButton && (
              <button className="rounded-2xl border border-zinc-700 bg-transparent px-8 py-4 text-sm font-bold text-white transition hover:border-violet-400 hover:text-violet-300">
                {section.secondaryButton}
              </button>
            )}
          </div>

          <div className="mx-auto mt-12 h-px max-w-xl bg-linear-to-r from-violet-500/0 via-violet-400/60 to-cyan-400/0" />
        </div>
      </div>
    </section>
  );
}