"use client";

import Image from "next/image";
import { Product } from "./types";
import { scrollToSection } from "./utils/scrollToSection";

type Props = {
  product: Product;
};

export default function MobileProductCard({ product }: Props) {
  return (
    <div className="h-105 w-[75vw] shrink-0 snap-center">
      <div className="h-full overflow-hidden rounded-3xl border border-gray-300 bg-white shadow-lg">
        <div className="relative flex h-60 items-center justify-center bg-linear-to-br from-blue-500 to-cyan-500">
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
            <span className="text-xs font-bold text-blue-700">
              {product.badge}
            </span>
          </div>

          <div className="relative h-32 w-32">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="p-6">
          <h3 className="mb-3 text-center text-md font-bold text-gray-900">
            {product.name}
          </h3>

          <p className="mb-4 line-clamp-3 text-center text-xs leading-relaxed text-gray-600">
            {product.description}
          </p>

          <div className="text-center">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-linear-to-r from-blue-500 to-cyan-500 px-6 py-2 text-xs font-semibold text-white transition-all hover:shadow-lg active:scale-95"
            >
              Dowiedz się więcej
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}