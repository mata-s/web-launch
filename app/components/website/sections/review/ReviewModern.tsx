
import { ReviewSection as ReviewSectionData } from '@/lib/website';

type ReviewModernProps = {
  section: ReviewSectionData;
};

export default function ReviewModern({ section }: ReviewModernProps) {
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
            {section.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {section.reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="group rounded-2rem border border-zinc-800 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-sm font-bold text-zinc-950 shadow-lg shadow-cyan-500/20">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex items-center gap-1 text-xs text-cyan-300">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
              </div>

              <p className="mt-7 text-sm leading-7 text-zinc-300">
                “{review.comment}”
              </p>

              <div className="mt-8 h-px w-full bg-linear-to-r from-cyan-500/0 via-cyan-400 to-cyan-500/0" />

              <div className="mt-6">
                <p className="text-base font-bold text-white">{review.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {review.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}