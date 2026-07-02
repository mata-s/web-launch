type TextareaFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
};

export default function TextareaField({
  label,
  value,
  onChange,
  rows = 4,
  placeholder,
}: TextareaFieldProps) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-zinc-500">
        {label}
      </span>

      <textarea
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
      />
    </label>
  );
}