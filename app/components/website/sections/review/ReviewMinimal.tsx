import { ReviewSection as ReviewSectionData } from '@/lib/website';

type ReviewMinimalProps = {
  section: ReviewSectionData;
};

export default function ReviewMinimal({ section }: ReviewMinimalProps) {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
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

        <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200">
          {section.reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="grid gap-6 py-8 transition duration-300 hover:bg-zinc-50 md:grid-cols-[80px_1fr]"
            >
              <div className="text-3xl font-light text-zinc-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <div className="flex items-center gap-1 text-sm text-zinc-700">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  “{review.comment}”
                </p>

                <div className="mt-6">
                  <p className="text-lg font-semibold text-zinc-950">
                    {review.name}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {review.role}
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