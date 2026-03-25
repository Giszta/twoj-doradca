import { useEffect, useRef, useState } from "react";

export function useMobileScroll(productsLength: number) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isAdjustingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const cardWidth = window.innerWidth * 0.75 + 16;
    const totalWidth = productsLength * cardWidth;
    const middleOffset = totalWidth;

    element.scrollLeft = middleOffset;

    const handleScroll = () => {
      if (isAdjustingRef.current) return;

      const scrollLeft = element.scrollLeft;
      const rawIndex = Math.round(scrollLeft / cardWidth);
      const index =
        ((rawIndex % productsLength) + productsLength) % productsLength;

      setActiveIndex(index);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (isAdjustingRef.current) return;

        const currentScroll = element.scrollLeft;

        if (currentScroll >= totalWidth * 2.5) {
          isAdjustingRef.current = true;
          element.scrollLeft = currentScroll - totalWidth;

          requestAnimationFrame(() => {
            isAdjustingRef.current = false;
          });
        } else if (currentScroll <= totalWidth * 0.5) {
          isAdjustingRef.current = true;
          element.scrollLeft = currentScroll + totalWidth;

          requestAnimationFrame(() => {
            isAdjustingRef.current = false;
          });
        }
      }, 150);
    };

    element.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      element.removeEventListener("scroll", handleScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [productsLength]);

  return {
    scrollRef,
    activeIndex,
  };
}