"use client"

import { motion } from "framer-motion"
import NavbarItem from "./NavbarItem"
import NavbarCTA from "./NavbarCTA"
import { navbarItems } from "./navbarData"

interface NavbarDesktopProps {
  activeSection: string
  onClick: (path?: string) => void
}

export default function NavbarDesktop({
  activeSection,
  onClick,
}: NavbarDesktopProps) {
  return (
    <motion.div
      className="hidden lg:flex lg:w-full lg:justify-around px-4 bg-white/70 backdrop-blur-lg rounded-lg border border-slate-300 shadow-lg h-full"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
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