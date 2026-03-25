"use client";

import { motion } from "framer-motion";
import { SocialLink } from "./types";

type Props = {
  link: SocialLink;
};

export default function SocialIcon({ link }: Props) {
  const { href, Icon, hover, label } = link;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className={`transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 ${hover}`}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );
}