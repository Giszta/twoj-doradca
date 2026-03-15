"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Props {
  scrolled: boolean
}

export default function NavbarLogo({ scrolled }: Props) {
  return (
    <motion.div
      className="bg-white/40 md:bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl shadow-md px-4 flex items-center h-full"
      animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -20 : 0 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
    >
      <Image
        src="/img/logo.png"
        alt="Doradca OZE"
        width={150}
        height={60}
        className="h-full w-auto object-contain"
        priority
      />
    </motion.div>
  )
}