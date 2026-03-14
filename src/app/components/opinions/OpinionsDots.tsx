type Props = {
  total: number
  current: number
  onChange: (index: number) => void
}

export default function OpinionsDots({
  total,
  current,
  onChange
}: Props) {

  return (

    <div className="mt-10 flex justify-center gap-2">

      {Array.from({ length: total }).map((_, i) => (

        <button
          key={i}
          onClick={() => onChange(i)}
          className={`h-3 rounded-full transition-all duration-300 ${
            i === current ? "bg-blue-500 w-6" : "bg-blue-200 w-3"
          }`}
        />

      ))}

    </div>

  )

}