export type WebsiteData = {
  siteName: string;
  siteDescription: string;
  sections: Section[];
};

export type Section = HeroSection | ConceptSection | ServicesSection;

export type HeroSection = {
  id: string;
  type: 'hero';
  variant: 'luxury' | 'minimal' | 'modern';
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
};

export type ConceptSection = {
  id: string;
  type: 'concept';
  title: string;
  description: string;
};

export type ServicesSection = {
  id: string;
  type: 'services';
  items: {
    title: string;
    description: string;
    price: string;
  }[];
};

export const mockWebsite: WebsiteData = {
  siteName: 'Belle Hair',
  siteDescription: '大阪で人気の美容室',
  sections: [
    {
      id: 'hero-1',
      type: 'hero',
      variant: 'luxury',
      title: 'あなたらしい美しさを。',
      description:
        '髪を通して毎日をもっと楽しく。経験豊富なスタイリストが理想のスタイルをご提案します。',
      primaryButton: '予約する',
      secondaryButton: 'メニューを見る',
    },
    {
      id: 'concept-1',
      type: 'concept',
      title: '落ち着いた空間で、自分らしいヘアスタイルに。',
      description:
        'Belle Hairは、一人ひとりの髪質や悩みに寄り添うプライベートサロンです。',
    },
    {
      id: 'services-1',
      type: 'services',
      items: [
        {
          title: 'Cut',
          description: '骨格や髪質に合わせた似合わせカット',
          price: '¥4,500〜',
        },
        {
          title: 'Color',
          description: '透明感のあるカラー',
          price: '¥7,000〜',
        },
      ],
    },
  ],
};