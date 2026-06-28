import type { LucideIcon } from "lucide-react";
import { Layers3 } from "lucide-react";

interface EncabezadoSeccionProps {
  kicker: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export function EncabezadoSeccion({ kicker, title, description, icon: Icon = Layers3 }: EncabezadoSeccionProps) {
  return (
    <div className="section-header">
      <div className="section-orb">
        <Icon size={20} />
      </div>
      <div>
        <span>{kicker}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
