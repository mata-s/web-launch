import ReviewLuxury from '../sections/review/ReviewLuxury';
import ReviewModern from '../sections/review/ReviewModern';
import ReviewMinimal from '../sections/review/ReviewMinimal';
import ReviewCorporate from '../sections/review/ReviewCorporate';
import ReviewWarm from '../sections/review/ReviewWarm';
import ReviewCreative from '../sections/review/ReviewCreative';
import ReviewCute from '../sections/review/ReviewCute';
import ReviewDark from '../sections/review/ReviewDark';

export const reviewRegistry = {
  luxury: ReviewLuxury,
  modern: ReviewModern,
  minimal: ReviewMinimal,
  corporate: ReviewCorporate,
  warm: ReviewWarm,
  creative: ReviewCreative,
  cute: ReviewCute,
  dark: ReviewDark,
} as const;