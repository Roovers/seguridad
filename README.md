# Dashboard Ejecutivo de Seguridad de la Información

Aplicación web en React para presentar el diagnóstico y plan de mejora de Seguridad de la Información basado en ISO/IEC 27002:2022 — Capítulo 8, con foco en exposición ejecutiva, lectura visual clara e interacción profesional.

## Stack

- React 18
- TypeScript
- Vite
- Recharts
- Framer Motion
- Lucide React

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Luego abrir la URL indicada por Vite, normalmente:

```txt
http://localhost:5173
```

## Build productivo

```bash
npm run build
```

## Vista previa del build

```bash
npm run preview
```

## Funcionalidades principales

- Dashboard ejecutivo con KPIs principales.
- Recorrido narrativo por secciones.
- Navegación lateral con sección activa.
- Barra de progreso de lectura.
- Modo presentación para exponer en pantalla.
- Atajos de teclado:
  - `ArrowDown` / `PageDown`: avanzar sección.
  - `ArrowUp` / `PageUp`: retroceder sección.
  - `P`: activar o salir del modo presentación.
- Gráficos interactivos con tooltips profesionales.
- Explorador de controles con filtros por severidad, plazo y búsqueda.
- Diseño responsive y soporte para preferencias de reducción de movimiento.
- Separación de datos, selectores, componentes y configuración.
- División de código por chunks para mejorar carga y mantenimiento.

## Estructura relevante

```txt
src/
  components/
    charts/
    layout/
  config/
  constants/
  data/
  hooks/
  types/
  utils/
```

## Secciones de la aplicación

1. Inicio ejecutivo.
2. Analítica complementaria.
3. Diagnóstico global.
4. Priorización por riesgo y GAP.
5. Hoja de ruta de remediación.
6. Explorador de controles.
7. Ideas clave estratégicas.

## Nota de uso

La aplicación está preparada para exposición pública: no muestra trazabilidad interna, nombres de archivos fuente ni elementos de trabajo técnico dentro de la interfaz.
