"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";

export function SolutionsMegaMenu() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="text-invert/80 hover:text-invert flex items-center gap-1 text-sm transition-colors"
      >
        Solutions
        <ChevronDown
          size={14}
          className={open ? "rotate-180 transition-transform" : "transition-transform"}
        />
      </button>

      {open ? (
        <div className="border-line bg-paper text-ink absolute top-full left-1/2 z-50 mt-4 w-[38rem] -translate-x-1/2 border p-6 shadow-[0_12px_32px_rgba(15,36,57,0.18)]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {solutionCategories.map((category) => (
              <div key={category.id}>
                <p className="text-clay text-xs font-medium tracking-wide">{category.name}</p>
                <ul className="mt-3 space-y-2.5">
                  {getSolutionsByCategory(category.id).map((solution) => (
                    <li key={solution.slug}>
                      <Link
                        href={`/solutions/${solution.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-ink-soft hover:text-indigo text-sm"
                      >
                        {solution.tabLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-line mt-6 border-t pt-4">
            <Link
              href="/solutions"
              onClick={() => setOpen(false)}
              className="text-indigo hover:text-clay text-sm font-medium"
            >
              View all solutions
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
