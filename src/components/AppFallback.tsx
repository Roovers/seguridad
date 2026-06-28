export function AppFallback() {
  return (
    <section className="section-space loading-section" aria-live="polite">
      <div className="glass-card loading-card">
        <span />
        <strong>Cargando visualización</strong>
        <p>Preparando gráficos y datos de la sección.</p>
      </div>
    </section>
  );
}
