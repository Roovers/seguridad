import { proyectosMejora } from "./proyectosMejora";

export interface PlanGapChartPoint {
  project: string;
  shortProject: string;
  gap: number;
  plazo: "Corto" | "Medio" | "Largo";
  compliance: number;
}

export interface PlanComplianceEvolutionPoint {
  milestone: string;
  compliance: number;
  gapResolved: number;
}

const shortProjectName: Record<string, string> = {
  "Regularización de Usuarios": "Regularización de Usuarios",
  "Seguridad en Desarrollo de Sistemas": "Seguridad en Desarrollo",
  "Mecanismos de Cifrado de la Información": "Cifrado de Información",
  "Procedimientos Operativos de Seguridad (SOP)": "SOP Seguridad",
  "Antivirus y Control de Malware": "Antivirus / Malware",
  "Auditoría de Procesos": "Auditoría de Procesos",
  "Penetration Test Continuo y Detección de Vulnerabilidades": "Pentest / Vulnerabilidades",
  "Prevención de Fuga de Datos (DLP)": "DLP",
  "Monitorización de la Seguridad (SIEM)": "SIEM",
  "Seguridad en las Comunicaciones": "Comunicaciones",
  "Seguridad Microinformática": "Microinformática",
  "Gestión de Accesos e Identidades (IDM)": "IDM",
  "Arquitectura de Seguridad": "Arquitectura Seguridad",
  "Generación de Datos de Prueba": "Datos de Prueba",
  "Arquitectura de Alta Disponibilidad": "Alta Disponibilidad",
  "Definición de Contratos (Internos y de Terceros)": "Contratos",
  "Definición de Proceso de Gestión de Cambios": "Gestión de Cambios",
  "Política y Gestión de Backups": "Backups",
  "Segmentación de Redes": "Segmentación de Redes",
  "Sistemas de Detección y Prevención de Intrusos (IDS/IPS)": "IDS/IPS",
};

export const planGapByProjectChartData: PlanGapChartPoint[] = proyectosMejora
  .map((project) => ({
    project: project.name,
    shortProject: shortProjectName[project.name] ?? project.name,
    gap: project.gap,
    plazo: project.plazo,
    compliance: project.compliance,
  }))
  .sort((a, b) => b.gap - a.gap);

export const planComplianceEvolutionChartData: PlanComplianceEvolutionPoint[] = [
  { milestone: "Hoy", compliance: 63.1, gapResolved: 0 },
  { milestone: "Mes 3 (Corto)", compliance: 78.8, gapResolved: 15.735 },
  { milestone: "Mes 8 (Medio)", compliance: 94.0, gapResolved: 30.882 },
  { milestone: "Mes 12 (Largo)", compliance: 100.0, gapResolved: 36.912 },
];
