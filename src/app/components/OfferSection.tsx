"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Pompy ciepła",
    description:
      "Nowoczesne rozwiązania grzewcze oparte na odnawialnych źródłach energii. Idealne do domów jednorodzinnych.",
    image: "/img/offer/pompa-ciepla.png",
  },
  {
    name: "Kotły pelletowe",
    description:
      "Ekologiczne kotły na pellet zapewniające wygodę i wysoką sprawność spalania.",
    image: "/img/offer/kociol-pellet.png",
  },
  {
    name: "Kotły zgazowujące drewno",
    description:
      "Efektywne i ekonomiczne źródło ciepła dla miłośników drewna opałowego.",
    image: "/img/offer/kociol-drewno.png",
  },
  {
    name: "Fotowoltaika",
    description:
      "Instalacje fotowoltaiczne pozwalające oszczędzać na rachunkach za prąd i korzystać z zielonej energii.",
    image: "/img/offer/fotowoltaika.png",
  },
  {
    name: "Ogrzewanie podłogowe",
    description: "Komfortowe i energooszczędne ogrzewanie dla całego domu.",
    image: "/img/offer/podlogowka.png",
  },
  {
    name: "Instalacje wod.-kan.",
    description:
      "Profesjonalne instalacje wodno-kanalizacyjne zapewniające niezawodność i bezpieczeństwo.",
    image: "/img/offer/wod-kan.png",
  },
  {
    name: "Rekuperacja",
    description:
      "Nowoczesne systemy wentylacji mechanicznej z odzyskiem ciepła.",
    image: "/img/offer/rekuperacja.png",
  },
    {
    name: "Turbiny wiatrowe",
    description:
      "Przydomowe i komercyjne turbiny wiatrowe umożliwiające niezależną produkcję energii z wiatru przez cały rok.",
    image: "/img/offer/turbina-wiatrowa.png",
  },
];

export default function Offer() {
  return (
    <section id="offer" className="sm:px-6">
      <div className="max-w-7xl mx-auto">
<h2 className="flex items-center justify-center text-xl sm:text-2xl xl:text-4xl font-bold text-gray-800 mb-12 ">
  <span className="inline-block border-t border-gray-400 w-20 mr-6"></span>
  Oferta
  <span className="inline-block border-t border-gray-400 w-20 ml-6"></span>
</h2>


        <div className="relative grid lg:grid-cols-2 gap-20">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row items-center sm:item-start sm:gap-8 p-4 sm:p-8  rounded-2xl border border-blue-200 shadow-md  hover:shadow-xl bg-white/80  transition transform hover:scale-105"
            >
              <div className="hidden sm:block absolute top-8 left-0 w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 z-0" />
              
              <div className="sm:absolute sm:left-0 sm:top-1/2 sm:-translate-x-1/3 sm:-translate-y-1/2">
                <Image
                  src={product.image}
                  alt={product.name}
                  
                  height={150}
                  width={150}
                  className="z-10 drop-shadow-xl bg-transparent drop-shadow-neutral-500 h-[200px] w-auto"
                />
              </div>

              <div className=" sm:mt-0 sm:ml-36 flex-1 text-center z-10 space-between h-full">
                <h3 className=" text-xl font-bold text-blue-700 sm:text-white mb-3  px-4 py-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-500 mb-6">{product.description}</p>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow hover:opacity-90 transition">
                  Zobacz więcej
                </button>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=" relative flex flex-col sm:flex-row item-center sm:item-start gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl  bg-gradient-to-r from-blue-600 to-cyan-500 text-white border border-blue-200 shadow-md  hover:shadow-xl bg-white/80  transition transform hover:scale-105"
          >
            <div className=" flex justify-center  sm:absolute sm:left-0 sm:top-1/2 sm:-translate-x-1/3 sm:-translate-y-1/2">
              <Image
                src="/img/offer/form.png"
                alt="Formularz kontaktowy"
                width={150}
                height={150}
                className="drop-shadow-xl drop-shadow-neutral-500"
              />
            </div>

            <div className="sm:ml-36 flex-1 text-center space-between z-10">
              <h3 className="text-2xl font-bold text-white mb-3 px-4 py-2">Masz pytania?</h3>
              <p className="flex text-lg mb-6">
                Skontaktuj się z nami – doradzimy i przygotujemy indywidualną
                ofertę dopasowaną do Twoich potrzeb.
              </p>
              <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-full shadow hover:opacity-90 transition">
                Skontaktuj się
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
