'use client';

import ChatPanel from './components/chat/ChatPanel';
import PreviewPanel from './components/website/PreviewPanel';
import EditorPanel from './components/common/editor/EditorPanel';
import { useState } from 'react';
import { mockWebsite, Section, SectionStyle, WebsiteData } from '@/lib/website';

const themeOptions = [
  { label: 'Luxury', value: 'luxury' },
  { label: 'Modern', value: 'modern' },
  { label: 'Minimal', value: 'minimal' },
  { label: 'Corporate', value: 'corporate' },
  { label: 'Warm', value: 'warm' },
  { label: 'Creative', value: 'creative' },
  { label: 'Cute', value: 'cute' },
  { label: 'Dark', value: 'dark' },
];

const sectionTypeOptions: Section['type'][] = [
  'hero',
  'feature',
  'services',
  'gallery',
  'review',
  'cta',
  'faq',
  'contact',
  'footer',
];

function createSectionFromMock(type: Section['type']): Section {
  const baseSection = mockWebsite.sections.find((section) => section.type === type);

  if (!baseSection) {
    throw new Error(`Unknown section type: ${type}`);
  }

  return {
    ...(JSON.parse(JSON.stringify(baseSection)) as Section),
    id: `${type}-${Date.now()}`,
  } as Section;
}

export default function Home() {
  const [website, setWebsite] = useState<WebsiteData>(mockWebsite);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [leftTab, setLeftTab] = useState<'editor' | 'ai'>('editor');
  const [aiInstruction, setAiInstruction] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [newSectionType, setNewSectionType] = useState<Section['type']>('feature');
  const [draggingSectionId, setDraggingSectionId] = useState<string | null>(null);

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate website');
      }

      const data = (await response.json()) as {
        website: WebsiteData;
      };

      setWebsite(data.website);
      setHasGenerated(true);
      setSelectedSectionId(data.website.sections[0]?.id ?? null);
      setLeftTab('editor');
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

  const handleAddSection = () => {
    const newSection = createSectionFromMock(newSectionType);

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: [...currentWebsite.sections, newSection],
    }));

    setSelectedSectionId(newSection.id);
    setLeftTab('editor');
  };

  const handleDeleteSection = (sectionId: string) => {
    setWebsite((currentWebsite) => {
      const nextSections = currentWebsite.sections.filter(
        (section) => section.id !== sectionId,
      );

      return {
        ...currentWebsite,
        sections: nextSections,
      };
    });

    setSelectedSectionId((currentId) => {
      if (currentId !== sectionId) {
        return currentId;
      }

      const remainingSections = website.sections.filter(
        (section) => section.id !== sectionId,
      );

      return remainingSections[0]?.id ?? null;
    });
  };

  const handleMoveSection = (fromSectionId: string, toSectionId: string) => {
    if (fromSectionId === toSectionId) return;

    setWebsite((currentWebsite) => {
      const fromIndex = currentWebsite.sections.findIndex(
        (section) => section.id === fromSectionId,
      );
      const toIndex = currentWebsite.sections.findIndex(
        (section) => section.id === toSectionId,
      );

      if (fromIndex === -1 || toIndex === -1) {
        return currentWebsite;
      }

      const nextSections = [...currentWebsite.sections];
      const [movedSection] = nextSections.splice(fromIndex, 1);
      nextSections.splice(toIndex, 0, movedSection);

      return {
        ...currentWebsite,
        sections: nextSections,
      };
    });
  };

  const handleSectionDragStart = (sectionId: string) => {
    setDraggingSectionId(sectionId);
  };

  const handleSectionDragEnd = () => {
    setDraggingSectionId(null);
  };

  const handleUpdateSelectedSection = (field: string, value: string | boolean) => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId) {
          return section;
        }

        return {
          ...section,
          [field]: value,
        } as Section;
      }),
    }));
  };

  const handleUpdateSelectedSectionStyle = <Key extends keyof SectionStyle>(
    key: Key,
    value: SectionStyle[Key],
  ) => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId || !('style' in section)) {
          return section;
        }

        return {
          ...section,
          style: {
            ...section.style,
            [key]: value,
          },
        } as Section;
      }),
    }));
  };

  const handleUpdateSelectedSectionItem = (
    collectionKey: 'items' | 'reviews',
    itemIndex: number,
    field: string,
    value: string,
  ) => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId) {
          return section;
        }

        if (collectionKey === 'reviews') {
          if (!('reviews' in section)) {
            return section;
          }

          return {
            ...section,
            reviews: section.reviews.map((review, index) => {
              if (index !== itemIndex) {
                return review;
              }

              return {
                ...review,
                [field]: value,
              };
            }),
          } as Section;
        }

        if (!('items' in section)) {
          return section;
        }

        return {
          ...section,
          items: section.items.map((item, index) => {
            if (index !== itemIndex) {
              return item;
            }

            return {
              ...item,
              [field]: value,
            };
          }),
        } as Section;
      }),
    }));
  };

  const handleAddSelectedSectionItem = (collectionKey: 'items' | 'reviews') => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId) {
          return section;
        }

        if (collectionKey === 'reviews') {
          if (!('reviews' in section)) {
            return section;
          }

          return {
            ...section,
            reviews: [
              ...section.reviews,
              {
                name: 'お客様名',
                role: '属性・肩書き',
                comment: 'ここにレビュー本文を入力します。',
              },
            ],
          } as Section;
        }

        if (!('items' in section)) {
          return section;
        }

        const newItem =
          section.type === 'faq'
            ? {
                question: '質問を入力します',
                answer: '回答を入力します。',
              }
            : {
                title: '新しい項目',
                description: 'ここに説明文を入力します。',
              };

        return {
          ...section,
          items: [...section.items, newItem],
        } as Section;
      }),
    }));
  };

  const handleRemoveSelectedSectionItem = (
    collectionKey: 'items' | 'reviews',
    itemIndex: number,
  ) => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId) {
          return section;
        }

        if (collectionKey === 'reviews') {
          if (!('reviews' in section)) {
            return section;
          }

          return {
            ...section,
            reviews: section.reviews.filter((_, index) => index !== itemIndex),
          } as Section;
        }

        if (!('items' in section)) {
          return section;
        }

        return {
          ...section,
          items: section.items.filter((_, index) => index !== itemIndex),
        } as Section;
      }),
    }));
  };

  const handleUpdateGalleryImage = (
    itemIndex: number,
    field: string,
    value: string,
  ) => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId || section.type !== 'gallery') {
          return section;
        }

        return {
          ...section,
          images: section.images.map((image, index) => {
            if (index !== itemIndex) {
              return image;
            }

            return {
              ...image,
              [field]: value,
            };
          }),
        } as Section;
      }),
    }));
  };

  const handleAddGalleryImage = () => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId || section.type !== 'gallery') {
          return section;
        }

        return {
          ...section,
          images: [
            ...section.images,
            {
              id: `image-${Date.now()}`,
              label: 'New Image',
              description: '画像の説明を入力します。',
            },
          ],
        } as Section;
      }),
    }));
  };

  const handleRemoveGalleryImage = (itemIndex: number) => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId || section.type !== 'gallery') {
          return section;
        }

        return {
          ...section,
          images: section.images.filter((_, index) => index !== itemIndex),
        } as Section;
      }),
    }));
  };

  const handleUpdateFooterLink = (
    collectionKey: 'links' | 'socials',
    itemIndex: number,
    field: 'label' | 'href',
    value: string,
  ) => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId || section.type !== 'footer') {
          return section;
        }

        return {
          ...section,
          [collectionKey]: section[collectionKey].map((link, index) => {
            if (index !== itemIndex) {
              return link;
            }

            return {
              ...link,
              [field]: value,
            };
          }),
        } as Section;
      }),
    }));
  };

  const handleAddFooterLink = (collectionKey: 'links' | 'socials') => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId || section.type !== 'footer') {
          return section;
        }

        return {
          ...section,
          [collectionKey]: [
            ...section[collectionKey],
            {
              label: collectionKey === 'links' ? 'New Link' : 'New Social',
              href: '#',
            },
          ],
        } as Section;
      }),
    }));
  };

  const handleRemoveFooterLink = (
    collectionKey: 'links' | 'socials',
    itemIndex: number,
  ) => {
    if (!selectedSectionId) return;

    setWebsite((currentWebsite) => ({
      ...currentWebsite,
      sections: currentWebsite.sections.map((section) => {
        if (section.id !== selectedSectionId || section.type !== 'footer') {
          return section;
        }

        return {
          ...section,
          [collectionKey]: section[collectionKey].filter(
            (_, index) => index !== itemIndex,
          ),
        } as Section;
      }),
    }));
  };

  const selectedSection =
    website.sections.find((section) => section.id === selectedSectionId) ?? null;


  return (
    <main className="flex h-screen bg-zinc-50 text-zinc-900">
      <div className="flex w-280px md:w-300px xl:w-320px shrink-0 flex-col border-r border-zinc-200 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-zinc-200 px-5">
          <div>
            <p className="text-sm font-bold text-zinc-900">web-launch</p>
            <p className="text-xs text-zinc-500">
              {hasGenerated ? 'ホームページ編集' : 'AI Web担当者'}
            </p>
          </div>
          <button className="rounded-xl border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-50">
            ログイン
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {!hasGenerated ? (
            <ChatPanel onSubmitPrompt={handleGenerate} />
          ) : (
            <div className="p-5">
              <div className="mb-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                      Workspace
                    </p>
                    <p className="mt-2 text-sm font-bold text-zinc-900">
                      ホームページ編集
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setHasGenerated(false);
                      setSelectedSectionId(null);
                      setLeftTab('editor');
                    }}
                    className="rounded-xl border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50"
                  >
                    新しく作る
                  </button>
                </div>

                <div className="mt-5 flex rounded-2xl bg-zinc-100 p-1">
                  <button
                    type="button"
                    onClick={() => setLeftTab('editor')}
                    className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                      leftTab === 'editor'
                        ? 'bg-white text-zinc-950 shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    Editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setLeftTab('ai')}
                    className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                      leftTab === 'ai'
                        ? 'bg-white text-zinc-950 shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    AI 🤖
                  </button>
                </div>
              </div>

              {leftTab === 'ai' ? (
                <div className="space-y-5">
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm font-bold text-zinc-900">
                      AIアシスタント
                    </p>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                      選択中のセクションやページ全体について、AIに編集を依頼できます。
                    </p>
                  </div>

                  <div className="space-y-2">
                    {[
                      'このHeroをもっと高級感ある文章にして',
                      'CTAをもっとクリックしたくなる文言にして',
                      'FAQを3つ追加して',
                      'レビューを自然な文章に整えて',
                    ].map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => setAiInstruction(suggestion)}
                        className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-left text-xs font-semibold leading-5 text-zinc-700 transition hover:bg-zinc-50"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>

                  <label className="block">
                    <span className="text-xs font-semibold text-zinc-500">
                      AIへの指示
                    </span>
                    <textarea
                      value={aiInstruction}
                      onChange={(event) => setAiInstruction(event.target.value)}
                      rows={6}
                      placeholder="例：選択中のセクションをもっと親しみやすい文章にして"
                      className="mt-2 w-full resize-none rounded-xl border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-zinc-900"
                    />
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      alert('AIアシスタント機能は次のステップで実装します。');
                    }}
                    className="w-full rounded-xl bg-zinc-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-zinc-800"
                  >
                    AIに依頼する
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold text-zinc-500">Sections</p>
                    </div>

                    <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
                      <select
                        value={newSectionType}
                        onChange={(event) =>
                          setNewSectionType(event.target.value as Section['type'])
                        }
                        className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 outline-none focus:border-zinc-900"
                      >
                        {sectionTypeOptions.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={handleAddSection}
                        className="rounded-xl bg-zinc-900 px-3 py-2 text-xs font-bold text-white transition hover:bg-zinc-800"
                      >
                        追加
                      </button>
                    </div>

                    <div className="mt-3 space-y-2">
                      {website.sections.map((section) => (
                        <div
                          key={section.id}
                          draggable
                          onDragStart={() => handleSectionDragStart(section.id)}
                          onDragEnd={handleSectionDragEnd}
                          onDragOver={(event) => event.preventDefault()}
                          onDrop={(event) => {
                            event.preventDefault();

                            if (!draggingSectionId) return;

                            handleMoveSection(draggingSectionId, section.id);
                            setDraggingSectionId(null);
                          }}
                          className={`grid grid-cols-[auto_1fr_auto] gap-2 rounded-xl transition ${
                            draggingSectionId === section.id ? 'opacity-40' : 'opacity-100'
                          }`}
                        >
                          <div className="flex cursor-grab items-center justify-center rounded-xl border border-zinc-200 bg-white px-2 text-xs font-bold text-zinc-400 active:cursor-grabbing">
                            ⋮⋮
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedSectionId(section.id);
                              window.postMessage(
                                {
                                  type: 'WEB_LAUNCH_REQUEST_SCROLL_TO_SECTION',
                                  sectionId: section.id,
                                },
                                window.location.origin,
                              );
                            }}
                            className={`w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                              selectedSectionId === section.id
                                ? 'bg-zinc-900 text-white'
                                : 'bg-white text-zinc-700 hover:bg-zinc-100'
                            }`}
                          >
                            {section.type}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteSection(section.id)}
                            className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-red-500 transition hover:bg-red-50"
                            aria-label={`${section.type}を削除`}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <EditorPanel
                    section={selectedSection}
                    themeOptions={themeOptions}
                    onChangeSectionVariant={handleChangeSectionVariant}
                    onUpdateSection={handleUpdateSelectedSection}
                    onUpdateSectionStyle={handleUpdateSelectedSectionStyle}
                    onUpdateSectionItem={handleUpdateSelectedSectionItem}
                    onAddSectionItem={handleAddSelectedSectionItem}
                    onRemoveSectionItem={handleRemoveSelectedSectionItem}
                    onUpdateGalleryImage={handleUpdateGalleryImage}
                    onAddGalleryImage={handleAddGalleryImage}
                    onRemoveGalleryImage={handleRemoveGalleryImage}
                    onUpdateFooterLink={handleUpdateFooterLink}
                    onAddFooterLink={handleAddFooterLink}
                    onRemoveFooterLink={handleRemoveFooterLink}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div className="relative h-full min-w-0">
          {isGenerating && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-sm">
              <div className="rounded-2xl bg-white px-6 py-5 shadow-lg border border-zinc-200">
                <p className="text-sm font-medium text-zinc-900">
                  あなた専用のホームページを制作しています...
                </p>
              </div>
            </div>
          )}
          <PreviewPanel
            website={website}
            selectedSectionId={selectedSectionId}
            onSelectSection={setSelectedSectionId}
            onChangeSectionVariant={handleChangeSectionVariant}
          />
        </div>
      </div>
    </main>
  );
}
