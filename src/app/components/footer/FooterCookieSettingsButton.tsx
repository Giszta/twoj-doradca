"use client";

import { openCookieSettings } from "../../components/cookies/openCookieSettings";

export default function FooterCookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-sm text-gray-600 hover:text-blue-600 hover:underline"
    >
      Ustawienia cookies
    </button>
  );
}