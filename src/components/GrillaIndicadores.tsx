import { motion } from "framer-motion";
import { Activity, Flame, FolderKanban, Goal, ListChecks, ShieldCheck, TriangleAlert } from "lucide-react";
import { getExecutiveKpis } from "../data/selectors";
import { normalizarClase } from "../utils/css";

const iconMap = {
  Activity,
  Flame,
  FolderKanban,
  Goal,
  ListChecks,
  ShieldCheck,
  TriangleAlert,
};

export function GrillaIndicadores() {
  const metrics = getExecutiveKpis();

  return (
    <section className="kpi-deck" aria-label="Indicadores ejecutivos">
      {metrics.map((metric, index) => {
        const Icon = iconMap[metric.icon as keyof typeof iconMap] ?? Activity;
        return (
          <motion.article
            key={metric.id}
            className={`glass-card kpi-card tone-${normalizarClase(metric.tone)}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: index * 0.04 }}
          >
            <div className="kpi-symbol">
              <Icon size={21} />
            </div>
            <div>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.description}</p>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}
