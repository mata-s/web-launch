import Field from './Field';

type LinkItem = {
  label: string;
  href: string;
};

type LinkEditorProps = {
  title: string;
  items: LinkItem[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: keyof LinkItem, value: string) => void;
};

export default function LinkEditor({
  title,
  items,
  onAdd,
  onRemove,
  onUpdate,
}: LinkEditorProps) {
  return (
    <div className="border-t border-zinc-200 pt-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-zinc-500">{title}</p>
        <button
          type="button"
          onClick={onAdd}
          className="rounded-lg border border-zinc-200 px-2 py-1 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50"
        >
          追加
        </button>
      </div>

      <div className="mt-4 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold text-zinc-400">
                {String(index + 1).padStart(2, '0')}
              </p>
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="text-xs font-semibold text-red-500 transition hover:text-red-600"
              >
                削除
              </button>
            </div>

            <div className="space-y-3">
              <Field
                label="表示名"
                value={item.label}
                onChange={(value) => onUpdate(index, 'label', value)}
              />

              <Field
                label="リンク先"
                value={item.href}
                placeholder="https://example.com または #"
                onChange={(value) => onUpdate(index, 'href', value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}