import Field from './Field';
import TextareaField from './TextareaField';

type ArrayItem = Record<string, string>;

type ArrayEditorProps = {
  title: string;
  items: ArrayItem[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (
    index: number,
    field: string,
    value: string,
  ) => void;
};

export default function ArrayEditor({
  title,
  items,
  onAdd,
  onRemove,
  onUpdate,
}: ArrayEditorProps) {
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
                className="text-xs font-semibold text-red-500 hover:text-red-600"
              >
                削除
              </button>
            </div>

            <div className="space-y-3">
              {Object.entries(item).map(([key, value]) => {
                const label =
                  key === 'title'
                    ? 'タイトル'
                    : key === 'description'
                      ? '説明文'
                      : key === 'question'
                        ? '質問'
                        : key === 'answer'
                          ? '回答'
                          : key === 'name'
                            ? '名前'
                            : key === 'role'
                              ? '肩書き'
                              : key === 'comment'
                                ? 'コメント'
                                : key;

                const multiline =
                  key === 'description' ||
                  key === 'answer' ||
                  key === 'comment';

                return multiline ? (
                  <TextareaField
                    key={key}
                    label={label}
                    value={value}
                    rows={3}
                    onChange={(next) => onUpdate(index, key, next)}
                  />
                ) : (
                  <Field
                    key={key}
                    label={label}
                    value={value}
                    onChange={(next) => onUpdate(index, key, next)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}