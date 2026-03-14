"use client"

import { motion, AnimatePresence } from "framer-motion"

type Props = {
  isOpen: boolean
  answer: string
}

export default function FAQAnswer({ isOpen, answer }: Props) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
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
          <div className="pb-4 text-gray-700 leading-relaxed whitespace-normal wrap-break-word min-w-0 text-sm sm:text-base">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}