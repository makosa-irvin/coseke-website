import { clients } from "@/content/site";

export function ClientStrip() {
  return (
    <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
      {clients.map((client) => {
        const content = (
          <span className="font-display text-ink-soft group-hover:text-indigo text-lg transition-colors">
            {client.name}
          </span>
        );
        return (
          <li key={client.name} className="group">
            {client.url ? (
              <a href={client.url} target="_blank" rel="noopener noreferrer nofollow">
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}
