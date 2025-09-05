"use client";

import { FaLeaf, FaSolarPanel, FaMoneyBillWave, FaGlobeEurope } from "react-icons/fa";

export default function WhyOZE() {
  const reasons = [
    {
      title: "Oszczędność na rachunkach",
      text: "Zmniejsz koszty energii elektrycznej nawet o 70%.",
      icon: <FaMoneyBillWave size={28} className="text-green-600" />,
    },
    {
      title: "Czysta energia",
      text: "Korzystasz z odnawialnych źródeł i zmniejszasz emisję CO₂.",
      icon: <FaLeaf size={28} className="text-green-600" />,
    },
    {
      title: "Niezależność energetyczna",
      text: "Uniezależnij się od rosnących cen energii.",
      icon: <FaSolarPanel size={28} className="text-green-600" />,
    },
    {
      title: "Wsparcie dla planety",
      text: "Pomagasz chronić środowisko dla przyszłych pokoleń.",
      icon: <FaGlobeEurope size={28} className="text-green-600" />,
    },
  ];

  return (
    <section id="why-oze" className="bg-stone-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Dlaczego OZE?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Wybierając odnawialne źródła energii inwestujesz nie tylko w niższe rachunki,
          ale także w lepszą przyszłość.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{reason.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
