"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

type Contact = {
  id: string
  img: string
  alt: string
  platform: string
  description: string
  href: string
  gradient: string
  stats: string
}
const contacts: Contact[] = [
  {
    img: "/img/instagram.png",
    alt: "Instagram",
    platform: "@twoj.doradca.oze",
    description: "Dołącz do społeczności – codzienna dawka inspiracji i kulis mojej pracy.",
    href: "https://www.instagram.com/twoj.doradca.oze/",
    gradient: "from-pink-500 via-purple-500 to-orange-500",
    stats: "3000+ obserwujących",
    id: "instagram",
  },
  {
    img: "/img/facebook.png",
    alt: "Facebook",
    platform: "Twój Doradca OZE",
    description: "Aktualne programy, zmiany w dotacjach i szybki kontakt w jednym miejscu.",
    href: "https://www.facebook.com/profile.php?id=61567533345453",
    gradient: "from-blue-600 to-blue-400",
    stats: "10000+ obserwujących",
    id: "facebook",
  },
  {
    img: "/img/youtube.png",
    alt: "YouTube",
    platform: "@TwojDoradcaOZE",
    description: "Zobacz wideo poradniki krok po kroku – praktyczne wskazówki bez teorii.",
    href: "https://www.youtube.com/@TwojDoradcaOZE",
    gradient: "from-red-600 to-red-400",
    stats: "140+ filmów",
    id: "youtube",
  },
  {
    img: "/img/tiktok.png",
    alt: "TikTok",
    platform: "@twojdoradca",
    description: "Szybkie tipy i ciekawostki o OZE w lekkiej i przystępnej formie.",
    href: "https://www.tiktok.com/@twojdoradca",
    gradient: "from-black via-gray-800 to-pink-600",
    stats: "Nowe treści codziennie",
    id: "tiktok",
  },
];

export default function SocialMediaCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {contacts.map((contact, index) => (
        <motion.a
          key={contact.id}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.03 }}
transition={{
  duration: 0.25,
  delay: index * 0.08,
  ease: "easeOut"
}}
          whileTap={{ scale: 0.97 }}
          aria-label={`Odwiedź ${contact.alt}`}
          className="group relative cursor-pointer flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow  transform-gpu will-change-transform overflow-hidden border-2 border-gray-100 hover:border-gray-200 p-6"
        >
          
          <div className={`absolute inset-0 bg-linear-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

          
          <div className="relative mb-4">
            <div className={`absolute inset-0 bg-linear-to-br ${contact.gradient} opacity-20 blur-lg rounded-full`} />
            <Image
              src={contact.img}
              alt={contact.alt}
              width={64}
              height={64}
              sizes="64px"
              priority={index === 0}
              className="relative drop-shadow-lg transition-transform group-hover:scale-105 duration-200"
            />
          </div>

          
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 text-center">
            {contact.alt}
          </h3>

          
          <p className="text-xs md:text-sm text-gray-500 font-medium mb-3 text-center">
            {contact.platform}
          </p>

          
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 text-center flex-1">
            {contact.description}
          </p>

         
          <div className={`px-3 py-1 rounded-full bg-linear-to-r ${contact.gradient} text-white text-xs font-semibold mb-4`}>
            {contact.stats}
          </div>

          
          <div className="flex items-center gap-2 text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
            <span>Odwiedź</span>
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}