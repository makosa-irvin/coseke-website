"use client";

import { useState, type ReactNode } from "react";

type Props = {
  /** Path under /public/images, e.g. "/images/about-team.jpg" */
  src: string;
  alt: string;
  /** Rendered when the photo isn't present yet (the common case until real photography is supplied) */
  fallback: ReactNode;
  className?: string;
};

/**
 * Renders a real photo if one has been dropped into /public/images at the
 * given path, and falls back to an original illustration if it hasn't
 * (or fails to load). This means every place that wants a photo can be
 * wired up now, and the site upgrades itself the moment real photography
 * is supplied — no further code changes needed. See public/images/README.md
 * for exactly which files are expected, at what size, and what they should show.
 */
export function Photo({ src, alt, fallback, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- runtime-optional asset, not a build-time import
    <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
  );
}
