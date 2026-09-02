import Link from "next/link";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";
import { pillarIcons, pillarAccentVar } from "@/components/pillar-icons";

export function PillarGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {solutionCategories.map((category) => {
        const accent = `var(${pillarAccentVar[category.id]})`;
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
                {pillarIcons[category.id]}
              </svg>
            </span>
            <h3 className="font-display text-indigo text-lg font-semibold">
              {category.shortLabel}
            </h3>
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
