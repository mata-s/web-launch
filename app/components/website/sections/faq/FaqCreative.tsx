import { FaqSection as FaqSectionData } from '@/lib/website';

type FaqCreativeProps = {
  section: FaqSectionData;
};

export default function FaqCreative({ section }: FaqCreativeProps) {
  return (
    <section className="relative overflow-hidden bg-[#fff7ed] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          {section.eyebrow && (
            <p className="inline-flex rotate--2deg rounded-full bg-zinc-950 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-white shadow-lg">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-5 max-w-3xl break-keep text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-700 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {section.items.map((item, index) => {
            const colorClass =
              index % 3 === 0
                ? 'bg-pink-400'
                : index % 3 === 1
                  ? 'bg-violet-500'
                  : 'bg-amber-300';

            return (
              <article
                key={`${item.question}-${index}`}
                className="overflow-hidden rounded-2rem border-4 border-zinc-950 bg-white shadow-[8px_8px_0_#18181b] transition duration-300 hover:-translate-y-1 hover:rotate-1"
              >
                <div className={`${colorClass} p-5`}>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-zinc-950 bg-white text-sm font-black text-zinc-950 shadow-[4px_4px_0_#18181b]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <span className="rounded-full border-4 border-zinc-950 bg-white px-3 py-1 text-xs font-black text-zinc-950 shadow-[4px_4px_0_#18181b]">
                      Q&A
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h4 className="break-keep text-xl font-black leading-8 text-zinc-950">
                    {item.question}
                  </h4>

                  <div className="mt-6 h-1 w-16 rounded-full bg-zinc-950" />

                  <p className="mt-6 text-sm font-semibold leading-7 text-zinc-700">
                    {item.answer}
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