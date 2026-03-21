"use client";

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
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
        <div className="border-b border-gray-200 px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Ustawienia cookies
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Możesz zdecydować, na które kategorie plików cookies wyrażasz zgodę.
            Cookies niezbędne są zawsze aktywne, ponieważ są wymagane do
            prawidłowego działania strony.
          </p>
        </div>

        <div className="grid gap-5 px-6 py-5">
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-gray-900">Niezbędne</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Odpowiadają za podstawowe działanie strony i nie mogą zostać
                  wyłączone.
                </p>
              </div>

              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-gray-900">Analityczne</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Pomagają mierzyć ruch na stronie i ulepszać jej działanie.
                </p>
              </div>

              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) =>
                  onChange({
                    ...consent,
                    analytics: e.target.checked,
                  })
                }
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-gray-900">Marketingowe</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Umożliwiają działania reklamowe, remarketing i mierzenie
                  skuteczności kampanii.
                </p>
              </div>

              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) =>
                  onChange({
                    ...consent,
                    marketing: e.target.checked,
                  })
                }
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-gray-900">Funkcjonalne</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Zapamiętują preferencje użytkownika i poprawiają wygodę
                  korzystania z serwisu.
                </p>
              </div>

              <input
                type="checkbox"
                checked={consent.functional}
                onChange={(e) =>
                  onChange({
                    ...consent,
                    functional: e.target.checked,
                  })
                }
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Zamknij
          </button>

          <button
            type="button"
            onClick={onSave}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Zapisz ustawienia
          </button>
        </div>
      </div>
    </div>
  );
}