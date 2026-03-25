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
    <div className="mt-8 grid gap-4 sm:flex sm:justify-between">
      {step > 0 && (
        <button
          type="button"
          onClick={onPrev}
          className="rounded-lg border border-gray-300 px-4 py-2 transition cursor-pointer hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
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
          className={`order-first ml-auto w-full rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-2 text-white transition sm:order-last sm:w-auto ${
            isStepValid
              ? "cursor-pointer hover:opacity-90"
              : "cursor-not-allowed opacity-50"
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
          className={`order-first ml-auto w-full rounded-lg bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-md transition sm:order-last sm:w-auto ${
            isSubmitting || !isStepValid
              ? "cursor-not-allowed opacity-70"
              : "cursor-pointer hover:scale-105 hover:shadow-lg"
          }`}
        >
          {isSubmitting ? "Wysyłanie..." : "Odbierz bezpłatną wycenę"}
        </button>
      )}
    </div>
  );
}