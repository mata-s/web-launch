import { FaqSection as FaqSectionData } from '@/lib/website';

type FaqCuteProps = {
  section: FaqSectionData;
};

export default function FaqCute({ section }: FaqCuteProps) {
  return (
    <section className="overflow-hidden bg-linear-to-br from-pink-50 via-rose-50 to-amber-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-rose-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-rose-700 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {section.items.map((item, index) => (
            <article
              key={`${item.question}-${index}`}
              className="rounded-[2.5rem] border border-pink-100 bg-white/90 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-pink-300 to-rose-400 text-sm font-bold text-white shadow-md">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <h4 className="break-keep text-lg font-bold leading-7 text-rose-950 sm:text-xl">
                    {item.question}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-rose-700">
                    {item.answer}
                  </p>

                  <div className="mt-5 flex gap-2">
                    <span className="h-2 w-8 rounded-full bg-pink-300" />
                    <span className="h-2 w-2 rounded-full bg-rose-300" />
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}