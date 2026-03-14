import { Star } from "lucide-react"

export default function StarsRating() {

  return (
    <div className="flex justify-center mb-4">

      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow"
        />
      ))}

    </div>
  )

}