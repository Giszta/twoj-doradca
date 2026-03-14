"use client"

import { motion, PanInfo } from "framer-motion"
import StarsRating from "./StarsRating"
import { Review } from "./types"

type Props = {
  review: Review
  onSwipeLeft: () => void
  onSwipeRight: () => void
}

export default function ReviewCard({
  review,
  onSwipeLeft,
  onSwipeRight
}: Props) {

  const swipeThreshold = 80

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {

    if (info.offset.x < -swipeThreshold) onSwipeLeft()
    if (info.offset.x > swipeThreshold) onSwipeRight()

  }

  return (

    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.3}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="cursor-grab active:cursor-grabbing bg-linear-to-br from-white to-blue-100 shadow-lg border border-blue-200 rounded-2xl p-8 max-w-2xl mx-auto"
    >

      <StarsRating />

      <p className="text-gray-700 italic mb-6 leading-relaxed">
        &quot;{review.text}&quot;
      </p>

      <div className="text-sm text-blue-600 font-medium">
        {review.date} — <span className="font-semibold">{review.author}</span>
      </div>

    </motion.div>

  )

}