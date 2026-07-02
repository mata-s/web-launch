import { FooterSection as FooterSectionData } from '@/lib/website';

type FooterCorporateProps = {
  section: FooterSectionData;
};

export default function FooterCorporate({ section }: FooterCorporateProps) {
  return (
    <footer className="bg-slate-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-2rem border border-slate-200 bg-white p-8 shadow-lg sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-950">
              {section.companyName}
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
              {section.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Email
                </p>
                <p className="mt-2 break-all text-sm font-semibold text-slate-900">
                  {section.email}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Phone
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {section.phone}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Address
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                  {section.address}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-blue-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Social
              </p>

              <ul className="mt-5 space-y-3">
                {section.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="text-sm text-slate-600 transition hover:text-blue-700"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{section.copyright}</p>
          <p className="font-semibold text-blue-700">Corporate Website</p>
        </div>
      </div>
    </footer>
  );
}