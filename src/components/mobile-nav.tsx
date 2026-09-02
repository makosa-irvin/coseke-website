"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/content/site";
import { solutionCategories, getSolutionsByCategory } from "@/content/solutions";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const restNav = navigation.primary.filter((item) => item.label !== "Solutions");

  function close() {
    setOpen(false);
    setSolutionsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="border-line-dark/40 text-paper flex h-10 w-10 items-center justify-center border"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div className="border-line-dark bg-indigo-deep absolute inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b">
          <nav className="divide-line-dark/60 flex flex-col divide-y px-6">
            <div className="py-4">
              <button
                type="button"
                aria-expanded={solutionsOpen}
                onClick={() => setSolutionsOpen((v) => !v)}
                className="text-paper/90 flex w-full items-center justify-between text-lg"
              >
                Solutions
                <ChevronDown size={18} className={solutionsOpen ? "rotate-180" : ""} />
              </button>
              {solutionsOpen ? (
                <div className="mt-4 space-y-5">
                  {solutionCategories.map((category) => (
                    <div key={category.id}>
                      <p className="text-brass-light text-xs font-medium tracking-wide">
                        {category.name}
                      </p>
                      <ul className="mt-2 space-y-2">
                        {getSolutionsByCategory(category.id).map((solution) => (
                          <li key={solution.slug}>
                            <Link
                              href={`/solutions/${solution.slug}`}
                              onClick={close}
                              className="text-paper/80 hover:text-paper text-base"
                            >
                              {solution.tabLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    href="/solutions"
                    onClick={close}
                    className="text-paper hover:text-brass-light inline-block text-sm font-medium"
                  >
                    View all solutions
                  </Link>
                </div>
              ) : null}
            </div>

            {restNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-paper/90 hover:text-brass-light py-4 text-lg"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={close}
              className="text-paper/90 hover:text-brass-light py-4 text-lg"
            >
              Talk to us
            </Link>
            <Link
              href="/contact?type=demo"
              onClick={close}
              className="text-brass-light py-4 text-lg font-medium"
            >
              Discuss a project
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
