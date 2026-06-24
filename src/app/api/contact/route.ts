import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { productQuestions } from "@/app/components/contact/form/config";
import { ProductOption } from "@/app/components/contact/form/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      product,
      answers,
      answerDetails,
      name,
      email,
      phone,
      postalCode,
      preferredContactHours,
      message,
      consentRequired,
      consentEmailMarketing,
      consentPhoneMarketing,
      consentNewsletter,
    } = data;

    if (!product || !name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Brak wymaganych danych." },
        { status: 400 },
      );
    }

    if (!consentRequired) {
      return NextResponse.json(
        {
          success: false,
          message: "Musisz zaakceptować regulamin i politykę prywatności.",
        },
        { status: 400 },
      );
    }

    const questions = productQuestions[product as ProductOption] ?? [];

    const answersHtml = questions
      .map((q, i) => {
        const answer = (answers as string[])[i] || "-";
        const detail = (answerDetails as Record<number, string>)[i];
        return `
          <tr>
            <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">${q.question}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;font-size:13px;">${answer}${detail ? `<br/><span style="font-weight:400;color:#6b7280;font-size:12px;">↳ ${detail}</span>` : ""}</td>
          </tr>`;
      })
      .join("");

    const html = `
<!DOCTYPE html>
<html lang="pl">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:system-ui,sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.1);">

    <div style="background:linear-gradient(135deg,#2563eb,#06b6d4);padding:28px 32px;">
      <p style="margin:0;color:rgba(255,255,255,.8);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Twój Doradca OZE</p>
      <h1 style="margin:6px 0 0;color:#fff;font-size:22px;">Nowe zapytanie z formularza</h1>
    </div>

    <div style="padding:28px 32px;">

      <h2 style="margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#6b7280;">Zainteresowanie</h2>
      <p style="margin:0 0 24px;font-size:18px;font-weight:700;color:#1d4ed8;">${product}</p>

      ${
        answersHtml
          ? `
      <h2 style="margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#6b7280;">Odpowiedzi</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        ${answersHtml}
      </table>`
          : ""
      }

      <h2 style="margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#6b7280;">Dane kontaktowe</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">Imię i nazwisko</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;font-size:13px;">${name}</td></tr>
        <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">E-mail</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:13px;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
        <tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:13px;"><a href="tel:${phone}" style="color:#2563eb;">${phone}</a></td></tr>
        ${postalCode ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;">Kod pocztowy</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:13px;">${postalCode}</td></tr>` : ""}
        ${preferredContactHours ? `<tr><td style="padding:8px 12px;color:#6b7280;font-size:13px;">Preferowane godziny</td><td style="padding:8px 12px;font-size:13px;">${preferredContactHours}</td></tr>` : ""}
      </table>

      ${
        message
          ? `
      <h2 style="margin:0 0 8px;font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#6b7280;">Dodatkowe informacje</h2>
      <p style="margin:0 0 24px;padding:12px;background:#f9fafb;border-radius:8px;font-size:13px;color:#374151;">${message}</p>`
          : ""
      }

      <h2 style="margin:0 0 8px;font-size:14px;text-transform:uppercase;letter-spacing:.05em;color:#6b7280;">Zgody marketingowe</h2>
      <p style="margin:0;font-size:12px;color:#9ca3af;">
        E-mail: ${consentEmailMarketing ? "✓" : "✗"} &nbsp;
        Telefon: ${consentPhoneMarketing ? "✓" : "✗"} &nbsp;
        Newsletter: ${consentNewsletter ? "✓" : "✗"}
      </p>

    </div>

    <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af;">
      Wysłano: ${new Date().toLocaleString("pl-PL")} &nbsp;·&nbsp; twojdoradcaoze.pl
    </div>
  </div>
</body>
</html>`;

    const { error } = await resend.emails.send({
      from: "Formularz OZE <formularz@twojdoradcaoze.pl>",
      to: ["adigi96@gmail.com"],
      subject: `Nowe zapytanie — ${product} | ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Błąd podczas wysyłania wiadomości." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Formularz został wysłany pomyślnie",
    });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { success: false, message: "Wystąpił błąd podczas wysyłania formularza" },
      { status: 500 },
    );
  }
}
