"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaVolumeMute, FaVolumeUp ,FaSmile, FaProjectDiagram, FaCalendarAlt, FaComments, FaCogs, FaCalculator, FaDraftingCompass, FaTools, FaCheckCircle, FaFileInvoiceDollar } from "react-icons/fa";

interface CounterProps {
  value: number;
  label: string;
  Icon: React.ElementType;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, label, Icon, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.div
      className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-6 w-60 shadow-lg hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-white text-blue-600 rounded-full p-4 mb-4 shadow">
        <Icon className="text-3xl" />
      </div>
      <span className="text-4xl font-extrabold">{count}+</span>
      <span className="text-center mt-2">{label}</span>
    </motion.div>
  );
};

const steps = [
  { icon: FaComments, title: "Rozmowa i analiza", text: "Sprawdzam powierzchnię domu, izolację, rachunki i sposób ogrzewania." },
  { icon: FaCogs, title: "Dobór technologii", text: "Pompa ciepła, fotowoltaika, pellet czy drewno – zawsze to, co najbardziej opłacalne." },
  { icon: FaCalculator, title: "Precyzyjne wyliczenia", text: "Dostajesz konkretny koszt inwestycji i prognozowane oszczędności." },
  { icon: FaDraftingCompass, title: "Projekt instalacji", text: "Dokładnie dopasowany do budynku i lokalnych warunków." },
  { icon: FaTools, title: "Profesjonalny montaż", text: "Certyfikowana ekipa, zgodnie z wymogami dotacji i gwarancji." },
  { icon: FaCheckCircle, title: "Odbiór, szkolenie i serwis", text: "Uczę obsługi i dbam, żeby wszystko działało przez lata." },
  { icon: FaFileInvoiceDollar, title: "Dotacje i ulgi", text: "Kompletuję dokumenty i odzyskuję nawet 45 000 zł dla Ciebie." },
];



const AboutSection = () => {
   const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tytuł */}
        <motion.h2
          className="flex items-center justify-center text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        ><span className="inline-block border-t border-gray-300 w-20 mr-6"></span>
          Moja misja - Twój komfort
          <span className="inline-block border-t border-gray-300 w-20 ml-6"></span>
        </motion.h2>

        {/* Statystyki */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center mb-20">
          <Counter value={97} label="Zadowolonych klientów" Icon={FaSmile} />
          <Counter value={400} label="Zrealizowanych projektów" Icon={FaProjectDiagram} />
          <Counter value={2020} label="Działam" Icon={FaCalendarAlt} />
        </div>

        {/* Schemat + Film */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center items-stretch">
          {/* Timeline kroków */}
          <motion.div
            className="relative space-y-8 border-l-4 border-blue-600 pl-8 md:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">
              Jak wygląda współpraca ze mną krok po kroku?
            </h3>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -left-12 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <step.icon className="text-lg" />
                </div>
                <h4 className="text-lg font-bold text-blue-800">{step.title}</h4>
                <p className="text-gray-600">{step.text}</p>
              </motion.div>
            ))}
            <p className="mt-6 text-blue-600 font-semibold">
              Dzięki temu masz pewność, że inwestujesz świadomie i zyskujesz realne oszczędności – bez stresu i bez przepłacania.
            </p>
          </motion.div>

          {/* Film lokalny */}
         <motion.div
            className="order-first sm:order-last  relative w-[80%] rounded-2xl overflow-hidden shadow-2xl md:col-span-5 flex justify-center align-center mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <video
              ref={videoRef}
              src="/video/about.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl object-cover"
            />

            {/* Pulsujący przycisk mute/unmute */}
            <button
  onClick={toggleMute}
  className={`absolute bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform ${
    muted ? "animate-bounce" : ""
  }`}
>
  {muted ? (
    <FaVolumeMute className="text-2xl" />
  ) : (
    <FaVolumeUp className="text-2xl" />
  )}
</button>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
