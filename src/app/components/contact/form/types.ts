export const productOptions = [
  "Pompy ciepła gruntowe",
  "Pompy ciepła powietrzne",
  "Fotowoltaika",
  "Ogrzewanie podłogowe",
  "Rekuperacja",
  "Magazyn energii",
] as const;

export type ProductOption = (typeof productOptions)[number];

export type QuestionConfig = {
  question: string;
  options: readonly string[];
};

export type ContactFormData = {
  product: ProductOption | "";
  answer1: string;
  answer2: string;
  answer3: string;
  area: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

export type ContactField = keyof ContactFormData;

export type ContactStep =
  | { type: "product"; title: string; field: "product"; options: readonly ProductOption[] }
  | { type: "question"; title: string; questionIndex: 0 | 1 | 2; field: "answer1" | "answer2" | "answer3" }
  | { type: "area"; title: string; field: "area"; options: readonly string[] }
  | { type: "budget"; title: string; field: "budget"; options: readonly string[] }
  | { type: "timeline"; title: string; field: "timeline"; options: readonly string[] }
  | { type: "contact"; title: string };

export type SocialContact = {
  id: string;
  img: string;
  alt: string;
  platform: string;
  description: string;
  href: string;
  gradient: string;
  stats: string;
};