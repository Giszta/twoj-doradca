import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      product,
      answer1,
      answer2,
      answer3,
      area,
      budget,
      timeline,
      name,
      email,
      phone,
      message,
      consentRequired,
      consentEmailMarketing,
      consentPhoneMarketing,
      consentNewsletter,
    } = data;

    if (!product || !area || !budget || !timeline || !name || !email || !phone) {
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

    const questionLabels = getQuestionLabels(product);

    const emailContent = `
NOWE ZAPYTANIE Z FORMULARZA KONTAKTOWEGO
==========================================

ZAINTERESOWANIE:
${product}

SZCZEGÓŁY PRODUKTU:
${questionLabels[0]}: ${answer1 || "-"}
${questionLabels[1]}: ${answer2 || "-"}
${questionLabels[2]}: ${answer3 || "-"}

INFORMACJE OGÓLNE:
Powierzchnia domu: ${area}
Budżet: ${budget}
Termin realizacji: ${timeline}

DANE KONTAKTOWE:
Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone}

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

function getQuestionLabels(product: string): string[] {
  const questions: Record<string, string[]> = {
    "Pompy ciepła gruntowe": [
      "Rodzaj gruntu",
      "Powierzchnia działki",
      "Obecne źródło ogrzewania",
    ],
    "Pompy ciepła powietrzne": [
      "Miejsce montażu jednostki zewnętrznej",
      "Funkcja chłodzenia",
      "Obecne źródło ogrzewania",
    ],
    Fotowoltaika: [
      "Zużycie prądu miesięcznie",
      "Rodzaj dachu",
      "Kierunek połaci dachowej",
    ],
    "Ogrzewanie podłogowe": [
      "Rodzaj podłogi",
      "Liczba pomieszczeń",
      "Stan budynku",
    ],
    Rekuperacja: [
      "Kubatura budynku",
      "Liczba kondygnacji",
      "Alergicy w domu",
    ],
    "Magazyn energii": [
      "Instalacja fotowoltaiczna",
      "Pojemność magazynu",
      "Główny cel instalacji",
    ],
  };

  return questions[product] || ["Pytanie 1", "Pytanie 2", "Pytanie 3"];
}