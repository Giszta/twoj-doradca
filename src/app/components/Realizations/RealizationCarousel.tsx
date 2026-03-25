"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence } from "framer-motion"

import Separator from "../Separator"

import CarouselSlide from "./CarouselSlide"
import CarouselArrows from "./CarouselArrows"
import CarouselDots from "./CarouselDots"

import { realizacje } from "./realizationsData"

const AUTO_PLAY_DELAY = 4000

export default function RealizacjeCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % realizacje.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + realizacje.length) % realizacje.length)
  }, [])

  useEffect(() => {
    if (isPaused || realizacje.length === 0) return

    const interval = setInterval(nextSlide, AUTO_PLAY_DELAY)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  useEffect(() => {
    if (realizacje.length === 0) return

    const nextIndex = (current + 1) % realizacje.length
    const img = new window.Image()
    img.src = realizacje[nextIndex].src
  }, [current])

  if (realizacje.length === 0) return null

  return (
    <section id="realization">
      <Separator />

      <div
        className="w-full relative overflow-hidden bg-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Galeria realizacji"
      >
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <AnimatePresence initial={false} mode="wait">
            <CarouselSlide
              key={realizacje[current].id}
              item={realizacje[current]}
              priority={current === 0}
              onSwipeLeft={nextSlide}
              onSwipeRight={prevSlide}
            />
          </AnimatePresence>
        </div>

        <CarouselArrows next={nextSlide} prev={prevSlide} />

        <CarouselDots
          items={realizacje}
          current={current}
          onChange={setCurrent}
        />
      </div>
    </section>
  )
}