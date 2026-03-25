import { useEffect, useState } from "react"
import { navbarItems } from "./navbarData"

const NAVBAR_OFFSET = 140

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = navbarItems
      .map((item) => document.querySelector(item.path))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    if (!sections.length) return

    const updateActiveSection = () => {
      const currentScroll = window.scrollY + NAVBAR_OFFSET

      const firstSectionTop = sections[0]?.offsetTop ?? 0
      if (currentScroll < firstSectionTop) {
        setActiveSection("")
        return
      }

      let nextActiveSection = ""

      for (const section of sections) {
        if (section.offsetTop <= currentScroll) {
          nextActiveSection = `#${section.id}`
        }
      }

      setActiveSection(nextActiveSection)
    }

    updateActiveSection()

    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return activeSection
}