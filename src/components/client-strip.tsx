import { Building2 } from "lucide-react";
import { clients } from "@/content/site";

export function ClientStrip() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {clients.map((client) => {
        const inner = (
          <>
            <Building2 size={16} className="text-clay shrink-0" aria-hidden />
            <span className="text-ink group-hover:text-indigo text-sm font-medium">
              {client.name}
            </span>
          </>
        );
        return (
          <li key={client.name}>
            {client.url ? (
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group border-line hover:border-indigo flex items-center gap-2.5 border px-4 py-3 transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div className="border-line group flex items-center gap-2.5 border px-4 py-3">
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
