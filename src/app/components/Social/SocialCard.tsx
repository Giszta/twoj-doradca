"use client"

import { motion } from "framer-motion"
import { Contact } from "./types"

import SocialIcon from "./SocialIcon"
import SocialStats from "./SocialStats"
import SocialFooter from "./SocialFooter"

type Props = {
  contact: Contact
  index: number
}

export default function SocialCard({ contact, index }: Props) {
  return (
    <motion.a
      key={contact.id}
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Odwiedź ${contact.alt}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        duration: 0.25,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="group relative cursor-pointer flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow transform-gpu will-change-transform overflow-hidden border-2 border-gray-100 hover:border-gray-200 p-6"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <SocialIcon contact={contact} priority={index === 0} />

      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 text-center">
        {contact.alt}
      </h3>

      <p className="text-xs md:text-sm text-gray-500 font-medium mb-3 text-center">
        {contact.platform}
      </p>

      <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 text-center flex-1">
        {contact.description}
      </p>

      <SocialStats stats={contact.stats} gradient={contact.gradient} />

      <SocialFooter />
    </motion.a>
  )
}