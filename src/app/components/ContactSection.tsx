"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const contacts = [
  {
    img: "/img/instagram.png",
    alt: "Instagram",
    description:
      "Zajrzyj na mój Instagram i zobacz kulisy pracy doradcy OZE, inspiracje, porady i realizacje w nowoczesnym stylu.",
    href: "https://www.instagram.com/twoj.doradca.oze/",
    color: "from-pink-500 to-purple-500",
    glow: "shadow-pink-500/70",
  },
  {
    img: "/img/facebook.png",
    alt: "Facebook",
    description:
      "Na Facebooku znajdziesz aktualności, nowinki ze świata OZE i miejsce do rozmów z innymi pasjonatami ekologii.",
    href: "https://www.facebook.com/profile.php?id=61567533345453",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/70",
  },
  {
    img: "/img/youtube.png",
    alt: "YouTube",
    description:
      "Subskrybuj YouTube, tu tłumaczę krok po kroku zagadnienia związane z fotowoltaiką i pompami ciepła.",
    href: "https://www.youtube.com/@TwojDoradcaOZE",
    color: "from-red-500 to-red-700",
    glow: "shadow-red-500/70",
  },
  {
    img: "/img/tiktok.png",
    alt: "TikTok",
    description:
      "Szybkie i dynamiczne treści edukacyjne o OZE, idealne, gdy chcesz w kilka sekund zrozumieć podstawy.",
    href: "https://www.tiktok.com/@twojdoradca",
    color: "from-fuchsia-500 to-purple-600",
    glow: "shadow-fuchsia-500/70",
  },
  {
    img: "/img/gmail.png",
    alt: "Gmail",
    description:
      "Skontaktuj się bezpośrednio mailowo, odpowiem na Twoje pytania i przygotuję indywidualną ofertę.",
    href: "mailto:Kontakt@czyste-powietrze-dotacja.pl",
    color: "from-orange-400 to-red-500",
    glow: "shadow-orange-400/70",
  },
];

export default function ContactCreative() {
  return (
    <section id="contact" className="py-20 px-6 bg-stone-100 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-black">
          Skontaktuj się ze mną
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.97,
                transition: { duration: 0.1 },
              }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 flex flex-row items-center gap-6
              bg-gradient-to-br ${contact.color} shadow-lg hover:${contact.glow} hover:shadow-2xl`}
            >
              {/* Ikona bez białego tła */}
              <div className="relative flex items-center justify-center p-2 rounded-2xl backdrop-blur-md bg-white/10 shadow-inner">
                <Image
                  src={contact.img}
                  alt={contact.alt}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Tekst */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-3">{contact.alt}</h3>
                <p className="text-md leading-relaxed text-white/90">
                  {contact.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
