"use client";

import { Product } from "./types";
import { scrollToSection } from "./utils/scrollToSection";

type Props = {
  product: Product;
};

export default function ProductCardBack({ product }: Props) {
  const Icon = product.icon;

  return (
    <div className="absolute inset-0 backface-hidden rotate-y-180">
      <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border-2 border-blue-400 bg-linear-to-br from-blue-600 to-cyan-600 p-8 shadow-2xl">
        <div>
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 className="mb-4 text-center text-xl font-bold text-white">
            {product.name}
          </h3>

          <p className="text-center text-sm leading-relaxed text-white/95">
            {product.details}
          </p>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="w-full rounded-xl bg-white py-3 font-bold text-blue-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-xl"
        >
          Skontaktuj się
        </button>

        <div className="mt-4 text-center">
          <span className="text-xs text-white/80">
            ← Najedź ponownie aby wrócić
          </span>
        </div>
      </div>
    </div>
  );
}