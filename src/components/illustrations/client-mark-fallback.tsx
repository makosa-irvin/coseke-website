function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function ClientMarkFallback({ name }: { name: string }) {
  return (
    <div
      aria-hidden
      className="border-line bg-paper-dim font-display text-indigo flex h-full w-full items-center justify-center border text-sm font-semibold"
    >
      {initials(name)}
    </div>
  );
}
