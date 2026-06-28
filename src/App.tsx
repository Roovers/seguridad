import { lazy, Suspense } from "react";
import { ShieldCheck } from "lucide-react";
import { PortadaComando } from "./components/PortadaComando";
import { GrillaIndicadores } from "./components/GrillaIndicadores";
import { MarcoAplicacion } from "./components/MarcoAplicacion";
import { EncabezadoSeccion } from "./components/EncabezadoSeccion";
import { SeccionAnimada } from "./components/layout/SeccionAnimada";
import { AppFallback } from "./components/AppFallback";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import { appSectionIds } from "./config/sections";

const AnaliticaComplementaria = lazy(() =>
  import("./components/AnaliticaComplementaria").then((module) => ({ default: module.AnaliticaComplementaria })),
);
const DiagnosticoYMadurez = lazy(() =>
  import("./components/DiagnosticoYMadurez").then((module) => ({ default: module.DiagnosticoYMadurez })),
);
const AnalisisRiesgoProyectos = lazy(() =>
  import("./components/AnalisisRiesgoProyectos").then((module) => ({ default: module.AnalisisRiesgoProyectos })),
);
const HojaRuta = lazy(() => import("./components/HojaRuta").then((module) => ({ default: module.HojaRuta })));
const ExploradorControles = lazy(() =>
  import("./components/ExploradorControles").then((module) => ({ default: module.ExploradorControles })),
);
const PanelIdeasEstrategicas = lazy(() =>
  import("./components/PanelIdeasEstrategicas").then((module) => ({ default: module.PanelIdeasEstrategicas })),
);

export default function App() {
  return (
    <AppErrorBoundary>
      <MarcoAplicacion sections={appSectionIds}>
        <PortadaComando />
        <GrillaIndicadores />

        <Suspense fallback={<AppFallback />}>
          <AnaliticaComplementaria />

          <SeccionAnimada id="diagnostico">
            <EncabezadoSeccion
              kicker="Diagnóstico global"
              title="Postura ISO 27002 — brecha, puntas y madurez"
              description="Integra perfil radial, cumplimiento global, distribución de madurez y ranking por dominio tecnológico."
              icon={ShieldCheck}
            />
            <DiagnosticoYMadurez />
          </SeccionAnimada>

          <SeccionAnimada id="riesgo">
            <EncabezadoSeccion
              kicker="Plan de mejora"
              title="Priorización ejecutiva por GAP y cumplimiento"
              description="Cruza urgencia, brecha, plazo y cantidad de controles para explicar qué remediar primero."
            />
            <AnalisisRiesgoProyectos />
          </SeccionAnimada>

          <HojaRuta />
          <ExploradorControles />
          <PanelIdeasEstrategicas />
        </Suspense>
      </MarcoAplicacion>
    </AppErrorBoundary>
  );
}
