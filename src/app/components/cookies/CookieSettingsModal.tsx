"use client";

import { useEffect, useId } from "react";
import CookieCategoryCard from "./CookieCategoryCard";
import { CookieConsent } from "./types";

type Props = {
  open: boolean;
  consent: CookieConsent;
  onClose: () => void;
  onChange: (next: CookieConsent) => void;
  onSave: () => void;
};

export default function CookieSettingsModal({
  open,
  consent,
  onClose,
  onChange,
  onSave,
}: Props) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 bg-black/50"
      aria-hidden={false}
      onClick={onClose}
    >
      <div className="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className="flex h-[92dvh] w-full flex-col rounded-t-3xl bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-4 sm:px-6 sm:py-5">
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-gray-300 sm:hidden" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id={titleId}
                  className="text-lg font-semibold text-gray-900 sm:text-xl"
                >
                  Ustawienia cookies
                </h2>

                <p id={descriptionId} className="mt-2 text-sm text-gray-600">
                  Wybierz, na które kategorie cookies wyrażasz zgodę. Niezbędne
                  cookies są zawsze aktywne.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Zamknij ustawienia cookies"
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Zamknij
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
            <div className="grid gap-4">
              <CookieCategoryCard
                title="Niezbędne"
                description="Odpowiadają za podstawowe działanie strony i nie mogą zostać wyłączone."
                checked={true}
                disabled
              />

              <CookieCategoryCard
                title="Analityczne"
                description="Pomagają mierzyć ruch na stronie i ulepszać jej działanie."
                checked={consent.analytics}
                onChange={(checked) =>
                  onChange({
                    ...consent,
                    analytics: checked,
                  })
                }
              />

              <CookieCategoryCard
                title="Marketingowe"
                description="Umożliwiają działania reklamowe, remarketing i mierzenie skuteczności kampanii."
                checked={consent.marketing}
                onChange={(checked) =>
                  onChange({
                    ...consent,
                    marketing: checked,
                  })
                }
              />

              <CookieCategoryCard
                title="Funkcjonalne"
                description="Zapamiętują preferencje użytkownika i poprawiają wygodę korzystania z serwisu."
                checked={consent.functional}
                onChange={(checked) =>
                  onChange({
                    ...consent,
                    functional: checked,
                  })
                }
              />
            </div>
          </div>

          <div className="sticky bottom-0 border-t border-gray-200 bg-white px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Wróć
              </button>

              <button
                type="button"
                onClick={onSave}
                className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Zapisz ustawienia
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}