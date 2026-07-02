
import { HeroSection as HeroSectionData } from '@/lib/website';

type HeroDarkProps = {
  section: HeroSectionData;
};

export default function HeroDark({ section }: HeroDarkProps) {
  return (
    <section className="relative overflow-hidden bg-black px-8 py-20 text-white md:px-12 md:py-28">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          {section.eyebrow && (
            <span className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
              {section.eyebrow}
            </span>
          )}

          <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            {section.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            {section.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-violet-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-violet-600">
              {section.primaryButton}
            </button>
            <button className="rounded-xl border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-200 transition hover:border-violet-400 hover:text-white">
              {section.secondaryButton}
            </button>
          </div>
        </div>

        <div className="relative min-h-430px rounded-2rem border border-zinc-800 bg-linear-to-br from-zinc-950 via-zinc-900 to-violet-950 p-8 shadow-2xl">
          <div className="absolute inset-6 rounded-1.5rem border border-white/10" />
          <div className="absolute left-10 top-10 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-zinc-900/80 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Premium Dark Mode
            </p>
            <h3 className="mt-3 text-3xl font-bold">大胆で印象的なデザイン</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              ゲーム、音楽、eスポーツ、映像作品など、世界観を強く表現したいブランドに最適なヒーローデザインです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}