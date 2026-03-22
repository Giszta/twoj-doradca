"use client";

import { useEffect, useRef } from "react";
import HeroVideo from "./HeroVideo";
import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateScrollbarVisibility = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isHeroVisible = rect.bottom > 0;

      document.documentElement.classList.toggle(
        "hero-scroll-hidden",
        isHeroVisible
      );
    };

    updateScrollbarVisibility();

    window.addEventListener("scroll", updateScrollbarVisibility, { passive: true });
    window.addEventListener("resize", updateScrollbarVisibility);

    return () => {
      window.removeEventListener("scroll", updateScrollbarVisibility);
      window.removeEventListener("resize", updateScrollbarVisibility);
      document.documentElement.classList.remove("hero-scroll-hidden");
    };
  }, []);

  return (
    <section
      id="landing"
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <HeroVideo />
      <HeroOverlay />
      <HeroContent />
    </section>
  );
}