import type { ReactNode } from "react";
import { COMPACT_GRID } from "@/lib/design/layout";
import { cn } from "@/lib/utils";

type CompactGridCols = 2 | 3 | 4;

interface CompactGridProps {
  cols: CompactGridCols;
  className?: string;
  children: ReactNode;
}

const COLS_CLASS: Record<CompactGridCols, string> = {
  2: COMPACT_GRID.cols2,
  3: COMPACT_GRID.cols3,
  4: COMPACT_GRID.cols4,
};

export function CompactGrid({ cols, className, children }: CompactGridProps) {
  return <div className={cn(COLS_CLASS[cols], className)}>{children}</div>;
}
