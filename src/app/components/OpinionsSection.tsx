"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

type Review = {
  date: string;
  author: string;
  text: string;
};

const reviews: Review[] = [
  {
    date: "6/20/2024",
    author: "Dawid",
    text: "Właśnie o taką osobę mi chodziło, ze względu na moją pracę za granicą nie za bardzo mam czas na załatwianie papierkowej roboty a Pan Tomasz ogarnia to wszystko. W sumie rozpocząłem współpracę ale jak narazie wszystko idzie tak jak oczekiwałem.",
  },
  {
    date: "2/10/2022",
    author: "Michał",
    text: "Zlecenie na powietrzną pompę ciepła, bud. do 150m², Przeźmierowo. Pan Tomasz wykazał się indywidualnym podejściem do klienta, rozwiał wszystkie moje wątpliwości, doradził przy doborze pompy ciepła i instalacji fotowoltaicznej oraz pomógł ze wszystkim od A do Z. Rzetelne podejście pokazał również przyjeżdżając na montaż zarówno pompy ciepła jak i fotowoltaiki. Ekipa montażowa uwinęła się w 2 dni co też pozytywnie zaskakuje. Gorąco polecam usługi firmy Sunlit a przede wszystkim Pana Tomasza.",
  },
  {
    date: "3/1/2021",
    author: "Szymon",
    text: "Profesjonalne podejście, super komunikacja, proaktywne działanie Pana Tomasza.",
  },
  {
    date: "3/1/2021",
    author: "Piotr",
    text: "Profesjonalna obsługa, kompleksowy dobór instalacji, pan Tomasz rozbił wszystkie moje obiekcje, przedstawił wszystkie argumenty za i przeciw, jestem w pełni zadowolony z instalacji, bardzo polecam te firmę!",
  },
  {
    date: "2/25/2021",
    author: "Alan",
    text: "Długo zastanawiałem się nad zainstalowaniem paneli fotowoltaicznych, ponieważ miałem sporo wątpliwości ale pan Tomasz z firmy Solar-Volt wszystkie je rozwiał. Wytłumaczył mi wszystko dokładnie krok po kroku, oraz pomógł w załatwieniu dotacji oraz kredytu. Ekipa która przyszła je montować zrobiła to szybko, sprawnie oraz bez zbędnego bałaganu. Na razie użytkuje instalacje przez ok. 8 miesięcy. Wiem, że instalacja będzie mi służyć przez kolejne 20, 30 lat szczerze polecam tą firmę.",
  },
];

export default function Opinions() {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[index];

  return (
    <section id="opinions" className="relative py-20 bg-stone-100">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Opinie klientów
        </h2>

        <div className="relative h-72 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl mx-auto"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6">&quot;{review.text}&quot;</p>

              <div className="text-sm text-gray-500">
                {review.date} — <span className="font-semibold">{review.author}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>


        <div className="mt-8 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-green-500 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
