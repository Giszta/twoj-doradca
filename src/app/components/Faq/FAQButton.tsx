import { ChevronDown, HelpCircle } from "lucide-react"

type Props = {
  question: string
  isOpen: boolean
  onClick: () => void
}

export default function FAQButton({ question, isOpen, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-expanded={isOpen}
      className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-lg font-medium text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      <span className="flex items-center gap-3 flex-1 min-w-0">
        <HelpCircle className="w-5 h-5 text-blue-400 shrink-0" />
        <span className="whitespace-normal wrap-break-words">
          {question}
        </span>
      </span>

      <ChevronDown
        className={`w-5 h-5 shrink-0 transform transition-transform duration-300 ${
          isOpen ? "rotate-180 text-blue-500" : ""
        }`}
      />
    </button>
  )
}