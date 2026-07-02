import { ContactSection } from '@/lib/website';
import Field from '../common/Field';
import TextareaField from '../common/TextareaField';

type ThemeOption = {
  label: string;
  value: string;
};

type ContactEditorProps = {
  section: ContactSection;
  themeOptions: ThemeOption[];
  onChangeSectionVariant: (sectionId: string, variant: string) => void;
  onUpdateSection: (field: string, value: string) => void;
};

export default function ContactEditor({
  section,
  themeOptions,
  onChangeSectionVariant,
  onUpdateSection,
}: ContactEditorProps) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-zinc-900">Contact</p>
        <p className="mt-1 text-xs text-zinc-500">
          お問い合わせ情報を編集できます。
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
        label="ラベル（Eyebrow）"
        value={section.eyebrow}
        onChange={(value) => onUpdateSection('eyebrow', value)}
      />

      <Field
        label="タイトル"
        value={section.title}
        onChange={(value) => onUpdateSection('title', value)}
      />

      <TextareaField
        label="サブタイトル"
        value={section.subtitle}
        rows={3}
        onChange={(value) => onUpdateSection('subtitle', value)}
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
        label="ボタン"
        value={section.buttonText}
        onChange={(value) => onUpdateSection('buttonText', value)}
      />
    </div>
  );
}