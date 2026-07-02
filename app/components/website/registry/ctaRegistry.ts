import CtaLuxury from '../sections/cta/CtaLuxury';
import CtaModern from '../sections/cta/CtaModern';
import CtaMinimal from '../sections/cta/CtaMinimal';
import CtaCorporate from '../sections/cta/CtaCorporate';
import CtaWarm from '../sections/cta/CtaWarm';
import CtaCreative from '../sections/cta/CtaCreative';
import CtaCute from '../sections/cta/CtaCute';
import CtaDark from '../sections/cta/CtaDark';

export const ctaRegistry = {
  luxury: CtaLuxury,
  modern: CtaModern,
  minimal: CtaMinimal,
  corporate: CtaCorporate,
  warm: CtaWarm,
  creative: CtaCreative,
  cute: CtaCute,
  dark: CtaDark,
} as const;
