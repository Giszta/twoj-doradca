import { FaWind, FaHome, FaFire } from "react-icons/fa";
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
    maxAmount: 21000,
    benefits: [
      "Dofinansowanie do 21 000 zł",
      "Tylko dla domów energooszczędnych",
      "Wysoka efektywność energetyczna",
    ],
    requirements: [
      "Nowy budynek (pozwolenie po 2021)",
      "Standard WT2021 lub wyższy",
      "Pompa ciepła jako główne źródło",
      "Dokumentacja energetyczna"
    ],
    timeline: "2-4 miesiące",
    difficulty: "Łatwy",
  },

  {
    id: "powietrze",
    title: "Czyste powietrze",
    description:
      "Wsparcie przy wymianie starego źródła ciepła na ekologiczne rozwiązanie.",
    image: "/img/grants/czyste-powietrze.png",
    icon: FaFire,
    status: "Najpopularniejszy",
    statusColor: "bg-orange-100 text-orange-700 border-orange-300",
    maxAmount: 45000,
    benefits: [
      "Dofinansowanie do 45 000 zł",
      "Na pompę ciepła lub kocioł gazowy",
      "Dla istniejących budynków",
    ],
    requirements: [
      "Istniejący budynek mieszkalny",
      "Demontaż starego pieca",
      "Dochód poniżej progu",
      "Audyt energetyczny"
    ],
    timeline: "4-8 miesięcy",
    difficulty: "Średni",
    recommended: true
  },
    {
    id: "wiatrowa",
    title: "Moja elektrownia wiatrowa",
    description:
      "Program dotacji wspierający budowę mikroinstalacji wiatrowych dla gospodarstw domowych.",
    image: "/img/grants/moja-elektrownia-wiatrowa.png",
    icon: FaWind,
    status: "Nowość 2025",
    statusColor: "bg-green-100 text-green-700 border-green-300",
    maxAmount: 45000,
    benefits: [
      "Dofinansowanie do 45 000 zł",
      "Wsparcie dla przydomowych turbin",
      "Możliwość łączenia z fotowoltaiką",
    ],
    requirements: [
      "Gospodarstwo domowe",
      "Odpowiednie warunki wiatrowe (min. 4 m/s)",
      "Zgoda sąsiadów w promieniu 100m",
      "Pozwolenie na budowę"
    ],
    timeline: "3-6 miesięcy",
    difficulty: "Średni",
  }
];