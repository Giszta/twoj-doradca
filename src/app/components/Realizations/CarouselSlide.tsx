"use client"

import { motion, PanInfo } from "framer-motion"
import Image from "next/image"
import { Realization } from "./types"

type Props = {
  item: Realization
  priority?: boolean
  onSwipeLeft: () => void
  onSwipeRight: () => void
}

const SWIPE_THRESHOLD = 80

export default function CarouselSlide({
  item,
  priority,
  onSwipeLeft,
  onSwipeRight,
}: Props) {
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) onSwipeLeft()
    if (info.offset.x > SWIPE_THRESHOLD) onSwipeRight()
  }

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.3}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      aria-live="polite"
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover"
        priority={priority}
      />

      <div className="absolute bottom-6 left-6 bg-black/40 text-white px-4 py-2 rounded-xl text-sm md:text-base backdrop-blur-sm">
        {item.opis}
      </div>
    </motion.div>
  )
}