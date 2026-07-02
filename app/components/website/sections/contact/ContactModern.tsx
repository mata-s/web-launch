

import { ContactSection as ContactSectionData } from '@/lib/website';

type ContactModernProps = {
  section: ContactSectionData;
};

export default function ContactModern({ section }: ContactModernProps) {
  return (
    <section className="overflow-hidden bg-zinc-950 px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mt-4 max-w-3xl break-keep text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Email
              </p>
              <p className="mt-2 break-all text-base font-bold text-white">
                {section.email}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Phone
              </p>
              <p className="mt-2 text-base font-bold text-white">{section.phone}</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Address
              </p>
              <p className="mt-2 text-base font-bold leading-7 text-white">
                {section.address}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2rem border border-zinc-800 bg-zinc-900 p-5 shadow-2xl sm:p-8">
          <div className="rounded-1.5rem border border-cyan-400/20 bg-zinc-950/80 p-5 backdrop-blur sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="お名前"
                  className="mt-3 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="mt-3 w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Message
                </span>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={6}
                  className="mt-3 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </label>
            </div>

            <button className="mt-6 w-full rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-bold text-zinc-950 transition hover:opacity-90">
              {section.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}