"use client";

import { motion } from "framer-motion";

export default function ContactSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl shadow-xl p-10 text-center"
    >
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        ✅ Dziękujemy!
      </h2>
      <p className="text-gray-600">
        Skontaktujemy się z Tobą najszybciej jak to możliwe. Miłego dnia! 😊
      </p>
    </motion.div>
  );
}