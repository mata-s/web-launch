import { FaqSection as FaqSectionData } from '@/lib/website';

type FaqLuxuryProps = {
  section: FaqSectionData;
};

export default function FaqLuxury({ section }: FaqLuxuryProps) {
  return (
    <section className="bg-[#f8f3ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {section.items.map((item, index) => (
            <article
              key={`${item.question}-${index}`}
              className="overflow-hidden rounded-2rem bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7"
            >
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8f3ef] text-sm font-bold text-zinc-950">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <h4 className="break-keep text-lg font-bold leading-7 text-zinc-950 sm:text-xl">
                    {item.question}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}