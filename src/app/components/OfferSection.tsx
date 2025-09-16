"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Pompy ciepła",
    price: "od 18 000 zł",
    description:
      "Nowoczesne rozwiązania grzewcze oparte na odnawialnych źródłach energii. Idealne do domów jednorodzinnych.",
    image: "/img/offer/pompa-ciepla.png",
  },
  {
    name: "Kotły pelletowe",
    price: "od 12 000 zł",
    description:
      "Ekologiczne kotły na pellet zapewniające wygodę i wysoką sprawność spalania.",
    image: "/img/offer/kociol-pellet.png",
  },
  {
    name: "Kotły zgazowujące drewno",
    price: "od 10 000 zł",
    description:
      "Efektywne i ekonomiczne źródło ciepła dla miłośników drewna opałowego.",
    image: "/img/offer/kociol-drewno.png",
  },
  {
    name: "Fotowoltaika",
    price: "od 15 000 zł",
    description:
      "Instalacje fotowoltaiczne pozwalające oszczędzać na rachunkach za prąd i korzystać z zielonej energii.",
    image: "/img/offer/fotowoltaika.png",
  },
  {
    name: "Ogrzewanie podłogowe",
    price: "od 8 000 zł",
    description: "Komfortowe i energooszczędne ogrzewanie dla całego domu.",
    image: "/img/offer/podlogowka.png",
  },
  {
    name: "Instalacje wod.-kan.",
    price: "wycena indywidualna",
    description:
      "Profesjonalne instalacje wodno-kanalizacyjne zapewniające niezawodność i bezpieczeństwo.",
    image: "/img/offer/wod-kan.png",
  },
  {
    name: "Rekuperacja",
    price: "od 9 000 zł",
    description:
      "Nowoczesne systemy wentylacji mechanicznej z odzyskiem ciepła.",
    image: "/img/offer/rekuperacja.png",
  },
];

export default function Offer() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Oferta</h2>

        <div className="relative grid lg:grid-cols-2 gap-20">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-8 p-8 rounded-2xl shadow-xl bg-white"
            >
              <div className="absolute top-8 left-0 w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-500 z-0" />
              
              <div className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={260}
                  height={260}
                  className="z-10 drop-shadow-xl bg-transparent drop-shadow-neutral-500"
                />
              </div>

              <div className="ml-36 flex-1 text-center z-10 space-between">
                <h3 className=" text-2xl font-bold text-white mb-3  px-4 py-2">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-600 mb-2">{product.price}</p>
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
            className=" relative flex gap-8 p-8 rounded-2xl shadow-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          >
            <div className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2">
              <Image
                src="/img/offer/form.png"
                alt="Formularz kontaktowy"
                width={200}
                height={200}
                className="drop-shadow-xl drop-shadow-neutral-500"
              />
            </div>

            <div className="ml-36 flex-1 text-center space-between z-10">
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
