import type { ProyectoMejora } from "../types/seguridad";

export const proyectosMejora = [
  {
    "name": "Regularización de Usuarios",
    "plazo": "Corto",
    "controlsCount": 3,
    "weightAbs": 8.824,
    "weightPond": 1.324,
    "gap": 7.5,
    "compliance": 15.0,
    "isoControls": [
      "8.2",
      "8.3",
      "8.5"
    ],
    "justification": "Nivel 2 en 3 controles (8.2,8.3,8.5). Cumplimiento 15% — el más bajo del plan. Sin políticas de acceso formales, cualquier usuario puede operar sin restricciones.",
    "criticality": "URGENTE"
  },
  {
    "name": "Seguridad en Desarrollo de Sistemas",
    "plazo": "Medio",
    "controlsCount": 5,
    "weightAbs": 14.706,
    "weightPond": 8.971,
    "gap": 5.735,
    "compliance": 61.0,
    "isoControls": [
      "8.4",
      "8.25",
      "8.26",
      "8.28",
      "8.31"
    ],
    "justification": "5 controles (niveles 2-4). Mayor volumen del plan. Deuda técnica acumulada en todo el ciclo de desarrollo de software.",
    "criticality": "URGENTE"
  },
  {
    "name": "Mecanismos de Cifrado de la Información",
    "plazo": "Corto",
    "controlsCount": 2,
    "weightAbs": 5.882,
    "weightPond": 2.647,
    "gap": 3.235,
    "compliance": 45.0,
    "isoControls": [
      "8.10",
      "8.24"
    ],
    "justification": "Contiene el ÚNICO control en Nivel 1 (8.24). Historia Clínica sin cifrado = riesgo legal inmediato y violación de privacidad de pacientes.",
    "criticality": "CRÍTICO"
  },
  {
    "name": "Procedimientos Operativos de Seguridad (SOP)",
    "plazo": "Medio",
    "controlsCount": 3,
    "weightAbs": 8.824,
    "weightPond": 5.882,
    "gap": 2.941,
    "compliance": 66.7,
    "isoControls": [
      "8.9",
      "8.17",
      "8.19"
    ],
    "justification": "3 controles heterogéneos (niveles 2-5). La configuración y operación sin procedimientos formales genera riesgos operativos cotidianos.",
    "criticality": "URGENTE"
  },
  {
    "name": "Antivirus y Control de Malware",
    "plazo": "Corto",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 0.441,
    "gap": 2.5,
    "compliance": 15.0,
    "isoControls": [
      "8.7"
    ],
    "justification": "Nivel 2 — cumplimiento 15%. Sin EDR centralizado, la protección depende del criterio individual de cada operador.",
    "criticality": "URGENTE"
  },
  {
    "name": "Auditoría de Procesos",
    "plazo": "Corto",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 0.441,
    "gap": 2.5,
    "compliance": 15.0,
    "isoControls": [
      "8.34"
    ],
    "justification": "Nivel 2 — cumplimiento 15%. Sin auditoría formal, los incidentes no se detectan ni se documentan. Riesgo de no cumplimiento regulatorio.",
    "criticality": "URGENTE"
  },
  {
    "name": "Penetration Test Continuo y Detección de Vulnerabilidades",
    "plazo": "Medio",
    "controlsCount": 2,
    "weightAbs": 5.882,
    "weightPond": 4.265,
    "gap": 1.618,
    "compliance": 72.5,
    "isoControls": [
      "8.8",
      "8.29"
    ],
    "justification": "2 controles (niveles 3-4). Sin testing continuo, las vulnerabilidades pueden existir sin ser conocidas por la organización.",
    "criticality": "MODERADO"
  },
  {
    "name": "Prevención de Fuga de Datos (DLP)",
    "plazo": "Medio",
    "controlsCount": 2,
    "weightAbs": 5.882,
    "weightPond": 4.265,
    "gap": 1.618,
    "compliance": 72.5,
    "isoControls": [
      "8.11",
      "8.12"
    ],
    "justification": "2 controles (niveles 3-4). Datos de pacientes sin controles de exfiltración — riesgo de brecha silenciosa.",
    "criticality": "MODERADO"
  },
  {
    "name": "Monitorización de la Seguridad (SIEM)",
    "plazo": "Medio",
    "controlsCount": 2,
    "weightAbs": 5.882,
    "weightPond": 4.265,
    "gap": 1.618,
    "compliance": 72.5,
    "isoControls": [
      "8.15",
      "8.16"
    ],
    "justification": "2 controles (niveles 3-4). Baja trazabilidad de eventos: sin SIEM, los incidentes se detectan tarde o no se detectan.",
    "criticality": "MODERADO"
  },
  {
    "name": "Seguridad en las Comunicaciones",
    "plazo": "Medio",
    "controlsCount": 2,
    "weightAbs": 5.882,
    "weightPond": 4.265,
    "gap": 1.618,
    "compliance": 72.5,
    "isoControls": [
      "8.20",
      "8.21"
    ],
    "justification": "2 controles (niveles 3-4). Comunicaciones de red parcialmente aseguradas — superficie de ataque activa.",
    "criticality": "MODERADO"
  },
  {
    "name": "Seguridad Microinformática",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 1.765,
    "gap": 1.176,
    "compliance": 60.0,
    "isoControls": [
      "8.1"
    ],
    "justification": "1 control (nivel 3). Dispositivos de usuario sin política formal unificada. Mejora incremental viable.",
    "criticality": "MODERADO"
  },
  {
    "name": "Gestión de Accesos e Identidades (IDM)",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 1.765,
    "gap": 1.176,
    "compliance": 60.0,
    "isoControls": [
      "8.18"
    ],
    "justification": "1 control (nivel 3). Gestión de identidades sin sistema centralizado IDM. Base de mediano plazo.",
    "criticality": "MODERADO"
  },
  {
    "name": "Arquitectura de Seguridad",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 1.765,
    "gap": 1.176,
    "compliance": 60.0,
    "isoControls": [
      "8.27"
    ],
    "justification": "1 control (nivel 3). Diseño de arquitectura de seguridad documentado pero sin optimización.",
    "criticality": "MODERADO"
  },
  {
    "name": "Generación de Datos de Prueba",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 1.765,
    "gap": 1.176,
    "compliance": 60.0,
    "isoControls": [
      "8.33"
    ],
    "justification": "1 control (nivel 3). Datos reales usados en ambientes de prueba — riesgo de exposición.",
    "criticality": "MODERADO"
  },
  {
    "name": "Arquitectura de Alta Disponibilidad",
    "plazo": "Largo",
    "controlsCount": 2,
    "weightAbs": 5.882,
    "weightPond": 5.441,
    "gap": 0.441,
    "compliance": 92.5,
    "isoControls": [
      "8.6",
      "8.14"
    ],
    "justification": "2 controles (niveles 4-5). Alta madurez. Requiere ajuste menor de capacidad y documentación.",
    "criticality": "BUENO"
  },
  {
    "name": "Definición de Contratos (Internos y de Terceros)",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 2.5,
    "gap": 0.441,
    "compliance": 85.0,
    "isoControls": [
      "8.30"
    ],
    "justification": "1 control (nivel 4). Contratos con terceros bien gestionados; formalizar cláusulas de seguridad.",
    "criticality": "BUENO"
  },
  {
    "name": "Definición de Proceso de Gestión de Cambios",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 2.5,
    "gap": 0.441,
    "compliance": 85.0,
    "isoControls": [
      "8.32"
    ],
    "justification": "1 control (nivel 4). Proceso de cambios con indicadores. Optimizar hacia Nivel 5.",
    "criticality": "BUENO"
  },
  {
    "name": "Política y Gestión de Backups",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 2.941,
    "gap": 0.0,
    "compliance": 100.0,
    "isoControls": [
      "8.13"
    ],
    "justification": "1 control (nivel 5). Backups optimizados — mantenimiento y revisión periódica.",
    "criticality": "ÓPTIMO"
  },
  {
    "name": "Segmentación de Redes",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 2.941,
    "gap": 0.0,
    "compliance": 100.0,
    "isoControls": [
      "8.22"
    ],
    "justification": "1 control (nivel 5). Red segmentada correctamente — mantener y documentar.",
    "criticality": "ÓPTIMO"
  },
  {
    "name": "Sistemas de Detección y Prevención de Intrusos (IDS/IPS)",
    "plazo": "Largo",
    "controlsCount": 1,
    "weightAbs": 2.941,
    "weightPond": 2.941,
    "gap": 0.0,
    "compliance": 100.0,
    "isoControls": [
      "8.23"
    ],
    "justification": "1 control (nivel 5). IDS/IPS optimizado — monitoreo continuo y actualización de firmas.",
    "criticality": "ÓPTIMO"
  }
] satisfies ProyectoMejora[];
