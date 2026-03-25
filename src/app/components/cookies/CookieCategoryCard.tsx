type Props = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function CookieCategoryCard({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: Props) {
  const content = (
    <div className="flex items-start justify-between gap-4">
      <div className="pr-2">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
      </div>

      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        aria-label={title}
        className="mt-1 h-5 w-5 rounded border-gray-300"
      />
    </div>
  );

  if (disabled) {
    return <div className="rounded-2xl border border-gray-200 p-4">{content}</div>;
  }

  return (
    <label className="block cursor-pointer rounded-2xl border border-gray-200 p-4 transition hover:border-gray-300">
      {content}
    </label>
  );
}