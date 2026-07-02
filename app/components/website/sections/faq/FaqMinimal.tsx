import { FaqSection as FaqSectionData } from '@/lib/website';

type FaqMinimalProps = {
  section: FaqSectionData;
};

export default function FaqMinimal({ section }: FaqMinimalProps) {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-4xl">
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
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200">
          {section.items.map((item, index) => (
            <article
              key={`${item.question}-${index}`}
              className="flex gap-6 py-7"
            >
              <div className="w-10 shrink-0 text-sm font-semibold text-zinc-400">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="flex-1">
                <h4 className="break-keep text-lg font-semibold leading-7 text-zinc-950">
                  {item.question}
                </h4>

                <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}