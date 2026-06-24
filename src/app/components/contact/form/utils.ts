import { ContactFormData, ContactFormErrors } from "./types";

export const initialFormData: ContactFormData = {
  product: "",
  answers: [],
  answerDetails: {},
  name: "",
  email: "",
  phone: "",
  postalCode: "",
  preferredContactHours: "",
  message: "",
  consentRequired: false,
  consentEmailMarketing: false,
  consentPhoneMarketing: false,
  consentNewsletter: false,
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isValidPhone(phone: string) {
  // Accept: 9 digits, optionally prefixed with +48 or 48, spaces/dashes allowed
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  return /^(\+?48)?[4-9]\d{8}$/.test(cleaned);
}

export function isValidPostalCode(code: string) {
  return /^\d{2}-\d{3}$/.test(code.trim());
}

export function validateField(
  field: string,
  value: string | boolean
): string | undefined {
  if (field === "product") {
    if (!value) return "Wybierz produkt, który Cię interesuje.";
  }

  if (field === "name" && typeof value === "string") {
    if (!value.trim()) return "Wpisz imię i nazwisko.";
    if (value.trim().length < 3) return "Imię i nazwisko jest za krótkie.";
  }

  if (field === "email" && typeof value === "string") {
    if (!value.trim()) return "Wpisz adres e-mail.";
    if (!isValidEmail(value)) return "Niepoprawny adres e-mail (np. jan@example.pl).";
  }

  if (field === "phone" && typeof value === "string") {
    if (!value.trim()) return "Wpisz numer telefonu.";
    if (!isValidPhone(value)) return "Wpisz poprawny numer telefonu (9 cyfr, np. 600 123 456).";
  }

  if (field === "postalCode" && typeof value === "string") {
    if (value.trim() && !isValidPostalCode(value)) {
      return "Wpisz kod pocztowy w formacie XX-XXX (np. 00-001).";
    }
  }

  if (field === "consentRequired" && value !== true) {
    return "Akceptacja regulaminu jest wymagana do wysłania formularza.";
  }

  return undefined;
}

export function validateAnswerAtIndex(
  answers: string[],
  index: number
): string | undefined {
  if (!answers[index]) return "Wybierz jedną z opcji.";
  return undefined;
}

export function validateContactData(data: ContactFormData): ContactFormErrors {
  const nextErrors: ContactFormErrors = {};

  const nameError = validateField("name", data.name);
  const emailError = validateField("email", data.email);
  const phoneError = validateField("phone", data.phone);
  const postalCodeError = validateField("postalCode", data.postalCode);
  const consentError = validateField("consentRequired", data.consentRequired);

  if (nameError) nextErrors.name = nameError;
  if (emailError) nextErrors.email = emailError;
  if (phoneError) nextErrors.phone = phoneError;
  if (postalCodeError) nextErrors.postalCode = postalCodeError;
  if (consentError) nextErrors.consentRequired = consentError;

  return nextErrors;
}
