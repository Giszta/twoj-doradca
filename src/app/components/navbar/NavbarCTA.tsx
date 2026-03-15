import { motion } from "framer-motion"

interface Props {
  onClick: (path?: string) => void
}

export default function NavbarCTA({ onClick }: Props) {
  return (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick("#contact")}
      className="px-3 xl:px-6 py-2 rounded-full text-white text-lg xl:text-xl font-semibold shadow-md hover:shadow-lg bg-linear-to-r from-blue-600 to-cyan-500"
    >
      Bezpłatna konsultacja
    </motion.a>
  )
}