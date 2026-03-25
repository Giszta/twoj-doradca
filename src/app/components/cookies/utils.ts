import { COOKIE_CONSENT_KEY, CookieConsent } from "./types";

function isCookieConsent(value: unknown): value is CookieConsent {
  if (!value || typeof value !== "object") return false;

  const consent = value as Record<string, unknown>;

  return (
    consent.necessary === true &&
    typeof consent.analytics === "boolean" &&
    typeof consent.marketing === "boolean" &&
    typeof consent.functional === "boolean" &&
    typeof consent.updatedAt === "string"
  );
}

export function getDefaultConsent(): CookieConsent {
  return {
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
    updatedAt: new Date().toISOString(),
  };
}

export function getAcceptedConsent(): CookieConsent {
  return {
    necessary: true,
    analytics: true,
    marketing: true,
    functional: true,
    updatedAt: new Date().toISOString(),
  };
}

export function saveConsent(consent: CookieConsent) {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
}

export function loadConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!raw) return null;

  try {
    const parsed: unknown = JSON.parse(raw);
    return isCookieConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(COOKIE_CONSENT_KEY);
}