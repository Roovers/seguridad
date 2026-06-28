import type { PuntoEvolucionCumplimiento, MetricaIndicador, HojaRutaSummaryItem } from "../types/seguridad";

export const perfilEjecutivo = {
  "projectName": "Plan de Mejora — Seguridad de la Información",
  "organization": "Clínica Privada",
  "standard": "ISO/IEC 27002:2022",
  "chapter": "Capítulo 8 — Controles Tecnológicos",
  "model": "Modelo de madurez CMMI",
  "period": "Junio 2026",
  "globalCompliance": 63.1,
  "targetCompliance": 100,
  "status": "Diagnóstico con brechas relevantes en accesos, cifrado y malware; plan validado para alcanzar 100% en 12 meses."
};

export const metricasKpi = [
  {
    "id": "global-compliance",
    "label": "Cumplimiento global",
    "value": "63,1%",
    "description": "Estado inicial del capítulo tecnológico",
    "tone": "MODERADO",
    "icon": "ShieldCheck"
  },
  {
    "id": "total-gap",
    "label": "GAP total",
    "value": "36,912",
    "description": "Puntos pendientes hasta 100%",
    "tone": "URGENTE",
    "icon": "Activity"
  },
  {
    "id": "controls",
    "label": "Controles evaluados",
    "value": "34",
    "description": "ISO/IEC 27002:2022 — Capítulo 8",
    "tone": "INFO",
    "icon": "ListChecks"
  },
  {
    "id": "projects",
    "label": "Proyectos de mejora",
    "value": "20",
    "description": "Plan priorizado por GAP",
    "tone": "INFO",
    "icon": "FolderKanban"
  },
  {
    "id": "critical",
    "label": "Controles críticos",
    "value": "1",
    "description": "Nivel 1 CMMI",
    "tone": "CRÍTICO",
    "icon": "TriangleAlert"
  },
  {
    "id": "urgent",
    "label": "Controles urgentes",
    "value": "7",
    "description": "Nivel 2 CMMI",
    "tone": "URGENTE",
    "icon": "Flame"
  },
  {
    "id": "target",
    "label": "Cumplimiento objetivo",
    "value": "100%",
    "description": "Meta al mes 12",
    "tone": "SUCCESS",
    "icon": "Goal"
  }
] satisfies MetricaIndicador[];

export const evolucionCumplimiento = [
  {
    "hito": "Hoy",
    "month": 0,
    "compliance": 63.1,
    "gapResolved": 0,
    "description": "Estado inicial — ISO 27002 Cap. 8"
  },
  {
    "hito": "Mes 3 / Corto",
    "month": 3,
    "compliance": 78.8,
    "gapResolved": 15.735,
    "description": "Se ataca el 43% del riesgo: cifrado, accesos y antivirus"
  },
  {
    "hito": "Mes 8 / Medio",
    "month": 8,
    "compliance": 94.0,
    "gapResolved": 30.882,
    "description": "Desarrollo, SOP, SIEM, DLP y comunicaciones"
  },
  {
    "hito": "Mes 12 / Largo",
    "month": 12,
    "compliance": 100.0,
    "gapResolved": 36.912,
    "description": "Cumplimiento total ISO 27002 Cap. 8"
  }
] satisfies PuntoEvolucionCumplimiento[];

export const resumenHojaRuta = [
  {
    "plazo": "Corto",
    "label": "Corto (0–3 m)",
    "projects": 4,
    "controls": 7,
    "gapCovered": 15.735,
    "gapPercent": 42.6,
    "projectedCompliance": 78.8
  },
  {
    "plazo": "Medio",
    "label": "Medio (3–8 m)",
    "projects": 6,
    "controls": 16,
    "gapCovered": 15.147,
    "gapPercent": 41.0,
    "projectedCompliance": 94.0
  },
  {
    "plazo": "Largo",
    "label": "Largo (8–12 m)",
    "projects": 10,
    "controls": 11,
    "gapCovered": 6.029,
    "gapPercent": 16.3,
    "projectedCompliance": 100.0
  }
] satisfies HojaRutaSummaryItem[];
