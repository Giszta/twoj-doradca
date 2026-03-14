"use client"

import { FAQItemInterface } from "./types"
import FAQButton from "./FAQButton"
import FAQAnswer from "./FAQAnswer"

type Props = {
  faq: FAQItemInterface
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({ faq, isOpen, onToggle }: Props) {
  return (
    <div className="border border-blue-200 rounded-2xl shadow-md hover:shadow-lg bg-white/70 backdrop-blur-sm transition w-full">

      <FAQButton
        question={faq.question}
        isOpen={isOpen}
        onClick={onToggle}
      />

      <FAQAnswer
        answer={faq.answer}
        isOpen={isOpen}
      />

    </div>
  )
}