
import ServicesLuxury from '../sections/services/ServicesLuxury';
import ServicesModern from '../sections/services/ServicesModern';
import ServicesMinimal from '../sections/services/ServicesMinimal';
import ServicesCorporate from '../sections/services/ServicesCorporate';
import ServicesWarm from '../sections/services/ServicesWarm';
import ServicesCreative from '../sections/services/ServicesCreative';
import ServicesCute from '../sections/services/ServicesCute';
import ServicesDark from '../sections/services/ServicesDark';

export const servicesRegistry = {
  luxury: ServicesLuxury,
  modern: ServicesModern,
  minimal: ServicesMinimal,
  corporate: ServicesCorporate,
  warm: ServicesWarm,
  creative: ServicesCreative,
  cute: ServicesCute,
  dark: ServicesDark,
} as const;