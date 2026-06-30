import { FeatureSection as FeatureSectionData } from '@/lib/website';

type FeatureDarkProps = {
  section: FeatureSectionData;
};

export default function FeatureDark({ section }: FeatureDarkProps) {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            Feature
          </p>

          <h3 className="mt-5 break-keep text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {section.items.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2rem border border-zinc-800 bg-zinc-950 p-7 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/60"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-violet-500/10 transition duration-300 group-hover:bg-violet-500/20" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-cyan-500/10" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-sm font-bold text-violet-200 shadow-lg shadow-violet-500/10">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h4 className="relative mt-6 break-keep text-xl font-bold text-white">
                {item.title}
              </h4>

              <p className="relative mt-3 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>

              <div className="relative mt-7 h-px w-full bg-linear-to-r from-violet-500/0 via-violet-400/60 to-cyan-400/0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
