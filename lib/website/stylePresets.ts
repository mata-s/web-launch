export const titleSizeClass = {
  sm: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  md: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  lg: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
  xl: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
} as const;

export const bodySizeClass = {
  sm: 'text-sm sm:text-base leading-6 md:leading-7',
  md: 'text-base sm:text-lg leading-7 md:leading-8',
  lg: 'text-lg sm:text-xl leading-8 md:leading-9',
} as const;

export const animationClass = {
  none: '',
  'fade-up': 'animate-[fadeUp_0.7s_ease-out_both]',
  'fade-in': 'animate-[fadeIn_0.7s_ease-out_both]',
  'slide-in': 'animate-[slideIn_0.7s_ease-out_both]',
} as const;