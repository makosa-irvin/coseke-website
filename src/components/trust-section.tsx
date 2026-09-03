import { ClientMarquee } from "@/components/client-marquee";
import { AccreditationBadges } from "@/components/accreditation-badges";

export function TrustSection() {
  return (
    <div className="grid gap-8 py-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start">
      <div className="min-w-0">
        <p className="text-ink-soft/70 mb-4 text-xs font-medium tracking-wide uppercase">
          Trusted across the region
        </p>
        <ClientMarquee />
      </div>
      <div className="border-line border p-5">
        <p className="text-ink-soft/70 mb-4 text-xs font-medium tracking-wide uppercase">
          Independently certified
        </p>
        <AccreditationBadges />
      </div>
    </div>
  );
}
