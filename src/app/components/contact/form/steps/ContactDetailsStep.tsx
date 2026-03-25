import Link from "next/link";
import CheckboxField from "../fields/CheckboxField";
import TextField from "../fields/TextField";
import { ContactFormData, ContactFormErrors } from "../types";

type Props = {
  data: ContactFormData;
  errors: ContactFormErrors;
  onChange: (field: keyof ContactFormData, value: string | boolean) => void;
};

export default function ContactDetailsStep({ data, errors, onChange }: Props) {
  return (
    <div className="grid gap-4">
      <h2 className="mt-8 font-semibold sm:text-lg">
        8. Twoje dane kontaktowe
      </h2>

      <TextField
        id="contact-name"
        label="Imię i nazwisko"
        value={data.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => onChange("name", value)}
      />

      <TextField
        id="contact-email"
        label="Adres e-mail"
        type="email"
        value={data.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => onChange("email", value)}
      />

      <TextField
        id="contact-phone"
        label="Numer telefonu"
        type="tel"
        value={data.phone}
        error={errors.phone}
        autoComplete="tel"
        onChange={(value) => onChange("phone", value)}
      />

      <TextField
        id="contact-message"
        label="Dodatkowe informacje"
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
          onChange={(checked) => onChange("consentRequired", checked)}
        >
          Oświadczam, że zapoznałem się/zapoznałam się z{" "}
          <Link href="/terms" className="text-blue-600 underline">
            Regulaminem
          </Link>{" "}
          i{" "}
          <Link href="/privacyPolicy" className="text-blue-600 underline">
            Polityką Prywatności
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