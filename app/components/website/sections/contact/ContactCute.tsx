import { ContactSection as ContactSectionData } from '@/lib/website';

type ContactCuteProps = {
  section: ContactSectionData;
};

export default function ContactCute({ section }: ContactCuteProps) {
  return (
    <section className="overflow-hidden bg-linear-to-br from-pink-50 via-rose-50 to-amber-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          {section.eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
              {section.eyebrow}
            </p>
          )}

          <h3 className="mt-4 max-w-3xl break-keep text-3xl font-bold leading-tight text-rose-950 sm:text-4xl lg:text-5xl">
            {section.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-rose-700 sm:text-base sm:leading-8">
            {section.subtitle}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2rem border border-pink-100 bg-white/90 p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">
                Email
              </p>
              <p className="mt-2 break-all text-base font-bold text-rose-950">
                {section.email}
              </p>
            </div>

            <div className="rounded-2rem border border-pink-100 bg-white/90 p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">
                Phone
              </p>
              <p className="mt-2 text-base font-bold text-rose-950">
                {section.phone}
              </p>
            </div>

            <div className="rounded-2rem border border-pink-100 bg-white/90 p-5 shadow-md sm:col-span-2 lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">
                Address
              </p>
              <p className="mt-2 text-base font-bold leading-7 text-rose-950">
                {section.address}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2.5rem border border-pink-100 bg-white/90 p-5 shadow-xl sm:p-8">
          <div className="rounded-2rem bg-pink-50 p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="お名前"
                  className="mt-3 w-full rounded-full border border-pink-100 bg-white px-5 py-3 text-sm outline-none transition placeholder:text-rose-300 focus:border-pink-400"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="mt-3 w-full rounded-full border border-pink-100 bg-white px-5 py-3 text-sm outline-none transition placeholder:text-rose-300 focus:border-pink-400"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-500">
                  Message
                </span>
                <textarea
                  placeholder="お問い合わせ内容"
                  rows={6}
                  className="mt-3 w-full resize-none rounded-2rem border border-pink-100 bg-white px-5 py-4 text-sm outline-none transition placeholder:text-rose-300 focus:border-pink-400"
                />
              </label>
            </div>

            <button className="mt-6 w-full rounded-full bg-linear-to-r from-pink-400 to-rose-400 px-6 py-4 text-sm font-bold text-white shadow-md transition hover:opacity-90">
              {section.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}