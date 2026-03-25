"use client";

import { useEffect, useState } from "react";

interface UseCountUpParams {
  value: number;
  duration?: number;
  enabled?: boolean;
}

export function useCountUp({
  value,
  duration = 1000,
  enabled = true,
}: UseCountUpParams) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let start = 0;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = window.setInterval(() => {
      start += increment;

      if (start >= value) {
        window.clearInterval(timer);
        setCount(value);
        return;
      }

      setCount(Math.ceil(start));
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [value, duration, enabled]);

  return count;
}