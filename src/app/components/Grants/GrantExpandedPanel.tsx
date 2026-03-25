import { motion, AnimatePresence } from "framer-motion";
import { RefObject } from "react";
import { FaArrowRight } from "react-icons/fa";

interface GrantExpandedPanelProps {
  isExpanded: boolean;
  requirements: string[];
  expandedRef: RefObject<HTMLDivElement | null>;
}

export default function GrantExpandedPanel({
  isExpanded,
  requirements,
  expandedRef
}: GrantExpandedPanelProps) {
  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          ref={expandedRef}
          id="grant-panel"
          role="region"
          aria-label="Szczeg programu"
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200 shadow-lg">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FaArrowRight className="text-blue-600" />
              Wymagania do spełnienia:
            </h4>

            <ul className="space-y-2">
              {requirements.map((req: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}