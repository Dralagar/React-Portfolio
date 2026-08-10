import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-150";
  const styles: Record<string, string> = {
    primary: "bg-navy text-white hover:bg-navy-dark",
    secondary: "bg-blue text-white hover:opacity-90",
    ghost: "border border-border text-navy hover:bg-light",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
