"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

import Separator from "../Separator"
import ReviewCard from "./ReviewCard"
import OpinionsDots from "./OpinionsDots"

import { reviews } from "./reviewsData"

export default function Opinions() {

  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {

    if (isPaused) return

    const interval = setInterval(() => {
      nextReview()
    }, 5000)

    return () => clearInterval(interval)

  }, [isPaused])

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