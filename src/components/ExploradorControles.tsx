import { useMemo, useState } from "react";
import { Filter, Grid3X3, ListChecks, Search } from "lucide-react";
import { controlesSeguridad } from "../data/controlesSeguridad";
import { getControlsByGap } from "../data/selectors";
import { formatearDecimal, formatearValorControl } from "../utils/formatos";
import { tonoNivel, nivelesOrdenados, plazosOrdenados, tonoPlazo } from "../utils/coloresRiesgo";
import type { HojaRutaTerm, NivelSeguridad } from "../types/seguridad";
import { EncabezadoSeccion } from "./EncabezadoSeccion";
import { SeccionAnimada } from "./layout/SeccionAnimada";

type LevelFilter = NivelSeguridad | "Todos";
type TermFilter = HojaRutaTerm | "Todos";

export function ExploradorControles() {
  const [level, setLevel] = useState<LevelFilter>("Todos");
  const [term, setTerm] = useState<TermFilter>("Todos");
  const [query, setQuery] = useState("");

  const filteredControls = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return getControlsByGap()
      .filter((control) => level === "Todos" || control.level === level)
      .filter((control) => term === "Todos" || control.plazo === term)
      .filter((control) => {
        if (!normalizedQuery) return true;
        return [control.control, control.description, control.project, control.maturity]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      });
  }, [level, term, query]);

  return (
    <SeccionAnimada id="controles">
      <EncabezadoSeccion
        kicker="Explorador operativo"
        title="Mapa de calor y tabla de controles ISO 27002"
        description="Permite recorrer los 34 controles por nivel, plazo, GAP, madurez y proyecto asignado."
        icon={Grid3X3}
      />

      <div className="controls-layout">
        <article className="glass-card controls-filter-card">
          <div className="filter-title"><Filter size={17} /> Filtros de exposición</div>
          <div className="filter-group">
            <span>Nivel</span>
            <button className={level === "Todos" ? "active" : ""} onClick={() => setLevel("Todos")}>Todos</button>
            {nivelesOrdenados.map((item) => (
              <button key={item} className={level === item ? "active" : ""} onClick={() => setLevel(item)}>{tonoNivel[item].label}</button>
            ))}
          </div>
          <div className="filter-group">
            <span>Plazo</span>
            <button className={term === "Todos" ? "active" : ""} onClick={() => setTerm("Todos")}>Todos</button>
            {plazosOrdenados.map((item) => (
              <button key={item} className={term === item ? "active" : ""} onClick={() => setTerm(item)}>{tonoPlazo[item].label}</button>
            ))}
          </div>
          <label className="search-box">
            <Search size={16} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar control, proyecto o madurez" />
          </label>
          <div className="filter-result">
            <strong>{filteredControls.length}</strong>
            <span>controles visibles</span>
          </div>
        </article>

        <article className="glass-card heatmap-card">
          <div className="card-heading compact">
            <span>Mapa de riesgo</span>
            <h3>Controles por severidad</h3>
          </div>
          <div className="heatmap-grid">
            {controlesSeguridad.map((control) => (
              <div
                key={control.control}
                className={`heatmap-cell ${tonoNivel[control.level].className}`}
                title={`${control.control} — ${control.description} · ${control.level} · GAP ${control.gap}`}
              >
                <strong>{control.control}</strong>
                <span>{formatearDecimal(control.gap, 3)}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card controls-table-card">
          <div className="card-heading compact">
            <span><ListChecks size={15} /> Matriz detallada</span>
            <h3>Controles filtrados</h3>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Control</th>
                  <th>Descripción</th>
                  <th>Proyecto</th>
                  <th>Madurez</th>
                  <th>Cumpl.</th>
                  <th>GAP</th>
                  <th>Nivel</th>
                  <th>Plazo</th>
                </tr>
              </thead>
              <tbody>
                {filteredControls.map((control) => (
                  <tr key={control.control}>
                    <td><strong>{control.control}</strong></td>
                    <td>{control.description}</td>
                    <td>{control.project}</td>
                    <td>{control.maturity}</td>
                    <td>{formatearValorControl(control.value)}</td>
                    <td>{formatearDecimal(control.gap, 3)}</td>
                    <td><span className={`pill ${tonoNivel[control.level].className}`}>{tonoNivel[control.level].label}</span></td>
                    <td><span className={`pill ${tonoPlazo[control.plazo].className}`}>{control.plazo}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </SeccionAnimada>
  );
}
