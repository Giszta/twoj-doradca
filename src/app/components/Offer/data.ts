import { Sun, Droplets, Wind, Home, Battery, Thermometer } from "lucide-react";
import { Product } from "./types";

export const products: Product[] = [
  {
    id: "pompy-gruntowe",
    name: "Pompy ciepła gruntowe",
    description:
      "Najbardziej efektywne rozwiązanie wykorzystujące stabilną temperaturę gruntu.",
    details:
      "Współczynnik efektywności COP nawet do 5.0. Stabilna praca przez cały rok. Najniższe koszty eksploatacji.",
    image: "/img/offer/pompa-ciepla.png",
    icon: Thermometer,
    badge: "Najefektywniejsze"
  },
  {
    id: "pompy-powietrzne",
    name: "Pompy ciepła powietrzne",
    description:
      "Wszechstronne i ekonomiczne rozwiązanie do ogrzewania i chłodzenia.",
    details:
      "Łatwy montaż bez kosztownych prac ziemnych. Funkcja chłodzenia w lecie. Idealne do modernizacji.",
    image: "/img/offer/pompa-ciepla.png",
    icon: Wind,
    badge: "Popularne"
  },
  {
    id: "fotowoltaika",
    name: "Fotowoltaika",
    description:
      "Instalacje fotowoltaiczne pozwalające oszczędzać na rachunkach za prąd.",
    details:
      "Panele premium z gwarancją 25 lat. Zwrot inwestycji już po 5-7 latach.",
    image: "/img/offer/fotowoltaika.png",
    icon: Sun,
    badge: "Gwarancja 25 lat"
  },
  {
    id: "podlogowka",
    name: "Ogrzewanie podłogowe",
    description:
      "Komfortowe i energooszczędne ogrzewanie dla całego domu.",
    details:
      "Równomierne rozprowadzenie ciepła. Brak kurzu i przeciągów.",
    image: "/img/offer/podlogowka.png",
    icon: Home,
    badge: "Komfort +40%"
  },
  {
    id: "rekuperacja",
    name: "Rekuperacja",
    description:
      "Nowoczesne systemy wentylacji z odzyskiem ciepła.",
    details:
      "Odzysk do 90% ciepła. Świeże powietrze bez otwierania okien.",
    image: "/img/offer/rekuperacja.png",
    icon: Droplets,
    badge: "Odzysk 90%"
  },
  {
    id: "magazyn",
    name: "Magazyn energii",
    description:
      "Zaawansowane systemy magazynowania energii elektrycznej.",
    details:
      "Pełna niezależność energetyczna. Ochrona przed blackoutem.",
    image: "/img/offer/fotowoltaika.png",
    icon: Battery,
    badge: "Niezależność"
  }
];