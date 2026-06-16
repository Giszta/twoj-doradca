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
  followUp?: {
    triggerOption: string;
    label?: string;
    placeholder?: string;
  };
  showIf?: {
    questionIndex: number;
    answer: string;
  };
};

export type ContactFormData = {
  product: ProductOption | "";
  answers: string[];
  answerDetails: Record<number, string>;
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  preferredContactHours: string;
  message: string;
  consentRequired: boolean;
  consentEmailMarketing: boolean;
  consentPhoneMarketing: boolean;
  consentNewsletter: boolean;
};

export type ContactFormErrors = Partial<Record<string, string>>;

export type ContactField = keyof ContactFormData;

export type ContactStep =
  | {
      type: "product";
      title: string;
      field: "product";
      options: readonly ProductOption[];
    }
  | {
      type: "question";
      title: string;
      questionIndex: number;
    }
  | {
      type: "contact";
      title: string;
    };

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
