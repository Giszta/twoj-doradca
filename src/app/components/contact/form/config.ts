import { ProductOption, QuestionConfig } from "./types";

const OTHER_PRODUCTS_FOLLOW_UP = {
  triggerOption: "Tak",
  label: "Jakie produkty Cię interesują?",
  placeholder: "np. fotowoltaika, ogrzewanie podłogowe, magazyn energii...",
} as const;

export const productQuestions: Record<
  ProductOption,
  readonly QuestionConfig[]
> = {
  "Pompy ciepła gruntowe": [
    {
      question:
        "Czy budynek, w którym planujesz pompę ciepła, jest nowy (w trakcie budowy lub świeżo wybudowany)?",
      options: ["Tak", "Nie (modernizowany)"],
    },
    {
      question: "Kiedy planujesz skorzystać z oferty na pompę ciepła?",
      options: [
        "Do 7 dni – jestem gotowy, proszę o kontakt jak najszybciej",
        "W ciągu 2–3 tygodni – potrzebuję krótkiego czasu na decyzję",
        "Do 3 miesięcy",
        "Nie jestem jeszcze zdecydowany – proszę o więcej informacji",
      ],
    },
    {
      question: "Jakiej mocy pompy ciepła potrzebujesz?",
      options: ["< 5 kW", "5–10 kW", "10–15 kW", "> 15 kW"],
    },
    {
      question: "Na jakim etapie budowy jesteś aktualnie?",
      options: [
        "Wybór projektu / Fundamenty",
        "Stan surowy otwarty",
        "Stan surowy zamknięty",
        "Wylewki i tynki zrobione",
      ],
    },
    {
      question:
        "Czy oprócz pompy ciepła interesujesz się innymi produktami?",
      options: ["Tak", "Nie"],
      followUp: OTHER_PRODUCTS_FOLLOW_UP,
    },
    {
      question:
        "Jaka powierzchnia budynku (w m²) ma być ogrzewana pompą ciepła?",
      options: ["< 100 m²", "100–150 m²", "150–200 m²", "> 200 m²"],
    },
  ],
  "Pompy ciepła powietrzne": [
    {
      question:
        "Czy budynek, w którym planujesz pompę ciepła, jest nowy (w trakcie budowy lub świeżo wybudowany)?",
      options: ["Tak", "Nie (modernizowany)"],
    },
    {
      question: "Kiedy planujesz skorzystać z oferty na pompę ciepła?",
      options: [
        "Do 7 dni – jestem gotowy, proszę o kontakt jak najszybciej",
        "W ciągu 2–3 tygodni – potrzebuję krótkiego czasu na decyzję",
        "Do 3 miesięcy",
        "Nie jestem jeszcze zdecydowany – proszę o więcej informacji",
      ],
    },
    {
      question: "Jakiej mocy pompy ciepła potrzebujesz?",
      options: ["< 5 kW", "5–10 kW", "10–15 kW", "> 15 kW"],
    },
    {
      question: "Na jakim etapie budowy jesteś aktualnie?",
      options: [
        "Wybór projektu / Fundamenty",
        "Stan surowy otwarty",
        "Stan surowy zamknięty",
        "Wylewki i tynki zrobione",
      ],
    },
    {
      question:
        "Czy oprócz pompy ciepła interesujesz się innymi produktami?",
      options: ["Tak", "Nie"],
      followUp: OTHER_PRODUCTS_FOLLOW_UP,
    },
  ],
  Fotowoltaika: [
    {
      question: "Czy jesteś właścicielem budynku jednorodzinnego?",
      options: ["Tak", "Nie"],
    },
    {
      question: "Czy posiadasz już instalację fotowoltaiczną?",
      options: ["Tak", "Nie"],
    },
    {
      question: "Czy chcesz rozbudować instalację fotowoltaiczną?",
      options: ["Tak", "Nie"],
      showIf: { questionIndex: 1, answer: "Tak" },
    },
    {
      question: "Czy posiadasz magazyn energii?",
      options: ["Tak", "Nie"],
      showIf: { questionIndex: 1, answer: "Tak" },
    },
    {
      question: "Na jakiej konstrukcji chcesz zamontować fotowoltaikę?",
      options: [
        "Blachodachówka",
        "Blachotrapez",
        "Dachówka",
        "Instalacja gruntowa",
        "Dach płaski",
      ],
    },
    {
      question: "Ile płacisz aktualnie za prąd?",
      options: ["< 500 zł", "500–1000 zł", "1000–1500 zł", "> 1500 zł"],
    },
    {
      question: "Kiedy planujesz skorzystać z oferty na fotowoltaikę?",
      options: [
        "Do 7 dni – jestem gotowy, proszę o kontakt jak najszybciej",
        "W ciągu 2–3 tygodni – potrzebuję krótkiego czasu na decyzję",
        "Do 3 miesięcy",
        "Nie jestem jeszcze zdecydowany – proszę o więcej informacji",
      ],
    },
    {
      question:
        "Czy oprócz fotowoltaiki interesujesz się innymi produktami?",
      options: ["Tak", "Nie"],
      followUp: OTHER_PRODUCTS_FOLLOW_UP,
    },
  ],
  "Ogrzewanie podłogowe": [
    {
      question:
        "Czy budynek, w którym planujesz instalację, jest nowy (w trakcie budowy lub świeżo wybudowany)?",
      options: ["Tak", "Nie (modernizowany)"],
    },
    {
      question: "Jaka jest powierzchnia budynku?",
      options: ["< 100 m²", "100–150 m²", "150–200 m²", "> 200 m²"],
    },
    {
      question: "Kiedy planujesz skorzystać z oferty na ogrzewanie podłogowe?",
      options: [
        "Do 7 dni – jestem gotowy, proszę o kontakt jak najszybciej",
        "W ciągu 2–3 tygodni – potrzebuję krótkiego czasu na decyzję",
        "Do 3 miesięcy",
        "Nie jestem jeszcze zdecydowany – proszę o więcej informacji",
      ],
    },
    {
      question:
        "Czy oprócz ogrzewania podłogowego interesujesz się innymi produktami?",
      options: ["Tak", "Nie"],
      followUp: OTHER_PRODUCTS_FOLLOW_UP,
    },
  ],
  Rekuperacja: [
    {
      question:
        "Czy budynek, w którym planujesz instalację, jest nowy (w trakcie budowy lub świeżo wybudowany)?",
      options: ["Tak", "Nie (modernizowany)"],
    },
    {
      question:
        "Czy oprócz rekuperacji interesujesz się innymi produktami?",
      options: ["Tak", "Nie"],
      followUp: OTHER_PRODUCTS_FOLLOW_UP,
    },
  ],
  "Magazyn energii": [
    {
      question: "Czy posiadasz już instalację fotowoltaiczną?",
      options: ["Tak", "Nie"],
    },
    {
      question: "Jaka pojemność magazynu Cię interesuje?",
      options: ["< 10 kWh", "10–15 kWh", "15–20 kWh", "> 20 kWh"],
    },
    {
      question: "Kiedy planujesz skorzystać z oferty na magazyn energii?",
      options: [
        "Do 7 dni – jestem gotowy, proszę o kontakt jak najszybciej",
        "W ciągu 2–3 tygodni – potrzebuję krótkiego czasu na decyzję",
        "Do 3 miesięcy",
        "Nie jestem jeszcze zdecydowany – proszę o więcej informacji",
      ],
    },
    {
      question:
        "Czy oprócz magazynu energii interesujesz się innymi produktami?",
      options: ["Tak", "Nie"],
      followUp: OTHER_PRODUCTS_FOLLOW_UP,
    },
  ],
};
