import { mockWebsite } from '@/lib/website';
export async function generateWebsite(prompt: string) {
  console.log('Generate website:', prompt);

  // TODO: ここをOpenAIに置き換える
  return mockWebsite;
}