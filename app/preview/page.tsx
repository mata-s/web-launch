'use client';

import { useEffect, useState } from 'react';
import { mockWebsite, WebsiteData } from '@/lib/website';
import SectionRenderer from '../components/website/SectionRenderer';

type PreviewMessage =
  | {
      type: 'WEB_LAUNCH_PREVIEW_UPDATE';
      website: WebsiteData;
      selectedSectionId: string | null;
    }
  | {
      type: 'WEB_LAUNCH_SCROLL_TO_SECTION';
      sectionId: string;
    };

export default function PreviewPage() {
  const [website, setWebsite] = useState<WebsiteData>(mockWebsite);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);

  useEffect(() => {
    console.log('PreviewPage mounted');
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<PreviewMessage>) => {
      if (event.origin !== window.location.origin) return;

      console.log('Preview message received', event.data);

      if (event.data?.type === 'WEB_LAUNCH_SCROLL_TO_SECTION') {
        const target = document.getElementById(
          `preview-section-${event.data.sectionId}`,
        );

        target?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });

        return;
      }

      if (event.data?.type !== 'WEB_LAUNCH_PREVIEW_UPDATE') return;

      const hero = event.data.website.sections.find(
        (section) => section.type === 'hero',
      );

      console.log('Preview received hero', hero);

      setWebsite(event.data.website);
      setSelectedSectionId(event.data.selectedSectionId);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <main>
      {website.sections.map((section) => (
        <div
          id={`preview-section-${section.id}`}
          key={section.id}
          role="button"
          tabIndex={0}
          onClick={() => {
            window.parent.postMessage(
              {
                type: 'WEB_LAUNCH_SELECT_SECTION',
                sectionId: section.id,
              },
              window.location.origin,
            );
          }}
          onKeyDown={(event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;

            window.parent.postMessage(
              {
                type: 'WEB_LAUNCH_SELECT_SECTION',
                sectionId: section.id,
              },
              window.location.origin,
            );
          }}
          className={`relative cursor-pointer ring-inset transition ${
            selectedSectionId === section.id
              ? 'ring-4 ring-blue-500'
              : 'hover:ring-2 hover:ring-blue-300'
          }`}
        >
          <SectionRenderer section={section} />
        </div>
      ))}
    </main>
  );
}