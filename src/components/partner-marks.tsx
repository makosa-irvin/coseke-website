import { partners } from "@/content/site";

export function PartnerMarks() {
  return (
    <ul className="grid gap-6 sm:grid-cols-3">
      {partners.map((partner) => (
        <li key={partner.name} className="border-line border px-5 py-4">
          <p className="font-display text-indigo text-lg font-semibold">{partner.name}</p>
          <p className="text-ink-soft mt-1 text-sm">{partner.note}</p>
        </li>
      ))}
    </ul>
  );
}
