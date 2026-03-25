"use client"

import React from "react"
import { motion } from "framer-motion"
import { scrollToSection } from "./scrollToSection"

interface Props {
  onClick: (path?: string) => void
}

export default function NavbarCTA({ onClick }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    onClick("#contact")

    requestAnimationFrame(() => {
      scrollToSection("#contact")
    })
  }

  return (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="px-3 xl:px-6 py-2 rounded-full text-white text-lg xl:text-xl font-semibold shadow-md hover:shadow-lg bg-linear-to-r from-blue-600 to-cyan-500"
    >
      Bezpłatna konsultacja
    </motion.a>
  )
}