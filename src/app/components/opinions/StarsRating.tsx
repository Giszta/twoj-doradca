import { Star } from "lucide-react"

const STARS = Array.from({ length: 5 })

export default function StarsRating() {
  return (
    <div className="flex justify-center mb-4">
      {STARS.map((_, i) => (
        <Star
          key={i}
          className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow"
        />
      ))}
    </div>
  )
}