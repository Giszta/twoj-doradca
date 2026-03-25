import type { ComponentType } from "react";

export type AccentColor = "blue" | "cyan";
export type StatColor = "blue" | "purple" | "green";

export type IconComponent = ComponentType<{ className?: string }>;

export interface Step {
  color: AccentColor;
  icon: IconComponent;
  title: string;
  text: string;
}

export interface StatItem {
  value: number;
  maxValue?: number;
  label: string;
  suffix?: string;
  color?: StatColor;
  Icon: IconComponent;
}