import { ServicesSection as ServicesSectionData } from '@/lib/website';

type ServicesLuxuryProps = {
  section: ServicesSectionData;
};

export default function ServicesLuxury({ section }: ServicesLuxuryProps) {
  return (
    <section className="bg-[#f8f3ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            {section.eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                {section.eyebrow}
              </p>
            )}
            <h3 className="mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              {section.title}
            </h3>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8 lg:justify-self-end">
            上質な体験を届けるためのサービスを、分かりやすく整理して掲載できます。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {section.items.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2rem bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#f8f3ef] transition duration-300 group-hover:bg-stone-200" />

              <p className="relative text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Service {String(index + 1).padStart(2, '0')}
              </p>

              <h4 className="relative mt-8 break-keep text-2xl font-bold text-zinc-950">
                {item.title}
              </h4>

              <p className="relative mt-4 text-sm leading-7 text-zinc-600">
                {item.description}
              </p>

              <div className="relative mt-8 h-px w-full bg-linear-to-r from-zinc-200 via-zinc-500 to-zinc-200" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
