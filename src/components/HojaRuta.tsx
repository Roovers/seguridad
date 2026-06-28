import { CalendarClock, CheckCircle2, GitBranch, ShieldAlert } from "lucide-react";
import { evolucionCumplimiento } from "../data/metricasEjecutivas";
import { getProjectsByTerm, getRoadmapSummaryByTerm } from "../data/selectors";
import { formatearDecimal, formatearPorcentaje } from "../utils/formatos";
import { tonoPlazo } from "../utils/coloresRiesgo";
import type { HojaRutaTerm } from "../types/seguridad";
import { EncabezadoSeccion } from "./EncabezadoSeccion";
import { SeccionAnimada } from "./layout/SeccionAnimada";

const terms: HojaRutaTerm[] = ["Corto", "Medio", "Largo"];

export function HojaRuta() {
  return (
    <SeccionAnimada id="roadmap">
      <EncabezadoSeccion
        kicker="Ejecución"
        title="Hoja de ruta de remediación por horizonte"
        description="Organiza los proyectos del plan de mejora en tres ventanas temporales, con impacto acumulado y narrativa ejecutiva."
        icon={GitBranch}
      />

      <div className="roadmap-shell glass-card">
        <div className="timeline-ribbon">
          {evolucionCumplimiento.map((point) => (
            <div key={point.hito}>
              <span>{point.hito}</span>
              <strong>{formatearPorcentaje(point.compliance, 1)}</strong>
              <em>{point.description}</em>
            </div>
          ))}
        </div>

        <div className="roadmap-columns">
          {terms.map((term) => {
            const projects = getProjectsByTerm(term);
            const summary = getRoadmapSummaryByTerm(term);
            if (!summary) return null;

            return (
              <article key={term} className={`roadmap-column ${tonoPlazo[term].className}`}>
                <header>
                  <span><CalendarClock size={16} /> {tonoPlazo[term].range}</span>
                  <h3>{tonoPlazo[term].label}</h3>
                  <p>{summary.projects} proyectos · {summary.controls} controles · {summary.gapPercent}% del GAP</p>
                </header>

                <div className="project-stack">
                  {projects.map((project) => (
                    <div key={project.name} className="project-tile">
                      <div>
                        {project.gap > 0 ? <ShieldAlert size={15} /> : <CheckCircle2 size={15} />}
                        <strong>{project.name}</strong>
                      </div>
                      <p>{project.justification}</p>
                      <footer>
                        <span>GAP {formatearDecimal(project.gap, 3)}</span>
                        <span>{formatearPorcentaje(project.compliance, 1)}</span>
                        <span>{project.isoControls.join(", ")}</span>
                      </footer>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SeccionAnimada>
  );
}
