import { useEffect, useRef, useState } from "react";

export function useMobileScroll(productsLength: number) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isAdjustingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = window.innerWidth * 0.75 + 16;
    const totalWidth = productsLength * cardWidth;

    const middleOffset = totalWidth;
    el.scrollLeft = middleOffset;

    const handleScroll = () => {
      if (isAdjustingRef.current) return;

      const scrollLeft = el.scrollLeft;


      const rawIndex = Math.round(scrollLeft / cardWidth);
      const index = ((rawIndex % productsLength) + productsLength) % productsLength;
      setActiveIndex(index);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (isAdjustingRef.current) return;

        const currentScroll = el.scrollLeft;
        
        if (currentScroll >= totalWidth * 2.5) {
          isAdjustingRef.current = true;
          el.scrollLeft = currentScroll - totalWidth;
          requestAnimationFrame(() => {
            isAdjustingRef.current = false;
          });
        }

        else if (currentScroll <= totalWidth * 0.5) {
          isAdjustingRef.current = true;
          el.scrollLeft = currentScroll + totalWidth;
          requestAnimationFrame(() => {
            isAdjustingRef.current = false;
          });
        }
      }, 150);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [productsLength]);

  return {
    scrollRef,
    activeIndex
  };
}