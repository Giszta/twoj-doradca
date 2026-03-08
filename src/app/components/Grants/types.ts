import { ElementType } from "react";

export interface Grant {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: ElementType;
  status: string;
  statusColor: string;
  maxAmount: number;
  benefits: string[];
  requirements: string[];
  timeline: string;
  difficulty: "Łatwy" | "Średni" | "Trudny";
  recommended?: boolean;
}