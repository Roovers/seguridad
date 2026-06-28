import type { ImpactoIdea, HojaRutaTerm, NivelSeguridad } from "../types/seguridad";

export const tonoNivel: Record<NivelSeguridad, { label: string; className: string; hex: string }> = {
  "CRÍTICO": { label: "Crítico", className: "tone-critical", hex: "#ef4444" },
  "URGENTE": { label: "Urgente", className: "tone-urgent", hex: "#f97316" },
  "MODERADO": { label: "Moderado", className: "tone-moderate", hex: "#f59e0b" },
  "BUENO": { label: "Bueno", className: "tone-good", hex: "#22c55e" },
  "ÓPTIMO": { label: "Óptimo", className: "tone-optimal", hex: "#14b8a6" },
};

export const tonoPlazo: Record<HojaRutaTerm, { label: string; className: string; range: string }> = {
  Corto: { label: "Corto plazo", className: "term-short", range: "0 a 3 meses" },
  Medio: { label: "Mediano plazo", className: "term-mid", range: "3 a 8 meses" },
  Largo: { label: "Largo plazo", className: "term-long", range: "8 a 12 meses" },
};

export const tonoImpacto: Record<ImpactoIdea, { label: string; className: string }> = {
  Alto: { label: "Impacto alto", className: "impact-high" },
  Medio: { label: "Impacto medio", className: "impact-mid" },
  Bajo: { label: "Impacto bajo", className: "impact-low" },
};

export const nivelesOrdenados: NivelSeguridad[] = ["CRÍTICO", "URGENTE", "MODERADO", "BUENO", "ÓPTIMO"];
export const plazosOrdenados: HojaRutaTerm[] = ["Corto", "Medio", "Largo"];
