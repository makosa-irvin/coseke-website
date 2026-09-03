"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";

export function SolutionsExplorer() {
  const [activeCategory, setActiveCategory] = useState(solutionCategories[0].id);
  const categorySolutions = getSolutionsByCategory(activeCategory);
  const [activeSlug, setActiveSlug] = useState(categorySolutions[0].slug);

  const active = categorySolutions.find((s) => s.slug === activeSlug) ?? categorySolutions[0];

  function selectCategory(categoryId: string) {
    setActiveCategory(categoryId);
    setActiveSlug(getSolutionsByCategory(categoryId)[0].slug);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {solutionCategories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => selectCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-clay text-invert"
                  : "border-line text-ink-soft hover:text-indigo border"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      <div
        className="mt-6 flex flex-wrap gap-1"
        role="tablist"
        aria-label="Solutions in this category"
      >
        {categorySolutions.map((solution) => {
          const isActive = solution.slug === activeSlug;
          return (
            <button
              key={solution.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveSlug(solution.slug)}
              className={`border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-line border-b-paper bg-paper text-indigo"
                  : "text-ink-soft hover:text-indigo border-transparent"
              }`}
              style={isActive ? { marginBottom: -1 } : undefined}
            >
              {solution.tabLabel}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="border-line bg-paper border p-8">
        <p className="text-clay text-sm">{active.tagline}</p>
        <h3 className="font-display text-indigo mt-2 text-2xl font-semibold sm:text-3xl">
          {active.name}
        </h3>
        <p className="text-ink-soft mt-4 max-w-2xl">{active.summary}</p>

        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {active.benefits.map((benefit) => (
            <li key={benefit} className="text-ink-soft flex gap-3 text-sm">
              <span aria-hidden className="bg-clay mt-2 h-1 w-1 shrink-0 rounded-full" />
              {benefit}
            </li>
          ))}
        </ul>

        <Link
          href={`/solutions/${active.slug}`}
          className="text-indigo hover:text-clay mt-8 inline-flex items-center gap-1 text-sm font-medium"
        >
          More on {active.tabLabel}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
