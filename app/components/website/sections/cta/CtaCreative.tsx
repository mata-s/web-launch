import { CtaSection as CtaSectionData } from '@/lib/website';

type CtaCreativeProps = {
  section: CtaSectionData;
};

export default function CtaCreative({ section }: CtaCreativeProps) {
  return (
    <section className="relative overflow-hidden bg-[#fff7ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border-4 border-zinc-950 bg-white shadow-[10px_10px_0_#18181b]">
        <div className="bg-pink-400 p-8 sm:p-10">
          <div className="flex items-center justify-between">
            {section.eyebrow && (
              <p className="text-xs font-black uppercase tracking-[0.35em] text-zinc-950">
                {section.eyebrow}
              </p>
            )}

            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-zinc-950" />
              <span className="h-3 w-3 rounded-full bg-zinc-950" />
              <span className="h-3 w-3 rounded-full bg-zinc-950" />
            </div>
          </div>
        </div>

        <div className="p-8 text-center sm:p-12 lg:p-16">
          <h3 className="mx-auto max-w-3xl break-keep text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-7 text-zinc-700 sm:text-base sm:leading-8">
            {section.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl border-4 border-zinc-950 bg-zinc-950 px-8 py-4 text-sm font-black text-white shadow-[6px_6px_0_#f472b6] transition hover:-translate-y-1">
              {section.primaryButton}
            </button>

            {section.secondaryButton && (
              <button className="rounded-2xl border-4 border-zinc-950 bg-white px-8 py-4 text-sm font-black text-zinc-950 shadow-[6px_6px_0_#a78bfa] transition hover:-translate-y-1">
                {section.secondaryButton}
              </button>
            )}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-4 border-zinc-950 bg-pink-100 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-pink-600">
                Fast
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-800">
                最短当日にご連絡
              </p>
            </div>

            <div className="rounded-2xl border-4 border-zinc-950 bg-violet-100 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
                Free
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-800">
                ご相談・お見積り無料
              </p>
            </div>

            <div className="rounded-2xl border-4 border-zinc-950 bg-amber-100 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">
                Support
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-800">
                丁寧にサポートします
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}