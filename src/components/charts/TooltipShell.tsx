import type { ReactNode } from "react";

interface TooltipShellProps {
  title: ReactNode;
  children: ReactNode;
  wide?: boolean;
}

export function TooltipShell({ title, children, wide = false }: TooltipShellProps) {
  return (
    <div className={`chart-tooltip${wide ? " wide-tooltip" : ""}`}>
      <strong>{title}</strong>
      {children}
    </div>
  );
}
