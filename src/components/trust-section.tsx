import { ClientStrip } from "@/components/client-strip";
import { AccreditationBadges } from "@/components/accreditation-badges";

export function TrustSection() {
  return (
    <div className="flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-ink-soft/70 mb-4 text-xs font-medium tracking-wide uppercase">
          Trusted across the region
        </p>
        <ClientStrip />
      </div>
      <AccreditationBadges />
    </div>
  );
}
