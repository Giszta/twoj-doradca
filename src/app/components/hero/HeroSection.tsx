"use client"

import HeroVideo from "./HeroVideo"
import HeroOverlay from "./HeroOverlay"
import HeroContent from "./HeroContent"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <HeroVideo />
      <HeroOverlay />
      <HeroContent />
    </section>
  )
}