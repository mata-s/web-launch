import { FeatureSection as FeatureSectionData } from '@/lib/website';

type FeatureCreativeProps = {
  section: FeatureSectionData;
};

export default function FeatureCreative({
  section,
}: FeatureCreativeProps) {
  return (
    <section className="overflow-hidden bg-linear-to-br from-fuchsia-50 via-white to-cyan-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-600">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mt-4 break-keep text-3xl font-black leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => {
            const colors = [
              'from-fuchsia-500 to-pink-500',
              'from-cyan-500 to-sky-500',
              'from-violet-500 to-indigo-500',
            ];

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2rem bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl"
              >
                <div
                  className={`absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-linear-to-br ${colors[index % colors.length]} opacity-15`}
                />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${colors[index % colors.length]} text-lg font-bold text-white shadow-lg`}
                >
                  {index + 1}
                </div>

                <h4 className="mt-6 break-keep text-2xl font-bold text-zinc-900">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-fuchsia-500" />
                  <div className="h-2 w-2 rounded-full bg-cyan-500" />
                  <div className="h-2 w-2 rounded-full bg-violet-500" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}