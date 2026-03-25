export type NavbarItemData = {
  title: string
  path: `#${string}`
}

export const navbarItems: readonly NavbarItemData[] = [
  { title: "Oferta", path: "#offer" },
  { title: "Jak pomagam?", path: "#about" },
  { title: "Dotacje", path: "#grants" },
  { title: "Realizacje", path: "#realization" },
  { title: "Opinie", path: "#opinions" },
  { title: "Kontakt", path: "#contact" },
] as const