import FeatureLuxury from '../sections/feature/FeatureLuxury';
import FeatureModern from '../sections/feature/FeatureModern';
import FeatureMinimal from '../sections/feature/FeatureMinimal';
import FeatureCorporate from '../sections/feature/FeatureCorporate';
import FeatureWarm from '../sections/feature/FeatureWarm';
import FeatureCreative from '../sections/feature/FeatureCreative';
import FeatureCute from '../sections/feature/FeatureCute';
import FeatureDark from '../sections/feature/FeatureDark';

export const featureRegistry = {
  luxury: FeatureLuxury,
  modern: FeatureModern,
  minimal: FeatureMinimal,
  corporate: FeatureCorporate,
  warm: FeatureWarm,
  creative: FeatureCreative,
  cute: FeatureCute,
  dark: FeatureDark,
} as const;