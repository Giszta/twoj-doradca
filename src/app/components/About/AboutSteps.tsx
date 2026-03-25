"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import StepCard from "./StepCard";
import { steps } from "./steps.data";

interface Props {
  activeStep: number;
  onStepClick: (index: number) => void;
}

export default function AboutSteps({ activeStep, onStepClick }: Props) {
  const mobileCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const activeCard = mobileCardsRef.current[activeStep];
    const scrollContainer = mobileScrollRef.current;

    if (!activeCard || !scrollContainer) return;

    const cardLeft = activeCard.offsetLeft;
    const cardWidth = activeCard.offsetWidth;
    const containerWidth = scrollContainer.clientWidth;

    const targetLeft = cardLeft - (containerWidth - cardWidth) / 2;

    scrollContainer.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeStep]);

  return (
    <div>
      <div className="hidden md:block space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <StepCard
              step={step}
              index={i}
              isActive={activeStep === i}
              onClick={() => onStepClick(i)}
            />
          </motion.div>
        ))}
      </div>

      <div className="md:hidden">
        <div
          ref={mobileScrollRef}
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pt-4 -mx-6 px-6"
        >
          <div className="flex gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                ref={(element) => {
                  mobileCardsRef.current[i] = element;
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="snap-center w-[85vw] max-w-[85vw] shrink-0"
              >
                <StepCard
                  step={step}
                  index={i}
                  isActive={activeStep === i}
                  onClick={() => onStepClick(i)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {steps.map((step, i) => (
            <button
              key={step.title}
              type="button"
              onClick={() => onStepClick(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeStep
                  ? "w-8 bg-blue-500"
                  : "w-2 bg-gray-300 active:scale-125"
              }`}
              aria-label={`Przejdź do kroku ${i + 1}`}
              aria-pressed={i === activeStep}
            />
          ))}
        </div>

        <div className="text-center mt-2 text-xs font-semibold text-gray-500">
          {activeStep + 1} / {steps.length}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hidden md:block mt-8 p-6 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
      >
        <p className="text-gray-700 leading-relaxed">
          💡 <strong>Dzięki temu procesowi</strong> masz pewność, że inwestujesz
          świadomie i zyskujesz realne oszczędności – bez stresu i bez
          przepłacania.
        </p>
      </motion.div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}