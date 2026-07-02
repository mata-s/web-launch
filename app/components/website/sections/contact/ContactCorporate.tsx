import { ContactSection as ContactSectionData } from '@/lib/website';

type ContactCorporateProps = {
  section: ContactSectionData;
};

export default function ContactCorporate({ section }: ContactCorporateProps) {
  return (
    <section className="bg-slate-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            {section.eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                {section.eyebrow}
              </p>
            )}

            <h3 className="mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {section.title}
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {section.subtitle}
            </p>

            <div className="mt-10 overflow-hidden rounded-2rem border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Email
                </p>
                <p className="mt-2 break-all text-base font-bold text-slate-950">
                  {section.email}
                </p>
              </div>

              <div className="border-b border-slate-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Phone
                </p>
                <p className="mt-2 text-base font-bold text-slate-950">
                  {section.phone}
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Address
                </p>
                <p className="mt-2 text-base font-bold leading-7 text-slate-950">
                  {section.address}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2rem border border-slate-200 bg-white p-5 shadow-lg sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="お名前"
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:bg-white"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Message
                </span>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={6}
                  className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-700 focus:bg-white"
                />
              </label>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-blue-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-800">
              {section.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}