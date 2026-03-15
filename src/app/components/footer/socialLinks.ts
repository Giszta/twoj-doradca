import FacebookIcon from "../../../assets/icons/facebook.svg?react"
import InstagramIcon from "../../../assets/icons/instagram.svg?react"
import YouTubeIcon from "../../../assets/icons/youtube.svg?react"
import TikTokIcon from "../../../assets/icons/tiktok.svg?react"
import EmailIcon from "../../../assets/icons/email.svg?react"

import { SocialLink } from "./types"

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/twoj.doradca.oze/",
    Icon: InstagramIcon,
    hover: "hover:text-pink-500",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@TwojDoradcaOZE",
    Icon: YouTubeIcon,
    hover: "hover:text-red-500",
    label: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@twojdoradca",
    Icon: TikTokIcon,
    hover: "hover:text-black",
    label: "TikTok",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61567533345453",
    Icon: FacebookIcon,
    hover: "hover:text-blue-600",
    label: "Facebook",
  },
  {
    href: "mailto:Kontakt@czyste-powietrze-dotacja.pl",
    Icon: EmailIcon,
    hover: "hover:text-cyan-600",
    label: "Email",
  },
]