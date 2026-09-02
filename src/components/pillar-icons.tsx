import type { ReactNode } from "react";

export const pillarIcons: Record<string, ReactNode> = {
  records: (
    <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M9 12h6M9 16h6M9 8h3" />
  ),
  governance: (
    <path d="M3 4h18v17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z M3 9h18M8 2v4M16 2v4 M8.5 14l2 2 4-4" />
  ),
  systems: <path d="M4 20V10M11 20V4M18 20v-7" />,
  infrastructure: <path d="M4 3h16v6H4z M4 15h16v6H4z M8 6h.01 M8 18h.01" />,
};

export const pillarAccentVar: Record<string, string> = {
  records: "--color-pillar-records",
  governance: "--color-pillar-governance",
  systems: "--color-pillar-systems",
  infrastructure: "--color-pillar-infrastructure",
};
