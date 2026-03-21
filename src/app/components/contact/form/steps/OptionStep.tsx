import FormOptionButton from "../../FormOptionButton";

type Props = {
  title: string;
  options: readonly string[];
  value: string;
  error?: string;
  onSelect: (value: string) => void;
};

export default function OptionStep({
  title,
  options,
  value,
  error,
  onSelect,
}: Props) {
  return (
    <div className="grid gap-4">
      <h2 className="sm:text-lg font-semibold mt-8">{title}</h2>

      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <FormOptionButton
            key={option}
            label={option}
            active={value === option}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}