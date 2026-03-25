"use client";

import HeroVideo from "./HeroVideo";
import HeroOverlay from "./HeroOverlay";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="landing"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden"
    >
      <HeroVideo />
      <HeroOverlay />
      <HeroContent />
    </section>
  );
}