import { ReviewSection as ReviewSectionData } from '@/lib/website';

type ReviewCorporateProps = {
  section: ReviewSectionData;
};

export default function ReviewCorporate({ section }: ReviewCorporateProps) {
  return (
    <section className="bg-slate-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            {section.eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                {section.eyebrow}
              </p>
            )}
            <h3 className="mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {section.title}
            </h3>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:justify-self-end">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2rem border border-slate-200 bg-white shadow-sm">
          {section.reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="grid gap-5 border-b border-slate-200 p-6 last:border-b-0 transition hover:bg-slate-50 md:grid-cols-[160px_1fr] md:p-8"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-sm font-bold text-white md:h-16 md:w-16">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="mt-5 flex items-center gap-1 text-xs text-blue-700">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  “{review.comment}”
                </p>

                <div className="mt-6">
                  <p className="text-lg font-bold text-slate-950">{review.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}