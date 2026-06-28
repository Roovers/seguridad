import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart3 } from "lucide-react";
import { EncabezadoSeccion } from "./EncabezadoSeccion";
import { TooltipShell } from "./charts/TooltipShell";
import {
  controlTypeAverageGap,
  controlTypeDistribution,
  projectGapByTerm,
  securityPropertyGap,
  type ProjectGapByTermPoint,
} from "../data/analiticaComplementaria";
import { chartColors, defaultChartMargin, termColors } from "../constants/chartTheme";
import { formatearDecimal, formatearPorcentaje } from "../utils/formatos";

const controlTypeColors = [chartColors.cyan, chartColors.violet, chartColors.green] as const;

function DistributionTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { type: string; count: number; percentage: number } }> }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <TooltipShell title={point.type}>
      <span>{point.count} controles</span>
      <span>{formatearPorcentaje(point.percentage, 2)} del universo evaluado</span>
    </TooltipShell>
  );
}

function PropertyGapTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { property: string; averageGap: number } }> }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <TooltipShell title={point.property}>
      <span>GAP promedio: {formatearDecimal(point.averageGap, 3)}</span>
    </TooltipShell>
  );
}

function ProjectTermTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ dataKey: string; value: number; payload: ProjectGapByTermPoint }>; label?: string }) {
  if (!active || !payload?.length) return null;
  const visible = payload.filter((entry) => Number(entry.value) > 0);
  const project = payload[0].payload;
  return (
    <TooltipShell title={project.project} wide>
      <span>GAP total: {formatearDecimal(project.totalGap, 3)}</span>
      <span>Plazo principal: {project.mainTerm}</span>
      {visible.map((entry) => <span key={`${label}-${entry.dataKey}`}>{entry.dataKey}: {formatearDecimal(Number(entry.value), 3)}</span>)}
    </TooltipShell>
  );
}

export function AnaliticaComplementaria() {
  return (
    <section id="analitica" className="section-space">
      <EncabezadoSeccion
        kicker="Analítica complementaria"
        title="Lecturas ejecutivas complementarias"
        description="Complementa la lectura principal con distribución, brecha promedio y segmentación temporal del plan de remediación."
        icon={BarChart3}
      />

      <div className="analytics-grid">
        <article className="glass-card chart-card control-type-card">
          <div className="card-heading">
            <span>Distribución de controles</span>
            <h3>Tipo de control</h3>
            <p>Composición del universo evaluado entre controles preventivos, detectivos y correctivos.</p>
          </div>
          <div className="chart-zone compact-donut-zone">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={controlTypeDistribution} dataKey="count" nameKey="type" innerRadius="58%" outerRadius="82%" paddingAngle={4}>
                  {controlTypeDistribution.map((entry, index) => <Cell key={entry.type} fill={controlTypeColors[index % controlTypeColors.length]} />)}
                </Pie>
                <Tooltip content={<DistributionTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="metric-legend">
            {controlTypeDistribution.map((item, index) => (
              <div key={item.type}>
                <i style={{ background: controlTypeColors[index] }} />
                <span>{item.type}</span>
                <strong>{item.count}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card chart-card property-gap-card">
          <div className="card-heading">
            <span>Propiedades de seguridad</span>
            <h3>AVG GAP CAP</h3>
            <p>Comparativa radial de la brecha promedio por confidencialidad, integridad y disponibilidad.</p>
          </div>
          <div className="chart-zone property-radar-zone">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={securityPropertyGap} outerRadius="72%">
                <PolarGrid stroke={chartColors.gridPolar} />
                <PolarAngleAxis dataKey="shortName" tick={{ fill: chartColors.axisStrong, fontSize: 11 }} />
                <PolarRadiusAxis domain={[0, 1.4]} tick={{ fill: chartColors.axis, fontSize: 10 }} />
                <Tooltip content={<PropertyGapTooltip />} />
                <Radar dataKey="averageGap" stroke={chartColors.violet} fill={chartColors.violet} fillOpacity={0.24} strokeWidth={3} dot />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="glass-card chart-card avg-gap-card">
          <div className="card-heading">
            <span>AVG GAP CAP</span>
            <h3>Brecha promedio por tipo</h3>
            <p>Vista circular de la brecha promedio por controles preventivos, detectivos y correctivos.</p>
          </div>
          <div className="chart-zone avg-gap-zone">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={controlTypeAverageGap} dataKey="averageGap" nameKey="type" innerRadius="58%" outerRadius="82%" paddingAngle={4}>
                  {controlTypeAverageGap.map((item, index) => <Cell key={item.type} fill={controlTypeColors[index % controlTypeColors.length]} />)}
                </Pie>
                <Tooltip formatter={(value) => formatearDecimal(Number(value), 3)} contentStyle={{ background: "#07111f", border: "1px solid rgba(148,163,184,.22)", borderRadius: 14 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="metric-legend compact-legend">
            {controlTypeAverageGap.map((item, index) => (
              <div key={item.type}>
                <i style={{ background: controlTypeColors[index] }} />
                <span>{item.type}</span>
                <strong>{formatearDecimal(item.averageGap, 3)}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card chart-card project-term-card">
          <div className="card-heading">
            <span>GAP por proyecto y plazo</span>
            <h3>Promedio de GAP de proyectos</h3>
            <p>Segmenta la brecha por horizonte de intervención para conectar diagnóstico y roadmap.</p>
          </div>
          <div className="chart-zone project-term-zone">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectGapByTerm} layout="vertical" margin={defaultChartMargin.verticalBars}>
                <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke={chartColors.grid} />
                <XAxis type="number" tick={{ fill: chartColors.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="shortProject" width={160} tick={{ fill: chartColors.axisStrong, fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<ProjectTermTooltip />} cursor={{ fill: "rgba(56,189,248,.08)" }} />
                <Bar dataKey="Corto" stackId="gap" fill={termColors.Corto} radius={[0, 8, 8, 0]} />
                <Bar dataKey="Medio" stackId="gap" fill={termColors.Medio} radius={[0, 8, 8, 0]} />
                <Bar dataKey="Largo" stackId="gap" fill={termColors.Largo} radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </section>
  );
}
