type Props = {
  total: number;
  activeIndex: number;
};

export default function MobilePagination({ total, activeIndex }: Props) {
  return (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all ${
            i === activeIndex ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}