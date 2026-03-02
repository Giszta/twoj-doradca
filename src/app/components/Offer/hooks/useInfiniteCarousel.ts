import { useRef, useState, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

export function useInfiniteCarousel(
  productsLength: number,
  cardWidth: number
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const xPos = useRef(0);
  const targetX = useRef<number | null>(null);

  const speed = 0.5;
  const gap = 32;
  const effectiveWidth = cardWidth + gap;

  useEffect(() => {
    if (!containerRef.current) return;
    const middleOffset = productsLength * effectiveWidth;
    xPos.current = -middleOffset;
    containerRef.current.style.transform = `translateX(${xPos.current}px)`;
  }, [productsLength, effectiveWidth]);

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    const viewport = containerRef.current.parentElement;
    if (!viewport) return;
    const viewportCenter = viewport.offsetWidth / 2;

    if (isNavigating && targetX.current !== null) {
      const diff = targetX.current - xPos.current;

      if (Math.abs(diff) < 0.5) {
        xPos.current = targetX.current;
        containerRef.current.style.transform = `translateX(${xPos.current}px)`;
        targetX.current = null;
        setIsNavigating(false);
        
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 500);
        return;
      }

      xPos.current += diff * 0.12;
      containerRef.current.style.transform = `translateX(${xPos.current}px)`;
      return;
    }

    if (isPaused) return;

    xPos.current -= speed;
    containerRef.current.style.transform = `translateX(${xPos.current}px)`;

    const totalWidth = productsLength * effectiveWidth;
    const scrolled = Math.abs(xPos.current);
    
    if (scrolled >= totalWidth * 2) {
      xPos.current += totalWidth;
    }

    if (scrolled < totalWidth * 0.5) {
      xPos.current -= totalWidth;
    }

    const scrollOffset = Math.abs(xPos.current);
    const centerPosition = scrollOffset + viewportCenter;
    
    const cardIndex = Math.round((centerPosition - (effectiveWidth / 2)) / effectiveWidth);
    const index = ((cardIndex % productsLength) + productsLength) % productsLength;

    setActiveIndex(index);
  });

  const navigateToIndex = (targetIndex: number) => {
    if (!containerRef.current) return;

    const viewport = containerRef.current.parentElement;
    if (!viewport) return;
    const viewportCenter = viewport.offsetWidth / 2;

    const currentScroll = Math.abs(xPos.current);
    const currentCenter = currentScroll + viewportCenter;
    
    const currentCardIndex = Math.round((currentCenter - (effectiveWidth / 2)) / effectiveWidth);
    
    const instances: number[] = [];
    for (let copy = 0; copy < 3; copy++) {
      instances.push(copy * productsLength + targetIndex);
    }
    
    let bestInstance = instances[0];
    let minDistance = Infinity;
    
    for (const instance of instances) {
      const distance = instance - currentCardIndex;

      if (distance > 0 && distance < minDistance) {
        bestInstance = instance;
        minDistance = distance;
      } else if (distance < 0 && Math.abs(distance) < 2) {
        bestInstance = instance;
        minDistance = Math.abs(distance);
      }
    }
    
    if (minDistance === Infinity) {
      bestInstance = productsLength + targetIndex;
    }
    
    const cardCenter = bestInstance * effectiveWidth + (effectiveWidth / 2);
    const newX = -(cardCenter - viewportCenter);

    targetX.current = newX;
    setActiveIndex(targetIndex);
    setIsNavigating(true);
  };

  return {
    containerRef,
    activeIndex,
    navigateToIndex,
    setIsPaused
  };
}