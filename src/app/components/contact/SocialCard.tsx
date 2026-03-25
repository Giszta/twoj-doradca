"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { SocialContact } from "./form/types";

type Props = {
  contact: SocialContact;
  index: number;
};

export default function SocialCard({ contact, index }: Props) {
  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        duration: 0.25,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      aria-label={`Odwiedź ${contact.alt}`}
      className="group relative flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-shadow transform-gpu will-change-transform hover:border-gray-200 hover:shadow-2xl"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${contact.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      />

      <div className="relative mb-4">
        <div
          className={`absolute inset-0 rounded-full bg-linear-to-br ${contact.gradient} opacity-20 blur-lg`}
        />
       <div className="relative w-16 h-16">
  <Image
    src={contact.img}
    alt={contact.alt}
    fill
    sizes="(max-width: 768px) 100vw, 16vw"
    className="object-contain drop-shadow-lg transition-transform duration-200 group-hover:scale-105"
    priority={index === 0}
  />
</div>
      </div>

      <h3 className="mb-1 text-center text-lg font-bold text-gray-900 md:text-xl">
        {contact.alt}
      </h3>

      <p className="mb-3 text-center text-xs font-medium text-gray-500 md:text-sm">
        {contact.platform}
      </p>

      <p className="mb-4 flex-1 text-center text-xs leading-relaxed text-gray-600 md:text-sm">
        {contact.description}
      </p>

      <div
        className={`mb-4 rounded-full bg-linear-to-r ${contact.gradient} px-3 py-1 text-center text-xs font-semibold text-white`}
      >
        {contact.stats}
      </div>

      <div className="flex items-center gap-2 text-sm font-bold text-gray-700 transition-colors group-hover:text-gray-900">
        <span>Odwiedź</span>
        <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
}