
import { ServicesSection as ServicesSectionData } from '@/lib/website';

type ServicesCreativeProps = {
  section: ServicesSectionData;
};

export default function ServicesCreative({ section }: ServicesCreativeProps) {
  return (
    <section className="relative overflow-hidden bg-[#fff7ed] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {section.eyebrow && (
            <p className="inline-flex rotate--2deg rounded-full bg-zinc-950 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-white shadow-lg">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mt-5 break-keep text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-zinc-700 sm:text-base sm:leading-8">
            個性や世界観を伝えるサービスを、遊び心のあるカードで印象的に見せます。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {section.items.map((item, index) => {
            const colorClass =
              index % 3 === 0
                ? 'bg-pink-400'
                : index % 3 === 1
                  ? 'bg-violet-500'
                  : 'bg-amber-300';

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2rem border-4 border-zinc-950 bg-white shadow-[8px_8px_0_#18181b] transition duration-300 hover:-translate-y-1 hover:rotate-1"
              >
                <div className={`${colorClass} p-6`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-zinc-950 bg-white text-sm font-black text-zinc-950 shadow-[4px_4px_0_#18181b]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="p-7">
                  <h4 className="break-keep text-2xl font-black text-zinc-950">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm font-medium leading-7 text-zinc-700">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}