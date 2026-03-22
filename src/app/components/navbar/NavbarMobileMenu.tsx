import { motion } from "framer-motion"
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
      initial={{ x: "100%", opacity: 0.98 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 30,
        mass: 0.95,
      }}
      className="relative w-[82%] sm:w-2/5 bg-white shadow-xl p-8 flex flex-col space-y-6 border border-slate-200 rounded-l-2xl"
    >
      <ul className="flex flex-col gap-6 text-lg font-medium mt-14">
        {navbarItems.map((link) => (
          <li key={link.path}>
            <NavbarItem
              href={link.path}
              title={link.title}
              onClick={(path) => {
                onClick(path)
                close()
              }}
              isActive={activeSection === link.path}
            />
          </li>
        ))}
      </ul>

      <NavbarSocials />
    </motion.div>
  )
}