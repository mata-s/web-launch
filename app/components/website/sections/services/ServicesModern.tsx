import { ServicesSection as ServicesSectionData } from '@/lib/website';

type ServicesModernProps = {
  section: ServicesSectionData;
};

export default function ServicesModern({
  section,
}: ServicesModernProps) {
  return (
    <section className="overflow-hidden bg-zinc-950 px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mt-4 break-keep text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            最新のテクノロジーと洗練されたデザインで、
            サービスの魅力をスマートに伝えます。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {section.items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2rem border border-zinc-800 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-lg font-bold text-zinc-950 shadow-lg shadow-cyan-500/20">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h4 className="mt-6 break-keep text-2xl font-bold text-white">
                {item.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-8 h-px w-full bg-linear-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}