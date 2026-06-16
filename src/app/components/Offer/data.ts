import { Sun, Droplets, Wind, Home, Battery, Thermometer } from "lucide-react";
import { Product } from "./types";

export const products: Product[] = [
  {
    id: "pompy-gruntowe",
    name: "Pompy ciepła gruntowe",
    description: "Najwyższa efektywność i stabilna praca przez cały rok.",
    details:
      "Projekt, dokumentacja, odwierty, montaż i serwis. Wszystkie prace realizujemy własnymi ekipami, dzięki czemu masz pewność jakości na każdym etapie.",
    image: "/img/offer/pompa-gruntowa.png",
    icon: Thermometer,
    badge: "Najefektywniejsze",
  },
  {
    id: "pompy-powietrzne",
    name: "Pompy ciepła powietrzne",
    description:
      "Ekonomiczne i wszechstronne rozwiązanie do ogrzewania, chłodzenia i przygotowania ciepłej wody.",
    details:
      "Łatwy montaż bez kosztownych prac ziemnych, idealne rozwiązanie zarówno do nowych, jak i modernizowanych budynków.",
    image: "/img/offer/pompa-ciepla.png",
    icon: Wind,
    badge: "Popularne",
  },
  {
    id: "fotowoltaika",
    name: "Fotowoltaika",
    description: "Produkuj własną energię i obniż rachunki za prąd.",
    details:
      "Od doboru mocy instalacji po zgłoszenie do zakładu energetycznego – wszystkim zajmiemy się za Ciebie.",
    image: "/img/offer/fotowoltaika.png",
    icon: Sun,
    badge: "Gwarancja 25 lat",
  },
  {
    id: "podlogowka",
    name: "Centralne ogrzewanie",
    description:
      "Nowoczesne systemy ogrzewania dla nowych i modernizowanych domów.",
    details:
      "Kompleksowo realizujemy instalacje ogrzewania podłogowego i grzejnikowego – od projektu po uruchomienie systemu.",
    image: "/img/offer/podlogowka.png",
    icon: Home,
    badge: "Komfort +40%",
  },
  {
    id: "rekuperacja",
    name: "Rekuperacja",
    description: "Świeże powietrze, mniej wilgoci, większy komfort.",
    details:
      "Kompleksowa realizacja systemów rekuperacji – od projektu po montaż i uruchomienie instalacji.",
    image: "/img/offer/rekuperacja.png",
    icon: Droplets,
    badge: "Odzysk 90%",
  },
  {
    id: "magazyn",
    name: "Magazyn energii",
    description: "Większa niezależność energetyczna dla Twojego domu.",
    details:
      "Magazynuj energię i zarządzaj nią inteligentnie dzięki nowoczesnym systemom optymalizacji zużycia prądu.",
    image: "/img/offer/magazyn-energii.png",
    icon: Battery,
    badge: "Niezależność",
  },
];
