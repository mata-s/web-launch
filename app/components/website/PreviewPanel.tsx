'use client';

import { useEffect, useRef, useState } from 'react';
import { WebsiteData } from '@/lib/website';

type PreviewPanelProps = {
  website: WebsiteData;
  onChangeSectionVariant: (sectionId: string, variant: string) => void;
};

type PreviewMessage = {
  type: 'WEB_LAUNCH_PREVIEW_UPDATE';
  website: WebsiteData;
};

export default function PreviewPanel({
  website,
  onChangeSectionVariant,
}: PreviewPanelProps) {
  const [device, setDevice] = useState<'pc' | 'tablet' | 'mobile'>('pc');
  const [mode, setMode] = useState<'preview' | 'edit'>('edit');
  void mode;
  void onChangeSectionVariant;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const previewWidth = {
    pc: '100%',
    tablet: '820px',
    mobile: '390px',
  }[device];

  useEffect(() => {
    const message: PreviewMessage = {
      type: 'WEB_LAUNCH_PREVIEW_UPDATE',
      website,
    };

    iframeRef.current?.contentWindow?.postMessage(message, window.location.origin);
  }, [website, device]);

  const handleIframeLoad = () => {
    const message: PreviewMessage = {
      type: 'WEB_LAUNCH_PREVIEW_UPDATE',
      website,
    };

    iframeRef.current?.contentWindow?.postMessage(message, window.location.origin);
  };

  return (
    <section className="flex h-full w-full flex-col bg-zinc-100">
      <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-5 py-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Preview
          </p>
          <h2 className="mt-1 text-lg font-semibold text-zinc-900">
            リアルタイムプレビュー
          </h2>
        </div>

        <div className="flex items-center">
          <div className="mr-4 flex rounded-2xl border border-zinc-200 bg-zinc-50 p-1">
            {[
              { label: '👁 Preview', value: 'preview' },
              { label: '🎨 Edit', value: 'edit' },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setMode(item.value as 'preview' | 'edit')}
                className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  mode === item.value
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-500 hover:bg-white hover:text-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex rounded-2xl border border-zinc-200 bg-zinc-50 p-1">
            {[
              { label: 'PC', value: 'pc' },
              { label: 'Tablet', value: 'tablet' },
              { label: 'SP', value: 'mobile' },
            ].map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setDevice(item.value as 'pc' | 'tablet' | 'mobile')}
                className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  device === item.value
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-500 hover:bg-white hover:text-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 justify-center overflow-hidden p-8">
        <div
          className="h-full overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg transition-all duration-300"
          style={{ width: previewWidth, maxWidth: '100%' }}
        >
          <iframe
            ref={iframeRef}
            key={device}
            src="/preview"
            title="Website preview"
            className="h-full w-full border-0 bg-white"
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    </section>
  );
}