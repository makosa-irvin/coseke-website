import { solutionCategories } from "@/content/solutions";
import { pillarIcons, pillarAccentVar } from "@/components/pillar-icons";

const taglines: Record<string, string> = {
  records: "Content & workflow",
  governance: "Boards & meetings",
  systems: "ERP & intelligence",
  infrastructure: "Hardware & support",
};

const partnerValues = ["Efficient work", "Clear decisions", "Reliable operations"];

export function CapabilitySummaryCard() {
  return (
    <div className="border-line-dark bg-indigo-deep/40 w-full max-w-md border p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-invert/45 text-[11px] tracking-wide uppercase">Coseke capability</p>
          <p className="text-invert mt-1 text-sm font-medium">Four connected solution areas</p>
        </div>
        <span className="border-brass-light/40 text-brass-light shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium whitespace-nowrap">
          One connected system
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {solutionCategories.map((category) => {
          const accent = `var(${pillarAccentVar[category.id]})`;
          return (
            <div key={category.id} className="border-line-dark bg-indigo-deep/60 border p-3.5">
              <span
                aria-hidden
                className="mb-3 flex h-7 w-7 items-center justify-center rounded"
                style={{ backgroundColor: accent }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width={15}
                  height={15}
                  fill="none"
                  stroke="white"
                  strokeWidth={2.4}
                >
                  {pillarIcons[category.id]}
                </svg>
              </span>
              <p className="text-invert text-xs font-semibold">
                {category.shortLabel.split(" & ")[0]}
              </p>
              <p className="text-invert/45 mt-0.5 text-[11px]">{taglines[category.id]}</p>
            </div>
          );
        })}
      </div>

      <div className="border-line-dark mt-5 grid grid-cols-[1fr_auto] items-center gap-3 border-t pt-5">
        <div>
          <p className="text-invert/45 text-[11px] tracking-wide uppercase">One partner</p>
          <ul className="text-invert/70 mt-2 space-y-1 text-xs">
            {partnerValues.map((v) => (
              <li key={v} className="flex items-center gap-1.5">
                <span aria-hidden className="bg-brass-light h-1 w-1 shrink-0 rounded-full" />
                {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-brass-light shrink-0 px-3.5 py-3 text-center">
          <p className="font-display text-indigo-deep text-xl leading-none font-bold">35+</p>
          <p className="text-indigo-deep/80 mt-1 text-[9px] leading-tight font-medium">
            years delivering
            <br />
            locally
          </p>
        </div>
      </div>
    </div>
  );
}
