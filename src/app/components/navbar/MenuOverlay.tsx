import React from "react"
import NavbarItem from "./NavbarItem"
import type { NavbarItemData } from "./navbarData"

type MenuOverlayProps = {
  links: readonly NavbarItemData[]
  activeSection: string
  onItemClick: (path?: string) => void
}

const MenuOverlay = React.memo(
  ({ links, activeSection, onItemClick }: MenuOverlayProps) => {
    return (
      <ul
        className="flex flex-col gap-6 text-lg font-medium mt-14"
        aria-label="Menu nawigacyjne"
      >
        {links.map((link) => (
          <li key={link.path}>
            <NavbarItem
              href={link.path}
              title={link.title}
              onClick={onItemClick}
              isActive={activeSection === link.path}
            />
          </li>
        ))}
      </ul>
    )
  }
)

MenuOverlay.displayName = "MenuOverlay"

export default MenuOverlay