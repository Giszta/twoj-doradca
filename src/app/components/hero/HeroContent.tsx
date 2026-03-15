"use client"

import { motion } from "framer-motion"
import HeroCTA from "./HeroCTA"

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-6xl">

      <motion.span
        className="inline-block mb-6 px-4 py-1 border border-white/30 rounded-full text-white text-xs md:text-base backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Doradztwo | Pompy ciepła | Fotowoltaika
      </motion.span>

      <motion.h1
        className="text-3xl md:text-6xl font-extrabold text-white leading-snug drop-shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Zła decyzja w <span className="text-blue-500">OZE</span> <br />
        Kosztuje dziesiątki tysięcy złotych.
      </motion.h1>

      <motion.p
        className="mt-6 text-white/90 text-sm md:text-lg max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <span className="text-2xl md:text-3xl">
          Pomagam jej uniknąć!
        </span>
        <br />
        <br />
        Dobieram najlepsze rozwiązania dopasowane do Twojej sytuacji i potrzeb.
        Zajmuję się formalnościami, a Ty cieszysz się czystą energią i
        oszczędnościami.
      </motion.p>

      <HeroCTA />

      <motion.span
        className="inline-block mt-5 md:mt-20 px-4 py-1 border border-white/30 rounded-full text-white text-xs md:text-base backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Bezpłatnie | bez zobowiązań | 100% satysfakcji
      </motion.span>

    </div>
  )
}