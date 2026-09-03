import { Photo } from "@/components/photo";
import { accreditations } from "@/content/site";

function BadgeFallback({ label, variant }: { label: string; variant: "light" | "dark" }) {
  const textClass =
    variant === "dark" ? "text-brass-light border-brass-light/50" : "text-brass border-brass/50";
  return (
    <div
      className={`flex h-full w-full items-center justify-center border px-2 text-center ${textClass}`}
    >
      <span className="text-[10px] font-medium tracking-wide">{label}</span>
    </div>
  );
}

export function AccreditationBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const labelClass = variant === "dark" ? "text-paper/60" : "text-ink-soft";
  return (
    <ul className="flex flex-wrap gap-5">
      {accreditations.map((item) => (
        <li key={item.slug} className="flex w-20 flex-col items-center gap-2 text-center">
          <Photo
            src={`/images/accreditation-${item.slug}.png`}
            alt={item.label}
            fallback={<BadgeFallback label={item.label} variant={variant} />}
            className="h-16 w-16 object-contain"
          />
          <span className={`text-[10px] leading-tight font-medium ${labelClass}`}>
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
