import {
  SectionAnimation,
  SectionBodySize,
  SectionStyle,
  SectionTitleSize,
} from '@/lib/website';

type StyleEditorProps = {
  style: SectionStyle;
  onChange: <Key extends keyof SectionStyle>(
    key: Key,
    value: SectionStyle[Key],
  ) => void;
};

const titleSizeOptions: { label: string; value: SectionTitleSize }[] = [
  { label: '小さめ', value: 'sm' },
  { label: '標準', value: 'md' },
  { label: '大きめ', value: 'lg' },
  { label: '特大', value: 'xl' },
];

const bodySizeOptions: { label: string; value: SectionBodySize }[] = [
  { label: '小さめ', value: 'sm' },
  { label: '標準', value: 'md' },
  { label: '大きめ', value: 'lg' },
];

const animationOptions: { label: string; value: SectionAnimation }[] = [
  { label: 'なし', value: 'none' },
  { label: '下からフェード', value: 'fade-up' },
  { label: 'フェードイン', value: 'fade-in' },
  { label: '横からスライド', value: 'slide-in' },
];

export default function StyleEditor({ style, onChange }: StyleEditorProps) {
  return (
    <div className="border-t border-zinc-200 pt-5">
      <div>
        <p className="text-xs font-semibold text-zinc-500">スタイル</p>
        <p className="mt-1 text-xs leading-5 text-zinc-400">
          色・文字サイズ・アニメーションを調整できます。
        </p>
      </div>

      <div className="mt-4 space-y-4">
        <label className="block">
          <span className="text-xs font-semibold text-zinc-500">背景色</span>
          <div className="mt-2 grid grid-cols-[44px_1fr] gap-2">
            <input
              type="color"
              value={style.backgroundColor}
              onChange={(event) =>
                onChange('backgroundColor', event.target.value)
              }
              className="h-10 w-11 cursor-pointer rounded-xl border border-zinc-200 bg-white p-1"
            />
            <input
              type="text"
              value={style.backgroundColor}
              onChange={(event) =>
                onChange('backgroundColor', event.target.value)
              }
              className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-zinc-500">文字色</span>
          <div className="mt-2 grid grid-cols-[44px_1fr] gap-2">
            <input
              type="color"
              value={style.textColor}
              onChange={(event) => onChange('textColor', event.target.value)}
              className="h-10 w-11 cursor-pointer rounded-xl border border-zinc-200 bg-white p-1"
            />
            <input
              type="text"
              value={style.textColor}
              onChange={(event) => onChange('textColor', event.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-zinc-500">アクセント色</span>
          <div className="mt-2 grid grid-cols-[44px_1fr] gap-2">
            <input
              type="color"
              value={style.accentColor}
              onChange={(event) => onChange('accentColor', event.target.value)}
              className="h-10 w-11 cursor-pointer rounded-xl border border-zinc-200 bg-white p-1"
            />
            <input
              type="text"
              value={style.accentColor}
              onChange={(event) => onChange('accentColor', event.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-zinc-500">
            タイトルサイズ
          </span>
          <select
            value={style.titleSize}
            onChange={(event) =>
              onChange('titleSize', event.target.value as SectionTitleSize)
            }
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
          >
            {titleSizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-zinc-500">
            本文サイズ
          </span>
          <select
            value={style.bodySize}
            onChange={(event) =>
              onChange('bodySize', event.target.value as SectionBodySize)
            }
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
          >
            {bodySizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-zinc-500">
            アニメーション
          </span>
          <select
            value={style.animation}
            onChange={(event) =>
              onChange('animation', event.target.value as SectionAnimation)
            }
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
          >
            {animationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}