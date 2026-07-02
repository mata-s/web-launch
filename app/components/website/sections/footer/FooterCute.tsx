import { FooterSection as FooterSectionData } from '@/lib/website';

type FooterCuteProps = {
  section: FooterSectionData;
};

export default function FooterCute({ section }: FooterCuteProps) {
  return (
    <footer className="overflow-hidden bg-linear-to-br from-pink-50 via-rose-50 to-amber-50 px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-pink-100 bg-white/90 p-8 shadow-xl sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-2xl font-bold tracking-tight text-rose-950">
              {section.companyName}
            </p>

            <p className="mt-5 max-w-lg text-sm leading-7 text-rose-700">
              {section.description}
            </p>

            <div className="mt-8 space-y-3 text-sm text-rose-700">
              <p>{section.email}</p>
              <p>{section.phone}</p>
              <p>{section.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">
                Menu
              </p>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-rose-700 transition hover:text-pink-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">
                Social
              </p>

              <ul className="mt-5 space-y-3">
                {section.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="text-sm text-rose-700 transition hover:text-pink-500"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-2 w-8 rounded-full bg-pink-300" />
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
        </div>

        <div className="mt-6 border-t border-pink-100 pt-6">
          <p className="text-center text-sm text-rose-500">
            {section.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}