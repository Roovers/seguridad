# Refactor Etapa 3 — versión pública y cobertura de gráficos

## Objetivo

Convertir la app en una versión más apta para exposición pública: quitar contenido interno/de trabajo y sumar visualizaciones que estaban presentes en los Excel pero todavía no estaban representadas en la app.

## Cambios aplicados

- Se retiró de la navegación pública la sección de trazabilidad de origen de archivos.
- Se quitó del recorrido visible la mención a archivos fuente, hojas internas y proyecto anterior de referencia.
- Se incorporó una nueva sección pública: **Analítica complementaria**.
- Se agregó `src/data/analiticaComplementaria.ts` con datos normalizados para gráficos faltantes.
- Se agregó `src/components/AnaliticaComplementaria.tsx` con cuatro visualizaciones nuevas.
- Se ajustó el texto del diagnóstico para evitar referencias internas al Excel.
- Se actualizó la navegación lateral para incluir la sección **Analítica** y eliminar **Fuentes**.

## Gráficos agregados

1. **Distribución de métricas según tipo de control**
   - Preventivo: 31
   - Detectivo: 7
   - Correctivo: 4

2. **AVG GAP CAP por propiedad de seguridad**
   - Confidencialidad: 1,237
   - Integridad: 1,197
   - Disponibilidad: 1,181

3. **AVG GAP CAP por tipo de control**
   - Preventivo: 1,173
   - Detectivo: 0,974
   - Correctivo: 1,061

4. **Promedio de GAP de proyectos segmentado por plazo**
   - Corto
   - Medio
   - Largo

## Validación

Comandos ejecutados:

```bash
npm ci --ignore-scripts
npm run build
```

Resultado: build correcto.

Nota: Vite mantiene una advertencia de chunk grande por concentrar Recharts y Framer Motion en un único bundle. Queda como optimización de performance para una etapa posterior con lazy loading/code splitting.
