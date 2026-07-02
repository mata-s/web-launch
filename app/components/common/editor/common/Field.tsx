type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Field({
  label,
  value,
  onChange,
  placeholder,
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-zinc-500">
        {label}
      </span>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
      />
    </label>
  );
}