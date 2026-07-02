import { WebsiteData } from './types';

export const mockWebsite: WebsiteData = {
  siteName: 'Belle Hair',
  siteDescription: '大阪で人気の美容室',
  sections: [
    {
      id: 'hero-1',
      type: 'hero',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      eyebrow: 'Luxury Website',
      title: 'あなたらしい美しさを。',
      subtitle:
        '髪を通して毎日をもっと楽しく。経験豊富なスタイリストが理想のスタイルをご提案します。',
      primaryButton: '予約する',
      showPrimaryButton: true,
      secondaryButton: 'メニューを見る',
      showSecondaryButton: true,
    },
    {
      id: 'concept-1',
      type: 'concept',
      title: '落ち着いた空間で、自分らしいヘアスタイルに。',
      description:
        'Belle Hairは、一人ひとりの髪質や悩みに寄り添うプライベートサロンです。',
    },
    {
      id: 'feature-1',
      type: 'feature',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      eyebrow: 'Feature',
      title: '心地よさまでデザインするサロン体験',
      subtitle:
        '技術だけでなく、過ごす時間そのものが心地よくなるように、空間・接客・提案にこだわっています。',
      items: [
        {
          title: '丁寧なカウンセリング',
          description:
            '髪質やライフスタイルを伺いながら、無理なく続けられるスタイルをご提案します。',
        },
        {
          title: '扱いやすいデザイン',
          description:
            'サロン帰りだけでなく、毎朝のスタイリングまで考えたヘアデザインを大切にしています。',
        },
        {
          title: '落ち着いた空間',
          description:
            'ゆっくり過ごせる空間で、髪も気持ちも整う時間をお届けします。',
        },
      ],
    },
    {
      id: 'services-1',
      type: 'services',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      eyebrow: 'Services',
      title: '人気メニュー',
      items: [
        {
          title: 'Cut',
          description: '骨格や髪質に合わせた似合わせカット。',
        },
        {
          title: 'Color',
          description: '透明感とツヤを大切にしたカラー。',
        },
        {
          title: 'Treatment',
          description: '髪の状態に合わせて選べる集中ケア。',
        },
      ],
    },
    {
      id: 'gallery-1',
      type: 'gallery',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      eyebrow: 'Gallery',
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
    {
      id: 'review-1',
      type: 'review',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      eyebrow: 'Review',
      title: 'お客様の声',
      subtitle: '実際にご来店いただいたお客様からの感想をご紹介します。',
      reviews: [
        {
          name: 'Mika',
          role: '30代 / 会社員',
          comment:
            '丁寧に相談に乗ってもらえて、毎朝のセットがとても楽になりました。',
        },
        {
          name: 'Ayaka',
          role: '20代 / 学生',
          comment:
            '店内の雰囲気が落ち着いていて、仕上がりも想像以上でした。',
        },
        {
          name: 'Rina',
          role: '40代 / 主婦',
          comment:
            '髪の悩みに合わせて提案してくれるので、安心してお任せできます。',
        },
      ],
    },
    {
      id: 'cta-1',
      type: 'cta',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      eyebrow: 'CTA',
      title: 'まずはお気軽にご相談ください。',
      description:
        '髪型が決まっていなくても大丈夫です。なりたい雰囲気やお悩みに合わせて、ぴったりのメニューをご提案します。',
      primaryButton: '予約する',
      showPrimaryButton: true,
      secondaryButton: 'メニューを見る',
      showSecondaryButton: true,
    },
    {
      id: 'faq-1',
      type: 'faq',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      eyebrow: 'FAQ',
      title: 'よくある質問',
      subtitle: 'ご予約前によくいただく質問をまとめました。',
      items: [
        {
          question: '初めてでも予約できますか？',
          answer:
            'はい、初めての方も歓迎しています。髪のお悩みやご希望を丁寧に伺います。',
        },
        {
          question: '当日予約はできますか？',
          answer:
            '空き状況によっては当日予約も可能です。お電話またはお問い合わせよりご確認ください。',
        },
        {
          question: 'カラーだけの予約もできますか？',
          answer:
            'はい、カラーのみのご予約も可能です。髪の状態に合わせて施術内容をご提案します。',
        },
      ],
    },
    {
      id: 'contact-1',
      type: 'contact',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      eyebrow: 'Contact',
      title: 'ご予約・お問い合わせ',
      subtitle:
        'ご予約やメニューについてのご質問など、お気軽にお問い合わせください。',
      email: 'info@belle-hair.example.com',
      phone: '06-0000-0000',
      address: '大阪府大阪市中央区サンプル1-2-3',
      buttonText: 'お問い合わせする',
    },
    {
      id: 'footer-1',
      type: 'footer',
      variant: 'luxury',
      style: {
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        accentColor: '#18181b',
        titleSize: 'lg',
        bodySize: 'md',
        animation: 'none',
      },
      companyName: 'Belle Hair',
      description:
        '大阪で人気の美容室。あなたらしい美しさを引き出す、落ち着いたプライベートサロンです。',
      email: 'info@belle-hair.example.com',
      phone: '06-0000-0000',
      address: '大阪府大阪市中央区サンプル1-2-3',
      copyright: '© 2026 Belle Hair. All rights reserved.',
      links: [
        { label: 'Home', href: '#' },
        { label: 'Menu', href: '#' },
        { label: 'Gallery', href: '#' },
        { label: 'Contact', href: '#' },
      ],
      socials: [
        { label: 'Instagram', href: '#' },
        { label: 'LINE', href: '#' },
      ],
    },
  ],
};