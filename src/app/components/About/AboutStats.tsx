"use client";

import { motion } from "framer-motion";
import CounterCard from "./CounterCard";
import BarCounter from "./BarCounter";
import { stats } from "./stats.data";

export default function AboutStats() {
  return (
    <div className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 md:mb-12"
      >
        <h2 className="text-xl md:text-3xl font-bold mb-2 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Liczby mówią same za siebie
        </h2>
        <p className="text-gray-600 text-xs md:text-base px-4">
          Zaufało mi setki zadowolonych klientów
        </p>
      </motion.div>

      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <CounterCard
              value={stat.value}
              label={stat.label}
              Icon={stat.Icon}
              suffix={stat.suffix}
              color={stat.color}
            />
          </motion.div>
        ))}
      </div>

      <div className="md:hidden max-w-lg mx-auto space-y-3 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <BarCounter
              value={stat.value}
              maxValue={stat.maxValue}
              label={stat.label}
              Icon={stat.Icon}
              suffix={stat.suffix}
              color={stat.color}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}