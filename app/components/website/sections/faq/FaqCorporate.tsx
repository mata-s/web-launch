import { FaqSection as FaqSectionData } from '@/lib/website';

type FaqCorporateProps = {
  section: FaqSectionData;
};

export default function FaqCorporate({ section }: FaqCorporateProps) {
  return (
    <section className="bg-slate-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2rem border border-slate-200 bg-white shadow-sm">
          {section.items.map((item, index) => (
            <article
              key={`${item.question}-${index}`}
              className="grid gap-5 border-b border-slate-200 p-6 transition hover:bg-slate-50 last:border-b-0 sm:grid-cols-[80px_1fr] sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-sm font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <h4 className="break-keep text-lg font-bold leading-7 text-slate-950 sm:text-xl">
                  {item.question}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
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