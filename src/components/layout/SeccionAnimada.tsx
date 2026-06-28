import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SeccionAnimadaProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SeccionAnimada({ id, children, className = "section-space" }: SeccionAnimadaProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
