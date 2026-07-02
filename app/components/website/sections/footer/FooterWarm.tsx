import { FooterSection as FooterSectionData } from '@/lib/website';

type FooterWarmProps = {
  section: FooterSectionData;
};

export default function FooterWarm({ section }: FooterWarmProps) {
  return (
    <footer className="bg-[#fcf8f2] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-amber-100 bg-white p-8 shadow-xl sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-2xl font-bold tracking-tight text-stone-900">
              {section.companyName}
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-stone-600">
              {section.description}
            </p>

            <div className="mt-8 space-y-3 text-sm text-stone-600">
              <p>{section.email}</p>
              <p>{section.phone}</p>
              <p>{section.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-600 transition hover:text-amber-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Social
              </p>

              <ul className="mt-5 space-y-3">
                {section.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="text-sm text-stone-600 transition hover:text-amber-700"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-amber-100 pt-6">
          <p className="text-center text-sm text-stone-500">
            {section.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}