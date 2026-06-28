import type { HojaRutaTerm } from "../types/seguridad";

export interface ControlTypeDistributionPoint {
  type: string;
  count: number;
  percentage: number;
}

export interface SecurityPropertyGapPoint {
  property: string;
  shortName: string;
  averageGap: number;
  target: number;
}

export interface ControlTypeGapPoint {
  type: string;
  averageGap: number;
}

export interface ProjectGapByTermPoint {
  project: string;
  shortProject: string;
  Corto?: number;
  Medio?: number;
  Largo?: number;
  totalGap: number;
  mainTerm: HojaRutaTerm;
}

export const controlTypeDistribution: ControlTypeDistributionPoint[] = [
  { type: "Preventivo", count: 31, percentage: 73.81 },
  { type: "Detectivo", count: 7, percentage: 16.67 },
  { type: "Correctivo", count: 4, percentage: 9.52 },
];

export const securityPropertyGap: SecurityPropertyGapPoint[] = [
  { property: "Confidencialidad", shortName: "Confid.", averageGap: 1.237, target: 0 },
  { property: "Integridad", shortName: "Integr.", averageGap: 1.197, target: 0 },
  { property: "Disponibilidad", shortName: "Dispon.", averageGap: 1.181, target: 0 },
];

export const controlTypeAverageGap: ControlTypeGapPoint[] = [
  { type: "Preventivo", averageGap: 1.173 },
  { type: "Correctivo", averageGap: 1.061 },
  { type: "Detectivo", averageGap: 0.974 },
];

export const projectGapByTerm: ProjectGapByTermPoint[] = [
  { project: "Antivirus y Control de Malware", shortProject: "Antivirus / Malware", Corto: 2.576, totalGap: 2.576, mainTerm: "Corto" },
  { project: "Arquitectura de Alta Disponibilidad", shortProject: "Alta disponibilidad", Largo: 0.227, totalGap: 0.227, mainTerm: "Largo" },
  { project: "Arquitectura de Seguridad", shortProject: "Arquitectura seguridad", Largo: 1.212, totalGap: 1.212, mainTerm: "Largo" },
  { project: "Auditoría de Procesos", shortProject: "Auditoría", Corto: 2.576, totalGap: 2.576, mainTerm: "Corto" },
  { project: "Definición de Contratos (Internos y de Terceros)", shortProject: "Contratos", Largo: 0.455, totalGap: 0.455, mainTerm: "Largo" },
  { project: "Definición de Proceso de Gestión de Cambios", shortProject: "Gestión de cambios", Largo: 0.455, totalGap: 0.455, mainTerm: "Largo" },
  { project: "Generación de Datos de Prueba", shortProject: "Datos de prueba", Largo: 1.212, totalGap: 1.212, mainTerm: "Largo" },
  { project: "Gestión de Accesos e Identidades (IDM)", shortProject: "IDM", Largo: 1.212, totalGap: 1.212, mainTerm: "Largo" },
  { project: "Mecanismos de Cifrado de la Información", shortProject: "Cifrado", Corto: 1.667, totalGap: 1.667, mainTerm: "Corto" },
  { project: "Monitorización de la Seguridad (SIEM)", shortProject: "SIEM", Medio: 0.833, totalGap: 0.833, mainTerm: "Medio" },
  { project: "Penetration Test Continuo y Detección de Vulnerabilidades", shortProject: "Pentest", Medio: 0.833, totalGap: 0.833, mainTerm: "Medio" },
  { project: "Política y Gestión de Backups", shortProject: "Backups", Largo: 0, totalGap: 0, mainTerm: "Largo" },
  { project: "Prevención de Fuga de Datos (DLP)", shortProject: "DLP", Medio: 0.833, totalGap: 0.833, mainTerm: "Medio" },
  { project: "Procedimientos Operativos de Seguridad (SOP)", shortProject: "SOP", Medio: 1.01, totalGap: 1.01, mainTerm: "Medio" },
  { project: "Regularización de Usuarios", shortProject: "Usuarios", Corto: 2.576, totalGap: 2.576, mainTerm: "Corto" },
  { project: "Segmentación de Redes", shortProject: "Segmentación", Largo: 0, totalGap: 0, mainTerm: "Largo" },
  { project: "Seguridad en Desarrollo de Sistemas", shortProject: "DevSec", Medio: 1.182, totalGap: 1.182, mainTerm: "Medio" },
  { project: "Seguridad en las Comunicaciones", shortProject: "Comunicaciones", Medio: 0.833, totalGap: 0.833, mainTerm: "Medio" },
  { project: "Seguridad Microinformática", shortProject: "Microinformática", Largo: 1.212, totalGap: 1.212, mainTerm: "Largo" },
  { project: "Sistemas de Detección y Prevención de Intrusos (IDS/IPS)", shortProject: "IDS/IPS", Largo: 0, totalGap: 0, mainTerm: "Largo" },
] satisfies ProjectGapByTermPoint[];

projectGapByTerm.sort((a, b) => b.totalGap - a.totalGap);
