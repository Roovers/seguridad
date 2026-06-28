import type { IdeaEstrategica } from "../types/seguridad";

export const ideasEstrategicas = [
  {
    "title": "PARETO PERFECTO: 21% DEL ESFUERZO RESUELVE EL 42,6% DEL RIESGO",
    "description": "El Corto Plazo ataca solo 7 de los 34 controles (21% del volumen), pero cubre 15,735 puntos de GAP — el 42,6% del riesgo total. Esto valida la Ley de Pareto: concentrar el esfuerzo inicial en los 4 proyectos de menor cumplimiento (15%) y el único control Nivel 1 genera el mayor impacto posible en el menor tiempo. ROI de seguridad: 1 jornada de Corto Plazo = 3x el impacto de 1 jornada de Largo Plazo.",
    "impact": "Alto",
    "recommendation": "Ejecutar primero los proyectos de corto plazo para maximizar reducción de riesgo por unidad de esfuerzo."
  },
  {
    "title": "LA BOMBA DE TIEMPO: 8.24 ES EL ÚNICO NIVEL 1 DE TODO EL PLAN",
    "description": "De los 34 controles evaluados, solo 1 está en Nivel 1 (Inicial): el 8.24 — Uso de Criptografía. Esto significa que el cifrado de la información existe únicamente como esfuerzo personal de algún empleado, sin proceso, sin política y sin verificación. En una clínica, la Historia Clínica Electrónica (HCE) sin cifrado en reposo es una violación de privacidad médica latente. El costo de un incidente supera infinitamente el costo de implementar cifrado AES-256. Por eso es la primera prioridad del Corto Plazo.",
    "impact": "Alto",
    "recommendation": "Formalizar e implementar cifrado de información sensible, especialmente en repositorios de Historia Clínica Electrónica."
  },
  {
    "title": "FORTALEZAS QA: 5 CONTROLES YA EN NIVEL 5, 3 PROYECTOS CON GAP = 0",
    "description": "La clínica ya tiene 5 controles en Nivel 5 (Optimizado): Backups (8.13), Redundancia (8.14), Instalación de SW (8.19), Segmentación de Redes (8.22) e IDS/IPS (8.23). Esto representa una base sólida de continuidad y defensa perimetral que pocas organizaciones del sector salud tienen formalmente implementadas. Estos 3 proyectos tienen GAP = 0 — no necesitan inversión de mejora, solo mantenimiento. Son las fortalezas que la clínica puede exhibir con orgullo ante cualquier auditoría.",
    "impact": "Medio",
    "recommendation": "Mantener estos controles con monitoreo periódico y evitar desviar inversión correctiva hacia áreas con GAP nulo."
  },
  {
    "title": "CONCENTRACIÓN: 2 PROYECTOS CONCENTRAN EL 35% DEL GAP TOTAL",
    "description": "Los dos proyectos con mayor GAP son 'Regularización de Usuarios' (7,500 pts = 20,3% del total) y 'Seguridad en Desarrollo de Sistemas' (5,735 pts = 15,5% del total). Juntos representan el 35,9% del GAP total con solo 8 controles. Regularización de Usuarios tiene cumplimiento del 15% — el valor más bajo del plan junto a Antivirus y Auditoría — lo que indica que los accesos de usuarios operan completamente sin formalización. Si se resuelve Regularización de Usuarios, se resuelve el mayor vector de riesgo interno de la clínica.",
    "impact": "Alto",
    "recommendation": "Asignar sponsors ejecutivos a Regularización de Usuarios y Seguridad en Desarrollo de Sistemas."
  },
  {
    "title": "ASIMETRÍA DE MADUREZ: LA CLÍNICA TIENE UNA DOBLE VELOCIDAD",
    "description": "El diagnóstico revela una brecha interna llamativa: la clínica tiene 5 controles en Nivel 5 y 8 controles en Niveles 1-2. Esto no es un perfil de madurez uniforme, sino una organización con 'islas de excelencia' (backups, red, IDS) rodeadas de vulnerabilidades críticas (cifrado, accesos, antivirus). Esta asimetría sugiere inversiones históricas concentradas en infraestructura perimetral, pero con descuido sistemático de los procesos de gestión y acceso. El plan de mejora ataca exactamente esa brecha: no reforzar lo que ya es fuerte, sino elevar el piso de los controles más débiles.",
    "impact": "Alto",
    "recommendation": "Elevar el piso de madurez en accesos, cifrado y malware sin duplicar inversiones en defensas ya optimizadas."
  }
] satisfies IdeaEstrategica[];
