import { HeroSection as HeroSectionData } from '@/lib/website';

type HeroModernProps = {
  section: HeroSectionData;
};

export default function HeroModern({ section }: HeroModernProps) {
  return (
    <section className="overflow-hidden bg-zinc-950 px-8 py-20 text-white md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          {section.eyebrow && (
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {section.eyebrow}
            </span>
          )}

          <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {section.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            {section.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:scale-105">
              {section.primaryButton}
            </button>
            <button className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400">
              {section.secondaryButton}
            </button>
          </div>
        </div>

        <div className="relative h-420px rounded-3xl border border-zinc-800 bg-linear-to-br from-cyan-500/20 via-zinc-900 to-indigo-500/20 p-6">
          <div className="absolute inset-6 rounded-2xl border border-white/10" />
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-8 right-8 rounded-2xl bg-zinc-900/80 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">AI Ready</p>
            <p className="mt-2 text-2xl font-bold">Modern UI</p>
          </div>
        </div>
      </div>
    </section>
  );
}