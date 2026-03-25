type Props = {
  total: number
  current: number
  onChange: (index: number) => void
}

export default function OpinionsDots({
  total,
  current,
  onChange,
}: Props) {
  return (
    <div className="mt-10 flex justify-center gap-2" role="tablist">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current

        return (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            aria-label={`Przejdź do opinii ${i + 1}`}
            aria-selected={isActive}
            role="tab"
            className={`h-3 rounded-full transition-all duration-300 ${
              isActive ? "bg-blue-500 w-6" : "bg-blue-200 w-3"
            }`}
          />
        )
      })}
    </div>
  )
}