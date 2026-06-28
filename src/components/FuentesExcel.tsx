import { motion } from "framer-motion";
import { Database, FileSpreadsheet, GitPullRequest, ShieldCheck } from "lucide-react";
import { EncabezadoSeccion } from "./EncabezadoSeccion";

const sources = [
  {
    workbook: "FINAL_Diagnóstico(1).xlsx",
    sheets: ["Cuestionario", "Ctrl_Anexo", "Div_Metricas", "Diag_Global", "Gráficos", "Tablas"],
    usage: "Diagnóstico global, cumplimiento por criterio, distribución radial, barra de cumplimiento, métricas por tipo de control y soporte de visualizaciones.",
  },
  {
    workbook: "FINAL_Plan_de_Mejora(1).xlsx",
    sheets: ["Resumen Ejecutivo", "Plan de Mejora", "Diagnóstico Controles", "Ideas clave y métricas principales", "Panel"],
    usage: "Indicadores ejecutivos, hoja de ruta 0–3 / 3–8 / 8–12 meses, GAP por proyecto, evolución proyectada, matriz de controles e ideas estratégicas.",
  },
  {
    workbook: "Proyecto anterior de referencia (.zip)",
    sheets: ["src/data", "src/types", "src/utils", "referencia visual"],
    usage: "Referencia de lógica, tipos, datos normalizados y estructura previa, sin modificar el proyecto original.",
  },
];

export function FuentesExcel() {
  return (
    <motion.section
      id="fuentes"
      className="section-space footer-space"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <EncabezadoSeccion
        kicker="Gobernanza de datos"
        title="Trazabilidad de origen Excel"
        description="El panel queda preparado para evolucionar a un flujo de datos de extracción automática, manteniendo por ahora datos embebidos y versionables en TypeScript."
        icon={FileSpreadsheet}
      />

      <div className="sources-grid">
        {sources.map((source) => (
          <article key={source.workbook} className="glass-card source-card">
            <div className="source-icon"><Database size={20} /></div>
            <h3>{source.workbook}</h3>
            <p>{source.usage}</p>
            <div className="sheet-tags">
              {source.sheets.map((sheet) => <span key={sheet}>{sheet}</span>)}
            </div>
          </article>
        ))}
      </div>

      <div className="next-architecture glass-card">
        <div>
          <ShieldCheck size={22} />
          <strong>Arquitectura recomendada siguiente</strong>
          <p>Separar extracción de Excel, normalización de datos y presentación visual para que el panel pueda actualizarse sin tocar componentes.</p>
        </div>
        <div>
          <GitPullRequest size={22} />
          <strong>Próximo paso incremental</strong>
          <p>Crear automatizaciones de importación que lean ambos Excel, validen métricas clave y regeneren automáticamente los archivos de datos TypeScript.</p>
        </div>
      </div>
    </motion.section>
  );
}
