"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Jakie korzyści daje instalacja fotowoltaiki?",
    answer:
      "Fotowoltaika pozwala obniżyć rachunki za prąd nawet o kilkadziesiąt procent, zwiększa niezależność energetyczną i korzystnie wpływa na środowisko.",
  },
  {
    question: "Czy mogę otrzymać dofinansowanie na instalację OZE?",
    answer:
      "Tak, istnieją różne programy rządowe i regionalne, takie jak 'Mój Prąd' czy 'Czyste Powietrze'. Pomożemy Ci w procesie uzyskania dotacji.",
  },
  {
    question: "Jak długo trwa montaż paneli fotowoltaicznych?",
    answer:
      "Sam montaż zajmuje zwykle 1–3 dni, w zależności od wielkości instalacji. Cały proces od podpisania umowy do uruchomienia to zazwyczaj 4–8 tygodni.",
  },
  {
    question: "Czy instalacja wymaga serwisowania?",
    answer:
      "Systemy fotowoltaiczne są praktycznie bezobsługowe. Zaleca się jednak okresowe przeglądy i czyszczenie paneli dla zachowania maksymalnej wydajności.",
  },
  {
    question: "Co się dzieje z nadwyżką wyprodukowanej energii?",
    answer:
      "Nadwyżka energii trafia do sieci energetycznej i możesz ją odebrać w późniejszym czasie zgodnie z zasadami systemu opustów lub net-billingu.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-stone-100   w-full flex justify-center py-16">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Najczęściej zadawane pytania
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-2xl shadow-sm hover:bg-green-100/50 transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-green-900  transition"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
