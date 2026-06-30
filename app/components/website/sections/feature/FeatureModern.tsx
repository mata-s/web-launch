import { FeatureSection as FeatureSectionData } from '@/lib/website';

type FeatureProps = {
  section: FeatureSectionData;
};

export default function FeatureModern({ section }: FeatureProps) {
  return (
    <section className="bg-zinc-950 px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Feature
        </p>
        <h3 className="mt-4 max-w-3xl break-keep text-3xl font-bold sm:text-4xl lg:text-5xl">
          {section.title}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          {section.subtitle}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {section.items.map((item) => (
            <article key={item.title} className="rounded-2rem border border-zinc-800 bg-zinc-900 p-6">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-cyan-400/20" />
              <h4 className="break-keep text-xl font-bold">{item.title}</h4>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}