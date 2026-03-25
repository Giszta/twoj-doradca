import { motion } from "framer-motion"
import FacebookIcon from "@/assets/icons/facebook.svg?react"
import InstagramIcon from "@/assets/icons/instagram.svg?react"
import YouTubeIcon from "@/assets/icons/youtube.svg?react"
import TikTokIcon from "@/assets/icons/tiktok.svg?react"
import EmailIcon from "@/assets/icons/email.svg?react"

const socials = [
  {
    href: "https://www.instagram.com/twoj.doradca.oze/",
    label: "Instagram",
    Icon: InstagramIcon,
    hover: "hover:text-pink-500",
  },
  {
    href: "https://www.youtube.com/@TwojDoradcaOZE",
    label: "YouTube",
    Icon: YouTubeIcon,
    hover: "hover:text-red-500",
  },
  {
    href: "https://www.tiktok.com/@twojdoradca",
    label: "TikTok",
    Icon: TikTokIcon,
    hover: "hover:text-black",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61567533345453",
    label: "Facebook",
    Icon: FacebookIcon,
    hover: "hover:text-blue-600",
  },
  {
    href: "mailto:Kontakt@czyste-powietrze-dotacja.pl",
    label: "Email",
    Icon: EmailIcon,
    hover: "hover:text-cyan-600",
  },
] as const

export default function NavbarSocials() {
  return (
    <div className="flex gap-5 justify-center">
      {socials.map(({ href, label, Icon, hover }) => (
        <motion.a
          key={href}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`transition-colors ${hover}`}
        >
          <Icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  )
}