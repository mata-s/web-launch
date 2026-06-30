import { WebsiteData } from './types';

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
      title: '人気メニュー',
      items: [
        {
          title: 'Cut',
          description: '骨格や髪質に合わせた似合わせカット',
        },
        {
          title: 'Color',
          description: '透明感のあるカラー',
        },
      ],
    },
    {
      id: 'gallery-1',
      type: 'gallery',
      variant: 'luxury',
      title: 'サロンギャラリー',
      subtitle: '店内やスタイル写真をご紹介します。',
      images: [
        {
          id: '1',
          label: 'Interior',
          description: '落ち着いた店内空間',
        },
        {
          id: '2',
          label: 'Hair Style',
          description: '人気のスタイル',
        },
        {
          id: '3',
          label: 'Color',
          description: '透明感カラー',
        },
      ],
    },
  ],
};