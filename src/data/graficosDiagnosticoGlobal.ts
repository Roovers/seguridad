export interface DiagnosisRadarPoint {
  criterion: string;
  shortName: string;
  compliance: number;
  target: number;
}

export interface GlobalCompliancePoint {
  label: string;
  compliance: number;
  pending: number;
  target: number;
}

export const datosRadarDiagnostico: DiagnosisRadarPoint[] = [
  {
    criterion: "Gestión de Accesos e Identidades",
    shortName: "Accesos",
    compliance: 24.0,
    target: 100,
  },
  {
    criterion: "Protección de la Información y Datos",
    shortName: "Datos",
    compliance: 58.75,
    target: 100,
  },
  {
    criterion: "Seguridad en el Desarrollo de Software",
    shortName: "Desarrollo",
    compliance: 69.38,
    target: 100,
  },
  {
    criterion: "Gestión de Configuraciones y Vulnerabilidades",
    shortName: "Config/Vuln",
    compliance: 71.25,
    target: 100,
  },
  {
    criterion: "Seguridad de Redes y Comunicaciones",
    shortName: "Redes",
    compliance: 86.25,
    target: 100,
  },
  {
    criterion: "Monitoreo, Registro y Auditoría",
    shortName: "Monitoreo",
    compliance: 61.25,
    target: 100,
  },
  {
    criterion: "Disponibilidad y Continuidad Operacional",
    shortName: "Continuidad",
    compliance: 75.0,
    target: 100,
  },
  {
    criterion: "Gestión de Dispositivos y Puntos Finales",
    shortName: "Punto finals",
    compliance: 60.0,
    target: 100,
  },
];

export const diagnosticoCumplimientoGlobal: GlobalCompliancePoint[] = [
  {
    label: "Diagnóstico global ISO 27002 Cap. 8",
    compliance: 63.1,
    pending: 36.9,
    target: 100,
  },
];

export const notasGraficosDiagnosticoGlobal = [
  {
    label: "Gráfico radial",
    value: "8 criterios",
    description: "Replica el gráfico de puntas de la hoja Diag_Global.",
  },
  {
    label: "Barra global",
    value: "63,1%",
    description: "Replica la barra única de cumplimiento global.",
  },
  {
    label: "Lectura ejecutiva",
    value: "Brecha visible",
    description: "El perfil evidencia asimetría entre redes fuertes y accesos débiles.",
  },
];
