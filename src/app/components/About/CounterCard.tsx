"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "./useCountUp";
import type { IconComponent, StatColor } from "./about.types";

interface Props {
  value: number;
  label: string;
  Icon: IconComponent;
  duration?: number;
  suffix?: string;
  color?: StatColor;
}

const colorClasses: Record<StatColor, string> = {
  blue: "from-blue-500 to-cyan-400",
  purple: "from-purple-500 to-pink-400",
  green: "from-green-500 to-emerald-400",
};

export default function CounterCard({
  value,
  label,
  Icon,
  duration = 1000,
  suffix = "+",
  color = "blue",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp({ value, duration, enabled: isInView });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center">
        <div
          className={`w-16 h-16 md:w-20 md:h-20 bg-linear-to-br ${colorClasses[color]} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-md`}
        >
          <Icon className="text-2xl md:text-3xl text-white" />
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span
            className={`text-4xl md:text-5xl font-black bg-linear-to-br ${colorClasses[color]} bg-clip-text text-transparent`}
          >
            {count}
          </span>

          <span className="text-2xl md:text-3xl font-bold text-gray-400">
            {suffix}
          </span>
        </div>

        <span className="text-center text-sm md:text-base text-gray-600 font-semibold leading-tight px-2">
          {label}
        </span>
      </div>
    </motion.div>
  );
}