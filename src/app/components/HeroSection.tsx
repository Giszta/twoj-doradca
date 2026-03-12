"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover overflow-hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        Twoja przeglądarka nie wspiera elementu video.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80"></div>

      {/* Content */}
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
          <span className="text-2xl md:text-3xl">Pomagam jej uniknąć!</span> <br />
          <br />
          Dobieram najlepsze rozwiązania, dopasowane do Twojej sytuacji i potrzeb. Zajmuję się formalnościami, a Ty cieszysz się czystą energią i oszczędnościami.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-5 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#contact"
            className=" px-8 py-3 rounded-full text-white font-semibold shadow-md hover:shadow-lg bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all text-center"
          >
            Sprawdź czy to ma sens w Twoim domu
          </a>
          
        </motion.div>

        <motion.span
          className="inline-block mt-5 md:mt-20 px-4 py-1 border border-white/30 rounded-full text-white text-xs md:text-base backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bezpłatnie | bez zobowiązań | 100% satysfakcji
        </motion.span>
      </div>
    </section>
  );
}
