# Release final — Dashboard de Seguridad Informática

## Estado

Versión lista para exposición ejecutiva.

## Validaciones realizadas

- `npm ci --ignore-scripts`
- `npm run build`
- Build productivo generado correctamente en `dist/`.
- Sin errores de TypeScript.
- Sin vulnerabilidades reportadas por `npm audit` durante la instalación.

## Mejoras incorporadas en esta versión final

- Eliminación del contenido visible no apto para audiencia pública.
- Ajuste de textos para que la narrativa sea ejecutiva y no técnica-interna.
- Refuerzo del modo presentación y atajo `P`.
- Error boundary para evitar pantalla en blanco ante un fallo de render.
- Lazy loading de secciones pesadas.
- Separación de chunks para gráficos, animaciones e íconos.
- Ajuste de visualización AVG GAP CAP en formato circular para mayor fidelidad visual con el material original.
- Estilos de carga, error y print/exportación.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```
