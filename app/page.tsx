'use client';

import ChatPanel from './components/chat/ChatPanel';
import PreviewPanel from './components/website/PreviewPanel';
import { useState } from 'react';
import { generateWebsite } from '@/lib/ai/generateWebsite';
import { mockWebsite, Section, WebsiteData } from '@/lib/website';

export default function Home() {
  const [website, setWebsite] = useState<WebsiteData>(mockWebsite);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);

    try {
      const result = await generateWebsite(prompt);
      setWebsite(result);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleChangeSectionVariant = (
    sectionId: string,
    variant: string,
  ) => {
    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== sectionId || !('variant' in section)) {
          return section;
        }

        return {
          ...section,
          variant,
        } as Section;
      }),
    }));
  };

  return (
    <main className="flex h-screen bg-zinc-50 text-zinc-900">
      <div className="flex w-420px shrink-0 flex-col">
        <div className="flex h-16 items-center justify-between border-b border-r border-zinc-200 bg-white px-5">
          <div>
            <p className="text-sm font-bold text-zinc-900">web-launch</p>
            <p className="text-xs text-zinc-500">AI Web担当者</p>
          </div>
          <button className="rounded-xl border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-50">
            ログイン
          </button>
        </div>

        <div className="min-h-0 flex-1">
          <ChatPanel onSubmitPrompt={handleGenerate} />
        </div>
      </div>

      <div className="relative min-w-0 flex-1">
        {isGenerating && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="rounded-2xl bg-white px-6 py-5 shadow-lg border border-zinc-200">
              <p className="text-sm font-medium text-zinc-900">AIがホームページを生成中...</p>
            </div>
          </div>
        )}
        <PreviewPanel
          website={website}
          onChangeSectionVariant={handleChangeSectionVariant}
        />
      </div>
    </main>
  );
}
