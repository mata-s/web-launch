import { HeroSection, SectionStyle } from '@/lib/website';
import Field from '../common/Field';
import TextareaField from '../common/TextareaField';
import ColorField from '../common/ColorField';
import SizeField from '../common/SizeField';
import SelectField from '../common/SelectField';
import ToggleField from '../common/ToggleField';

type ThemeOption = {
  label: string;
  value: string;
};

const titleSizeOptions: { label: string; value: SectionStyle['titleSize'] }[] = [
  { label: '小さめ', value: 'sm' },
  { label: '標準', value: 'md' },
  { label: '大きめ', value: 'lg' },
  { label: '特大', value: 'xl' },
];

const bodySizeOptions: { label: string; value: SectionStyle['bodySize'] }[] = [
  { label: '小さめ', value: 'sm' },
  { label: '標準', value: 'md' },
  { label: '大きめ', value: 'lg' },
];

const animationOptions: { label: string; value: SectionStyle['animation'] }[] = [
  { label: 'なし', value: 'none' },
  { label: '下からフェード', value: 'fade-up' },
  { label: 'フェードイン', value: 'fade-in' },
  { label: '横からスライド', value: 'slide-in' },
];

type HeroEditorProps = {
  section: HeroSection;
  themeOptions: ThemeOption[];
  onChangeSectionVariant: (sectionId: string, variant: string) => void;
  onUpdateSection: (field: string, value: string | boolean) => void;
  onUpdateStyle: <Key extends keyof SectionStyle>(
    key: Key,
    value: SectionStyle[Key],
  ) => void;
};

export default function HeroEditor({
  section,
  themeOptions,
  onChangeSectionVariant,
  onUpdateSection,
  onUpdateStyle,
}: HeroEditorProps) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-bold capitalize text-zinc-900">Hero</p>
        <p className="mt-1 text-xs text-zinc-500">
          ファーストビューの文章とボタンを編集できます。
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

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs font-semibold text-zinc-500">背景</p>
        <div className="mt-4 space-y-4">
          <ColorField
            label="背景色"
            value={section.style.backgroundColor}
            onChange={(value) => onUpdateStyle('backgroundColor', value)}
          />
          <ColorField
            label="アクセント色"
            description="ボタンや装飾に使われる色です。"
            value={section.style.accentColor}
            onChange={(value) => onUpdateStyle('accentColor', value)}
          />
          <SelectField
            label="アニメーション"
            value={section.style.animation}
            options={animationOptions}
            onChange={(value) => onUpdateStyle('animation', value)}
          />
        </div>
      </div>

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

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs font-semibold text-zinc-500">タイトルの見た目</p>
        <div className="mt-4 space-y-4">
          <SizeField
            label="タイトル文字サイズ"
            value={section.style.titleSize}
            options={titleSizeOptions}
            onChange={(value) => onUpdateStyle('titleSize', value)}
          />
          <ColorField
            label="タイトル文字色"
            value={section.style.textColor}
            onChange={(value) => onUpdateStyle('textColor', value)}
          />
        </div>
      </div>

      <TextareaField
        label="サブタイトル"
        value={section.subtitle}
        rows={4}
        onChange={(value) => onUpdateSection('subtitle', value)}
      />

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs font-semibold text-zinc-500">サブタイトルの見た目</p>
        <div className="mt-4 space-y-4">
          <SizeField
            label="本文文字サイズ"
            value={section.style.bodySize}
            options={bodySizeOptions}
            onChange={(value) => onUpdateStyle('bodySize', value)}
          />
          <ColorField
            label="本文文字色"
            value={section.style.textColor}
            onChange={(value) => onUpdateStyle('textColor', value)}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs font-semibold text-zinc-500">メインボタン</p>
        <div className="mt-4 space-y-4">
          <ToggleField
            label="表示する"
            checked={section.showPrimaryButton}
            onChange={(checked) => onUpdateSection('showPrimaryButton', checked)}
          />
          {section.showPrimaryButton && (
            <>
              <Field
                label="ボタンテキスト"
                value={section.primaryButton}
                onChange={(value) => onUpdateSection('primaryButton', value)}
              />
              <ColorField
                label="ボタン背景色"
                value={section.style.accentColor}
                onChange={(value) => onUpdateStyle('accentColor', value)}
              />
            </>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
        <p className="text-xs font-semibold text-zinc-500">サブボタン</p>
        <div className="mt-4 space-y-4">
          <ToggleField
            label="表示する"
            checked={section.showSecondaryButton}
            onChange={(checked) => onUpdateSection('showSecondaryButton', checked)}
          />
          {section.showSecondaryButton && (
            <Field
              label="ボタンテキスト"
              value={section.secondaryButton}
              onChange={(value) => onUpdateSection('secondaryButton', value)}
            />
          )}
        </div>
      </div>
    </div>
  );
}