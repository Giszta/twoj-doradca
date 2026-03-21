// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';

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
    } = data;

    // Get question labels based on product
    const questionLabels = getQuestionLabels(product);

    // Format email content
    const emailContent = `
NOWE ZAPYTANIE Z FORMULARZA KONTAKTOWEGO
==========================================

ZAINTERESOWANIE:
${product}

SZCZEGÓŁY PRODUKTU:
${questionLabels[0]}: ${answer1}
${questionLabels[1]}: ${answer2}
${questionLabels[2]}: ${answer3}

INFORMACJE OGÓLNE:
Powierzchnia domu: ${area}
Budżet: ${budget}
Termin realizacji: ${timeline}

DANE KONTAKTOWE:
Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone}

${message ? `DODATKOWE INFORMACJE:\n${message}` : ''}

==========================================
Data wysłania: ${new Date().toLocaleString('pl-PL')}
    `.trim();

    // TODO: Configure your email service here
    // Option 1: Resend
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'formularz@twojdomena.pl',
    //   to: process.env.EMAIL_TO!,
    //   subject: `Nowe zapytanie: ${product}`,
    //   text: emailContent,
    // });

    // Option 2: Nodemailer
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransporter({...});
    // await transporter.sendMail({...});

    // For now, just log it
    console.log('=== NEW FORM SUBMISSION ===');
    console.log(emailContent);
    console.log('===========================');

    return NextResponse.json({ 
      success: true, 
      message: 'Formularz został wysłany pomyślnie' 
    });

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Wystąpił błąd podczas wysyłania formularza' },
      { status: 500 }
    );
  }
}

// Helper function to get question labels
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
    "Fotowoltaika": [
      "Zużycie prądu miesięcznie",
      "Rodzaj dachu",
      "Kierunek połaci dachowej",
    ],
    "Ogrzewanie podłogowe": [
      "Rodzaj podłogi",
      "Liczba pomieszczeń",
      "Stan budynku",
    ],
    "Rekuperacja": [
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