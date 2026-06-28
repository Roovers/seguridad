export type NivelSeguridad = "CRÍTICO" | "URGENTE" | "MODERADO" | "BUENO" | "ÓPTIMO";
export type HojaRutaTerm = "Corto" | "Medio" | "Largo";
export type ImpactoIdea = "Alto" | "Medio" | "Bajo";

export interface ControlSeguridad {
  control: string;
  description: string;
  project: string;
  maturity: string;
  value: number;
  weightAbs: number;
  weightPond: number;
  gap: number;
  level: NivelSeguridad;
  plazo: HojaRutaTerm;
}

export interface ProyectoMejora {
  name: string;
  plazo: HojaRutaTerm;
  controlsCount: number;
  weightAbs: number;
  weightPond: number;
  gap: number;
  compliance: number;
  isoControls: string[];
  justification: string;
  criticality: NivelSeguridad;
}

export interface CriterioCumplimiento {
  name: string;
  compliance: number;
}

export interface IdeaEstrategica {
  title: string;
  description: string;
  impact: ImpactoIdea;
  recommendation?: string;
}

export interface ElementoDistribucionMadurez {
  level: string;
  label: string;
  count: number;
}

export interface ElementoLeyendaMadurez {
  level: number;
  name: string;
  description: string;
}

export interface MetricaIndicador {
  id: string;
  label: string;
  value: string;
  description: string;
  tone: NivelSeguridad | "INFO" | "SUCCESS";
  icon: string;
}

export interface PuntoEvolucionCumplimiento {
  hito: string;
  month: number;
  compliance: number;
  gapResolved: number;
  description: string;
}

export interface HojaRutaSummaryItem {
  plazo: HojaRutaTerm;
  label: string;
  projects: number;
  controls: number;
  gapCovered: number;
  gapPercent: number;
  projectedCompliance: number;
}
