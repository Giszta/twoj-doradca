import { FaBatteryFull, FaHome, FaFire } from "react-icons/fa";
import { Grant } from "./types";

export const grants: Grant[] = [
  {
    id: "cieplo",
    title: "Moje ciepło",
    description: "Dotacja na pompy ciepła dla nowych budynków jednorodzinnych.",
    image: "/img/grants/moje-cieplo.png",
    icon: FaHome,
    status: "Nowe budynki",
    statusColor: "bg-blue-100 text-blue-700 border-blue-300",
    badge: "Najpopularniejsze",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-300",
    maxAmount: 21000,
    benefits: [
      "Dofinansowanie do 21 000 zł",
      "Tylko dla domów energooszczędnych",
      "Wysoka efektywność energetyczna",
    ],
    requirements: [
      "Nowy budynek (pozwolenie po 2021)",
      "EP poniżej 55kwh/m2",
      "Pompa ciepła jako jedyne źródło",
      "Charakterystyka energetyczna ",
    ],
    timeline: "2-4 miesiące",
    difficulty: "Łatwy",
    recommended: true,
  },

  {
    id: "powietrze",
    title: "Czyste powietrze",
    description:
      "Wsparcie przy wymianie starego źródła ciepła na ekologiczne rozwiązanie.",
    image: "/img/grants/czyste-powietrze.png",
    icon: FaFire,
    status: "Budynki modernizowane",
    statusColor: "bg-green-100 text-green-700 border-green-300",
    maxAmount: 45000,
    benefits: [
      "Dofinansowanie do 45 000 zł",
      "Na pompę ciepła",
      "Dla istniejących budynków",
    ],
    requirements: [
      "Istniejący budynek mieszkalny",
      "Własność od min. 3 lat ",
      "Audyt energetyczny",
      "Demontaż starego pieca",
    ],
    timeline: "4-8 miesięcy",
    difficulty: "Średni",
  },
  {
    id: "magazyny",
    title: "Przydomowe magazyny energii",
    description:
      "Program dotacji na instalację przydomowych magazynów energii i inteligentne zarządzanie.",
    image: "/img/grants/magazyny-energii.png",
    icon: FaBatteryFull,
    status: "net metering i net billing",
    statusColor: "bg-green-100 text-green-700 border-green-300",
    maxAmount: 18000,
    benefits: [
      "Dofinansowanie do 18 000 zł",
      "Większa niezależność energetyczna",
      "Możliwość łączenia z fotowoltaiką",
    ],
    requirements: [
      "Magazyn energii o pojemności 2x większej niż instalacja fotowoltaiczna",
      "Budynek mieszkalny",
      "Certyfikowany magazyn energii",
      "Dokumentacja techniczna",
    ],
    timeline: "3-6 miesięcy",
    difficulty: "Średni",
  },
];
