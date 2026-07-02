type ToggleFieldProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
};

export default function ToggleField({
  label,
  checked,
  onChange,
  description,
}: ToggleFieldProps) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-zinc-200 bg-white px-3 py-3">
      <div>
        <p className="text-xs font-semibold text-zinc-700">{label}</p>
        {description ? (
          <p className="mt-1 text-xs leading-5 text-zinc-400">{description}</p>
        ) : null}
      </div>

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-zinc-300 accent-zinc-900"
      />
    </label>
  );
}