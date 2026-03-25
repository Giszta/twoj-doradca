"use client";

import { useState } from "react";

import Separator from "../Separator";

import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6">
        <Separator />

        <div className="mb-8">
          <h2
            id="faq-heading"
            className="text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            Najczęściej zadawane pytania
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}