import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { evolucionCumplimiento } from "../data/metricasEjecutivas";
import { getProjectsByGap, getRoadmapSummary, getTopProjectsByGap } from "../data/selectors";
import { formatearDecimal, formatearPorcentaje } from "../utils/formatos";
import { tonoNivel, tonoPlazo } from "../utils/coloresRiesgo";
import type { ProyectoMejora } from "../types/seguridad";
import { chartColors, defaultChartMargin, termColors } from "../constants/chartTheme";
import { TooltipShell } from "./charts/TooltipShell";

function ProjectTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: ProyectoMejora }> }) {
  if (!active || !payload?.length) return null;
  const project = payload[0].payload;
  return (
    <TooltipShell title={project.name} wide>
      <span>GAP: {formatearDecimal(project.gap, 3)}</span>
      <span>Cumplimiento: {formatearPorcentaje(project.compliance, 1)}</span>
      <span>Plazo: {tonoPlazo[project.plazo].label}</span>
      <span>Controles: {project.isoControls.join(", ")}</span>
      <p>{project.justification}</p>
    </TooltipShell>
  );
}

function TimelineTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { hito: string; compliance: number; gapResolved: number; description: string } }> }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <TooltipShell title={point.hito}>
      <span>Cumplimiento: {formatearPorcentaje(point.compliance, 1)}</span>
      <span>GAP resuelto: {formatearDecimal(point.gapResolved, 3)}</span>
      <p>{point.description}</p>
    </TooltipShell>
  );
}

export function AnalisisRiesgoProyectos() {
  const projectData = getProjectsByGap();
  const topProjects = getTopProjectsByGap(8);
  const roadmapSummary = getRoadmapSummary();

  return (
    <div className="risk-layout">
      <article className="glass-card chart-card project-gap-card">
        <div className="card-heading">
          <span>Mayor = más urgente</span>
          <h3>GAP por proyecto</h3>
          <p>Orden descendente desde la mayor brecha de seguridad hasta los proyectos ya optimizados.</p>
        </div>
        <div className="chart-zone project-gap-zone">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectData} layout="vertical" margin={defaultChartMargin.verticalBars}>
              <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis type="number" tick={{ fill: chartColors.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" width={230} tick={{ fill: chartColors.axisStrong, fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ProjectTooltip />} cursor={{ fill: "rgba(56,189,248,.08)" }} />
              <Bar dataKey="gap" radius={[0, 9, 9, 0]}>
                {projectData.map((project) => (
                  <Cell key={project.name} fill={termColors[project.plazo]} fillOpacity={project.gap === 0 ? 0.35 : 0.95} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="glass-card chart-card evolution-card">
        <div className="card-heading">
          <span>Evolución proyectada</span>
          <h3>Cumplimiento hasta 100%</h3>
          <p>Secuencia de mejora por hito: estado actual, corto, medio y largo plazo.</p>
        </div>
        <div className="chart-zone evolution-zone">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={evolucionCumplimiento} margin={defaultChartMargin.compact}>
              <defs>
                <linearGradient id="complianceArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.38} />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="hito" tick={{ fill: chartColors.axisStrong, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fill: chartColors.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<TimelineTooltip />} />
              <Area type="monotone" dataKey="compliance" fill="url(#complianceArea)" stroke="transparent" />
              <Bar dataKey="gapResolved" fill={chartColors.purple} opacity={0.4} radius={[8, 8, 0, 0]} />
              <Line type="monotone" dataKey="compliance" stroke={chartColors.cyan} strokeWidth={3} dot={{ r: 5 }} />
              <Legend wrapperStyle={{ color: chartColors.axisStrong, fontSize: 12 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="glass-card chart-card matrix-card">
        <div className="card-heading">
          <span>Cartera de riesgo</span>
          <h3>GAP vs cumplimiento</h3>
          <p>Cada burbuja es un proyecto. Tamaño = cantidad de controles.</p>
        </div>
        <div className="chart-zone matrix-zone">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 12, right: 20, bottom: 12, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis type="number" dataKey="compliance" name="Cumplimiento" unit="%" domain={[0, 105]} tick={{ fill: chartColors.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis type="number" dataKey="gap" name="GAP" tick={{ fill: chartColors.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
              <ZAxis dataKey="controlsCount" range={[90, 520]} />
              <Tooltip content={<ProjectTooltip />} cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={projectData}>
                {projectData.map((project) => (
                  <Cell key={project.name} fill={tonoNivel[project.criticality].hex} fillOpacity={0.82} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="glass-card chart-card pareto-card">
        <div className="card-heading">
          <span>Lectura Pareto</span>
          <h3>8 focos principales de impacto</h3>
          <p>Visualiza las prioridades que explican el mayor tramo de la brecha.</p>
        </div>
        <div className="pareto-list">
          {topProjects.map((project, index) => (
            <div key={project.name} className="pareto-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{project.name}</strong>
                <em>{project.isoControls.join(" · ")}</em>
              </div>
              <i style={{ width: `${Math.max(4, (project.gap / topProjects[0].gap) * 100)}%`, background: termColors[project.plazo] }} />
              <b>{formatearDecimal(project.gap, 3)}</b>
            </div>
          ))}
        </div>
      </article>

      <article className="glass-card term-summary-card">
        {roadmapSummary.map((item) => (
          <div key={item.plazo} className={`term-summary ${tonoPlazo[item.plazo].className}`}>
            <span>{item.label}</span>
            <strong>{item.gapPercent}%</strong>
            <p>{item.projects} proyectos · {item.controls} controles · {formatearDecimal(item.gapCovered, 3)} GAP cubierto</p>
          </div>
        ))}
      </article>
    </div>
  );
}
