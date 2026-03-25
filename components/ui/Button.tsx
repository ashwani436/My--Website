import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  ariaLabel?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(
        "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-200",
        variant === "primary" &&
          "border-accent bg-accent text-black hover:scale-105 hover:brightness-110",
        variant === "secondary" &&
          "border-border bg-transparent text-foreground hover:bg-white/5",
      )}
    >
      {children}
    </Link>
  );
}
