import { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  details: string;
  image: string;
  icon: LucideIcon;
  badge: string;
}