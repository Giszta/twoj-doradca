"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  label: string;
  Icon: React.ElementType;
  duration?: number;
  suffix?: string;
  color?: "blue" | "purple" | "green";
}

export default function CounterCard({
  value,
  label,
  Icon,
  duration = 1000,
  suffix = "+",
  color = "blue",
}: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  const colorClasses = {
    blue: "from-blue-500 to-cyan-400",
    purple: "from-purple-500 to-pink-400",
    green: "from-green-500 to-emerald-400",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center">
        <div className={`w-16 h-16 md:w-20 md:h-20 bg-linear-to-br ${colorClasses[color]} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-md`}>
          <Icon className="text-2xl md:text-3xl text-white" />
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className={`text-4xl md:text-5xl font-black bg-linear-to-br ${colorClasses[color]} bg-clip-text text-transparent`}>
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