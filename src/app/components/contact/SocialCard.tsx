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
      transition={{
        duration: 0.25,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.97 }}
      aria-label={`Odwiedź ${contact.alt}`}
      className="group relative cursor-pointer flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform-gpu will-change-transform overflow-hidden border-2 border-gray-100 hover:border-gray-200 p-6"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative mb-4">
        <div
          className={`absolute inset-0 bg-linear-to-br ${contact.gradient} opacity-20 blur-lg rounded-full`}
        />
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

      <div
        className={`px-3 py-1 rounded-full bg-linear-to-r ${contact.gradient} text-white text-xs font-semibold mb-4 text-center`}
      >
        {contact.stats}
      </div>

      <div className="flex items-center gap-2 text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
        <span>Odwiedź</span>
        <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.a>
  );
}