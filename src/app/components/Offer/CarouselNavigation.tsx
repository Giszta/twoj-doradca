import { LucideIcon } from "lucide-react";

type Product = {
  id: string;
  name: string;
  icon: LucideIcon;
};

type Props = {
  products: Product[];
  activeIndex: number;
  onSelect?: (index: number) => void;
};

export default function CarouselNavigation({
  products,
  activeIndex,
  onSelect
}: Props) {
  return (
    <div className="flex justify-center items-center gap-2 mb-10">
      <div className="flex items-center gap-2 bg-white rounded-full shadow-lg p-2 border border-gray-200">
        {products.map((product, index) => {
          const Icon = product.icon;
          const isActive = index === activeIndex;

          return (
            <button
              key={product.id}
              onClick={() => onSelect?.(index)}
              title={product.name}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? "scale-110" : ""
                }`}
              />

              {isActive && (
                <span className="text-sm font-semibold whitespace-nowrap">
                  {product.name.split(" ").slice(0, 2).join(" ")}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}