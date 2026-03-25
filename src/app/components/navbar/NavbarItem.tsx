"use client"

import React from "react"
import { motion } from "framer-motion"
import { scrollToSection } from "./scrollToSection"

interface NavbarItemProps {
  href: `#${string}`
  title: string
  onClick?: (href?: string) => void
  isActive?: boolean
}

export default function NavbarItem({
  href,
  title,
  onClick,
  isActive = false,
}: NavbarItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    onClick?.(href)

    requestAnimationFrame(() => {
      scrollToSection(href)
    })
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className="relative group"
    >
      <a
        href={href}
        onClick={handleClick}
        aria-current={isActive ? "page" : undefined}
        className={`block py-2 transition-colors ${
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {title}

        <span
          aria-hidden="true"
          className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </a>
    </motion.div>
  )
}