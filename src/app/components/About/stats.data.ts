import { FaSmile, FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";
import type { StatItem } from "./about.types";

export const stats: StatItem[] = [
  {
    value: 98,
    maxValue: 100,
    label: "Zadowolonych klientów",
    Icon: FaSmile,
    suffix: "%",
    color: "blue",
  },
  {
    value: 500,
    maxValue: 510,
    label: "Zrealizowanych projektów",
    Icon: FaProjectDiagram,
    suffix: "+",
    color: "purple",
  },
  {
    value: 6,
    maxValue: 7,
    label: "Lat doświadczenia",
    Icon: FaCalendarAlt,
    suffix: "+",
    color: "green",
  },
];