"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import NavbarLogo from "./NavbarLogo"
import NavbarDesktop from "./NavbarDesktop"
import NavbarMobileMenu from "./NavbarMobileMenu"
import NavbarMobileToggle from "./NavbarMobileToggle"
import { useActiveSection } from "./useActiveSection"

const LANDING_SCROLL_OFFSET = 40

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      const landingSection = document.querySelector("#landing")

      if (!(landingSection instanceof HTMLElement)) {
        setScrolled(window.scrollY > window.innerHeight)
        return
      }

      const landingBottom =
        landingSection.offsetTop +
        landingSection.offsetHeight -
        LANDING_SCROLL_OFFSET

      setScrolled(window.scrollY >= landingBottom)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const toggleMenu = () => {
    setNavbarOpen((prev) => !prev)
  }

  return (
    <header className="fixed top-2 z-50 flex w-[90%] justify-between items-center mx-auto h-16 gap-6">
      <NavbarLogo />

      <nav className="flex-1 flex items-center justify-end h-full">
        <NavbarMobileToggle
          navbarOpen={navbarOpen}
          scrolled={scrolled}
          toggleMenu={toggleMenu}
        />

        <NavbarDesktop activeSection={activeSection} onClick={closeMenu} />

        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end xl:hidden z-50"
              onClick={closeMenu}
            >
              <NavbarMobileMenu
                close={closeMenu}
                activeSection={activeSection}
                onClick={closeMenu}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}