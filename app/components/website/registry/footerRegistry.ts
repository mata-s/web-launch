import FooterLuxury from '../sections/footer/FooterLuxury';
import FooterModern from '../sections/footer/FooterModern';
import FooterMinimal from '../sections/footer/FooterMinimal';
import FooterCorporate from '../sections/footer/FooterCorporate';
import FooterWarm from '../sections/footer/FooterWarm';
import FooterCreative from '../sections/footer/FooterCreative';
import FooterCute from '../sections/footer/FooterCute';
import FooterDark from '../sections/footer/FooterDark';

export const footerRegistry = {
  luxury: FooterLuxury,
  modern: FooterModern,
  minimal: FooterMinimal,
  corporate: FooterCorporate,
  warm: FooterWarm,
  creative: FooterCreative,
  cute: FooterCute,
  dark: FooterDark,
} as const;