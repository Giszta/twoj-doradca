"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  id: string;
  labelledBy: string;
  isOpen: boolean;
  answer: string;
};

export default function FAQAnswer({
  id,
  labelledBy,
  isOpen,
  answer,
}: Props) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={id}
          role="region"
          aria-labelledby={labelledBy}
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
          <div className="min-w-0 pb-4 text-sm leading-relaxed text-gray-700 wrap-break-words whitespace-normal sm:text-base">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}