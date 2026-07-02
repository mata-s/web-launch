import { HeroSection as HeroSectionData } from '@/lib/website';

import {
  animationClass,
  bodySizeClass,
  titleSizeClass,
} from '@/lib/website/stylePresets';

function getBackgroundStyle(value: string) {
  if (value.trim().startsWith('linear-gradient')) {
    return { background: value };
  }

  return { backgroundColor: value };
}

type HeroLuxuryProps = {
  section: HeroSectionData;
};

export default function HeroLuxury({ section }: HeroLuxuryProps) {
  const { style } = section;
  console.log('HeroLuxury', {
    variant: section.variant,
    showPrimaryButton: section.showPrimaryButton,
    showSecondaryButton: section.showSecondaryButton,
  });
  return (
    <section
      style={{
        ...getBackgroundStyle(style.backgroundColor),
        color: style.textColor,
      }}
      className="grid min-h-520px items-center gap-10 px-8 py-16 transition-colors duration-300 md:grid-cols-[1.05fr_0.95fr] md:px-12"
    >
      <div className={animationClass[style.animation]}>
        {section.eyebrow && (
          <p
            style={{ color: style.accentColor }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.35em]"
          >
            {section.eyebrow}
          </p>
        )}

        <h2 className={`max-w-3xl font-bold leading-tight tracking-tight ${titleSizeClass[style.titleSize]}`}>
          {section.title}
        </h2>

        <p className={`mt-6 max-w-xl opacity-75 ${bodySizeClass[style.bodySize]}`}>
          {section.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          {section.showPrimaryButton && (
            <button
              style={getBackgroundStyle(style.accentColor)}
              className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:opacity-90"
            >
              {section.primaryButton}
            </button>
          )}

          {section.showSecondaryButton && (
            <button
              style={{ borderColor: style.accentColor, color: style.textColor }}
              className="rounded-full border bg-white/50 px-7 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/80"
            >
              {section.secondaryButton}
            </button>
          )}
        </div>
      </div>

      <div
        style={
          style.accentColor.trim().startsWith('linear-gradient')
            ? { background: style.accentColor }
            : {
                background: `linear-gradient(135deg, ${style.accentColor}, #18181b 55%, ${style.backgroundColor.trim().startsWith('linear-gradient') ? '#ffffff' : style.backgroundColor})`,
              }
        }
        className="relative h-390px overflow-hidden rounded-[2.25rem] p-5 shadow-2xl"
      >
        <div className="absolute inset-5 rounded-[1.75rem] border border-white/25" />
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute bottom-8 left-8 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
            Open
          </p>
          <p className="mt-1 text-2xl font-bold text-zinc-900">10:00 - 20:00</p>
        </div>
        <div className="absolute right-8 top-8 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/90">
          Premium Design
        </div>
      </div>
    </section>
  );
}