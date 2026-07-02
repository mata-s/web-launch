import { ServicesSection as ServicesSectionData } from '@/lib/website';

type ServicesWarmProps = {
  section: ServicesSectionData;
};

export default function ServicesWarm({ section }: ServicesWarmProps) {
  return (
    <section className="bg-[#fcf8f2] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {section.eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
            暮らしに寄り添うサービスを、やさしく温かい雰囲気でご紹介します。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {section.items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2rem border border-amber-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-lg font-bold text-amber-700 transition duration-300 group-hover:bg-amber-200">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h4 className="mt-6 break-keep text-2xl font-bold text-stone-900">
                {item.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-stone-600">
                {item.description}
              </p>

              <div className="mt-7 h-1 w-16 rounded-full bg-amber-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}