import { HeroSection as HeroSectionData } from '@/lib/website';

type HeroMinimalProps = {
  section: HeroSectionData;
};

export default function HeroMinimal({ section }: HeroMinimalProps) {
  return (
    <section className="bg-white px-8 py-20 text-center md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        {section.eyebrow && (
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
            {section.eyebrow}
          </p>
        )}

        <h2 className="text-5xl font-bold leading-tight tracking-tight text-zinc-950 md:text-7xl">
          {section.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600">
          {section.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-zinc-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700">
            {section.primaryButton}
          </button>
          <button className="rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50">
            {section.secondaryButton}
          </button>
        </div>
      </div>
    </section>
  );
}