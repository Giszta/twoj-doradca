import { ContactFormData, ContactFormErrors, ContactField } from "./types";

export const initialFormData: ContactFormData = {
  product: "",
  answer1: "",
  answer2: "",
  answer3: "",
  area: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  consentRequired: false,
  consentEmailMarketing: false,
  consentPhoneMarketing: false,
  consentNewsletter: false,
};

export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export function isValidPhone(phone: string) {
  return /^\d{9}$/.test(phone.replace(/\s/g, ""));
}

export function validateField(
  field: ContactField,
  value: string | boolean
): string | undefined {
  if (
    field === "product" ||
    field === "answer1" ||
    field === "answer2" ||
    field === "answer3" ||
    field === "area" ||
    field === "budget" ||
    field === "timeline"
  ) {
    if (!value) return "To pole jest wymagane.";
  }

  if (field === "name" && typeof value === "string" && !value.trim()) {
    return "Imię i nazwisko jest wymagane.";
  }

  if (field === "email" && typeof value === "string") {
    if (!value.trim()) return "Adres e-mail jest wymagany.";
    if (!isValidEmail(value)) return "Niepoprawny adres e-mail.";
  }

  if (field === "phone" && typeof value === "string") {
    if (!value.trim()) return "Numer telefonu jest wymagany.";
    if (!isValidPhone(value)) return "Wpisz 9-cyfrowy numer telefonu.";
  }

  if (field === "consentRequired" && value !== true) {
    return "Musisz zaakceptować regulamin i politykę prywatności.";
  }

  return undefined;
}

export function validateContactData(
  data: ContactFormData
): ContactFormErrors {
  const nextErrors: ContactFormErrors = {};

  const nameError = validateField("name", data.name);
  const emailError = validateField("email", data.email);
  const phoneError = validateField("phone", data.phone);
  const consentError = validateField("consentRequired", data.consentRequired);

  if (nameError) nextErrors.name = nameError;
  if (emailError) nextErrors.email = emailError;
  if (phoneError) nextErrors.phone = phoneError;
  if (consentError) nextErrors.consentRequired = consentError;

  return nextErrors;
}