import ContactLuxury from '../sections/contact/ContactLuxury';
import ContactModern from '../sections/contact/ContactModern';
import ContactMinimal from '../sections/contact/ContactMinimal';
import ContactCorporate from '../sections/contact/ContactCorporate';
import ContactWarm from '../sections/contact/ContactWarm';
import ContactCreative from '../sections/contact/ContactCreative';
import ContactCute from '../sections/contact/ContactCute';
import ContactDark from '../sections/contact/ContactDark';

export const contactRegistry = {
  luxury: ContactLuxury,
  modern: ContactModern,
  minimal: ContactMinimal,
  corporate: ContactCorporate,
  warm: ContactWarm,
  creative: ContactCreative,
  cute: ContactCute,
  dark: ContactDark,
} as const;