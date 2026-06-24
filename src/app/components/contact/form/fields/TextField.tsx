import FieldError from "./FieldError";

type Props = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
};

export default function TextField({
  id,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  onChange,
  onBlur,
  multiline = false,
  rows = 3,
  placeholder,
}: Props) {
  const describedBy = error ? `${id}-error` : undefined;
  const baseClasses =
    "w-full rounded-lg border px-3 py-2 text-xs focus:outline-none focus:ring-2 sm:text-base transition-colors";
  const stateClasses = error
    ? "border-red-400 bg-red-50 focus:ring-red-300"
    : "border-gray-300 focus:ring-blue-400";

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const domValue = e.target.value;
    // Fix: sync autocomplete value from DOM to React state
    if (domValue !== value) {
      onChange(domValue);
    }
    onBlur?.(domValue);
  };

  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
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
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`${baseClasses} ${stateClasses}`}
        />
      )}

      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}
