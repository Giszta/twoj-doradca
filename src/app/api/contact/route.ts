import { NextRequest, NextResponse } from "next/server";
import { productQuestions } from "@/app/components/contact/form/config";
import { ProductOption } from "@/app/components/contact/form/types";

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
        { status: 400 }
      );
    }

    if (!consentRequired) {
      return NextResponse.json(
        {
          success: false,
          message: "Musisz zaakceptować regulamin i politykę prywatności.",
        },
        { status: 400 }
      );
    }

    const questions = productQuestions[product as ProductOption] ?? [];
    const answerLines = questions
      .map((q, i) => {
        const answer = (answers as string[])[i] || "-";
        const detail = (answerDetails as Record<number, string>)[i];
        const detailLine = detail ? `\n   Szczegóły: ${detail}` : "";
        return `${q.question}\n→ ${answer}${detailLine}`;
      })
      .join("\n\n");

    const emailContent = `
NOWE ZAPYTANIE Z FORMULARZA KONTAKTOWEGO
==========================================

ZAINTERESOWANIE:
${product}

ODPOWIEDZI:
${answerLines || "-"}

DANE KONTAKTOWE:
Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone}
Kod pocztowy: ${postalCode || "-"}
Preferowane godziny kontaktu: ${preferredContactHours || "-"}

${message ? `DODATKOWE INFORMACJE:\n${message}\n` : ""}

ZGODY:
Akceptacja Regulaminu i Polityki Prywatności: ${consentRequired ? "TAK" : "NIE"}
Zgoda e-mail marketing: ${consentEmailMarketing ? "TAK" : "NIE"}
Zgoda telefon marketing: ${consentPhoneMarketing ? "TAK" : "NIE"}
Zgoda newsletter: ${consentNewsletter ? "TAK" : "NIE"}

==========================================
Data wysłania: ${new Date().toLocaleString("pl-PL")}
    `.trim();

    console.log("=== NEW FORM SUBMISSION ===");
    console.log(emailContent);
    console.log("===========================");

    return NextResponse.json({
      success: true,
      message: "Formularz został wysłany pomyślnie",
    });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { success: false, message: "Wystąpił błąd podczas wysyłania formularza" },
      { status: 500 }
    );
  }
}
