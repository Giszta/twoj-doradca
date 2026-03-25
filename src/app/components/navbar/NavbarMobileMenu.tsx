import { motion } from "framer-motion"
import MenuOverlay from "./MenuOverlay"
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
  const handleItemClick = (path?: string) => {
    onClick(path)
    close()
  }

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
      onClick={(e) => e.stopPropagation()}
      className="relative w-[82%] sm:w-2/5 bg-white shadow-xl p-8 flex flex-col space-y-6 border border-slate-200 rounded-l-2xl"
      aria-label="Menu mobilne"
    >
      <MenuOverlay
        links={navbarItems}
        activeSection={activeSection}
        onItemClick={handleItemClick}
      />

      <NavbarSocials />
    </motion.div>
  )
}