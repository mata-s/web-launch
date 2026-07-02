import { ContactSection as ContactSectionData } from '@/lib/website';

type ContactLuxuryProps = {
  section: ContactSectionData;
};

export default function ContactLuxury({ section }: ContactLuxuryProps) {
  return (
    <section className="bg-[#f8f3ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            <div className="border-b border-zinc-300 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Email
              </p>
              <p className="mt-2 text-lg font-bold text-zinc-950">{section.email}</p>
            </div>

            <div className="border-b border-zinc-300 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Phone
              </p>
              <p className="mt-2 text-lg font-bold text-zinc-950">{section.phone}</p>
            </div>

            <div className="border-b border-zinc-300 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Address
              </p>
              <p className="mt-2 text-lg font-bold leading-7 text-zinc-950">
                {section.address}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2rem bg-white p-5 shadow-xl sm:p-8">
          <div className="rounded-1.5rem border border-zinc-200 bg-[#fdfaf7] p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="お名前"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="mt-3 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Message
                </span>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={6}
                  className="mt-3 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900"
                />
              </label>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-zinc-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-zinc-800">
              {section.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}