type ColorFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  description?: string;
};

const colorPresets = [
  { label: '白', value: '#ffffff' },
  { label: '黒', value: '#18181b' },
  { label: 'グレー', value: '#71717a' },
  { label: 'ベージュ', value: '#f5f0e8' },
  { label: '生成り', value: '#f8f3ef' },
  { label: '黄土色', value: '#b88a44' },
  { label: 'ブラウン', value: '#8b5e3c' },
  { label: '赤', value: '#dc2626' },
  { label: 'オレンジ', value: '#f97316' },
  { label: '黄色', value: '#eab308' },
  { label: '緑', value: '#16a34a' },
  { label: '青', value: '#2563eb' },
  { label: 'ネイビー', value: '#1e3a8a' },
  { label: '紫', value: '#9333ea' },
  { label: 'ピンク', value: '#ec4899' },
] as const;

const gradientPresets = [
  { label: 'ベージュ', value: 'linear-gradient(135deg, #f8f3ef, #b88a44)' },
  { label: 'ゴールド', value: 'linear-gradient(135deg, #fef3c7, #b88a44)' },
  { label: 'Ocean', value: 'linear-gradient(135deg, #2563eb, #60a5fa)' },
  { label: 'Sunset', value: 'linear-gradient(135deg, #fb7185, #f59e0b)' },
  { label: 'Forest', value: 'linear-gradient(135deg, #16a34a, #84cc16)' },
  { label: 'Night', value: 'linear-gradient(135deg, #111827, #374151)' },
  { label: 'Purple', value: 'linear-gradient(135deg, #9333ea, #ec4899)' },
  { label: 'Sky', value: 'linear-gradient(135deg, #38bdf8, #2563eb)' },
] as const;

export default function ColorField({
  label,
  value,
  onChange,
  description,
}: ColorFieldProps) {
  const isGradientValue = value.trim().startsWith('linear-gradient');

  return (
    <div className="block">
      <details className="rounded-2xl border border-zinc-200 bg-white p-3" open>
        <summary className="cursor-pointer select-none text-xs font-semibold text-zinc-500">
          {label}
        </summary>
        {description && (
          <p className="mt-2 text-xs leading-5 text-zinc-400">
            {description}
          </p>
        )}

        <div className="mt-3 space-y-4">
          <details className="rounded-xl border border-zinc-200 bg-zinc-50 p-3" open>
            <summary className="cursor-pointer select-none text-xs font-semibold text-zinc-400">
              おすすめカラー
            </summary>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
              {colorPresets.map((preset) => {
                const isSelected =
                  !isGradientValue &&
                  value.trim().toLowerCase() === preset.value.toLowerCase();

                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => onChange(preset.value)}
                    className={`flex flex-col items-center justify-center rounded-xl border px-2 py-2 transition ${
                      isSelected
                        ? 'border-zinc-900 bg-zinc-100'
                        : 'border-zinc-200 bg-white hover:border-zinc-400'
                    }`}
                  >
                    <span
                      className="mb-1 block h-6 w-6 rounded-full border border-zinc-300"
                      style={{ backgroundColor: preset.value }}
                      aria-label={preset.label}
                    />
                    <span className="text-xs text-zinc-700">{preset.label}</span>
                  </button>
                );
              })}
            </div>
          </details>

          <details className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <summary className="cursor-pointer select-none text-xs font-semibold text-zinc-400">
              おすすめグラデーション
            </summary>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {gradientPresets.map((preset) => {
                const isSelected = value.trim() === preset.value;

                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => onChange(preset.value)}
                    className={`overflow-hidden rounded-xl border bg-white text-left transition ${
                      isSelected
                        ? 'border-zinc-900 ring-2 ring-zinc-900/10'
                        : 'border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    <span
                      className="block h-12 w-full"
                      style={{ background: preset.value }}
                    />
                    <span className="block px-2 py-2 text-xs font-semibold text-zinc-700">
                      {preset.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </details>
        </div>

        {/* Details for advanced color selection */}
        <details className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
          <summary className="cursor-pointer text-xs text-zinc-500 select-none">詳細設定</summary>
          <div className="mt-3 grid grid-cols-[44px_1fr] gap-2">
            <input
              type="color"
              value={isGradientValue ? '#ffffff' : value}
              onChange={(event) => onChange(event.target.value)}
              className="h-10 w-11 cursor-pointer rounded-xl border border-zinc-200 bg-white p-1"
            />
            <input
              type="text"
              value={value}
              onChange={(event) => onChange(event.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
            />
          </div>
        </details>
      </details>
    </div>
  );
}