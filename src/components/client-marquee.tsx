import { Photo } from "@/components/photo";
import { ClientMarkFallback } from "@/components/illustrations/client-mark-fallback";
import { clients } from "@/content/site";

const ROW_COUNT = 3;

function ClientLogo({ client, hidden }: { client: (typeof clients)[number]; hidden?: boolean }) {
  const logo = (
    <Photo
      src={`/images/client-logo-${client.slug}.png`}
      alt={hidden ? "" : client.name}
      fallback={<ClientMarkFallback name={client.name} />}
      className="h-14 w-auto max-w-[9.5rem] object-contain"
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

function distributeIntoRows<T>(items: T[], rowCount: number): T[][] {
  const rows: T[][] = Array.from({ length: rowCount }, () => []);
  items.forEach((item, i) => rows[i % rowCount].push(item));
  return rows;
}

export function ClientMarquee() {
  const rows = distributeIntoRows(clients, ROW_COUNT);

  return (
    <div>
      {/* Single accessible list for screen readers — not visually shown,
          not duplicated, not affected by motion preference or row layout. */}
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

      {/* Animated, looping rows (decorative — real content is in the
          sr-only list above) — hidden entirely under reduced motion */}
      <div aria-hidden="true" className="w-full space-y-4 motion-reduce:hidden">
        {rows.map((row, i) => (
          <div key={i} className="w-full overflow-hidden">
            <div
              className={`flex w-max items-center gap-12 ${i % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}
            >
              {[...row, ...row].map((client, j) => (
                <div key={`${client.slug}-${j}`} className="flex shrink-0 items-center">
                  <ClientLogo client={client} hidden />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Static wrapped fallback for reduced motion — also decorative */}
      <ul
        aria-hidden="true"
        className="hidden flex-wrap items-center gap-x-8 gap-y-6 motion-reduce:flex"
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
