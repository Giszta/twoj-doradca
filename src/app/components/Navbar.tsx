"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItem from "./NavbarItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navbarItem = [
  { title: "Oferta", path: "#offer" },
  { title: "O mnie", path: "#about" },
  { title: "Dotacje", path: "#grants" },
  { title: "Realizacje", path: "#realization" },
  { title: "Opinie", path: "#opinions" },
  { title: "Kontakt", path: "#contact" },
];

export default function Navbar () {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleItemClick = () => setNavbarOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarOpen]);

  return (
    <header className="fixed top-2 z-50 flex w-[90%] items-center justify-between  mx-auto h-16 gap-6">

      <div className="bg-white/70 backdrop-blur-lg rounded-lg shadow-lg px-4 flex items-center h-full">
        <motion.div
          className="h-full flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/img/logo.png"
            alt="Doradca OZE"
            width={140}
            height={56}
            className="h-full w-auto flex items-center object-contain"
            priority
          />
        </motion.div>
      </div>

      <nav className="flex-1 flex items-center h-full w-full" aria-label="Główna nawigacja">

        <div className="block md:hidden">
          <motion.button
            onClick={() => setNavbarOpen(!navbarOpen)}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-3 py-2 rounded-lg border text-(--green-primary) border-(--green-primary) hover:text-(--green-primary-hover) hover:border-(--green-primary-hover) transition-colors"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        <div
          className="hidden md:flex md:w-full md:justify-around px-4  bg-white/70 backdrop-blur-lg rounded-lg shadow-lg items-center h-full"
          id="navbar"
        >
          <ul className="flex md:flex-row justify-between md:space-x-8 self-center h-full items-center">
            {navbarItem.map((link) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center h-full"
              >
                <NavbarItem
                  href={link.path}
                  title={link.title}
                  onClick={handleItemClick}
                />
              </motion.li>
            ))}
          </ul>

          <motion.div
            key="price"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="ml-6 flex items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full  text-white font-semibold shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all "
              onClick={handleItemClick}
            >
              Wyceń swoją instalację
            </motion.a>
          </motion.div>
        </div>

        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <MenuOverlay links={navbarItem} onItemClick={handleItemClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

