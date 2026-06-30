import { HeroSection as HeroSectionData } from '@/lib/website';

type HeroCuteProps = {
  section: HeroSectionData;
};

export default function HeroCute({ section }: HeroCuteProps) {
  return (
    <section className="relative overflow-hidden bg-pink-50 px-8 py-20 md:px-12 md:py-28">
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-500 shadow-md">
            Cute Website
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-rose-950 md:text-7xl">
            {section.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-rose-700">
            {section.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-pink-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-pink-600">
              {section.primaryButton}
            </button>
            <button className="rounded-full border border-pink-300 bg-white px-7 py-3 text-sm font-semibold text-pink-700 transition hover:bg-pink-100">
              {section.secondaryButton}
            </button>
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-pink-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">Beauty</p>
              <p className="mt-3 text-2xl font-bold text-rose-900">かわいい世界観</p>
            </div>
            <div className="rounded-3xl bg-rose-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-500">Friendly</p>
              <p className="mt-3 text-2xl font-bold text-rose-900">やさしい印象</p>
            </div>
            <div className="sm:col-span-2 rounded-3xl bg-linear-to-r from-pink-200 to-rose-100 p-8">
              <h3 className="text-3xl font-bold text-rose-950">女性向けサービスに最適</h3>
              <p className="mt-3 leading-7 text-rose-700">
                ネイルサロン、美容室、エステ、雑貨店など、柔らかく親しみやすいブランドイメージを演出します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}