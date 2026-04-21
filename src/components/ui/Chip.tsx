import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className = "" }: ChipProps) {
  return (
    <span
      className={`rounded-lg bg-surface-bright px-4 py-2 font-label text-sm text-on-surface-variant transition-colors duration-300 hover:bg-tertiary hover:text-on-tertiary ${className}`.trim()}
    >
      {children}
    </span>
  );
}
