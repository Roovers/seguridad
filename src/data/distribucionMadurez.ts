import type { ElementoDistribucionMadurez, ElementoLeyendaMadurez } from "../types/seguridad";

export const distribucionMadurez = [
  {
    "level": "Nivel 1",
    "label": "Inicial",
    "count": 1
  },
  {
    "level": "Nivel 2",
    "label": "Gestionado",
    "count": 7
  },
  {
    "level": "Nivel 3",
    "label": "Definido",
    "count": 10
  },
  {
    "level": "Nivel 4",
    "label": "Cuantitativo",
    "count": 11
  },
  {
    "level": "Nivel 5",
    "label": "Optimizado",
    "count": 5
  }
] satisfies ElementoDistribucionMadurez[];

export const leyendaMadurez = [
  {
    "level": 0,
    "name": "Inexistente",
    "description": "No se realiza ningún aspecto de la actividad."
  },
  {
    "level": 1,
    "name": "Inicial",
    "description": "Procesos reactivos y dependientes del esfuerzo personal."
  },
  {
    "level": 2,
    "name": "Gestionado",
    "description": "Buenas prácticas normalizadas por experiencia, sin estandarización corporativa total."
  },
  {
    "level": 3,
    "name": "Definido",
    "description": "Métodos, templates, normativas y procedimientos documentados."
  },
  {
    "level": 4,
    "name": "Cuantitativo",
    "description": "Seguimiento con indicadores numéricos y estadísticos."
  },
  {
    "level": 5,
    "name": "Optimizado",
    "description": "Mejora continua basada en medición y reducción sistemática de problemas."
  }
] satisfies ElementoLeyendaMadurez[];
