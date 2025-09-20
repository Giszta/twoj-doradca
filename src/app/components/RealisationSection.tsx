"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const realizacje = [
  {
    id: 1,
    src: "/img/realization/instalacja1.jpg",
    alt: "Instalacja fotowoltaiczna w Poznaniu",
    opis: "PV 9,8 kWp – Poznań, dom jednorodzinny",
  },
  {
    id: 2,
    src: "/img/realization/instalacja2.jpg",
    alt: "Pompa ciepła w Gdańsku",
    opis: "Pompa ciepła 12 kW – Gdańsk, nowy budynek",
  },
  {
    id: 3,
    src: "/img/realization/instalacja3.jpg",
    alt: "Fotowoltaika na hali w Krakowie",
    opis: "PV 50 kWp – Kraków, hala przemysłowa",
  },
  {
    id: 4,
    src: "/img/realization/instalacja4.jpg",
    alt: "Pompa ciepła Warszawa",
    opis: "Pompa ciepła 8 kW – Warszawa, segment",
  },
];

export default function RealizacjeCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % realizacje.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + realizacje.length) % realizacje.length);
  };

  // autoplay co 5 sekund
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="realization" className="w-full relative overflow-hidden bg-black">
        
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={realizacje[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={realizacje[current].src}
              alt={realizacje[current].alt}
              fill
              className="object-cover"
              priority
            />
            {/* Subtelny opis */}
            <div className="absolute bottom-6 left-6 bg-black/40 text-white px-4 py-2 rounded-xl text-sm md:text-base backdrop-blur-sm">
              {realizacje[current].opis}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Strzałki */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Kropeczki (opcjonalne) */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {realizacje.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
