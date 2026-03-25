"use client";

import { openCookieSettings } from "../../components/cookies/openCookieSettings";

export default function FooterCookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-sm text-gray-600 hover:text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
    >
      Ustawienia cookies
    </button>
  );
}