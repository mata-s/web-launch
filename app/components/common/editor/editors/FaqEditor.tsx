import { FaqSection } from '@/lib/website';
import Field from '../common/Field';
import TextareaField from '../common/TextareaField';
import ArrayEditor from '../common/ArrayEditor';

type ThemeOption = {
  label: string;
  value: string;
};

type FaqEditorProps = {
  section: FaqSection;
  themeOptions: ThemeOption[];
  onChangeSectionVariant: (sectionId: string, variant: string) => void;
  onUpdateSection: (field: string, value: string) => void;
  onUpdateFaq: (
    itemIndex: number,
    field: string,
    value: string,
  ) => void;
  onAddFaq: () => void;
  onRemoveFaq: (itemIndex: number) => void;
};

export default function FaqEditor({
  section,
  themeOptions,
  onChangeSectionVariant,
  onUpdateSection,
  onUpdateFaq,
  onAddFaq,
  onRemoveFaq,
}: FaqEditorProps) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold text-zinc-900">FAQ</p>
        <p className="mt-1 text-xs text-zinc-500">
          よくある質問を編集できます。
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

      <ArrayEditor
        title="FAQ"
        items={section.items}
        onAdd={onAddFaq}
        onRemove={onRemoveFaq}
        onUpdate={onUpdateFaq}
      />
    </div>
  );
}