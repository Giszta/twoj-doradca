"use client";

import { motion } from "framer-motion";

export default function HeroCTA() {
  const handleScroll = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      className="mt-5 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <button
        onClick={handleScroll}
        className="px-8 py-3 rounded-full text-white font-semibold shadow-md hover:shadow-lg bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        Sprawdź czy to ma sens w Twoim domu
      </button>
    </motion.div>
  );
}