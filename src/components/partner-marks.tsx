import { partners, type Partner } from "@/content/site";
import { Photo } from "@/components/photo";
import { ClientMarkFallback } from "@/components/illustrations/client-mark-fallback";

function PartnerGroup({ title, items }: { title: string; items: Partner[] }) {
  return (
    <div>
      <p className="text-ink-soft text-sm font-medium">{title}</p>
      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {items.map((partner) => (
          <li
            key={partner.slug}
            className="border-line flex max-w-sm items-start gap-3 border px-5 py-4"
          >
            <Photo
              src={`/images/partner-logo-${partner.slug}.png`}
              alt={partner.name}
              fallback={<ClientMarkFallback name={partner.name} />}
              className="h-10 w-10 shrink-0 object-contain"
            />
            <div>
              <p className="font-display text-indigo text-base font-semibold">{partner.name}</p>
              <p className="text-ink-soft mt-1 text-sm">{partner.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PartnerMarks() {
  return (
    <div className="space-y-8">
      <PartnerGroup title="Content & governance platforms" items={partners.platforms} />
      <PartnerGroup title="Infrastructure & data protection" items={partners.infrastructure} />
      <PartnerGroup title="Physical storage systems" items={partners.storage} />
    </div>
  );
}
