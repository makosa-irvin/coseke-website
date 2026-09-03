import { Photo } from "@/components/photo";
import { ClientMarkFallback } from "@/components/illustrations/client-mark-fallback";
import { clients } from "@/content/site";

function ClientLogo({ client, hidden }: { client: (typeof clients)[number]; hidden?: boolean }) {
  const logo = (
    <Photo
      src={`/images/client-logo-${client.slug}.png`}
      alt={hidden ? "" : client.name}
      fallback={<ClientMarkFallback name={client.name} />}
      className="h-12 w-auto max-w-[9rem] object-contain"
    />
  );
  if (hidden) {
    // Purely decorative duplicate for the visual loop/wrap — the real,
    // accessible list is rendered separately below (sr-only).
    return <span className="pointer-events-none">{logo}</span>;
  }
  return client.url ? (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={client.name}
      title={client.name}
    >
      {logo}
    </a>
  ) : (
    <span title={client.name}>{logo}</span>
  );
}

export function ClientMarquee() {
  return (
    <div>
      {/* Single accessible list for screen readers — not visually shown,
          not duplicated, not affected by motion preference. */}
      <ul className="sr-only">
        {clients.map((client) => (
          <li key={client.slug}>
            {client.url ? (
              <a href={client.url} target="_blank" rel="noopener noreferrer nofollow">
                {client.name}
              </a>
            ) : (
              client.name
            )}
          </li>
        ))}
      </ul>

      {/* Animated, looping strip (decorative — real content is in the sr-only
          list above) — hidden entirely when the viewer prefers reduced motion */}
      <div aria-hidden="true" className="overflow-hidden motion-reduce:hidden">
        <div className="animate-marquee flex w-max items-center gap-16">
          {[...clients, ...clients].map((client, i) => (
            <div key={`${client.slug}-${i}`} className="flex shrink-0 items-center">
              <ClientLogo client={client} hidden />
            </div>
          ))}
        </div>
      </div>

      {/* Static wrapped fallback for reduced motion — also decorative */}
      <ul
        aria-hidden="true"
        className="hidden flex-wrap items-center gap-x-10 gap-y-6 motion-reduce:flex"
      >
        {clients.map((client) => (
          <li key={client.slug}>
            <ClientLogo client={client} hidden />
          </li>
        ))}
      </ul>
    </div>
  );
}
