import { FooterSection } from '@/lib/website';
import Field from '../common/Field';
import TextareaField from '../common/TextareaField';
import LinkEditor from '../common/LinkEditor';

type ThemeOption = {
  label: string;
  value: string;
};

type FooterEditorProps = {
  section: FooterSection;
  themeOptions: ThemeOption[];
  onChangeSectionVariant: (sectionId: string, variant: string) => void;
  onUpdateSection: (field: string, value: string) => void;
  onUpdateFooterLink: (
    collectionKey: 'links' | 'socials',
    itemIndex: number,
    field: 'label' | 'href',
    value: string,
  ) => void;
  onAddFooterLink: (collectionKey: 'links' | 'socials') => void;
  onRemoveFooterLink: (
    collectionKey: 'links' | 'socials',
    itemIndex: number,
  ) => void;
};

export default function FooterEditor({
  section,
  themeOptions,
  onChangeSectionVariant,
  onUpdateSection,
  onUpdateFooterLink,
  onAddFooterLink,
  onRemoveFooterLink,
}: FooterEditorProps) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-zinc-900">Footer</p>
        <p className="mt-1 text-xs text-zinc-500">
          会社情報・リンク・SNSを編集できます。
        </p>
      </div>

      <label className="block">
        <span className="text-xs font-semibold text-zinc-500">テーマ</span>
        <select
          value={section.variant}
          onChange={(event) =>
            onChangeSectionVariant(section.id, event.target.value)
          }
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-900"
        >
          {themeOptions.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
      </label>

      <Field
        label="会社名"
        value={section.companyName}
        onChange={(value) => onUpdateSection('companyName', value)}
      />

      <TextareaField
        label="説明文"
        value={section.description}
        rows={4}
        onChange={(value) => onUpdateSection('description', value)}
      />

      <Field
        label="メールアドレス"
        value={section.email}
        onChange={(value) => onUpdateSection('email', value)}
      />

      <Field
        label="電話番号"
        value={section.phone}
        onChange={(value) => onUpdateSection('phone', value)}
      />

      <TextareaField
        label="住所"
        value={section.address}
        rows={2}
        onChange={(value) => onUpdateSection('address', value)}
      />

      <Field
        label="コピーライト"
        value={section.copyright}
        onChange={(value) => onUpdateSection('copyright', value)}
      />

      <LinkEditor
        title="メニューリンク"
        items={section.links}
        onAdd={() => onAddFooterLink('links')}
        onRemove={(index) => onRemoveFooterLink('links', index)}
        onUpdate={(index, field, value) =>
          onUpdateFooterLink('links', index, field, value)
        }
      />

      <LinkEditor
        title="SNSリンク"
        items={section.socials}
        onAdd={() => onAddFooterLink('socials')}
        onRemove={(index) => onRemoveFooterLink('socials', index)}
        onUpdate={(index, field, value) =>
          onUpdateFooterLink('socials', index, field, value)
        }
      />
    </div>
  );
}