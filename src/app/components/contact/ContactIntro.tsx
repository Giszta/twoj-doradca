"use client";

import { motion } from "framer-motion";

export default function ContactIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center lg:text-left"
    >
      <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 mb-6">
        Masz pytania? <br /> Zrób pierwszy krok do oszczędności!
      </h2>

      <p className="text-lg text-gray-600 mb-6">
        Wypełnij prosty formularz – przygotuję indywidualną ofertę, doradzę
        najlepsze rozwiązania i podpowiem, jak uzyskać dotacje.
      </p>

      <p className="text-lg text-gray-700 font-medium">
        To nic nie kosztuje, a możesz zyskać realne oszczędności i komfort na lata.
      </p>
    </motion.div>
  );
}