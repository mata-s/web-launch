import { mockWebsite, WebsiteData } from '@/lib/website';

type IndustryPreset = {
  siteName: string;
  siteDescription: string;
  theme: 'luxury' | 'modern' | 'minimal' | 'corporate' | 'warm' | 'creative' | 'cute' | 'dark';
  heroTitle: string;
  heroSubtitle: string;
  featureTitle: string;
  servicesTitle: string;
  galleryTitle: string;
  reviewTitle: string;
  contactTitle: string;
};

const presets: Record<string, IndustryPreset> = {
  beauty: {
    siteName: 'Salon Lumiere',
    siteDescription: 'あなたらしい美しさを引き出す、あたたかな美容サロン。',
    theme: 'warm',
    heroTitle: 'あなたらしい美しさを、自然に引き出す。',
    heroSubtitle:
      '髪・肌・空間すべてにこだわり、毎日を少し好きになれるサロン体験をお届けします。',
    featureTitle: '心地よさまでデザインするサロン体験',
    servicesTitle: 'あなたに合わせたメニュー',
    galleryTitle: 'サロンの雰囲気',
    reviewTitle: 'お客様の声',
    contactTitle: 'ご予約・お問い合わせ',
  },
  cafe: {
    siteName: 'Cafe Komorebi',
    siteDescription: 'ゆっくり過ごせる、街の小さなカフェ。',
    theme: 'warm',
    heroTitle: 'ほっとできる時間を、いつもの街で。',
    heroSubtitle:
      '丁寧に淹れたコーヒーと季節のメニューで、日常に小さな余白をつくります。',
    featureTitle: 'また来たくなる理由',
    servicesTitle: 'おすすめメニュー',
    galleryTitle: '店内とメニュー',
    reviewTitle: 'お客様の声',
    contactTitle: 'アクセス・お問い合わせ',
  },
  corporate: {
    siteName: 'Next Growth Partners',
    siteDescription: '事業成長を支える信頼のビジネスパートナー。',
    theme: 'corporate',
    heroTitle: '課題解決から成長戦略まで、伴走します。',
    heroSubtitle:
      '現場に寄り添った提案と実行支援で、企業の持続的な成長をサポートします。',
    featureTitle: '選ばれる理由',
    servicesTitle: '提供サービス',
    galleryTitle: '実績・取り組み',
    reviewTitle: '導入企業の声',
    contactTitle: 'ご相談はこちら',
  },
  creative: {
    siteName: 'Studio Palette',
    siteDescription: 'ブランドの個性を形にするクリエイティブスタジオ。',
    theme: 'creative',
    heroTitle: 'らしさが伝わるデザインを、もっと自由に。',
    heroSubtitle:
      '企画・デザイン・発信まで、世界観を大切にしたクリエイティブを制作します。',
    featureTitle: '表現にこだわる制作スタイル',
    servicesTitle: '制作できること',
    galleryTitle: '制作事例',
    reviewTitle: 'クライアントの声',
    contactTitle: '制作のご相談',
  },
};

function detectPreset(prompt: string): IndustryPreset {
  const lowerPrompt = prompt.toLowerCase();

  if (
    prompt.includes('美容') ||
    prompt.includes('サロン') ||
    prompt.includes('美容室') ||
    lowerPrompt.includes('salon')
  ) {
    return presets.beauty;
  }

  if (
    prompt.includes('カフェ') ||
    prompt.includes('喫茶') ||
    lowerPrompt.includes('cafe')
  ) {
    return presets.cafe;
  }

  if (
    prompt.includes('会社') ||
    prompt.includes('法人') ||
    prompt.includes('士業') ||
    prompt.includes('コーポレート') ||
    lowerPrompt.includes('corporate') ||
    lowerPrompt.includes('business')
  ) {
    return presets.corporate;
  }

  if (
    prompt.includes('デザイン') ||
    prompt.includes('制作') ||
    prompt.includes('クリエイティブ') ||
    lowerPrompt.includes('creative')
  ) {
    return presets.creative;
  }

  return presets.beauty;
}

function cloneWebsite(website: WebsiteData): WebsiteData {
  return JSON.parse(JSON.stringify(website)) as WebsiteData;
}

function generatePresetWebsite(prompt: string): WebsiteData {
  const preset = detectPreset(prompt);
  const website = cloneWebsite(mockWebsite);

  website.siteName = preset.siteName;
  website.siteDescription = preset.siteDescription;

  website.sections = website.sections.map((section) => {
    if ('variant' in section) {
      section.variant = preset.theme;
    }

    switch (section.type) {
      case 'hero':
        return {
          ...section,
          title: preset.heroTitle,
          subtitle: preset.heroSubtitle,
        };

      case 'feature':
        return {
          ...section,
          title: preset.featureTitle,
          subtitle: 'はじめての方にも安心して選んでいただけるよう、こだわりを分かりやすくまとめました。',
        };

      case 'services':
        return {
          ...section,
          title: preset.servicesTitle,
        };

      case 'gallery':
        return {
          ...section,
          title: preset.galleryTitle,
          subtitle: '写真や雰囲気から、サービスの魅力を直感的に伝えます。',
        };

      case 'review':
        return {
          ...section,
          title: preset.reviewTitle,
          subtitle: '実際にご利用いただいたお客様からの声をご紹介します。',
        };

      case 'contact':
        return {
          ...section,
          title: preset.contactTitle,
          subtitle: 'ご質問やご予約など、お気軽にお問い合わせください。',
          buttonText: 'お問い合わせする',
        };

      case 'cta':
        return {
          ...section,
          title: 'まずはお気軽にご相談ください。',
          description:
            '内容がまだ決まっていなくても大丈夫です。ご希望やお悩みを伺いながら、最適な形をご提案します。',
          primaryButton: '無料で相談する',
          secondaryButton: '詳しく見る',
        };

      case 'faq':
        return {
          ...section,
          title: 'よくある質問',
          subtitle: 'お問い合わせ前によくいただく質問をまとめました。',
        };

      case 'footer':
        return {
          ...section,
          companyName: preset.siteName,
          description: preset.siteDescription,
          copyright: `© ${new Date().getFullYear()} ${preset.siteName}. All rights reserved.`,
        };

      default:
        return section;
    }
  });

  return website;
}

type OpenAIChatResponse = {
  choices?: {
    message?: {
      content?: string;
    };
  }[];
};

function isWebsiteData(value: unknown): value is WebsiteData {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const website = value as WebsiteData;

  return (
    typeof website.siteName === 'string' &&
    typeof website.siteDescription === 'string' &&
    Array.isArray(website.sections)
  );
}

function buildWebsitePrompt(userPrompt: string, fallbackWebsite: WebsiteData) {
  return `
あなたはプロのWebデザイナー兼コピーライターです。
ユーザーの要望から、ホームページ1ページ分のWebsiteData JSONを作成してください。

必ず以下のルールを守ってください。
- JSONのみを返してください。説明文やMarkdownは不要です。
- siteName, siteDescription, sections を必ず含めてください。
- sections は必ず以下の順番にしてください。
  1. hero
  2. feature
  3. services
  4. gallery
  5. review
  6. cta
  7. faq
  8. contact
  9. footer
- variant は必ず次のどれかにしてください。
  luxury, modern, minimal, corporate, warm, creative, cute, dark
- 文章は自然な日本語にしてください。
- 架空の電話番号、メール、住所で構いません。
- 画像URLは不要です。gallery.images は id, label, description のみで作ってください。
- footer.links と footer.socials も必ず作ってください。

ユーザーの要望:
${userPrompt}

出力形式の参考JSON:
${JSON.stringify(fallbackWebsite, null, 2)}
`.trim();
}

async function generateWebsiteWithOpenAI(prompt: string): Promise<WebsiteData | null> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return null;
  }

  const fallbackWebsite = generatePresetWebsite(prompt);

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content:
              'You generate strictly valid JSON for a website builder. Do not include Markdown.',
          },
          {
            role: 'user',
            content: buildWebsitePrompt(prompt, fallbackWebsite),
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error('OpenAI website generation failed:', response.status);
      return null;
    }

    const data = (await response.json()) as OpenAIChatResponse;
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return null;
    }

    const parsed = JSON.parse(content) as unknown;

    if (!isWebsiteData(parsed)) {
      return null;
    }

    return parsed;
  } catch (error) {
    console.error('OpenAI website generation error:', error);
    return null;
  }
}

export async function generateWebsite(prompt: string): Promise<WebsiteData> {
  console.log('Generate website:', prompt);

  if (typeof window === 'undefined') {
    const aiWebsite = await generateWebsiteWithOpenAI(prompt);

    if (aiWebsite) {
      return aiWebsite;
    }
  }

  return generatePresetWebsite(prompt);
}