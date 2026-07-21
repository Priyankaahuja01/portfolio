import Link from "next/link";
import { primaryNav, socialLinks, site } from "@/lib/site";

const year = new Date().getFullYear();

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-wide px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-2xl font-semibold tracking-tight text-ink">
              Let&rsquo;s make something worth shipping.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-lg text-accent underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="font-mono text-eyebrow uppercase text-muted">
                Site
              </h2>
              <ul className="mt-4 space-y-3">
                {primaryNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-strong transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Elsewhere">
              <h2 className="font-mono text-eyebrow uppercase text-muted">
                Elsewhere
              </h2>
              <ul className="mt-4 space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    {isInternal(link.href) ? (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-strong transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-muted-strong transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Designed &amp; built by Priyanka Ahuja.
          </p>
          <p className="font-mono text-eyebrow uppercase tracking-wider">
            Next.js · Tailwind · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
