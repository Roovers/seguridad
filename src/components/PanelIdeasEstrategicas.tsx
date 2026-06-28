import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Quote, Sparkles } from "lucide-react";
import { ideasEstrategicas } from "../data/ideasEstrategicas";
import { tonoImpacto } from "../utils/coloresRiesgo";
import { EncabezadoSeccion } from "./EncabezadoSeccion";

export function PanelIdeasEstrategicas() {
  return (
    <motion.section
      id="insights"
      className="section-space"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <EncabezadoSeccion
        kicker="Narrativa ejecutiva"
        title="Ideas clave estratégicas para la exposición"
        description="Convierte la lectura técnica en mensajes de negocio, priorización y riesgo entendibles para audiencia ejecutiva."
        icon={BrainCircuit}
      />

      <div className="insights-grid">
        {ideasEstrategicas.map((insight, index) => (
          <article key={insight.title} className={`glass-card insight-card ${tonoImpacto[insight.impact].className}`}>
            <div className="insight-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="insight-icon">
              {index === 0 ? <Sparkles size={20} /> : index === 1 ? <Lightbulb size={20} /> : <Quote size={20} />}
            </div>
            <span>{tonoImpacto[insight.impact].label}</span>
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
            {insight.recommendation && <footer>{insight.recommendation}</footer>}
          </article>
        ))}
      </div>
    </motion.section>
  );
}
