import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-8">
      <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Built with Next.js App Router and static generation.</p>
        <div className="flex items-center gap-4">
          <Link href="/services" className="transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
