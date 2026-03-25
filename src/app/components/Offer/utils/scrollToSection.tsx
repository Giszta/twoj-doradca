const NAVBAR_HEIGHT = 80;
const OFFSET = 20;

export function scrollToSection(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: y - NAVBAR_HEIGHT - OFFSET,
    behavior: "smooth"
  });
}