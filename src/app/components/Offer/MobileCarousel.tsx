import { useMobileScroll } from "./hooks/useMobileScroll";
import { Product } from "./types";
import MobileProductCard from "./MobileProductCard";
import MobilePagination from "./MobilePagination";

type Props = {
  products: Product[];
};

export default function MobileCarousel({ products }: Props) {
  const { scrollRef, activeIndex } = useMobileScroll(products.length);


  const displayProducts = [...products, ...products, ...products];

  return (
    <div className="md:hidden">
      
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
          <span className="text-sm font-semibold text-blue-700">← Przesuń →</span>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
      >
        <div className="flex gap-4">
          {displayProducts.map((product, index) => (
            <MobileProductCard
              key={`${product.id}-${index}`}
              product={product}
            />
          ))}
        </div>
      </div>


      <MobilePagination
        total={products.length}
        activeIndex={activeIndex}
      />

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}