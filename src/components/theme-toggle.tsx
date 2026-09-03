"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The actual theme (light vs dark) isn't known until after mount — before
  // that, rendering either icon would risk not matching what the
  // pre-hydration script already applied. Render a neutral, correctly-sized
  // placeholder until then rather than guessing. This is the standard,
  // necessary pattern for client-only rendering (matches next-themes' own
  // documented usage) — there's no clean alternative to detect "we've now
  // hydrated" other than this exact effect.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        aria-hidden
        className={`inline-flex h-9 w-9 items-center justify-center ${className}`}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`border-line-dark text-invert hover:border-invert flex h-9 w-9 items-center justify-center border transition-colors ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
