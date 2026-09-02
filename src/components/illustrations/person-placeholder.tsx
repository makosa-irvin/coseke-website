export function PersonPlaceholder() {
  return (
    <svg
      viewBox="0 0 96 96"
      role="img"
      aria-label="Photo not yet available"
      className="h-full w-full"
    >
      <rect x={0} y={0} width={96} height={96} fill="var(--color-paper-dim)" />
      <circle cx={48} cy={38} r={16} fill="none" stroke="var(--color-line)" strokeWidth={2} />
      <path
        d="M20 84c2-18 14-28 28-28s26 10 28 28"
        fill="none"
        stroke="var(--color-line)"
        strokeWidth={2}
      />
    </svg>
  );
}
