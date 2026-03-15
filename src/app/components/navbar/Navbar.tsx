"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

import NavbarLogo from "./NavbarLogo"
import NavbarDesktop from "./NavbarDesktop"
import NavbarMobileMenu from "./NavbarMobileMenu"
import NavbarMobileToggle from "./NavbarMobileToggle"

import { useActiveSection } from "./useActiveSection"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const activeSection = useActiveSection()

  const handleNavItemClick = () => {
    setNavbarOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-2 z-50 flex w-[90%] justify-between items-center mx-auto h-16 gap-6">


      <NavbarLogo scrolled={scrolled} />

      <nav className="flex-1 flex items-center justify-end h-full">


        <NavbarMobileToggle
          navbarOpen={navbarOpen}
          scrolled={scrolled}
          openMenu={() => setNavbarOpen(true)}
        />


        <NavbarDesktop
          scrolled={scrolled}
          activeSection={activeSection}
          onClick={handleNavItemClick}
        />


        <AnimatePresence>
          {navbarOpen && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end xl:hidden z-50">
              <NavbarMobileMenu
                close={() => setNavbarOpen(false)}
                activeSection={activeSection}
                onClick={handleNavItemClick}
              />
            </div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  )
}