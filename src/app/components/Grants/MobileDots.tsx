import { Grant } from "./types";

interface MobileDotsProps {
  grants: Grant[];
  activeCardIndex: number;
  scrollToCard: (index: number) => void;
}

export default function MobileDots({
  grants,
  activeCardIndex,
  scrollToCard
}: MobileDotsProps) {

  return (
    <div className="md:hidden flex justify-center gap-2 mb-12">

      {grants.map((_, i: number) => (
        <button
        type="button"
          key={i}
          onClick={() => scrollToCard(i)}
          className={`h-2 rounded-full transition-all ${
            i === activeCardIndex
              ? "w-8 bg-blue-500"
              : "w-2 bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`Przejdź do programu ${i + 1}`}
        />
      ))}

    </div>
  );
}