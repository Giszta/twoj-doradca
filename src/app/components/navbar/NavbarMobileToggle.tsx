"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Bars3Icon } from "@heroicons/react/24/solid"

interface Props {
  navbarOpen: boolean
  scrolled: boolean
  openMenu: () => void
}

export default function NavbarMobileToggle({
  navbarOpen,
  scrolled,
  openMenu,
}: Props) {
  return (
    <div className="block lg:hidden relative z-50">
      <AnimatePresence>

        {/* BURGER BUTTON */}
        {!navbarOpen && !scrolled && (
          <motion.button
            key="burger"
            onClick={openMenu}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            aria-label="Otwórz menu"
            className="flex items-center px-3 py-2 rounded-lg bg-white/40 text-white border border-white/40 shadow-sm backdrop-blur-md"
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </motion.button>
        )}

        {/* ARROW BUTTON WHEN SCROLLED */}
        {!navbarOpen && scrolled && (
          <motion.button
            key="arrow"
            onClick={openMenu}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35 }}
            aria-label="Otwórz menu"
            className="fixed top-1/2 right-0 -translate-y-1/2 flex items-center justify-center h-12 w-8
                       bg-white/50 backdrop-blur-xl border border-white/30 shadow-md hover:shadow-lg transition-all group"
            style={{
              borderTopLeftRadius: 9999,
              borderBottomLeftRadius: 9999,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#arrowGradient)"
              strokeWidth="2.4"
              className="h-6 w-6 transition-transform group-hover:-translate-x-0.5"
            >
              <defs>
                <linearGradient
                  id="arrowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              <path
                d="M15 6 L9 12 L15 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}