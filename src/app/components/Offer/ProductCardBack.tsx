import { LucideIcon } from "lucide-react";

type Product = {
  name: string;
  details: string;
  icon: LucideIcon;
};

type Props = {
  product: Product;
};

export default function ProductCardBack({ product }: Props) {
  const Icon = product.icon;

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
    <div className="absolute inset-0 backface-hidden rotate-y-180">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl overflow-hidden border-2 border-blue-400 shadow-2xl h-full p-8 flex flex-col justify-between">

        <div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-white text-center mb-4">
            {product.name}
          </h3>

          <p className="text-white/95 text-sm leading-relaxed text-center">
            {product.details}
          </p>
        </div>

        <button 
          onClick={scrollToContact}
          className="w-full py-3 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
        >
          Skontaktuj się
        </button>

        <div className="text-center mt-4">
          <span className="text-xs text-white/80">
            ← Najedź ponownie aby wrócić
          </span>
        </div>
      </div>
    </div>
  );
}