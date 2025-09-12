"use client";
import React from "react";
import { Sun, Leaf, Battery, Home } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Analiza potrzeb",
    description: "Rozmawiamy o Twoich celach i możliwościach inwestycji w OZE.",
    icon: <Leaf size={32} className="text-green-600" />,
  },
  {
    id: 2,
    title: "Dobór rozwiązań",
    description: "Proponuję najlepsze technologie: fotowoltaika, pompy ciepła, magazyny energii.",
    icon: <Sun size={32} className="text-yellow-500" />,
  },
  {
    id: 3,
    title: "Wsparcie w realizacji",
    description: "Pomagam w wyborze wykonawcy i dopełniam formalności.",
    icon: <Battery size={32} className="text-green-700" />,
  },
  {
    id: 4,
    title: "Oszczędności i niezależność",
    description: "Cieszysz się niższymi rachunkami i własną energią w domu.",
    icon: <Home size={32} className="text-green-500" />,
  },
];

export default function HelpSection () {
  return (
    <section id="help" 
    className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Jak <span className="text-green-600">pomagam</span> w OZE?
        </h2>

        <div className="relative flex justify-between items-center">
          


          {steps.map((step) => (
            <div key={step.id} className="relative w-1/4 flex flex-col items-center px-2">
              
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-50 border-4 border-green-600 shadow-lg mb-4">
                {step.icon}
              </div>

              
              <h3 className="text-lg font-semibold text-gray-900">
                {step.id < 10 ? `0${step.id}` : step.id}. {step.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

