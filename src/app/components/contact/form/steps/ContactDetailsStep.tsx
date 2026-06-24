import Link from "next/link";
import CheckboxField from "../fields/CheckboxField";
import TextField from "../fields/TextField";
import { ContactFormData, ContactFormErrors } from "../types";
import { validateField } from "../utils";

type Props = {
  data: ContactFormData;
  errors: ContactFormErrors;
  onChange: (field: string, value: string | boolean) => void;
  onBlurField: (field: string, value: string | boolean) => void;
};

export default function ContactDetailsStep({ data, errors, onChange, onBlurField }: Props) {
  return (
    <div className="grid gap-4">
      <h2 className="mt-8 font-semibold sm:text-lg">Twoje dane kontaktowe</h2>

      <TextField
        id="contact-name"
        label="Imię i nazwisko"
        value={data.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => onChange("name", value)}
        onBlur={(value) => onBlurField("name", value)}
      />

      <TextField
        id="contact-email"
        label="Adres e-mail"
        type="email"
        value={data.email}
        error={errors.email}
        autoComplete="email"
        placeholder="jan@example.pl"
        onChange={(value) => onChange("email", value)}
        onBlur={(value) => onBlurField("email", value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextField
          id="contact-phone"
          label="Numer telefonu"
          type="tel"
          value={data.phone}
          error={errors.phone}
          autoComplete="tel"
          placeholder="600 123 456"
          onChange={(value) => onChange("phone", value)}
          onBlur={(value) => onBlurField("phone", value)}
        />

        <TextField
          id="contact-postal-code"
          label="Kod pocztowy"
          value={data.postalCode}
          error={errors.postalCode}
          autoComplete="postal-code"
          placeholder="00-001"
          onChange={(value) => onChange("postalCode", value)}
          onBlur={(value) => onBlurField("postalCode", value)}
        />
      </div>

      <TextField
        id="contact-preferred-hours"
        label="Preferowane godziny kontaktu (opcjonalnie)"
        value={data.preferredContactHours}
        placeholder="np. 9:00–17:00"
        onChange={(value) => onChange("preferredContactHours", value)}
      />

      <TextField
        id="contact-message"
        label="Dodatkowe informacje (opcjonalnie)"
        value={data.message}
        multiline
        rows={3}
        onChange={(value) => onChange("message", value)}
      />

      <div className="mt-4 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
        <CheckboxField
          id="consent-required"
          checked={data.consentRequired}
          error={errors.consentRequired}
          onChange={(checked) => {
            onChange("consentRequired", checked);
            onBlurField("consentRequired", checked);
          }}
        >
          Oświadczam, że zapoznałem się/zapoznałam się z{" "}
          <Link href="/terms" className="text-blue-600 underline">
            Regulaminem
          </Link>{" "}
          i{" "}
          <Link href="/privacyPolicy" className="text-blue-600 underline">
            Politykę Prywatności
          </Link>{" "}
          www.twojdoradcaoze.pl oraz zgadzam się na ich stosowanie i akceptuję
          ich treść.
        </CheckboxField>

        <CheckboxField
          id="consent-email-marketing"
          checked={data.consentEmailMarketing}
          onChange={(checked) => onChange("consentEmailMarketing", checked)}
        >
          Wyrażam zgodę na kierowanie na podany adres e-mail informacji o
          usługach, promocjach i nowościach przez Twój Doradca OZE na zasadach
          wskazanych w Regulaminie i Polityce Prywatności.
        </CheckboxField>

        <CheckboxField
          id="consent-phone-marketing"
          checked={data.consentPhoneMarketing}
          onChange={(checked) => onChange("consentPhoneMarketing", checked)}
        >
          Wyrażam zgodę na kierowanie na podany numer telefonu informacji o
          usługach, promocjach i nowościach przez Twój Doradca OZE na zasadach
          wskazanych w Regulaminie i Polityce Prywatności.
        </CheckboxField>

        <CheckboxField
          id="consent-newsletter"
          checked={data.consentNewsletter}
          onChange={(checked) => onChange("consentNewsletter", checked)}
        >
          Wyrażam zgodę na kierowanie na podany adres e-mail informacji
          newslettera od Twój Doradca OZE na zasadach wskazanych w Regulaminie i
          Polityce Prywatności.
        </CheckboxField>
      </div>

      <p className="mt-2 text-xs text-gray-500">
        🔒 Twoje dane są bezpieczne – nie udostępniamy ich osobom trzecim.
      </p>
    </div>
  );
}
