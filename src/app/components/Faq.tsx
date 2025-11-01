"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Na czym polega Twoje doradztwo?",
    answer:
      "Pomagam kompleksowo – od analizy potrzeb, przez dobór instalacji fotowoltaicznej, pomp ciepła czy magazynu energii, aż po wsparcie w uzyskaniu dotacji i finansowania.",
  },
  {
    question: "Czy zajmujesz się formalnościami?",
    answer:
      "Tak. Zajmuję się wszystkimi formalnościami, od dokumentów urzędowych po zgłoszenia do operatora sieci. Dzięki temu oszczędzasz czas i nerwy.",
  },
  {
    question: "Czy Twoje doradztwo jest bezpłatne?",
    answer:
      "Tak – moje doradztwo jest bezpłatne. Zarabiam na prowizji od dostawców i instalatorów, a Ty nie ponosisz dodatkowych kosztów.",
  },
  {
    question: "Czy mogę liczyć na wsparcie po instalacji?",
    answer:
      "Oczywiście. Doradzam nie tylko na etapie inwestycji, ale również po montażu – w zakresie optymalizacji, serwisów i rozbudowy instalacji.",
  },
  {
    question: "Dlaczego warto wybrać właśnie Ciebie?",
    answer:
      "Od lat zajmuję się doradztwem w zakresie OZE. Stawiam na szczerość, przejrzystość i indywidualne podejście do klienta. Klienci cenią mnie za rzetelność i wsparcie na każdym kroku.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className=" "
    >
     <div className="max-w-7xl mx-auto px-6">
        {/* Tytuł */}
        <motion.h2
          className="flex items-center justify-center text-center text-xl sm:text-2xl xl:text-4xl font-bold text-gray-800 mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        ><span className="inline-block border-t border-gray-400 w-20 mr-6"></span>
          Najczęściej zadawane pytania
          <span className="inline-block border-t border-gray-400 w-20 ml-6"></span>
        </motion.h2>


<div className="space-y-4">
  {faqs.map((faq, index) => (
    <div
      id="container"
      key={index}
      className="border border-blue-200 rounded-2xl shadow-md hover:shadow-lg bg-white/70 backdrop-blur-sm transition w-full"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="flex justify-between items-center w-full px-6 py-4 text-left text-sm sm:text-lg font-medium text-blue-900"
      >
        <span className="flex items-center gap-3 flex-1 min-w-0">
          <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <span className="whitespace-normal break-words">
            {faq.question}
          </span>
        </span>

        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${
            openIndex === index ? "rotate-180 text-blue-500" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {openIndex === index && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 0.8,
            }}
            className="overflow-hidden px-6"
          >
            <div className="pb-4 text-gray-700 leading-relaxed whitespace-normal break-words min-w-0 text-sm sm:text-base">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
