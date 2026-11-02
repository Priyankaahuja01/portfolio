"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-wide items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-ink transition-colors hover:text-accent"
        >
          <span
            className="grid h-7 w-7 place-items-center rounded-lg bg-accent font-serif text-[13px] font-semibold text-on-accent"
            aria-hidden="true"
          >
            PA
          </span>
          <span className="font-serif text-lg font-medium">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-8">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "font-serif text-lg transition-colors hover:text-accent",
                      isActive(link.href) ? "text-accent" : "text-ink-soft",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-wide flex-col px-6 py-2 sm:px-8">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block py-3 font-serif text-xl transition-colors hover:text-accent",
                    isActive(link.href) ? "text-accent" : "text-ink-soft",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
