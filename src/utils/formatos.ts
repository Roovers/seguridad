export const formatearPorcentaje = (value: number, digits = 1) =>
  `${value.toLocaleString("es-AR", { minimumFractionDigits: digits, maximumFractionDigits: digits })}%`;

export const formatearDecimal = (value: number, digits = 3) =>
  value.toLocaleString("es-AR", { minimumFractionDigits: digits, maximumFractionDigits: digits });

export const formatearValorControl = (value: number) => formatearPorcentaje(value * 100, value === 1 ? 0 : 0);

export const pluralizar = (count: number, singular: string, plural: string) =>
  count === 1 ? `${count} ${singular}` : `${count} ${plural}`;
