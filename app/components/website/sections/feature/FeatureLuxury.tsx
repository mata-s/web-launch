import { FeatureSection as FeatureSectionData } from '@/lib/website';

type FeatureProps = {
  section: FeatureSectionData;
};

export default function FeatureLuxury({ section }: FeatureProps) {
  return (
    <section className="bg-[#f8f3ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {section.eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            {section.eyebrow}
          </p>
        )}
        <h3 className="mt-4 max-w-3xl break-keep text-3xl font-bold text-zinc-950 sm:text-4xl lg:text-5xl">
          {section.title}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
          {section.subtitle}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {section.items.map((item, index) => (
            <article key={item.title} className="rounded-2rem bg-white p-6 shadow-lg">
              <p className="text-xs font-semibold text-zinc-400">0{index + 1}</p>
              <h4 className="mt-6 break-keep text-xl font-bold text-zinc-950">
                {item.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}