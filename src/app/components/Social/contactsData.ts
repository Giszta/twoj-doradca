import { Contact } from "./types"

export const contacts: Contact[] = [
  {
    id: "instagram",
    img: "/img/instagram.png",
    alt: "Instagram",
    platform: "@twoj.doradca.oze",
    description: "Dołącz do społeczności – codzienna dawka inspiracji i kulis mojej pracy.",
    href: "https://www.instagram.com/twoj.doradca.oze/",
    gradient: "from-pink-500 via-purple-500 to-orange-500",
    stats: "3000+ obserwujących",
  },
  {
    id: "facebook",
    img: "/img/facebook.png",
    alt: "Facebook",
    platform: "Twój Doradca OZE",
    description: "Aktualne programy, zmiany w dotacjach i szybki kontakt w jednym miejscu.",
    href: "https://www.facebook.com/profile.php?id=61567533345453",
    gradient: "from-blue-600 to-blue-400",
    stats: "10000+ obserwujących",
  },
  {
    id: "youtube",
    img: "/img/youtube.png",
    alt: "YouTube",
    platform: "@TwojDoradcaOZE",
    description: "Zobacz wideo poradniki krok po kroku – praktyczne wskazówki bez teorii.",
    href: "https://www.youtube.com/@TwojDoradcaOZE",
    gradient: "from-red-600 to-red-400",
    stats: "140+ filmów",
  },
  {
    id: "tiktok",
    img: "/img/tiktok.png",
    alt: "TikTok",
    platform: "@twojdoradca",
    description: "Szybkie tipy i ciekawostki o OZE w lekkiej i przystępnej formie.",
    href: "https://www.tiktok.com/@twojdoradca",
    gradient: "from-black via-gray-800 to-pink-600",
    stats: "Nowe treści codziennie",
  },
]