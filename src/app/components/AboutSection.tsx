"use client";

import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="relative bg-stone-100 py-24">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 justify-center">
        
        <div className="relative w-80 h-80">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-emerald-500 to-green-700 rounded-3xl transform -rotate-6"></div>
          <Image
            src="/img/hero.png"
            alt="Doradca OZE"
            width={260}
            height={200}
            className="relative object-cover rounded-3xl shadow-xl transform rotate-3 left-10"
          />
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">O mnie</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jako doradca OZE pomagam klientom w wyborze nowoczesnych i ekologicznych
            rozwiązań energetycznych. Stawiam na jasną komunikację oraz dobór
            technologii idealnie dopasowanej do indywidualnych potrzeb.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Wspólnie przechodzimy przez proces od doradztwa, przez projekt,
            aż po instalację – dbając o każdy szczegół i maksymalizując
            efektywność inwestycji.
          </p>
        </div>
      </div>
    </section>
  );
}
