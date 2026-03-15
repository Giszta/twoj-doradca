import { useEffect, useState } from "react"
import { navbarItems } from "./navbarData"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = navbarItems
      .map((item) => document.querySelector(item.path))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: [0.5] }
    )

    sections.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  return activeSection
}