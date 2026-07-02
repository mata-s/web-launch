import { ReviewSection as ReviewSectionData } from '@/lib/website';

type ReviewWarmProps = {
  section: ReviewSectionData;
};

export default function ReviewWarm({ section }: ReviewWarmProps) {
  return (
    <section className="bg-[#fcf8f2] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {section.reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="group rounded-2rem border border-amber-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 transition duration-300 group-hover:bg-amber-200">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex items-center gap-1 text-xs text-amber-600">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
              </div>

              <p className="mt-7 text-sm leading-7 text-stone-600">
                “{review.comment}”
              </p>

              <div className="mt-7 h-1 w-16 rounded-full bg-amber-300" />

              <div className="mt-6">
                <p className="text-base font-bold text-stone-900">{review.name}</p>
                <p className="mt-1 text-sm text-stone-500">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}