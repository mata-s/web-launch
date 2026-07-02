type SizeOption<Value extends string> = {
  label: string;
  value: Value;
};

type SizeFieldProps<Value extends string> = {
  label: string;
  value: Value;
  options: SizeOption<Value>[];
  onChange: (value: Value) => void;
  description?: string;
};

export default function SizeField<Value extends string>({
  label,
  value,
  options,
  onChange,
  description,
}: SizeFieldProps<Value>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-zinc-500">{label}</span>
      {description && (
        <span className="mt-1 block text-xs leading-5 text-zinc-400">
          {description}
        </span>
      )}

      <select
        value={value}
        onChange={(event) => onChange(event.target.value as Value)}
        className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-zinc-900"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}