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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl">
        <motion.span
          className="inline-block mb-6 px-4 py-1 border border-white/30 rounded-full text-white text-sm md:text-base backdrop-blur-sm"
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
          Twój doradca <span className="text-blue-500">OZE</span>. <br />
          Twoja energia przyszłości.
        </motion.h1>

        <motion.p
          className="mt-6 text-white/90 text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Zainwestuj w niezależność energetyczną. Pomagam dobrać najlepsze
          rozwiązania – od fotowoltaiki po pompy ciepła i dotacje.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-white font-semibold shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all text-center"
          >
            Skontaktuj się
          </a>
          <a
            href="#offer"
            className="px-8 py-3 rounded-full bg-white/20 border border-white text-white font-semibold hover:bg-white/30 transition text-center"
          >
            Zobacz ofertę
          </a>
        </motion.div>
      </div>
    </section>
  );
}
