import HeroLuxury from '../sections/hero/HeroLuxury';
import HeroMinimal from '../sections/hero/HeroMinimal';
import HeroModern from '../sections/hero/HeroModern';
import HeroCorporate from '../sections/hero/HeroCorporate';
import HeroWarm from '../sections/hero/HeroWarm';
import HeroCreative from '../sections/hero/HeroCreative';
import HeroCute from '../sections/hero/HeroCute';
import HeroDark from '../sections/hero/HeroDark';

export const heroRegistry = {
  luxury: HeroLuxury,
  minimal: HeroMinimal,
  modern: HeroModern,
  corporate: HeroCorporate,
  warm: HeroWarm,
  creative: HeroCreative,
  cute: HeroCute,
  dark: HeroDark
} as const;