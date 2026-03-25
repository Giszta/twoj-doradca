type Props = {
  total: number;
  activeIndex: number;
};

export default function MobilePagination({ total, activeIndex }: Props) {
  return (
    <div
      className="mt-6 flex justify-center gap-2"
      aria-label="Paginacja karuzeli"
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            type="button"
            aria-label={`Przejdź do slajdu ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
            className={`h-2 rounded-full transition-all ${
              isActive ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
}