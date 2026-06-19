import type { ReactNode } from "react";
import { COMPACT_SECTION } from "@/lib/design/layout";
import { cn } from "@/lib/utils";

type CompactSectionVariant = keyof typeof COMPACT_SECTION;

interface CompactSectionProps {
  variant?: CompactSectionVariant;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function CompactSection({
  variant = "tight",
  id,
  className,
  children,
}: CompactSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        COMPACT_SECTION[variant],
        "px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  );
}
