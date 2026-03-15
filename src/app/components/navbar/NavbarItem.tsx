"use client"

import React from "react"
import { motion } from "framer-motion"

interface NavbarItemProps {
  href: string
  title: string
  onClick?: (href?: string) => void
  isActive?: boolean
}

export default function NavbarItem({
  href,
  title,
  onClick,
  isActive,
}: NavbarItemProps) {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (onClick) onClick(href)

    requestAnimationFrame(() => {
      const section = document.querySelector(href)

      if (!section) return

      const navbarHeight = 70
      const offset = 20

      const sectionPosition =
        (section as HTMLElement).getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: sectionPosition - navbarHeight - offset,
        behavior: "smooth",
      })
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
        className={`block py-2 transition-colors ${
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {title}

        <span
          className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </a>
    </motion.div>
  )
}