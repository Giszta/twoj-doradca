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
      <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-16">
        <Separator />

        <div className="mb-8 text-center md:text-left">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
            FAQ
          </p>
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-3">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-gray-600 max-w-lg text-base leading-relaxed mx-auto md:mx-0">
            Nie znalazłeś odpowiedzi? Napisz do mnie — chętnie pomogę.
          </p>
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
