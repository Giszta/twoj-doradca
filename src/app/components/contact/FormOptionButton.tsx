type Props = {
  active: boolean;
  label: string;
  onClick: () => void;
  className?: string;
};

export default function FormOptionButton({
  active,
  label,
  onClick,
  className = "",
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-lg border p-3 text-xs transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:p-4 sm:text-base ${
        active
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-gray-300 bg-white hover:bg-gray-100"
      } ${className}`}
    >
      {label}
    </button>
  );
}