import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Crosshair,
  DatabaseZap,
  Fingerprint,
  LockKeyhole,
  Network,
  ShieldAlert,
  Sparkles,
  Target,
} from "lucide-react";
import {
  getCriticalAndUrgentGap,
  getExecutiveProfile,
  getRoadmapSummary,
  getStrongestCriterion,
  getUrgentControls,
  getWeakestCriterion,
} from "../data/selectors";
import { formatearDecimal, formatearPorcentaje } from "../utils/formatos";

export function PortadaComando() {
  const profile = getExecutiveProfile();
  const weakestCriterion = getWeakestCriterion();
  const strongestCriterion = getStrongestCriterion();
  const urgentControls = getUrgentControls();
  const criticalGap = getCriticalAndUrgentGap();
  const shortTerm = getRoadmapSummary()[0];

  const telemetryFeed = [
    { icon: ShieldAlert, label: "Control crítico", value: "8.24 Uso de criptografía" },
    { icon: Crosshair, label: "Prioridad inicial", value: `${shortTerm.gapPercent}% del GAP en 0–3 meses` },
    { icon: Fingerprint, label: "Vector débil", value: weakestCriterion.name },
    { icon: Network, label: "Fortaleza", value: strongestCriterion.name },
  ];

  return (
    <section id="overview" className="hero-command">
      <div className="hero-grid" />
      <motion.div
        className="hero-narrative"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <span className="eyebrow">
          <Sparkles size={15} /> Inteligencia ejecutiva de ciberseguridad
        </span>
        <h1>{profile.projectName}</h1>
        <p>{profile.status}</p>

        <div className="hero-tags">
          <span><DatabaseZap size={16} /> {profile.standard}</span>
          <span><LockKeyhole size={16} /> {profile.model}</span>
          <span><Activity size={16} /> {profile.period}</span>
        </div>
      </motion.div>

      <motion.div
        className="posture-console"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        <div className="console-topline">
          <span>Postura de seguridad</span>
          <em>Listo para exposición</em>
        </div>

        <div className="compliance-orbit" style={{ "--score": profile.globalCompliance } as CSSProperties}>
          <div className="orbit-pulse" />
          <strong>{formatearPorcentaje(profile.globalCompliance, 1)}</strong>
          <span>Cumplimiento global</span>
        </div>

        <div className="console-metrics">
          <div>
            <Target size={17} />
            <strong>{formatearDecimal(criticalGap, 3)}</strong>
            <span>GAP crítico/urgente</span>
          </div>
          <div>
            <ShieldAlert size={17} />
            <strong>{urgentControls.length}</strong>
            <span>controles críticos/urgentes</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="telemetry-strip"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.14 }}
      >
        {telemetryFeed.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.label}>
              <Icon size={18} />
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}
