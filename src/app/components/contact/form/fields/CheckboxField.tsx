import FieldError from "./FieldError";

type Props = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  error?: string;
};

export default function CheckboxField({
  id,
  checked,
  onChange,
  children,
  error,
}: Props) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="grid gap-2">
      <label
        htmlFor={id}
        className="flex items-start gap-3 text-sm leading-6 text-gray-600"
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />
        <span>{children}</span>
      </label>

      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}