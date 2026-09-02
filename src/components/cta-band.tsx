import Link from "next/link";

export function CtaBand({
  heading,
  body,
  primaryLabel = "Talk to us",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  heading: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="bg-indigo-deep text-paper">
      <div className="mx-auto grid w-full max-w-(--container-content) gap-8 px-6 py-16 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:px-10">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{heading}</h2>
          <p className="text-paper/70 mt-3 max-w-xl">{body}</p>
        </div>
        <div className="flex flex-wrap gap-4 lg:justify-end">
          <Link
            href={primaryHref}
            className="bg-clay text-paper hover:bg-clay-soft px-6 py-3 text-sm font-medium transition-colors"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="border-paper/40 text-paper hover:border-paper border px-6 py-3 text-sm font-medium transition-colors"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
