const NAVBAR_HEIGHT = 70
const SCROLL_OFFSET = 20

export function scrollToSection(selector: string) {
  const section = document.querySelector(selector)

  if (!section) return

  const sectionPosition =
    (section as HTMLElement).getBoundingClientRect().top + window.scrollY

  window.scrollTo({
    top: sectionPosition - NAVBAR_HEIGHT - SCROLL_OFFSET,
    behavior: "smooth",
  })
}