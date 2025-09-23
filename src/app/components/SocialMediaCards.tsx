"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const contacts = [
  {
    img: "/img/instagram.png",
    alt: "Instagram",
    description: "Dołącz do społeczności – codzienna dawka inspiracji i kulis mojej pracy.",
    href: "https://www.instagram.com/twoj.doradca.oze/",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    img: "/img/facebook.png",
    alt: "Facebook",
    description: "Aktualne programy, zmiany w dotacjach i szybki kontakt w jednym miejscu.",
    href: "https://www.facebook.com/profile.php?id=61567533345453",
    gradient: "from-blue-600 to-blue-500",
  },
  {
    img: "/img/youtube.png",
    alt: "YouTube",
    description: "Zobacz wideo poradniki krok po kroku – praktyczne wskazówki bez teorii.",
    href: "https://www.youtube.com/@TwojDoradcaOZE",
    gradient: "from-red-600 to-red-500",
  },
  {
    img: "/img/tiktok.png",
    alt: "TikTok",
    description: "Szybkie tipy i ciekawostki o OZE w lekkiej i przystępnej formie.",
    href: "https://www.tiktok.com/@twojdoradca",
    gradient: "from-black to-pink-600",
  },
  {
    img: "/img/gmail.png",
    alt: "Email",
    description: "Masz pytania? Napisz – odpowiadam szybko i konkretnie.",
    href: "mailto:Kontakt@czyste-powietrze-dotacja.pl",
    gradient: "from-orange-600 to-red-500",
  },
];

export default function SocialMediaCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      {contacts.map((contact, index) => (
        <motion.a
          key={index}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative flex gap-4 pt-8 px-8 rounded-2xl shadow-xl bg-white overflow-hidden"
        >
          {/* Gradient bar */}
          <div
            className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${contact.gradient}`}
          />
          {/* Ikona */}
          <div className="relative z-10">
            <Image
              src={contact.img}
              alt={contact.alt}
              width={80}
              height={80}
              className="drop-shadow-xl"
            />
          </div>
          {/* Tekst */}
          <div className="flex-1 text-left z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.alt}</h3>
            <p className="text-gray-600 text-sm">{contact.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
