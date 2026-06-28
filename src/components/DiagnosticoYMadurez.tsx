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
import { cumplimientoPorCriterio } from "../data/cumplimientoPorCriterio";
import { datosRadarDiagnostico } from "../data/graficosDiagnosticoGlobal";
import { distribucionMadurez } from "../data/distribucionMadurez";
import { getExecutiveProfile, getGlobalDiagnosisPoint, getStrongestCriterion, getWeakestCriterion } from "../data/selectors";
import { formatearPorcentaje } from "../utils/formatos";
import { chartColors, defaultChartMargin, maturityColors } from "../constants/chartTheme";

function RadarTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { criterion: string; compliance: number } }> }) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <div className="chart-tooltip">
      <strong>{point.criterion}</strong>
      <span>Cumplimiento: {formatearPorcentaje(point.compliance, 2)}</span>
    </div>
  );
}

export function DiagnosticoYMadurez() {
  const profile = getExecutiveProfile();
  const globalPoint = getGlobalDiagnosisPoint();
  const weakness = getWeakestCriterion();
  const strength = getStrongestCriterion();

  return (
    <div className="diagnosis-layout">
      <article className="glass-card chart-card radar-card">
        <div className="card-heading">
          <span>Gráfico de puntas</span>
          <h3>Cumplimiento por criterio</h3>
          <p>Representa el perfil radial de cumplimiento por dominio tecnológico.</p>
        </div>
        <div className="chart-zone radar-zone">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={datosRadarDiagnostico} outerRadius="74%">
              <PolarGrid stroke={chartColors.gridPolar} />
              <PolarAngleAxis dataKey="shortName" tick={{ fill: "#c7d2fe", fontSize: 11 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: chartColors.axis, fontSize: 10 }} />
              <Tooltip content={<RadarTooltip />} />
              <Radar
                name="Cumplimiento"
                dataKey="compliance"
                stroke={chartColors.cyan}
                fill={chartColors.cyan}
                fillOpacity={0.22}
                strokeWidth={3}
                dot
              />
              <Radar
                name="Objetivo"
                dataKey="target"
                stroke={chartColors.violet}
                fill="transparent"
                strokeOpacity={0.5}
                strokeDasharray="5 5"
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="glass-card chart-card global-card">
        <div className="card-heading">
          <span>Barra global</span>
          <h3>Diagnóstico de Seguridad Global</h3>
          <p>Barra única de cumplimiento global: {formatearPorcentaje(profile.globalCompliance, 1)}.</p>
        </div>
        <div className="single-bar-panel">
          <div className="single-bar-top">
            <strong>{formatearPorcentaje(globalPoint.compliance, 1)}</strong>
            <span>brecha {formatearPorcentaje(globalPoint.pending, 1)}</span>
          </div>
          <div className="single-bar-track" aria-label={`Cumplimiento ${globalPoint.compliance}%`}>
            <i style={{ width: `${globalPoint.compliance}%` }} />
            <em style={{ left: `${globalPoint.compliance}%` }} />
          </div>
          <div className="bar-scale"><span>0%</span><span>50%</span><span>100%</span></div>
        </div>

        <div className="criterion-extremes">
          <div>
            <span>Dominio más débil</span>
            <strong>{weakness.name}</strong>
            <em>{formatearPorcentaje(weakness.compliance, 2)}</em>
          </div>
          <div>
            <span>Dominio más sólido</span>
            <strong>{strength.name}</strong>
            <em>{formatearPorcentaje(strength.compliance, 2)}</em>
          </div>
        </div>
      </article>

      <article className="glass-card chart-card maturity-card">
        <div className="card-heading">
          <span>Madurez CMMI</span>
          <h3>Distribución por nivel</h3>
          <p>Mapa de concentración del capítulo tecnológico según niveles 1 a 5.</p>
        </div>
        <div className="chart-zone donut-zone">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={distribucionMadurez} dataKey="count" nameKey="label" innerRadius="58%" outerRadius="82%" paddingAngle={3}>
                {distribucionMadurez.map((entry, index) => (
                  <Cell key={entry.level} fill={maturityColors[index % maturityColors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#07111f", border: "1px solid rgba(148,163,184,.22)", borderRadius: 14 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="maturity-legend">
          {distribucionMadurez.map((item, index) => (
            <div key={item.level}>
              <i style={{ background: maturityColors[index] }} />
              <span>{item.label}</span>
              <strong>{item.count}</strong>
            </div>
          ))}
        </div>
      </article>

      <article className="glass-card chart-card criteria-card">
        <div className="card-heading">
          <span>Ranking diferencial</span>
          <h3>Cumplimiento por dominio</h3>
          <p>Lectura comparativa para priorizar conversación ejecutiva.</p>
        </div>
        <div className="chart-zone criteria-zone">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cumplimientoPorCriterio} layout="vertical" margin={defaultChartMargin.compact}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={chartColors.grid} />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: chartColors.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" width={210} tick={{ fill: chartColors.axisStrong, fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(value) => formatearPorcentaje(Number(value), 2)} contentStyle={{ background: "#07111f", border: "1px solid rgba(148,163,184,.22)", borderRadius: 14 }} />
              <Bar dataKey="compliance" radius={[0, 10, 10, 0]} fill={chartColors.cyan} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </div>
  );
}
