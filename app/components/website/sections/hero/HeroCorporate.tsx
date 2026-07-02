import { HeroSection as HeroSectionData } from '@/lib/website';

type HeroCorporateProps = {
  section: HeroSectionData;
};

export default function HeroCorporate({ section }: HeroCorporateProps) {
  return (
    <section className="bg-slate-50 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
        <div>
          {section.eyebrow && (
            <p className="mb-5 inline-flex max-w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-sm sm:text-xs sm:tracking-[0.25em]">
              {section.eyebrow}
            </p>
          )}

          <h2 className="max-w-3xl break-keep text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-7xl">
            {section.title}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button className="w-full rounded-xl bg-blue-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:w-auto">
              {section.primaryButton}
            </button>
            <button className="w-full rounded-xl border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 sm:w-auto">
              {section.secondaryButton}
            </button>
          </div>
        </div>

        <div className="mt-2 rounded-2rem border border-slate-200 bg-white p-4 shadow-xl sm:p-6 lg:mt-0">
          <div className="rounded-1.5rem bg-slate-950 p-5 text-white sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Business Status
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-1">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-white/60">Trust</p>
                <p className="mt-1 text-3xl font-bold">98%</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-white/60">Support</p>
                <p className="mt-1 text-3xl font-bold">24h</p>
              </div>
              <div className="rounded-2xl bg-blue-500/20 p-5 ring-1 ring-blue-300/20 sm:col-span-2 lg:col-span-1">
                <p className="text-sm text-blue-100">Professional Design</p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  信頼感と情報の分かりやすさを重視した企業向けレイアウト。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}