"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence } from "framer-motion"

import Separator from "../Separator"
import ReviewCard from "./ReviewCard"
import OpinionsDots from "./OpinionsDots"

import { reviews } from "./reviewsData"

const AUTO_PLAY_DELAY = 5000

export default function Opinions() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextReview = useCallback(() => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }, [])

  const prevReview = useCallback(() => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  useEffect(() => {
    if (isPaused || reviews.length === 0) return

    const interval = setInterval(nextReview, AUTO_PLAY_DELAY)

    return () => clearInterval(interval)
  }, [isPaused, nextReview])

  if (reviews.length === 0) return null

  const review = reviews[index]

  return (
    <section id="opinions" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <Separator />

        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <ReviewCard
              key={index}
              review={review}
              onSwipeLeft={nextReview}
              onSwipeRight={prevReview}
            />
          </AnimatePresence>
        </div>

        <OpinionsDots
          total={reviews.length}
          current={index}
          onChange={setIndex}
        />
      </div>
    </section>
  )
}