import ProductCardFront from "./ProductCardFront";
import ProductCardBack from "./ProductCardBack";

import { Product } from "./types";

type Props = {
  product: Product;
  onHover?: (value: boolean) => void;
};

export default function ProductCard({
  product,
  onHover = () => {}
}: Props) {
  return (
    <div
      className="shrink-0 w-87.5 h-112.5 group"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        <ProductCardFront product={product} />
        <ProductCardBack product={product} />
      </div>
    </div>
  );
}