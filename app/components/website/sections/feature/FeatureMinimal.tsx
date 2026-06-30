import { FeatureSection as FeatureSectionData } from '@/lib/website';

type FeatureProps = {
  section: FeatureSectionData;
};

export default function FeatureMinimal({ section }: FeatureProps) {
  return (
    <section className="bg-white px-5 py-14 text-center sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
          Feature
        </p>
        <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold text-zinc-950 sm:text-4xl lg:text-5xl">
          {section.title}
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
          {section.subtitle}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {section.items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-zinc-200 p-6">
              <h4 className="break-keep text-xl font-bold text-zinc-950">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}