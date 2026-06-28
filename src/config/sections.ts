import {
  Activity,
  BarChart3,
  Gauge,
  Lightbulb,
  Radar,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type AppSectionId =
  | "overview"
  | "analitica"
  | "diagnostico"
  | "riesgo"
  | "roadmap"
  | "controles"
  | "insights";

export interface AppSection {
  id: AppSectionId;
  label: string;
  icon: LucideIcon;
}

export const appSections = [
  { id: "overview", label: "Inicio", icon: Activity },
  { id: "analitica", label: "Analítica", icon: BarChart3 },
  { id: "diagnostico", label: "Diagnóstico", icon: Radar },
  { id: "riesgo", label: "Riesgo", icon: BarChart3 },
  { id: "roadmap", label: "Hoja de ruta", icon: Route },
  { id: "controles", label: "Controles", icon: Gauge },
  { id: "insights", label: "Ideas clave", icon: Lightbulb },
] as const satisfies readonly AppSection[];

export const appSectionIds = appSections.map((section) => section.id);

export const sectionById = appSections.reduce<Record<AppSectionId, AppSection>>((acc, section) => {
  acc[section.id] = section;
  return acc;
}, {} as Record<AppSectionId, AppSection>);

export const defaultSectionIcon = ShieldCheck;
