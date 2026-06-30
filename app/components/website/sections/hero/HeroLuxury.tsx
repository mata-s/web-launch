import { HeroSection as HeroSectionData } from '@/lib/website';

type HeroLuxuryProps = {
  section: HeroSectionData;
};

export default function HeroLuxury({ section }: HeroLuxuryProps) {
  return (
    <section className="grid min-h-520px items-center gap-10 bg-[#f8f3ef] px-8 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-12">
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
          Luxury Website
        </p>

        <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-zinc-950 md:text-7xl">
          {section.title}
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600">
          {section.description}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <button className="rounded-full bg-zinc-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700">
            {section.primaryButton}
          </button>
          <button className="rounded-full border border-zinc-300 bg-white/70 px-7 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-white">
            {section.secondaryButton}
          </button>
        </div>
      </div>

      <div className="relative h-390px overflow-hidden rounded-[2.25rem] bg-linear-to-br from-zinc-950 via-zinc-700 to-stone-300 p-5 shadow-2xl">
        <div className="absolute inset-5 rounded-[1.75rem] border border-white/25" />
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute bottom-8 left-8 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Open
          </p>
          <p className="mt-1 text-2xl font-bold text-zinc-900">10:00 - 20:00</p>
        </div>
        <div className="absolute right-8 top-8 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/90">
          Premium Design
        </div>
      </div>
    </section>
  );
}