import { CtaSection } from '@/lib/website';
import Field from '../common/Field';
import TextareaField from '../common/TextareaField';

type ThemeOption = {
  label: string;
  value: string;
};

type CtaEditorProps = {
  section: CtaSection;
  themeOptions: ThemeOption[];
  onChangeSectionVariant: (sectionId: string, variant: string) => void;
  onUpdateSection: (field: string, value: string) => void;
};

export default function CtaEditor({
  section,
  themeOptions,
  onChangeSectionVariant,
  onUpdateSection,
}: CtaEditorProps) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-zinc-900">CTA</p>
        <p className="mt-1 text-xs text-zinc-500">
          行動を促す見出し・説明文・ボタンを編集できます。
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
        label="説明文"
        value={section.description}
        rows={4}
        onChange={(value) => onUpdateSection('description', value)}
      />

      <Field
        label="メインボタン"
        value={section.primaryButton}
        onChange={(value) => onUpdateSection('primaryButton', value)}
      />

      <Field
        label="サブボタン"
        value={section.secondaryButton ?? ''}
        onChange={(value) => onUpdateSection('secondaryButton', value)}
      />
    </div>
  );
}