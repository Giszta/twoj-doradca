type Props = {
  step: number;
  steps: readonly string[];
};

export default function ContactProgress({ step, steps }: Props) {
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="mb-8 mt-6">
      <div className="mb-3 flex items-center justify-between sm:hidden">
        <span className="text-sm font-medium text-gray-600">
          Krok {step + 1} z {steps.length}
        </span>
        <span className="ml-4 text-right text-sm font-semibold text-blue-600">
          {steps[step]}
        </span>
      </div>

      <div
        className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={step + 1}
        aria-label={`Postęp formularza: krok ${step + 1} z ${steps.length}`}
      >
        <div
          className="absolute left-0 top-0 h-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className="mt-5 hidden gap-2 sm:grid"
        style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      >
        {steps.map((label, index) => {
          const isActive = index === step;
          const isDone = index < step;

          return (
            <div
              key={`${index}-${label}`}
              className="flex min-w-0 flex-col items-center text-center"
            >
              <div
                className={`mb-2 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold transition-all ${
                  isActive
                    ? "border-blue-600 bg-blue-600 text-white"
                    : isDone
                    ? "border-cyan-500 bg-cyan-500 text-white"
                    : "border-gray-300 bg-white text-gray-500"
                }`}
              >
                {index + 1}
              </div>

              <span
                className={`block max-w-full break-words text-[11px] leading-tight whitespace-normal ${
                  isActive ? "font-semibold text-blue-600" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}