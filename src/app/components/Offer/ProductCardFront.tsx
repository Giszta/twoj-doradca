import Image from "next/image";

type Product = {
  name: string;
  description: string;
  image: string;
  badge: string;
};

type Props = {
  product: Product;
};

export default function ProductCardFront({ product }: Props) {
  return (
    <div className="absolute inset-0 backface-hidden">
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-300 shadow-lg h-full">

        <div className="relative bg-linear-to-br from-blue-500 to-cyan-500 h-64 flex items-center justify-center">

          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "20px 20px"
              }}
            />
          </div>

          <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100/90 backdrop-blur-sm rounded-full">
            <span className="text-xs font-bold text-blue-700">
              {product.badge}
            </span>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-32 h-32">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 text-center leading-relaxed line-clamp-2 mb-4">
            {product.description}
          </p>

          <div className="text-center">
            <span className="text-xs text-blue-600 font-semibold">
              Najedź aby zobaczyć szczegóły →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}