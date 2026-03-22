"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function NavbarLogo() {
  return (
    <motion.div
      className="bg-white/40 md:bg-white/80 backdrop-blur-lg border border-slate-300 rounded-xl shadow-md px-4 flex items-center h-full"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
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