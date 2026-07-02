import FaqLuxury from '../sections/faq/FaqLuxury';
import FaqModern from '../sections/faq/FaqModern';
import FaqMinimal from '../sections/faq/FaqMinimal';
import FaqCorporate from '../sections/faq/FaqCorporate';
import FaqWarm from '../sections/faq/FaqWarm';
import FaqCreative from '../sections/faq/FaqCreative';
import FaqCute from '../sections/faq/FaqCute';
import FaqDark from '../sections/faq/FaqDark';

export const faqRegistry = {
  luxury: FaqLuxury,
  modern: FaqModern,
  minimal: FaqMinimal,
  corporate: FaqCorporate,
  warm: FaqWarm,
  creative: FaqCreative,
  cute: FaqCute,
  dark: FaqDark,
} as const;