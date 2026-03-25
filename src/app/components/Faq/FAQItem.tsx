"use client";

import { FAQItemData } from "./types";
import FAQButton from "./FAQButton";
import FAQAnswer from "./FAQAnswer";

type Props = {
  faq: FAQItemData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FAQItem({ faq, index, isOpen, onToggle }: Props) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <article className="w-full rounded-2xl border border-blue-200 bg-white/70 shadow-md backdrop-blur-sm transition hover:shadow-lg">
      <h3>
        <FAQButton
          id={buttonId}
          controlsId={panelId}
          question={faq.question}
          isOpen={isOpen}
          onClick={onToggle}
        />
      </h3>

      <FAQAnswer
        id={panelId}
        labelledBy={buttonId}
        answer={faq.answer}
        isOpen={isOpen}
      />
    </article>
  );
}