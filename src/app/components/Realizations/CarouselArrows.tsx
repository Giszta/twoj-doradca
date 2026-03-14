import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
  next: () => void
  prev: () => void
}

export default function CarouselArrows({ next, prev }: Props) {
  return (
    <>
      <button
        onClick={prev}
        aria-label="Poprzedni slajd"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        aria-label="Następny slajd"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  )
}