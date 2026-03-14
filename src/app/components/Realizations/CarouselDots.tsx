import { Realization } from "./types"

type Props = {
  items: Realization[]
  current: number
}

export default function CarouselDots({ items, current }: Props) {
  return (
    <div className="absolute bottom-4 w-full flex justify-center gap-2">

      {items.map((item, i) => (

        <div
          key={item.id}
          className={`w-2 h-2 rounded-full transition-all ${
            i === current ? "bg-white scale-110" : "bg-white/40"
          }`}
        />

      ))}

    </div>
  )
}