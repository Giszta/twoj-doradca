import { ContactFormData, ContactFormErrors } from "../types";

type Props = {
  data: ContactFormData;
  errors: ContactFormErrors;
  onChange: (field: keyof ContactFormData, value: string) => void;
};

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="text-red-500 text-sm">
      {error}
    </p>
  );
}

export default function ContactDetailsStep({ data, errors, onChange }: Props) {
  return (
    <div className="grid gap-4">
      <h2 className="sm:text-lg font-semibold mt-8">8. Twoje dane kontaktowe</h2>

      <div className="grid gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">
          Imię i nazwisko
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={`w-full border rounded-lg px-3 py-2 focus:ring-2 text-xs sm:text-base ${
            errors.name
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        <FieldError id="contact-name-error" error={errors.name} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">
          Adres e-mail
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={`w-full border rounded-lg px-3 py-2 focus:ring-2 text-xs sm:text-base ${
            errors.email
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        <FieldError id="contact-email-error" error={errors.email} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-phone" className="text-sm font-medium text-gray-700">
          Numer telefonu
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className={`w-full border rounded-lg px-3 py-2 focus:ring-2 text-xs sm:text-base ${
            errors.phone
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        <FieldError id="contact-phone-error" error={errors.phone} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-gray-700">
          Dodatkowe informacje
        </label>
        <textarea
          id="contact-message"
          rows={3}
          value={data.message}
          onChange={(e) => onChange("message", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-xs sm:text-base"
        />
      </div>

      <p className="text-xs text-gray-500 mt-2">
        🔒 Twoje dane są bezpieczne – nie udostępniamy ich osobom trzecim.
      </p>
    </div>
  );
}