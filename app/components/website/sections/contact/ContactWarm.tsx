import { ContactSection as ContactSectionData } from '@/lib/website';

type ContactWarmProps = {
  section: ContactSectionData;
};

export default function ContactWarm({ section }: ContactWarmProps) {
  return (
    <section className="bg-[#fcf8f2] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2rem border border-amber-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Email
              </p>
              <p className="mt-2 break-all text-base font-bold text-stone-900">
                {section.email}
              </p>
            </div>

            <div className="rounded-2rem border border-amber-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Phone
              </p>
              <p className="mt-2 text-base font-bold text-stone-900">
                {section.phone}
              </p>
            </div>

            <div className="rounded-2rem border border-amber-100 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                Address
              </p>
              <p className="mt-2 text-base font-bold leading-7 text-stone-900">
                {section.address}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2.5rem border border-amber-100 bg-white p-5 shadow-xl sm:p-8">
          <div className="rounded-2rem bg-[#fffaf2] p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="お名前"
                  className="mt-3 w-full rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-500"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="mt-3 w-full rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-500"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  Message
                </span>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={6}
                  className="mt-3 w-full resize-none rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-stone-400 focus:border-amber-500"
                />
              </label>
            </div>

            <button className="mt-6 w-full rounded-full bg-amber-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-amber-800">
              {section.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}