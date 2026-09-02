export function TeamPhotoFallback() {
  return (
    <svg
      viewBox="0 0 480 320"
      role="img"
      aria-label="Illustration of a desk with a monitor, documents, and a coffee cup, standing in for a team photo"
      className="h-full w-full"
    >
      <rect x={0} y={0} width={480} height={320} fill="var(--color-paper-dim)" />
      {/* desk */}
      <rect x={20} y={230} width={440} height={10} fill="var(--color-line)" />
      {/* monitor */}
      <rect x={180} y={90} width={140} height={95} rx={3} fill="var(--color-indigo-deep)" />
      <rect x={186} y={96} width={128} height={83} fill="var(--color-indigo)" />
      <rect x={230} y={185} width={40} height={14} fill="var(--color-line-dark)" />
      <rect x={215} y={199} width={70} height={6} fill="var(--color-line-dark)" />
      {/* screen content: a little index grid, echoing the hero */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((cIdx) => (
          <rect
            key={`${r}-${cIdx}`}
            x={198 + cIdx * 38}
            y={106 + r * 24}
            width={30}
            height={16}
            fill="var(--color-paper)"
            opacity={0.85}
          />
        )),
      )}
      {/* documents stack */}
      <rect
        x={70}
        y={190}
        width={70}
        height={40}
        fill="var(--color-paper)"
        stroke="var(--color-line)"
      />
      <rect
        x={64}
        y={196}
        width={70}
        height={40}
        fill="var(--color-paper)"
        stroke="var(--color-line)"
      />
      <rect
        x={58}
        y={202}
        width={70}
        height={40}
        fill="var(--color-paper)"
        stroke="var(--color-clay)"
        strokeWidth={1.5}
      />
      <rect x={68} y={212} width={40} height={4} fill="var(--color-ink-soft)" opacity={0.3} />
      <rect x={68} y={220} width={30} height={4} fill="var(--color-ink-soft)" opacity={0.3} />
      {/* cup */}
      <path
        d="M 350 205 h 26 v 16 a 13 13 0 0 1 -26 0 z"
        fill="var(--color-paper)"
        stroke="var(--color-line)"
      />
      <path d="M 376 210 q 10 0 10 8 a 8 8 0 0 1 -10 8" fill="none" stroke="var(--color-line)" />
    </svg>
  );
}
