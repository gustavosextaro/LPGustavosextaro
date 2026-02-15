
import { cn } from "@/lib/utils";
import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden relative", className)}>
      {children}
    </section>
  );
}
