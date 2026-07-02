import { ServicesSection as ServicesSectionData } from '@/lib/website';

type ServicesMinimalProps = {
  section: ServicesSectionData;
};

export default function ServicesMinimal({
  section,
}: ServicesMinimalProps) {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          {section.eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            必要な情報だけを、美しくシンプルに伝えるサービス紹介です。
          </p>
        </div>

        <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200">
          {section.items.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-6 py-8 transition duration-300 hover:bg-zinc-50 md:grid-cols-[80px_1fr]"
            >
              <div className="text-3xl font-light text-zinc-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <h4 className="break-keep text-2xl font-semibold text-zinc-950">
                  {item.title}
                </h4>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}