import { ChevronDown, HelpCircle } from "lucide-react";

type Props = {
  id: string;
  controlsId: string;
  question: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function FAQButton({
  id,
  controlsId,
  question,
  isOpen,
  onClick,
}: Props) {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:text-lg"
    >
      <span className="flex min-w-0 flex-1 items-center gap-3">
        <HelpCircle className="h-5 w-5 shrink-0 text-blue-400" />
        <span className="wrap-break-words whitespace-normal">{question}</span>
      </span>

      <ChevronDown
        className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
          isOpen ? "rotate-180 text-blue-500" : ""
        }`}
      />
    </button>
  );
}