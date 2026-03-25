"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 mt-0 border-b border-white/5 bg-black/80 px-4 backdrop-blur-xl">
      <nav className="flex items-center justify-between py-4" aria-label="Primary navigation">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight text-white">
          ScaleForge<span className="ml-1 text-accent">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "relative rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-white",
                    pathname === link.href && "text-white",
                  )}
                >
                  {link.label}
                  {pathname === link.href ? (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Get in Touch
          </Link>
          <ul className="flex items-center gap-1 sm:hidden">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "rounded-md px-2.5 py-2 text-xs transition-colors hover:text-white",
                    pathname === link.href ? "text-white" : "text-muted",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
