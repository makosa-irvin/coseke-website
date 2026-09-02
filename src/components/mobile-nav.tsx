"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="border-line-dark/40 text-paper flex h-10 w-10 items-center justify-center border"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <div className="border-line-dark bg-indigo-deep absolute inset-x-0 top-16 z-40 border-b">
          <nav className="divide-line-dark/60 flex flex-col divide-y px-6">
            {navigation.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-paper/90 hover:text-brass-light py-4 text-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-brass-light py-4 text-lg font-medium"
            >
              Talk to us
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
