import CarouselNavigation from "./CarouselNavigation";
import ProductCard from "./ProductCard";
import { useInfiniteCarousel } from "./hooks/useInfiniteCarousel";
import { Product } from "./types";

type Props = {
  products: Product[];
};

export default function DesktopCarousel({ products }: Props) {
  const cardWidth = 350;

  const {
    containerRef,
    activeIndex,
    setIsPaused,
    navigateToIndex
  } = useInfiniteCarousel(products.length, cardWidth);

  const displayProducts = [...products, ...products, ...products];

  return (
    <div className="hidden md:block">
      <CarouselNavigation
        products={products}
        activeIndex={activeIndex}
        onSelect={navigateToIndex}
      />

<div className="overflow-hidden 
  mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
  [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    
        <div className="overflow-hidden py-20">
          <div ref={containerRef} className="flex gap-8 will-change-transform">
            {displayProducts.map((product, i) => (
              <ProductCard
                key={`${product.id}-${i}`}
                product={product}
                onHover={setIsPaused}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}