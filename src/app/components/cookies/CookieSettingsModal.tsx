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
    <div className="fixed inset-0 z-[60] bg-black/50">
      <div className="flex min-h-full items-end justify-center sm:items-center p-0 sm:p-4">
        <div className="flex h-[92dvh] w-full flex-col rounded-t-3xl bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-2xl">
          <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-4 sm:px-6 sm:py-5">
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-gray-300 sm:hidden" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Ustawienia cookies
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Wybierz, na które kategorie cookies wyrażasz zgodę. Niezbędne
                  cookies są zawsze aktywne.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Zamknij
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-gray-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="pr-2">
                    <h3 className="font-medium text-gray-900">Niezbędne</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Odpowiadają za podstawowe działanie strony i nie mogą zostać wyłączone.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1 h-5 w-5 rounded border-gray-300"
                  />
                </div>
              </div>

              <label className="block rounded-2xl border border-gray-200 p-4 cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="pr-2">
                    <h3 className="font-medium text-gray-900">Analityczne</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
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
                    className="mt-1 h-5 w-5 rounded border-gray-300"
                  />
                </div>
              </label>

              <label className="block rounded-2xl border border-gray-200 p-4 cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="pr-2">
                    <h3 className="font-medium text-gray-900">Marketingowe</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Umożliwiają działania reklamowe, remarketing i mierzenie skuteczności kampanii.
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
                    className="mt-1 h-5 w-5 rounded border-gray-300"
                  />
                </div>
              </label>

              <label className="block rounded-2xl border border-gray-200 p-4 cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="pr-2">
                    <h3 className="font-medium text-gray-900">Funkcjonalne</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Zapamiętują preferencje użytkownika i poprawiają wygodę korzystania z serwisu.
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
                    className="mt-1 h-5 w-5 rounded border-gray-300"
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="sticky bottom-0 border-t border-gray-200 bg-white px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Wróć
              </button>

              <button
                type="button"
                onClick={onSave}
                className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
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