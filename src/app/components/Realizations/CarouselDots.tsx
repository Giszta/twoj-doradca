import { Realization } from "./types"

type Props = {
  items: Realization[]
  current: number
  onChange: (index: number) => void
}

export default function CarouselDots({
  items,
  current,
  onChange,
}: Props) {
  return (
    <div
      className="absolute bottom-4 w-full flex justify-center gap-2"
      role="tablist"
    >
      {items.map((item, i) => {
        const isActive = i === current

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(i)}
            aria-label={`Przejdź do slajdu ${i + 1}`}
            aria-selected={isActive}
            role="tab"
            className={`w-2 h-2 rounded-full transition-all ${
              isActive ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        )
      })}
    </div>
  )
}