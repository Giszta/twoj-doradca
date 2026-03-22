"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CookieSettingsModal from "./CookieSettingsModal";
import { CookieConsent } from "./types";
import {
  getAcceptedConsent,
  getDefaultConsent,
  loadConsent,
  saveConsent,
} from "./utils";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(getDefaultConsent());

  useEffect(() => {
    const savedConsent = loadConsent();

    if (!savedConsent) {
      setVisible(true);
      setConsent(getDefaultConsent());
    } else {
      setConsent(savedConsent);
      setVisible(false);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = () => {
      const savedConsent = loadConsent();
      setConsent(savedConsent ?? getDefaultConsent());
      setVisible(true);
      setSettingsOpen(true);
    };

    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  const handleAcceptAll = () => {
    const next = getAcceptedConsent();
    setConsent(next);
    saveConsent(next);
    setVisible(false);
    setSettingsOpen(false);
  };

  const handleRejectOptional = () => {
    const next = getDefaultConsent();
    setConsent(next);
    saveConsent(next);
    setVisible(false);
    setSettingsOpen(false);
  };

  const handleSaveSettings = () => {
    const next: CookieConsent = {
      ...consent,
      necessary: true,
      updatedAt: new Date().toISOString(),
    };

    setConsent(next);
    saveConsent(next);
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {visible && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur">
            <div className="px-4 py-4 sm:px-6 sm:py-5">
              <div className="max-w-3xl">
                <h2 className="text-sm sm:text-base font-semibold text-gray-900">
                  Używamy plików cookies
                </h2>

                <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-600">
                  Używamy cookies, aby strona działała poprawnie, analizować ruch
                  i ulepszać marketing. Możesz zaakceptować wszystkie, odrzucić
                  opcjonalne albo dostosować ustawienia.
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  Szczegóły w{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-blue-600 underline underline-offset-2"
                  >
                    Polityce Prywatności
                  </Link>{" "}
                  i{" "}
                  <Link
                    href="/regulamin"
                    className="text-blue-600 underline underline-offset-2"
                  >
                    Regulaminie
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:justify-end">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="order-1 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:order-3 sm:w-auto"
                >
                  Akceptuj wszystkie
                </button>

                <button
                  type="button"
                  onClick={handleRejectOptional}
                  className="order-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:w-auto"
                >
                  Odrzuć opcjonalne
                </button>

                <button
                  type="button"
                  onClick={() => setSettingsOpen(true)}
                  className="order-3 w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:order-1 sm:w-auto sm:border sm:border-gray-300"
                >
                  Dostosuj ustawienia
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CookieSettingsModal
        open={settingsOpen}
        consent={consent}
        onClose={() => setSettingsOpen(false)}
        onChange={setConsent}
        onSave={handleSaveSettings}
      />
    </>
  );
}