export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  updatedAt: string;
};

export const COOKIE_CONSENT_KEY = "cookie-consent";