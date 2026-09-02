import { partners } from "@/content/site";

function PartnerGroup({
  title,
  items,
}: {
  title: string;
  items: { name: string; note: string }[];
}) {
  return (
    <div>
      <p className="text-ink-soft text-sm font-medium">{title}</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {items.map((partner) => (
          <li key={partner.name} className="border-line border px-5 py-4">
            <p className="font-display text-indigo text-lg font-semibold">{partner.name}</p>
            <p className="text-ink-soft mt-1 text-sm">{partner.note}</p>
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
    </div>
  );
}
