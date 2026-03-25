import FieldError from "./FieldError";

type Props = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  rows?: number;
};

export default function TextField({
  id,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  onChange,
  multiline = false,
  rows = 3,
}: Props) {
  const describedBy = error ? `${id}-error` : undefined;
  const baseClasses =
    "w-full rounded-lg border px-3 py-2 text-xs focus:outline-none focus:ring-2 sm:text-base";
  const stateClasses = error
    ? "border-red-500 focus:ring-red-400"
    : "border-gray-300 focus:ring-blue-400";

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`${baseClasses} ${stateClasses}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          autoComplete={autoComplete}
          inputMode={type === "tel" ? "tel" : undefined}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`${baseClasses} ${stateClasses}`}
        />
      )}

      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}