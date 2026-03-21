type Props = {
  step: number;
  totalSteps: number;
  isSubmitting: boolean;
  isStepValid: boolean;
  onPrev: () => void;
};

export default function ContactNavigation({
  step,
  totalSteps,
  isSubmitting,
  isStepValid,
  onPrev,
}: Props) {
  return (
    <div className="grid gap-4 sm:flex sm:justify-between mt-8">
      {step > 0 && (
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer transition"
        >
          Wstecz
        </button>
      )}

      {step < totalSteps - 1 ? (
        <button
          type="submit"
          name="intent"
          value="next"
          disabled={!isStepValid}
          className={`order-first w-full sm:w-auto sm:order-last ml-auto px-6 py-2 rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 text-white transition ${
            isStepValid
              ? "hover:opacity-90 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          Dalej
        </button>
      ) : (
        <button
          type="submit"
          name="intent"
          value="submit"
          disabled={isSubmitting || !isStepValid}
          className={`order-first w-full sm:w-auto sm:order-last ml-auto px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md transition ${
            isSubmitting || !isStepValid
              ? "opacity-70 cursor-not-allowed"
              : "hover:shadow-lg hover:scale-105 cursor-pointer"
          }`}
        >
          {isSubmitting ? "Wysyłanie..." : "Odbierz bezpłatną wycenę"}
        </button>
      )}
    </div>
  );
}