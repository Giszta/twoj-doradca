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

    return () => {
      window.removeEventListener("open-cookie-settings", handler);
    };
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
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 shadow-2xl backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-base font-semibold text-gray-900">
                Używamy plików cookies
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Używamy plików cookies i podobnych technologii, aby zapewnić
                prawidłowe działanie strony, analizować ruch oraz prowadzić
                działania marketingowe. Możesz zaakceptować wszystkie cookies,
                odrzucić opcjonalne lub dostosować ustawienia. Szczegóły
                znajdziesz w{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="text-blue-600 underline"
                >
                  Polityce Prywatności
                </Link>{" "}
                oraz{" "}
                <Link href="/regulamin" className="text-blue-600 underline">
                  Regulaminie
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <button
                type="button"
                onClick={() => setSettingsOpen(true)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Ustawienia
              </button>

              <button
                type="button"
                onClick={handleRejectOptional}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Odrzuć opcjonalne
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Akceptuj wszystkie
              </button>
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