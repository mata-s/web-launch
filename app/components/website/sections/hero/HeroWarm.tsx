
import { HeroSection as HeroSectionData } from '@/lib/website';

type HeroWarmProps = {
  section: HeroSectionData;
};

export default function HeroWarm({ section }: HeroWarmProps) {
  return (
    <section className="bg-[#f7f2ea] px-8 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-800">
            Warm Website
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-stone-900 md:text-7xl">
            {section.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            {section.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-amber-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-amber-800">
              {section.primaryButton}
            </button>
            <button className="rounded-full border border-amber-200 bg-white px-7 py-3 text-sm font-semibold text-stone-700 transition hover:bg-amber-50">
              {section.secondaryButton}
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-amber-200 via-orange-100 to-stone-100 p-8 shadow-xl">
          <div className="rounded-2rem bg-white/80 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              Natural & Cozy
            </p>
            <h3 className="mt-3 text-3xl font-bold text-stone-900">
              あたたかく、親しみやすいデザイン
            </h3>
            <p className="mt-4 leading-7 text-stone-600">
              カフェや雑貨店、ベーカリーなど、柔らかい雰囲気を演出したいサービスに最適なヒーローデザインです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}