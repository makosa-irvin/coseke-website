import Link from "next/link";
import type { ReactNode } from "react";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";

const icons: Record<string, ReactNode> = {
  records: (
    <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M9 12h6M9 16h6M9 8h3" />
  ),
  governance: (
    <path d="M3 4h18v17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z M3 9h18M8 2v4M16 2v4 M8.5 14l2 2 4-4" />
  ),
  systems: <path d="M4 20V10M11 20V4M18 20v-7" />,
  infrastructure: <path d="M4 3h16v6H4z M4 15h16v6H4z M8 6h.01 M8 18h.01" />,
};

const accentVar: Record<string, string> = {
  records: "--color-pillar-records",
  governance: "--color-pillar-governance",
  systems: "--color-pillar-systems",
  infrastructure: "--color-pillar-infrastructure",
};

export function PillarGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {solutionCategories.map((category) => {
        const accent = `var(${accentVar[category.id]})`;
        const first = getSolutionsByCategory(category.id)[0];
        return (
          <Link
            key={category.id}
            href={first ? `/solutions/${first.slug}` : "/solutions"}
            className="group border-line bg-paper flex flex-col border p-6 transition-colors hover:border-transparent"
            style={{ borderTopWidth: 3, borderTopColor: accent }}
          >
            <span
              aria-hidden
              className="mb-6 flex h-11 w-11 items-center justify-center rounded-md"
              style={{ backgroundColor: accent }}
            >
              <svg
                viewBox="0 0 24 24"
                width={22}
                height={22}
                fill="none"
                stroke="white"
                strokeWidth={2}
              >
                {icons[category.id]}
              </svg>
            </span>
            <h3 className="font-display text-indigo text-lg font-semibold">{category.name}</h3>
            <p className="text-ink-soft mt-2 flex-1 text-sm">{category.description}</p>
            <span
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium"
              style={{ color: accent }}
            >
              Explore
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
