# Refactor Etapa 1 — Base técnica y arquitectura

## Objetivo

Ordenar la base del proyecto sin alterar todavía la identidad visual principal. Esta etapa deja el código más mantenible para avanzar luego con UI premium, navegación narrativa, optimización de gráficos y modo exposición.

## Cambios realizados

### 1. Configuración centralizada de secciones

Se creó `src/config/sections.ts` para evitar que la navegación dependa de strings sueltos dispersos en `App.tsx` y `MarcoAplicacion.tsx`.

Incluye:

- `AppSectionId`
- `AppSection`
- `appSections`
- `appSectionIds`
- `sectionById`
- `defaultSectionIcon`

Esto permite mantener la navegación, labels e íconos desde una sola fuente.

### 2. Capa de selectores de datos

Se creó `src/data/selectors.ts` para desacoplar componentes de operaciones repetidas sobre arrays.

Funciones agregadas:

- `getExecutiveProfile()`
- `getExecutiveKpis()`
- `getGlobalDiagnosisPoint()`
- `getCriteriaByCompliance()`
- `getWeakestCriterion()`
- `getStrongestCriterion()`
- `getProjectsByGap()`
- `getTopProjectsByGap()`
- `getUrgentControls()`
- `getCriticalAndUrgentGap()`
- `getRoadmapSummary()`
- `getControlsByGap()`
- `getProjectsByTerm()`
- `getRoadmapSummaryByTerm()`

Beneficio: los componentes quedan más limpios y la lógica de negocio queda ubicada en una capa reutilizable.

### 3. Componente reusable para secciones animadas

Se creó `src/components/layout/SeccionAnimada.tsx` para evitar repetir la misma configuración de `motion.section` en múltiples componentes.

Se aplicó en:

- `App.tsx`
- `HojaRuta.tsx`
- `ExploradorControles.tsx`

### 4. Shell reusable para tooltips

Se creó `src/components/charts/TooltipShell.tsx`, usado en `AnalisisRiesgoProyectos.tsx`.

Beneficio: mantiene consistencia visual y reduce JSX duplicado en tooltips profesionales.

### 5. Tema centralizado de gráficos

Se creó `src/constants/chartTheme.ts` con tokens de colores y márgenes estándar para Recharts.

Incluye:

- `chartColors`
- `maturityColors`
- `termColors`
- `defaultChartMargin`

Beneficio: prepara el terreno para la etapa de rediseño visual de gráficos sin editar valores hardcodeados en cada componente.

### 6. Utilidad para clases CSS

Se creó `src/utils/css.ts` con `normalizarClase()` para convertir valores como `CRÍTICO` u `ÓPTIMO` en clases CSS seguras.

Se aplicó en `GrillaIndicadores.tsx`.

## Archivos modificados

- `src/App.tsx`
- `src/components/MarcoAplicacion.tsx`
- `src/components/GrillaIndicadores.tsx`
- `src/components/PortadaComando.tsx`
- `src/components/DiagnosticoYMadurez.tsx`
- `src/components/AnalisisRiesgoProyectos.tsx`
- `src/components/HojaRuta.tsx`
- `src/components/ExploradorControles.tsx`

## Archivos nuevos

- `src/config/sections.ts`
- `src/constants/chartTheme.ts`
- `src/data/selectors.ts`
- `src/utils/css.ts`
- `src/components/layout/SeccionAnimada.tsx`
- `src/components/charts/TooltipShell.tsx`

## Validación

Se ejecutó:

```bash
npm ci --ignore-scripts
npm run build
```

Resultado:

- TypeScript compila correctamente.
- Vite genera build correctamente.
- Se mantiene una advertencia de tamaño de chunk porque toda la app se empaqueta en un único bundle grande. No bloquea la ejecución.

## Próxima etapa recomendada

Etapa 2: refactor UX/UI premium.

Prioridades sugeridas:

1. Dividir `styles.css` en módulos/layers: tokens, base, layout, components, charts y responsive.
2. Agregar navegación activa por scroll.
3. Crear modo presentación con recorrido guiado.
4. Mejorar cards, spacing, densidad visual y jerarquía tipográfica.
5. Optimizar gráficos con tooltips enriquecidos, labels ejecutivos y mejor lectura en exposición.
6. Aplicar code splitting con `React.lazy()` para reducir el chunk inicial.
