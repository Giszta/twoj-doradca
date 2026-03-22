import Image from "next/image";
import { Product } from "./types";

type Props = {
  product: Product;
};

export default function MobileProductCard({ product }: Props) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="snap-center shrink-0 w-[75vw] h-105">
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-300 shadow-lg h-full">
        
        <div className="relative bg-linear-to-br from-blue-500 to-cyan-500 h-60 flex items-center justify-center">

          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
            <span className="text-xs font-bold text-blue-700">
              {product.badge}
            </span>
          </div>

          <div className="relative w-32 h-32">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-md font-bold text-gray-900 mb-3 text-center">
            {product.name}
          </h3>

          <p className="text-xs text-gray-600 text-center leading-relaxed line-clamp-3 mb-4">
            {product.description}
          </p>

          <div className="text-center">
            <button 
              onClick={scrollToContact}
              className="px-6 py-2 bg-linear-to-r text-xs from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg active:scale-95 transition-all"
            >
              Dowiedz się więcej
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}