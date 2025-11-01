"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const grants = [
  {
    title: "Moja elektrownia wiatrowa",
    description:
      "Program dotacji wspierający budowę mikroinstalacji wiatrowych dla gospodarstw domowych.",
    image: "/img/grants/moja-elektrownia-wiatrowa.png",
    status: "Nowość 2025",
    benefits: [
      "Dofinansowanie do 45 000 zł",
      "Wsparcie dla przydomowych turbin",
      "Możliwość łączenia z fotowoltaiką",
    ],
  },
  {
    title: "Moje ciepło",
    description: "Dotacja na pompy ciepła dla nowych budynków jednorodzinnych.",
    image: "/img/grants/moje-cieplo.png",
    status: "Nowe budynki",
    benefits: [
      "Dofinansowanie do 21 000 zł",
      "Tylko dla domów energooszczędnych",
      "Wysoka efektywność energetyczna",
    ],
  },
  {
    title: "Czyste powietrze",
    description:
      "Wsparcie przy wymianie starego źródła ciepła na ekologiczne rozwiązanie.",
    image: "/img/grants/czyste-powietrze.png",
    status: "Wymiana pieca",
    benefits: [
      "Dofinansowanie do 45 000 zł",
      "Na pompę ciepła lub kocioł gazowy",
      "Dla istniejących budynków",
    ],
  },
];

export default function Grants() {
  return (
    <section id="grants" className=" w-full flex justify-center relative">
      <div className="max-w-7xl mx-auto px-6">
       <motion.h2
                className="flex items-center justify-center text-center text-xl sm:text-2xl xl:text-4xl font-bold text-gray-800 mb-20"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              ><span className="inline-block border-t border-gray-400 w-20 mr-6"></span>
                Aktualne programy dotacyjne
                <span className="inline-block border-t border-gray-400 w-20 ml-6"></span>
              </motion.h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Skorzystaj z dostępnych programów wsparcia i odzyskaj nawet{" "}
          <span className="font-semibold text-blue-700">45 000 zł</span>. Pomogę
          Ci dobrać odpowiednie rozwiązanie i przejść przez wszystkie
          formalności.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {grants.map((grant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center border border-blue-200 rounded-2xl shadow-md hover:shadow-xl bg-white/80 backdrop-blur-sm p-8 transition transform hover:scale-105"
            >
<div className="flex items-center justify-center w-48 h-24 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-md mb-6 overflow-hidden"> 
  <Image src={grant.image} alt={grant.title} width={100} height={100} className="object-contain drop-shadow-lg" /> </div>

              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {grant.title}
              </h3>
              <p className="text-gray-600 mb-4">{grant.description}</p>

              <ul className="text-left text-gray-700 space-y-2 mb-4">
                {grant.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500">✔</span> {b}
                  </li>
                ))}
              </ul>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {grant.status}
              </span>

              <button className="mt-auto px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Sprawdź szczegóły
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-100 rounded-2xl p-8 shadow-inner">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Nie wiesz, z którego programu skorzystać?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Skontaktuj się ze mną – przeanalizuję Twoją sytuację i dobiorę
              najlepszą dotację. Zajmę się wszystkimi formalnościami za Ciebie.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
              Umów bezpłatną konsultację
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
