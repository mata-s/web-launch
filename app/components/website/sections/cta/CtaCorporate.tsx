import { CtaSection as CtaSectionData } from '@/lib/website';

type CtaCorporateProps = {
  section: CtaSectionData;
};

export default function CtaCorporate({ section }: CtaCorporateProps) {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl rounded-2rem border border-slate-200 bg-white p-8 shadow-lg sm:p-12 lg:p-16">
        <div className="text-center">
           {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-700">
              {section.eyebrow}
            </p>
           )}

          <h3 className="mx-auto mt-5 max-w-3xl break-keep text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {section.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-blue-700 px-8 py-4 text-sm font-bold text-white transition hover:bg-blue-800">
              {section.primaryButton}
            </button>

            {section.secondaryButton && (
              <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition hover:border-blue-700 hover:text-blue-700">
                {section.secondaryButton}
              </button>
            )}
          </div>

          <div className="mt-12 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Email
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                contact@example.com
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Phone
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                000-0000-0000
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Response
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                平日24時間以内に返信
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}