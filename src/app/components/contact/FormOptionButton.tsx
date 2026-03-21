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
      className={`p-3 sm:p-4 rounded-lg border transition cursor-pointer text-xs sm:text-base ${
        active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white hover:bg-gray-100 border-gray-300"
      } ${className}`}
    >
      {label}
    </button>
  );
}