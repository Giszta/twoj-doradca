"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Step } from "./about.types";

interface Props {
  step: Step;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export default function StepCard({ step, index, isActive, onClick }: Props) {
  const colorClass =
    step.color === "blue"
      ? "from-blue-500 to-blue-600"
      : "from-cyan-500 to-cyan-600";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isActive}
      className={`
        relative w-full text-left bg-white rounded-xl shadow-sm transition-all cursor-pointer
        p-4 md:p-5 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200
        ${
          isActive
            ? "shadow-xl border-2 border-blue-400 ring-4 ring-blue-200"
            : "border-2 border-transparent hover:shadow-md hover:border-blue-200"
        }
      `}
    >
      {isActive && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1 z-10"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <span className="hidden sm:inline">TERAZ</span>
        </motion.div>
      )}

      <div className="flex gap-3 md:gap-4 items-start">
        <motion.div
          animate={isActive ? { scale: [1, 1.1, 1] } : undefined}
          transition={{
            duration: 0.5,
            repeat: isActive ? Infinity : 0,
            repeatDelay: 1,
          }}
          className={`
            w-12 h-12 md:w-14 md:h-14
            bg-linear-to-br ${colorClass}
            rounded-xl flex items-center justify-center
            shrink-0 shadow-md
            ${isActive ? "shadow-blue-300" : ""}
          `}
        >
          <step.icon className="text-xl md:text-2xl text-white" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            KROK {index + 1}
          </span>
          <h4
            className={`
              text-base md:text-lg font-bold mb-1
              ${isActive ? "text-blue-600" : "text-gray-900"}
            `}
          >
            {step.title}
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 md:line-clamp-none">
            {step.text}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          className="hidden md:block shrink-0"
          aria-hidden="true"
        >
          <FaArrowRight className="text-blue-500" />
        </motion.div>
      </div>

      {isActive && (
        <div className="absolute inset-0 bg-blue-50 opacity-20 rounded-xl animate-pulse pointer-events-none" />
      )}
    </motion.button>
  );
}