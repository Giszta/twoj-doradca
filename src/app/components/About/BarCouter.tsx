"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  maxValue?: number;
  label: string;
  Icon: React.ElementType;
  duration?: number;
  suffix?: string;
  color?: "blue" | "purple" | "green";
}

export default function BarCounter({
  value,
  maxValue = 100,
  label,
  Icon,
  duration = 2000,
  suffix = "+",
  color = "blue",
}: Props) {
  const [count, setCount] = useState(0);
  const [percentage, setPercentage] = useState(0);
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
        setPercentage((value / maxValue) * 100);
      } else {
        setCount(Math.ceil(start));
        setPercentage((Math.ceil(start) / maxValue) * 100);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, maxValue, duration, isInView]);

  const colorClasses = {
    blue: {
      gradient: "from-blue-500 to-cyan-400",
      icon: "bg-blue-500",
      bar: "bg-linear-to-r from-blue-500 to-cyan-400",
      text: "text-blue-600"
    },
    purple: {
      gradient: "from-purple-500 to-pink-400",
      icon: "bg-purple-500",
      bar: "bg-linear-to-r from-purple-500 to-pink-400",
      text: "text-purple-600"
    },
    green: {
      gradient: "from-green-500 to-emerald-400",
      icon: "bg-green-500",
      bar: "bg-linear-to-r from-green-500 to-emerald-400",
      text: "text-green-600"
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-4 md:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-3 md:gap-4 mb-3">
        <div className={`w-12 h-12 md:w-14 md:h-14 ${colorClasses[color].icon} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
          <Icon className="text-xl md:text-2xl text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs md:text-sm text-gray-500 font-semibold mb-1">
            {label}
          </p>
          <div className="flex items-baseline gap-1">
            <span className={`text-2xl md:text-3xl font-black ${colorClasses[color].text}`}>
              {count}
            </span>
            <span className="text-lg md:text-xl font-bold text-gray-400">{suffix}</span>
          </div>
        </div>
      </div>

      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: duration / 1000, ease: "easeOut" }}
          className={`h-full ${colorClasses[color].bar} rounded-full shadow-sm`}
        />
      </div>
    </motion.div>
  );
}