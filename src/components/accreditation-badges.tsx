import { accreditations } from "@/content/site";

export function AccreditationBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const textClass =
    variant === "dark" ? "text-brass-light border-brass-light/50" : "text-brass border-brass/50";
  return (
    <ul className="flex flex-wrap gap-3">
      {accreditations.map((item) => (
        <li
          key={item}
          className={`border px-3 py-1 text-xs font-medium tracking-wide ${textClass}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
