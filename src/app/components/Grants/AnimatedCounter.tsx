"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number;
};

export default function AnimatedCounter({ value, duration = 1000 }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        let startTime: number | null = null;

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;

          const progress = Math.min((timestamp - startTime) / duration, 1);
          const current = Math.floor(progress * value);

          setCount(current);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(el);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="text-2xl md:text-4xl font-black text-green-600">
      {count.toLocaleString()} zł
    </span>
  );
}