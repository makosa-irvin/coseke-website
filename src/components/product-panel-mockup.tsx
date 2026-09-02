"use client";

import { useEffect, useState } from "react";
import { solutionCategories } from "@/content/solutions";

const accentVar: Record<string, string> = {
  overview: "--color-brass-light",
  records: "--color-pillar-records",
  governance: "--color-pillar-governance",
  systems: "--color-pillar-systems",
  infrastructure: "--color-pillar-infrastructure",
};

const navItems = [
  { id: "overview", label: "Overview" },
  ...solutionCategories.map((c) => ({ id: c.id, label: c.name.split(" & ")[0] })),
];

const rows = [
  { name: "Q3 risk & audit report", status: "Approved", tone: "ok" },
  { name: "FY26 budget resolution", status: "Pending", tone: "warn" },
  { name: "EDRMS migration — batch 4", status: "Complete", tone: "ok" },
];

export function ProductPanelMockup() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % navItems.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const active = navItems[activeIndex];
  const accent = `var(${accentVar[active.id]})`;

  return (
    <div
      role="img"
      aria-label="Preview of the Coseke dashboard, cycling through Records, Governance, Business Systems, and Infrastructure"
      className="border-line-dark bg-indigo-deep/60 border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
    >
      <div className="border-line-dark flex items-center gap-1.5 border-b px-4 py-3">
        <span className="bg-line-dark h-2 w-2 rounded-full" />
        <span className="bg-line-dark h-2 w-2 rounded-full" />
        <span className="bg-line-dark h-2 w-2 rounded-full" />
      </div>
      <div className="grid grid-cols-[8rem_1fr]">
        <nav className="border-line-dark border-r p-3">
          {navItems.map((item, i) => (
            <div
              key={item.id}
              className="mb-1 flex items-center gap-2 rounded px-2.5 py-2 text-xs transition-colors duration-500"
              style={{
                backgroundColor: i === activeIndex ? "rgba(255,255,255,0.06)" : "transparent",
                color: i === activeIndex ? "#e7edf1" : "#7f93a3",
              }}
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500"
                style={{ backgroundColor: i === activeIndex ? accent : "#3c4f60" }}
              />
              {item.label}
            </div>
          ))}
        </nav>
        <div className="p-5">
          <div className="mb-3.5 grid grid-cols-3 gap-2.5">
            {[
              { n: "400+", l: "Clients" },
              { n: "6", l: "Countries" },
              { n: "10", l: "Solutions" },
            ].map((kpi) => (
              <div key={kpi.l} className="rounded bg-white/5 p-3">
                <p className="font-display text-paper text-lg font-semibold">{kpi.n}</p>
                <p className="text-paper/50 mt-0.5 text-[10px]">{kpi.l}</p>
              </div>
            ))}
          </div>
          {rows.map((row) => (
            <div
              key={row.name}
              className="mb-2 flex items-center justify-between rounded bg-white/5 px-3 py-2.5"
            >
              <span className="text-paper/80 text-xs">{row.name}</span>
              <span
                className={`rounded px-2 py-0.5 text-[10px] ${
                  row.tone === "ok"
                    ? "bg-emerald-900/40 text-emerald-300"
                    : "bg-amber-900/40 text-amber-300"
                }`}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
