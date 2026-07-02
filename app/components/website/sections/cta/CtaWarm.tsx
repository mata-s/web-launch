import { CtaSection as CtaSectionData } from '@/lib/website';

type CtaWarmProps = {
  section: CtaSectionData;
};

export default function CtaWarm({ section }: CtaWarmProps) {
  return (
    <section className="bg-[#fcf8f2] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl rounded-[3rem] border border-amber-100 bg-white p-8 shadow-xl sm:p-12 lg:p-16">
        <div className="text-center">
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mx-auto mt-5 max-w-3xl break-keep text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
            {section.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-amber-700 px-8 py-4 text-sm font-bold text-white transition hover:bg-amber-800">
              {section.primaryButton}
            </button>

            {section.secondaryButton && (
              <button className="rounded-full border border-amber-200 bg-white px-8 py-4 text-sm font-bold text-amber-700 transition hover:border-amber-700 hover:bg-amber-50">
                {section.secondaryButton}
              </button>
            )}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-amber-100 pt-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Response
              </p>
              <p className="mt-2 text-sm text-stone-600">
                24時間以内に返信
              </p>
            </div>

            <div className="hidden h-10 w-px bg-amber-100 sm:block" />

            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Consultation
              </p>
              <p className="mt-2 text-sm text-stone-600">
                ご相談・お見積り無料
              </p>
            </div>

            <div className="hidden h-10 w-px bg-amber-100 sm:block" />

            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Support
              </p>
              <p className="mt-2 text-sm text-stone-600">
                丁寧にサポートします
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}