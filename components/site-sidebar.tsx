"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, socialLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/theme-toggle";

const year = new Date().getFullYear();

function useActive() {
  const pathname = usePathname();
  return (href: string) => {
    if (href.startsWith("/#")) return false; // section anchors aren't "pages"
    return pathname === href || pathname.startsWith(`${href}/`);
  };
}

function Star() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      className="shrink-0 text-accent"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l1.8 6.5L20 7l-4.6 4.8L20 17l-6.2-1.5L12 22l-1.8-6.5L4 17l4.6-5.2L4 7l6.2 1.5z" />
    </svg>
  );
}

function PrimaryNav({ onNavigate }: { onNavigate?: () => void }) {
  const isActive = useActive();
  return (
    <nav aria-label="Primary">
      <ul className="space-y-1">
        {primaryNav.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "group flex items-center gap-2.5 py-1.5 font-display text-xl transition-colors",
                isActive(link.href)
                  ? "text-accent"
                  : "text-ink-soft hover:text-accent",
              )}
            >
              <Star />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Socials() {
  return (
    <ul className="space-y-2">
      {socialLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-eyebrow uppercase text-muted transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Identity({ compact }: { compact?: boolean }) {
  return (
    <Link href="/" className="group block">
      {!compact && (
        <span className="block w-[160px] overflow-hidden rounded-xl border border-line bg-surface-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait/pri-portrait-light.png"
            alt="Illustrated portrait of Priyanka Ahuja, drawn by her"
            className="portrait-light w-full"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait/pri-portrait-dark.png"
            alt=""
            aria-hidden="true"
            className="portrait-dark w-full"
          />
        </span>
      )}
      <span
        className={cn(
          "font-display text-ink transition-colors group-hover:text-accent",
          compact ? "text-lg" : "mt-4 block text-2xl",
        )}
      >
        {site.name}
      </span>
      {!compact && (
        <span className="mt-1 block text-eyebrow uppercase text-muted">
          Web Dev / Designer @ UW
        </span>
      )}
    </Link>
  );
}

export function SiteSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Desktop rail */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:w-72 lg:flex-col lg:justify-between lg:overflow-y-auto lg:border-r lg:border-line lg:bg-surface lg:px-8 lg:py-10">
        <div>
          <Identity />
          <div className="mt-10">
            <PrimaryNav />
          </div>
        </div>
        <div className="mt-10">
          <Socials />
          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <p className="text-eyebrow text-muted">© {year}</p>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md lg:hidden">
        <div className="flex h-16 items-center justify-between px-6 sm:px-8">
          <Identity compact />
          <div className="flex items-center gap-1.5">
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
          <div
            id="mobile-nav"
            className="border-t border-line bg-bg px-6 py-5 sm:px-8"
          >
            <PrimaryNav onNavigate={() => setOpen(false)} />
            <div className="mt-6 border-t border-line pt-5">
              <Socials />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
