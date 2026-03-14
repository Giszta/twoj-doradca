"use client"

import { useState } from "react"

import Separator from "../Separator"

import FAQItem from "./FAQItem"
import { faqs } from "./faqData"

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <section id="faq">

      <div className="max-w-7xl mx-auto px-6">

        <Separator />

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />

          ))}

        </div>

      </div>

    </section>
  )
}