import { useEffect, useState, type ReactNode } from "react";
import { ArrowDown, ArrowUp, Layers3, Maximize2, Minimize2, ShieldCheck } from "lucide-react";
import { getExecutiveProfile } from "../data/selectors";
import { defaultSectionIcon, sectionById, type AppSectionId } from "../config/sections";
import { useScrollSpy } from "../hooks/useScrollSpy";

interface MarcoAplicacionProps {
  children: ReactNode;
  sections: readonly AppSectionId[];
}

export function MarcoAplicacion({ children, sections }: MarcoAplicacionProps) {
  const profile = getExecutiveProfile();
  const [presentationMode, setPresentationMode] = useState(false);
  const { activeId, progress, goToSection, goToNextSection, goToPreviousSection } = useScrollSpy(sections);
  const activeSection = sectionById[activeId];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        goToNextSection();
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        goToPreviousSection();
      }
      if (event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPresentationMode((value) => !value);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goToNextSection, goToPreviousSection]);

  return (
    <div className={`app-frame${presentationMode ? " presentation-mode" : ""}`}>
      <div className="reading-progress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></div>

      <aside className="side-rail">
        <div className="brand-lockup">
          <div className="brand-mark">
            <ShieldCheck size={26} />
          </div>
          <div>
            <strong>Seguridad Informática</strong>
            <span>Gobierno, riesgo y cumplimiento</span>
          </div>
        </div>

        <div className="side-card">
          <span className="side-card-kicker">
            <ShieldCheck size={14} /> Marco de evaluación
          </span>
          <strong>{profile.organization}</strong>
          <p>{profile.standard} · {profile.chapter}</p>
        </div>

        <nav className="side-nav" aria-label="Navegación principal">
          {sections.map((sectionId, index) => {
            const item = sectionById[sectionId];
            const Icon = item?.icon ?? defaultSectionIcon ?? Layers3;
            const isActive = sectionId === activeId;
            return (
              <button
                type="button"
                className={isActive ? "active" : ""}
                aria-current={isActive ? "step" : undefined}
                onClick={() => goToSection(sectionId)}
                key={sectionId}
              >
                <Icon size={17} />
                <span>{item?.label ?? sectionId}</span>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <i />
              </button>
            );
          })}
        </nav>

        <div className="side-footer">
          <span>Recorrido de exposición</span>
          <strong>↑ / ↓ avanzar · P presentar</strong>
        </div>
      </aside>

      <main className="content-area">
        <header className="top-command-bar">
          <div>
            <span>Sección activa</span>
            <strong>{activeSection?.label ?? "Inicio"}</strong>
          </div>
          <div className="top-command-actions">
            <button type="button" onClick={goToPreviousSection} aria-label="Ir a la sección anterior">
              <ArrowUp size={16} /> Anterior
            </button>
            <button type="button" onClick={goToNextSection} aria-label="Ir a la sección siguiente">
              <ArrowDown size={16} /> Siguiente
            </button>
            <button type="button" className="presentation-toggle" onClick={() => setPresentationMode((value) => !value)}>
              {presentationMode ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              {presentationMode ? "Salir" : "Presentar"}
            </button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
