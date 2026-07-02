import { Section, SectionStyle } from '@/lib/website';
import HeroEditor from './editors/HeroEditor';
import FeatureEditor from './editors/FeatureEditor';
import ServicesEditor from './editors/ServicesEditor';
import GalleryEditor from './editors/GalleryEditor';
import ReviewEditor from './editors/ReviewEditor';
import FaqEditor from './editors/FaqEditor';
import ContactEditor from './editors/ContactEditor';
import CtaEditor from './editors/CtaEditor';
import FooterEditor from './editors/FooterEditor';

type ThemeOption = {
  label: string;
  value: string;
};

type EditorPanelProps = {
  section: Section | null;
  themeOptions: ThemeOption[];
  onChangeSectionVariant: (sectionId: string, variant: string) => void;
  onUpdateSection: (field: string, value: string | boolean) => void;
  onUpdateSectionStyle: <Key extends keyof SectionStyle>(
    key: Key,
    value: SectionStyle[Key],
  ) => void;
  onUpdateSectionItem: (
    collectionKey: 'items' | 'reviews',
    itemIndex: number,
    field: string,
    value: string,
  ) => void;
  onAddSectionItem: (collectionKey: 'items' | 'reviews') => void;
  onRemoveSectionItem: (
    collectionKey: 'items' | 'reviews',
    itemIndex: number,
  ) => void;
  onUpdateGalleryImage?: (
    itemIndex: number,
    field: string,
    value: string,
  ) => void;
  onAddGalleryImage?: () => void;
  onRemoveGalleryImage?: (itemIndex: number) => void;
  onUpdateFooterLink?: (
    collectionKey: 'links' | 'socials',
    itemIndex: number,
    field: 'label' | 'href',
    value: string,
  ) => void;
  onAddFooterLink?: (collectionKey: 'links' | 'socials') => void;
  onRemoveFooterLink?: (
    collectionKey: 'links' | 'socials',
    itemIndex: number,
  ) => void;
};

export default function EditorPanel({
  section,
  themeOptions,
  onChangeSectionVariant,
  onUpdateSection,
  onUpdateSectionStyle,
  onUpdateSectionItem,
  onAddSectionItem,
  onRemoveSectionItem,
  onUpdateGalleryImage,
  onAddGalleryImage,
  onRemoveGalleryImage,
  onUpdateFooterLink,
  onAddFooterLink,
  onRemoveFooterLink,
}: EditorPanelProps) {
  if (!section) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-200 p-5 text-sm leading-6 text-zinc-500">
        左のセクション一覧、またはプレビュー内のセクションをクリックすると編集できます。
      </div>
    );
  }

  const noop = () => {};

  switch (section.type) {
    case 'hero':
      return (
        <HeroEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
          onUpdateStyle={onUpdateSectionStyle}
        />
      );

    case 'feature':
      return (
        <FeatureEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
          onUpdateFeature={(index, field, value) =>
            onUpdateSectionItem('items', index, field, value)
          }
          onAddFeature={() => onAddSectionItem('items')}
          onRemoveFeature={(index) => onRemoveSectionItem('items', index)}
        />
      );

    case 'services':
      return (
        <ServicesEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
          onUpdateService={(index, field, value) =>
            onUpdateSectionItem('items', index, field, value)
          }
          onAddService={() => onAddSectionItem('items')}
          onRemoveService={(index) => onRemoveSectionItem('items', index)}
        />
      );

    case 'gallery':
      return (
        <GalleryEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
          onUpdateGalleryImage={onUpdateGalleryImage ?? noop}
          onAddGalleryImage={onAddGalleryImage ?? noop}
          onRemoveGalleryImage={onRemoveGalleryImage ?? noop}
        />
      );

    case 'review':
      return (
        <ReviewEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
          onUpdateReview={(index, field, value) =>
            onUpdateSectionItem('reviews', index, field, value)
          }
          onAddReview={() => onAddSectionItem('reviews')}
          onRemoveReview={(index) => onRemoveSectionItem('reviews', index)}
        />
      );

    case 'faq':
      return (
        <FaqEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
          onUpdateFaq={(index, field, value) =>
            onUpdateSectionItem('items', index, field, value)
          }
          onAddFaq={() => onAddSectionItem('items')}
          onRemoveFaq={(index) => onRemoveSectionItem('items', index)}
        />
      );

    case 'contact':
      return (
        <ContactEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
        />
      );

    case 'cta':
      return (
        <CtaEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
        />
      );

    case 'footer':
      return (
        <FooterEditor
          section={section}
          themeOptions={themeOptions}
          onChangeSectionVariant={onChangeSectionVariant}
          onUpdateSection={onUpdateSection}
          onUpdateFooterLink={onUpdateFooterLink ?? noop}
          onAddFooterLink={onAddFooterLink ?? noop}
          onRemoveFooterLink={onRemoveFooterLink ?? noop}
        />
      );

    default:
      return (
        <div className="rounded-2xl border border-dashed border-zinc-200 p-5 text-sm leading-6 text-zinc-500">
          {section.type} エディターはこれから実装します。
        </div>
      );
  }
}