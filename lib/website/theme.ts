/**
 * サイト全体で使用するデザインテーマ
 */
export type Theme =
  | 'luxury'
  | 'minimal'
  | 'modern'
  | 'corporate'
  | 'warm'
  | 'creative'
  | 'cute'
  | 'dark';

/**
 * テーマ一覧（UIやAIプロンプト生成でも利用可能）
 */
export const THEMES: Theme[] = [
  'luxury',
  'minimal',
  'modern',
  'corporate',
  'warm',
  'creative',
  'cute',
  'dark',
];