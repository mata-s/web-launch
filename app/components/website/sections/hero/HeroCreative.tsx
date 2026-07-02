import { HeroSection as HeroSectionData } from '@/lib/website';
type HeroCreativeProps = {
  section: HeroSectionData;
};

export default function HeroCreative({ section }: HeroCreativeProps) {
  return (
    <section className="relative overflow-hidden bg-[#fff7ed] px-8 py-20 md:px-12 md:py-28">
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          {section.eyebrow && (
            <span className="inline-flex rotate--2deg rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg">
              {section.eyebrow}
            </span>
          )}

          <h2 className="mt-8 max-w-3xl text-5xl font-black leading-tight tracking-tight text-zinc-950 md:text-7xl">
            {section.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
            {section.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {section.showPrimaryButton && (
              <button className="rounded-full bg-pink-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-0.5 hover:bg-pink-600">
                {section.primaryButton}
              </button>
            )}

            {section.showSecondaryButton && (
              <button className="rounded-full border-2 border-zinc-950 bg-white px-7 py-3 text-sm font-bold text-zinc-950 transition hover:-translate-y-0.5">
                {section.secondaryButton}
              </button>
            )}
          </div>
        </div>

        <div className="relative min-h-420px">
          <div className="absolute left-4 top-6 h-56 w-56 rotate-[-8deg] rounded-2rem bg-zinc-950 shadow-2xl" />
          <div className="absolute right-6 top-0 h-64 w-64 rotate-10deg rounded-2rem bg-pink-400 shadow-2xl" />
          <div className="absolute bottom-4 left-24 h-64 w-72 rotate-3deg rounded-2rem bg-violet-500 shadow-2xl" />

          <div className="absolute inset-x-8 bottom-12 rounded-2rem border-4 border-zinc-950 bg-white p-6 shadow-[10px_10px_0_#18181b]">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-pink-500">
              Visual Impact
            </p>
            <h3 className="mt-3 text-3xl font-black text-zinc-950">
              印象に残るトップビュー
            </h3>
            <p className="mt-3 leading-7 text-zinc-600">
              クリエイター、デザイン会社、イベント告知など、個性を強く見せたいサイトに向いたヒーローです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}