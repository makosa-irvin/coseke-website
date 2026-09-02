import { ClientStrip } from "@/components/client-strip";
import { AccreditationBadges } from "@/components/accreditation-badges";

export function TrustSection() {
  return (
    <div className="grid gap-8 py-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
      <div>
        <p className="text-ink-soft/70 mb-4 text-xs font-medium tracking-wide uppercase">
          Trusted across the region
        </p>
        <ClientStrip />
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
