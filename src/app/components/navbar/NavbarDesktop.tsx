"use client"

import { motion } from "framer-motion"
import NavbarItem from "./NavbarItem"
import NavbarCTA from "./NavbarCTA"
import { navbarItems } from "./navbarData"

interface NavbarDesktopProps {
  scrolled: boolean
  activeSection: string
  onClick: (path?: string) => void
}

export default function NavbarDesktop({
  scrolled,
  activeSection,
  onClick,
}: NavbarDesktopProps) {
  return (
    <motion.div
      className="hidden lg:flex lg:w-full lg:justify-around px-4 bg-white/70 backdrop-blur-lg rounded-lg shadow-lg h-full"
      animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? 20 : 0 }}
      transition={{ duration: 0.45 }}
    >
      <ul className="flex xl:gap-8 gap-4 items-center h-full xl:text-xl text-lg">
        {navbarItems.map((link) => (
          <li key={link.path}>
            <NavbarItem
              href={link.path}
              title={link.title}
              onClick={onClick}
              isActive={activeSection === link.path}
            />
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <NavbarCTA onClick={onClick} />
      </div>
    </motion.div>
  )
}