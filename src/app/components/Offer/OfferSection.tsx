"use client";

import { products } from "./data";
import ProductTabPanel from "./ProductTabPanel";
import CTASection from "./CTASection";
import Separator from "../Separator";

export default function OfferSection() {
  return (
    <section id="offer" className="bg-stone-100 overflow-hidden">
      <Separator />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-8 text-center md:text-left">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
            Co oferujemy
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Kompleksowe rozwiązania OZE
          </h2>
          <p className="text-gray-600 max-w-lg text-base leading-relaxed mx-auto md:mx-0">
            Od projektu po montaż — wszystko realizujemy własnymi ekipami,
            dzięki czemu masz pewność jakości na każdym etapie.
          </p>
        </div>

        <ProductTabPanel products={products} />

        <CTASection />
      </div>
    </section>
  );
}
