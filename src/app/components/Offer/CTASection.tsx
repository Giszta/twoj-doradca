"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";
import { scrollToSection } from "./utils/scrollToSection";

export default function CTASection() {
  return (
    <div className="mx-auto max-w-4xl px-4 text-center">
      <h3 className="my-5 mb-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Gotowy na oszczędności?
      </h3>

      <p className="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
        Skontaktuj się ze mną – wspólnie wybierzemy najlepsze rozwiązanie dla
        Twojego domu
      </p>

      <div className="mx-auto mb-8 flex max-w-md flex-col gap-3">
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="group flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-6 py-4 font-bold text-white shadow-lg transition-all active:scale-95"
        >
          <span>Umów bezpłatną konsultację</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+48123456789"
            className="group flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-3.5 transition-all active:scale-95 hover:border-blue-500"
          >
            <Phone className="h-5 w-5 text-gray-600 group-hover:text-blue-500" />
            <span className="font-semibold text-gray-700 group-hover:text-blue-500">
              Zadzwoń
            </span>
          </a>

          <a
            href="mailto:kontakt@example.com"
            className="group flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-3.5 transition-all active:scale-95 hover:border-blue-500"
          >
            <Mail className="h-5 w-5 text-gray-600 group-hover:text-blue-500" />
            <span className="font-semibold text-gray-700 group-hover:text-blue-500">
              Email
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col flex-wrap justify-center gap-3 text-sm sm:flex-row sm:gap-6">
        <div className="flex items-center justify-center gap-2 rounded-full bg-green-50 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="font-semibold text-green-700">Bezpłatna wycena</span>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-full bg-green-50 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="font-semibold text-green-700">Odpowiedź w 24h</span>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-full bg-green-50 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="font-semibold text-green-700">Pomoc z dotacjami</span>
        </div>
      </div>
    </div>
  );
}