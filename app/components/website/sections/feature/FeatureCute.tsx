import { FeatureSection as FeatureSectionData } from '@/lib/website';

type FeatureCuteProps = {
  section: FeatureSectionData;
};

export default function FeatureCute({ section }: FeatureCuteProps) {
  return (
    <section className="overflow-hidden bg-linear-to-br from-pink-50 via-rose-50 to-amber-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
            Feature
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-rose-950 sm:text-4xl lg:text-5xl">
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
              className="group rounded-2rem border border-pink-100 bg-white/90 p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-pink-300 to-rose-400 text-lg font-bold text-white shadow-md transition duration-300 group-hover:scale-110">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h4 className="mt-6 break-keep text-xl font-bold text-rose-950">
                {item.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                {item.description}
              </p>

              <div className="mt-6 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-300" />
                <span className="h-2 w-2 rounded-full bg-rose-300" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
