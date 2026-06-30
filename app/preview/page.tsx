'use client';

import { useEffect, useState } from 'react';
import { mockWebsite, WebsiteData } from '@/lib/website';
import SectionRenderer from '../components/website/SectionRenderer';

type PreviewMessage = {
  type: 'WEB_LAUNCH_PREVIEW_UPDATE';
  website: WebsiteData;
};

export default function PreviewPage() {
  const [website, setWebsite] = useState<WebsiteData>(mockWebsite);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<PreviewMessage>) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type !== 'WEB_LAUNCH_PREVIEW_UPDATE') return;

      setWebsite(event.data.website);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {website.sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </main>
  );
}