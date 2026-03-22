"use client"

import { motion } from "framer-motion"

interface Props {
  navbarOpen: boolean
  scrolled: boolean
  toggleMenu: () => void
}

export default function NavbarMobileToggle({
  navbarOpen,
  scrolled,
  toggleMenu,
}: Props) {
  return (
    <motion.div
      className="block lg:hidden relative z-[60]"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <button
        onClick={toggleMenu}
        aria-label={navbarOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={navbarOpen}
        className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/40 md:bg-white/80 backdrop-blur-lg transition-all duration-300 ${
          navbarOpen ? "border border-transparent shadow-none" : "border border-slate-300 shadow-md"
        }`}
      >
        <span className="sr-only">
          {navbarOpen ? "Zamknij menu" : "Otwórz menu"}
        </span>

        <motion.span
          className="absolute h-0.5 w-5 rounded-full"
          initial={false}
          animate={{
            rotate: navbarOpen ? 45 : 0,
            y: navbarOpen ? 0 : -6,
            backgroundColor: navbarOpen || scrolled ? "#0f172a" : "#ffffff",
          }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
        />

        <motion.span
          className="absolute h-0.5 w-5 rounded-full"
          initial={false}
          animate={{
            opacity: navbarOpen ? 0 : 1,
            scaleX: navbarOpen ? 0.2 : 1,
            backgroundColor: scrolled ? "#0f172a" : "#ffffff",
          }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        />

        <motion.span
          className="absolute h-0.5 w-5 rounded-full"
          initial={false}
          animate={{
            rotate: navbarOpen ? -45 : 0,
            y: navbarOpen ? 0 : 6,
            backgroundColor: navbarOpen || scrolled ? "#0f172a" : "#ffffff",
          }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
        />
      </button>
    </motion.div>
  )
}