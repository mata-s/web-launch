import { FeatureSection as FeatureSectionData } from '@/lib/website';

type FeatureWarmProps = {
  section: FeatureSectionData;
};

export default function FeatureWarm({ section }: FeatureWarmProps) {
  return (
    <section className="bg-[#fcf8f2] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
            Feature
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {section.items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2rem border border-amber-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-700">
                {index + 1}
              </div>

              <h4 className="mt-6 break-keep text-xl font-bold text-stone-900">
                {item.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                {item.description}
              </p>

              <div className="mt-6 h-1 w-16 rounded-full bg-amber-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}