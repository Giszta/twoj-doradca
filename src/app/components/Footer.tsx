"use client";
import React from "react";

import { motion } from "framer-motion";
import FacebookIcon from "../../assets/icons/facebook.svg?react";
import InstagramIcon from "../../assets/icons/instagram.svg?react";
import YouTubeIcon from "../../assets/icons/youtube.svg?react";
import TikTokIcon from "../../assets/icons/tiktok.svg?react";
import EmailIcon from "../../assets/icons/email.svg?react";


function getDate() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="relative w-full mt-10 bottom-2">
      {/* Gradientowa linia */}


      <div className="w-[92%] mx-auto flex flex-col md:flex-row items-center justify-between bg-white/70 backdrop-blur-lg rounded-lg shadow-lg px-6 py-4 mt-2">
        {/* Copy + tagline */}
        
          <p className="text-xs text-gray-600">
            © {getDate()} Twój Doradca OZE. Wszystkie prawa zastrzeżone.
          </p>
         
        
 <p className="text-sm font-medium text-gray-800 mt-1 text-center">
            Tworzę nowoczesne rozwiązania dla czystej przyszłości 🌍
          </p>
        {/* Ikony */}
        <div className="flex gap-5 mt-3 md:mt-0">
          {[
            {
              href: "https://www.instagram.com/twoj.doradca.oze/",
              Icon: InstagramIcon,
              hover: "hover:text-pink-500",
            },
            {
              href: "https://www.youtube.com/@TwojDoradcaOZE",
              Icon: YouTubeIcon,
              hover: "hover:text-red-500",
            },
            {
              href: "https://www.tiktok.com/@twojdoradca",
              Icon: TikTokIcon,
              hover: "hover:text-black",
            },
            {
              href: "https://www.facebook.com/profile.php?id=61567533345453",
              Icon: FacebookIcon,
              hover: "hover:text-blue-600",
            },
            {
              href: "mailto:Kontakt@czyste-powietrze-dotacja.pl",
              Icon: EmailIcon,
              hover: "hover:text-cyan-600",
            },
          ].map(({ href, Icon, hover }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-colors duration-300 ${hover}`}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
