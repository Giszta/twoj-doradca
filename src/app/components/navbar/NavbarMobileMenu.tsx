import { motion } from "framer-motion"
import { XMarkIcon } from "@heroicons/react/24/solid"
import NavbarItem from "./NavbarItem"
import NavbarSocials from "./NavbarSocials"
import { navbarItems } from "./navbarData"

interface Props {
  close: () => void
  activeSection: string
  onClick: (path?: string) => void
}

export default function NavbarMobileMenu({
  close,
  activeSection,
  onClick,
}: Props) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4 }}
      className="relative w-3/4 sm:w-2/5 bg-white shadow-xl p-8 flex flex-col space-y-6"
    >
      <button
        onClick={close}
        className="absolute top-4 right-4 p-2 text-gray-600"
      >
        <XMarkIcon className="h-7 w-7" />
      </button>

      <ul className="flex flex-col gap-6 text-lg font-medium mt-10">
        {navbarItems.map((link) => (
          <li key={link.path}>
            <NavbarItem
              href={link.path}
              title={link.title}
              onClick={onClick}
              isActive={activeSection === link.path}
            />
          </li>
        ))}
      </ul>

      <NavbarSocials />
    </motion.div>
  )
}