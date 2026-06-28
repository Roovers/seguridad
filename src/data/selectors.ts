import { cumplimientoPorCriterio } from "./cumplimientoPorCriterio";
import { controlesSeguridad } from "./controlesSeguridad";
import { diagnosticoCumplimientoGlobal } from "./graficosDiagnosticoGlobal";
import { metricasKpi, perfilEjecutivo, resumenHojaRuta } from "./metricasEjecutivas";
import { proyectosMejora } from "./proyectosMejora";
import type { ControlSeguridad, CriterioCumplimiento, ProyectoMejora } from "../types/seguridad";

export const getExecutiveProfile = () => perfilEjecutivo;

export const getExecutiveKpis = () => metricasKpi;

export const getGlobalDiagnosisPoint = () => diagnosticoCumplimientoGlobal[0];

export const getCriteriaByCompliance = (direction: "asc" | "desc" = "asc"): CriterioCumplimiento[] =>
  [...cumplimientoPorCriterio].sort((a, b) =>
    direction === "asc" ? a.compliance - b.compliance : b.compliance - a.compliance,
  );

export const getWeakestCriterion = () => getCriteriaByCompliance("asc")[0];

export const getStrongestCriterion = () => getCriteriaByCompliance("desc")[0];

export const getProjectsByGap = (): ProyectoMejora[] => [...proyectosMejora].sort((a, b) => b.gap - a.gap);

export const getTopProjectsByGap = (limit = 8): ProyectoMejora[] => getProjectsByGap().slice(0, limit);

export const getUrgentControls = (): ControlSeguridad[] =>
  controlesSeguridad.filter((control) => control.level === "CRÍTICO" || control.level === "URGENTE");

export const getCriticalAndUrgentGap = () =>
  getUrgentControls().reduce((sum, control) => sum + control.gap, 0);

export const getRoadmapSummary = () => resumenHojaRuta;

export const getControlsByGap = (): ControlSeguridad[] => [...controlesSeguridad].sort((a, b) => b.gap - a.gap);

export const getProjectsByTerm = (term: ProyectoMejora["plazo"]): ProyectoMejora[] =>
  getProjectsByGap().filter((project) => project.plazo === term);

export const getRoadmapSummaryByTerm = (term: ProyectoMejora["plazo"]) =>
  resumenHojaRuta.find((item) => item.plazo === term);
