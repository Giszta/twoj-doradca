import {
  FaComments,
  FaCogs,
  FaCalculator,
  FaDraftingCompass,
  FaTools,
  FaCheckCircle,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import type { Step } from "./about.types";

export const steps: Step[] = [
  {
    icon: FaComments,
    title: "Rozmowa i analiza",
    text: "Sprawdzam powierzchnię domu, izolację, rachunki i sposób ogrzewania.",
    color: "blue",
  },
  {
    icon: FaCogs,
    title: "Dobór technologii",
    text: "Pompa ciepła, fotowoltaika, pellet czy drewno – zawsze to, co najbardziej opłacalne.",
    color: "cyan",
  },
  {
    icon: FaCalculator,
    title: "Precyzyjne wyliczenia",
    text: "Dostajesz konkretny koszt inwestycji i prognozowane oszczędności.",
    color: "blue",
  },
  {
    icon: FaDraftingCompass,
    title: "Projekt instalacji",
    text: "Dokładnie dopasowany do budynku i lokalnych warunków.",
    color: "cyan",
  },
  {
    icon: FaTools,
    title: "Profesjonalny montaż",
    text: "Certyfikowana ekipa, zgodnie z wymogami dotacji i gwarancji.",
    color: "blue",
  },
  {
    icon: FaCheckCircle,
    title: "Odbiór, szkolenie i serwis",
    text: "Uczę obsługi i dbam, żeby wszystko działało przez lata.",
    color: "cyan",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Dotacje i ulgi",
    text: "Kompletuję dokumenty i odzyskuję nawet 45 000 zł dla Ciebie.",
    color: "blue",
  },
];