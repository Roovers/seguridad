import type { HojaRutaTerm } from "../types/seguridad";

export const chartColors = {
  axis: "#8393ad",
  axisStrong: "#cbd5e1",
  grid: "rgba(148,163,184,.14)",
  gridPolar: "rgba(148,163,184,.22)",
  cyan: "#38bdf8",
  cyanSoft: "#67e8f9",
  violet: "#a78bfa",
  purple: "#8b5cf6",
  red: "#ef4444",
  orange: "#f97316",
  yellow: "#facc15",
  green: "#22c55e",
  teal: "#2dd4bf",
} as const;

export const maturityColors = [
  chartColors.red,
  chartColors.orange,
  chartColors.yellow,
  chartColors.cyan,
  chartColors.teal,
] as const;

export const termColors: Record<HojaRutaTerm, string> = {
  Corto: chartColors.red,
  Medio: chartColors.cyan,
  Largo: chartColors.green,
};

export const defaultChartMargin = {
  compact: { top: 8, right: 20, left: 0, bottom: 8 },
  verticalBars: { top: 8, right: 26, left: 20, bottom: 8 },
} as const;
