import { ContactStep, ProductOption, QuestionConfig, productOptions } from "./types";

export const timelineOptions = [
  "Jak najszybciej",
  "1-3 miesiące",
  "3-6 miesięcy",
  "Powyżej 6 miesięcy",
] as const;

export const budgetOptions = [
  "< 30 000 zł",
  "30-50 tys. zł",
  "50-100 tys. zł",
  "> 100 tys. zł",
] as const;

export const areaSizeOptions = [
  "< 100 m²",
  "100-150 m²",
  "150-200 m²",
  "> 200 m²",
] as const;

export const progressLabels = [
  "Produkt",
  "Pyt. 1",
  "Pyt. 2",
  "Pyt. 3",
  "Metraż",
  "Budżet",
  "Termin",
  "Kontakt",
] as const;

export const productQuestions: Record<ProductOption, readonly QuestionConfig[]> = {
  "Pompy ciepła gruntowe": [
    {
      question: "Jaki rodzaj gruntu posiadasz?",
      options: ["Glina", "Piasek", "Skała", "Nie wiem"],
    },
    {
      question: "Jaka powierzchnia działki?",
      options: ["< 500 m²", "500-1000 m²", "1000-2000 m²", "> 2000 m²"],
    },
    {
      question: "Obecne źródło ogrzewania?",
      options: ["Gaz", "Węgiel", "Olej", "Prąd", "Inne"],
    },
  ],
  "Pompy ciepła powietrzne": [
    {
      question: "Miejsce montażu jednostki zewnętrznej?",
      options: ["Przy ścianie domu", "W ogrodzie", "Na dachu", "Nie wiem"],
    },
    {
      question: "Czy potrzebujesz funkcji chłodzenia?",
      options: ["Tak", "Nie", "Nie jestem pewien"],
    },
    {
      question: "Obecne źródło ogrzewania?",
      options: ["Gaz", "Węgiel", "Olej", "Prąd", "Inne"],
    },
  ],
  Fotowoltaika: [
    {
      question: "Średnie zużycie prądu miesięcznie?",
      options: ["< 200 kWh", "200-400 kWh", "400-600 kWh", "> 600 kWh"],
    },
    {
      question: "Rodzaj dachu?",
      options: [
        "Skośny (dachówka)",
        "Skośny (blachodachówka)",
        "Płaski",
        "Inne",
      ],
    },
    {
      question: "Kierunek połaci dachowej?",
      options: ["Południe", "Południowy-Wschód", "Południowy-Zachód", "Inne"],
    },
  ],
  "Ogrzewanie podłogowe": [
    {
      question: "Rodzaj podłogi do ogrzewania?",
      options: ["Płytki", "Panele", "Drewno", "Kamień", "Inne"],
    },
    {
      question: "Ile pomieszczeń do ogrzania?",
      options: ["1-3", "4-6", "7-10", "> 10"],
    },
    {
      question: "Stan budynku?",
      options: ["Nowy budynek", "Modernizacja", "Remont generalny"],
    },
  ],
  Rekuperacja: [
    {
      question: "Kubatura budynku?",
      options: ["< 300 m³", "300-500 m³", "500-800 m³", "> 800 m³"],
    },
    {
      question: "Liczba kondygnacji?",
      options: ["1", "2", "3", "> 3"],
    },
    {
      question: "Czy w domu są alergicy?",
      options: ["Tak", "Nie"],
    },
  ],
  "Magazyn energii": [
    {
      question: "Czy posiadasz już instalację fotowoltaiczną?",
      options: ["Tak", "Nie", "Planuję montaż"],
    },
    {
      question: "Jaka pojemność magazynu Cię interesuje?",
      options: ["< 5 kWh", "5-10 kWh", "10-15 kWh", "> 15 kWh"],
    },
    {
      question: "Główny cel instalacji?",
      options: [
        "Niezależność energetyczna",
        "Obniżenie rachunków",
        "Ochrona przed blackoutem",
      ],
    },
  ],
};

export const formSteps: readonly ContactStep[] = [
  {
    type: "product",
    title: "1. Czym się interesujesz?",
    field: "product",
    options: productOptions,
  },
  {
    type: "question",
    title: "2. Pytanie 1",
    questionIndex: 0,
    field: "answer1",
  },
  {
    type: "question",
    title: "3. Pytanie 2",
    questionIndex: 1,
    field: "answer2",
  },
  {
    type: "question",
    title: "4. Pytanie 3",
    questionIndex: 2,
    field: "answer3",
  },
  {
    type: "area",
    title: "5. Powierzchnia domu do ogrzania?",
    field: "area",
    options: areaSizeOptions,
  },
  {
    type: "budget",
    title: "6. Planowany budżet?",
    field: "budget",
    options: budgetOptions,
  },
  {
    type: "timeline",
    title: "7. Preferowany termin realizacji?",
    field: "timeline",
    options: timelineOptions,
  },
  {
    type: "contact",
    title: "8. Twoje dane kontaktowe",
  },
];