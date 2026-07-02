import { NextResponse } from 'next/server';
import { generateWebsite } from '@/lib/ai/generateWebsite';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { prompt?: string };
    const prompt = body.prompt?.trim();

    if (!prompt) {
      return NextResponse.json(
        { error: 'prompt is required' },
        { status: 400 },
      );
    }

    const website = await generateWebsite(prompt);

    return NextResponse.json({ website });
  } catch (error) {
    console.error('Failed to generate website:', error);

    return NextResponse.json(
      { error: 'failed to generate website' },
      { status: 500 },
    );
  }
}