"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaPhone, FaCheck, FaStar } from "react-icons/fa";

interface GrantsCTAProps {
  scrollToContact: () => void;
}

export default function GrantsCTA({ scrollToContact }: GrantsCTAProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="text-center"
    >

      <div className="hidden md:block bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl p-10 shadow-2xl text-white">
        <h3 className="text-3xl font-bold mb-4">
          Nie wiesz, z którego programu skorzystać?
        </h3>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
          Skontaktuj się ze mną – przeanalizuję Twoją sytuację i dobiorę
          najlepszą dotację. Zajmę się wszystkimi formalnościami za Ciebie.
        </p>
        <button 
          onClick={scrollToContact}
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
        >
          Sprawdź czy się kwalifikujesz
          <FaArrowRight />
        </button>
      </div>

      <div className="md:hidden bg-linear-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 shadow-xl text-white">
        <div className="mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <FaStar className="text-3xl text-yellow-300" />
          </div>
          <h3 className="text-xl font-bold mb-2">
            Potrzebujesz pomocy?
          </h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Dobiorę najlepszą dotację i załatwię formalności za Ciebie
          </p>
        </div>

        <div className="space-y-3">
          <button 
            onClick={scrollToContact}
            className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Bezpłatna konsultacja
            <FaArrowRight />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-white/30"></div>
            <span className="text-xs text-blue-100 font-semibold">lub</span>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>

          <a
            href="tel:+48123456789"
            className="w-full py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <FaPhone className="text-sm" />
            Zadzwoń teraz
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-center gap-6 text-xs text-blue-100">
            <div className="flex items-center gap-1">
              <FaCheck className="text-green-300" />
              <span>Bez zobowiązań</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCheck className="text-green-300" />
              <span>400+ klientów</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}