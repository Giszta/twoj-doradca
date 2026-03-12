import { FaArrowRight } from "react-icons/fa"

export default function SocialFooter() {
  return (
    <div className="flex items-center gap-2 text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
      <span>Odwiedź</span>
      <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </div>
  )
}