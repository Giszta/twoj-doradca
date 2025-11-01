"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItem from "./NavbarItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const navbarItem = [
  { title: "Oferta", path: "#offer" },
  { title: "O mnie", path: "#about" },
  { title: "Dotacje", path: "#grants" },
  { title: "Realizacje", path: "#realization" },
  { title: "Opinie", path: "#opinions" },
  { title: "Kontakt", path: "#contact" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNavItemClick = (path?: string) => {
    setNavbarOpen(false);
    if (path) setActiveSection(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navbarItem
      .map((item) => document.querySelector(item.path) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection: string | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            visibleSection = `#${entry.target.id}`;
          }
        });
        if (visibleSection) setActiveSection(visibleSection);
      },
      { threshold: [0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setNavbarOpen(false);
      }
    };
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <header className="fixed top-2 z-50 flex w-[90%] justify-between items-center mx-auto h-16 gap-6">
      {/* LOGO */}
      <motion.div
        className="bg-white/40 md:bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl shadow-md px-4 flex items-center h-full"
        animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -20 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
       initial={{ opacity: 0 }}
                
                
      >
        <Image
          src="/img/logo.png"
          alt="Doradca OZE"
          width={150}
          height={60}
          className="h-full w-auto object-contain"
          priority
        />
      </motion.div>

      {/* NAVIGATION */}
      <nav className="flex-1 flex items-center justify-end h-full">
        {/* MOBILE */}
        <div className="block lg:hidden relative z-50">
          <AnimatePresence>
            {!navbarOpen && !scrolled && (
              <motion.button
                key="burger"
                onClick={() => setNavbarOpen(true)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                aria-label="Otwórz menu"
                className="flex items-center px-3 py-2 rounded-lg bg-white/40 text-white border border-white/40 shadow-sm backdrop-blur-md"
              >
                <motion.div
                  animate={{ rotate: navbarOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Bars3Icon className="h-6 w-6  text-white" />
                </motion.div>
              </motion.button>
            )}

            {/* ARROW BUTTON WHEN SCROLLED */}
            {!navbarOpen && scrolled && (
              <motion.button
                key="arrow"
                onClick={() => setNavbarOpen(true)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                aria-label="Otwórz menu"
                className="fixed top-1/2 right-0 -translate-y-1/2 flex items-center justify-center h-12 w-8
                           bg-white/50 backdrop-blur-xl border border-white/30 shadow-md hover:shadow-lg transition-all group"
                style={{
                  borderTopLeftRadius: 9999,
                  borderBottomLeftRadius: 9999,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#arrowGradient)"
                  strokeWidth="2.4"
                  className="h-6 w-6 transition-transform group-hover:-translate-x-0.5"
                >
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path d="M15 6 L9 12 L15 18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP */}
        <motion.div className="hidden lg:flex lg:w-full lg:justify-around px-4  bg-white/70 backdrop-blur-lg rounded-lg shadow-lg h-full"
        animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? 20 : 0 }}
        transition={{ duration: 0.45 }}>
          <ul className="flex flex-row xl:gap-8 gap-4 items-center h-full xl:text-xl text-lg">
            {navbarItem.map((link) => (
              <motion.li key={link.path} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
                <NavbarItem
                  href={link.path}
                  title={link.title}
                  onClick={handleNavItemClick}
                  isActive={activeSection === link.path}
                />
              </motion.li>
            ))}
          </ul>
            <motion.div
            key="price"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=" flex items-center justify-start"
          >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-3 xl:px-6 py-2 rounded-full text-white text-lg xl:text-xl font-semibold shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all "
            onClick={() => handleNavItemClick("#contact")}
          >
            Wyceń swoją instalację
          </motion.a>
          </motion.div>
        </motion.div>

        {/* MOBILE OVERLAY */}
        <AnimatePresence>
          {navbarOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end xl:hidden z-50"
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative w-3/4 sm:w-2/5 bg-white shadow-xl p-8 flex flex-col space-y-6"
              >
                <button
                  onClick={() => setNavbarOpen(false)}
                  aria-label="Zamknij menu"
                  className="absolute top-4 right-4 rounded-lg p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition"
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>

                <ul className="flex flex-col gap-6 text-lg font-medium mt-10">
                  {navbarItem.map((link) => (
                    <li key={link.path}>
                      <NavbarItem
                        href={link.path}
                        title={link.title}
                        onClick={handleNavItemClick}
                        isActive={activeSection === link.path}
                      />
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 block text-center px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md transition"
                  onClick={() => handleNavItemClick("#contact")}
                >
                  Wyceń swoją instalację
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
