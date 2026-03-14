"use client"

import { useState, useEffect} from "react"
import { AnimatePresence } from "framer-motion"

import Separator from "../Separator"

import CarouselSlide from "./CarouselSlide"
import CarouselArrows from "./CarouselArrows"
import CarouselDots from "./CarouselDots"

import { realizacje } from "./realizationsData"

export default function RealizacjeCarousel() {

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % realizacje.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + realizacje.length) % realizacje.length)
  }

  useEffect(() => {

    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)

  }, [isPaused])

  useEffect(() => {

    const nextIndex = (current + 1) % realizacje.length
    const img = new window.Image()
    img.src = realizacje[nextIndex].src

  }, [current])

  return (
    <section id="realization">

      <Separator />

      <div
        className="w-full relative overflow-hidden bg-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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

        <CarouselArrows
          next={nextSlide}
          prev={prevSlide}
        />

        <CarouselDots
          items={realizacje}
          current={current}
        />

      </div>

    </section>
  )
}