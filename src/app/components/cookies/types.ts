export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  updatedAt: string;
};

export const COOKIE_CONSENT_KEY = "cookie-consent";
export const COOKIE_SETTINGS_EVENT = "open-cookie-settings";