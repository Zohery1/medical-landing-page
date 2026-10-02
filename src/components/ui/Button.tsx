import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ArrowLeft, MessageCircle } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "terracotta" | "dark" | "outline" | "ghost" | "gold";
  size?: "sm" | "default" | "lg";
  href?: string;
  isWhatsApp?: boolean;
  withArrow?: boolean;
}

export function Button({
  className,
  variant = "terracotta",
  size = "default",
  href,
  isWhatsApp = false,
  withArrow = true,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-200 cursor-pointer select-none rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:ring-offset-2 active:scale-[0.98]",
    size === "sm" && "px-4 py-2 text-xs",
    size === "default" && "px-6 py-3 text-sm",
    size === "lg" && "px-8 py-3.5 text-base font-semibold",
    variant === "terracotta" &&
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-sm shadow-[var(--color-accent)]/20 hover:shadow-md",
    variant === "dark" &&
      "bg-[#1f1e1d] text-white hover:bg-[#33322f] shadow-sm",
    variant === "outline" &&
      "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-bg-elevated)] hover:border-[var(--color-accent)]",
    variant === "gold" &&
      "bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-deep)] shadow-sm",
    variant === "ghost" &&
      "bg-transparent text-[var(--color-ink-soft)] hover:bg-[var(--color-bg-sunken)]",
    className
  );

  const finalHref = isWhatsApp
    ? siteConfig.whatsapp.getLink()
    : href;

  const content = (
    <>
      {isWhatsApp && <MessageCircle className="w-4 h-4" />}
      <span>{children}</span>
      {withArrow && <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />}
    </>
  );

  if (finalHref) {
    const isExternal = finalHref.startsWith("http") || finalHref.startsWith("https");
    return (
      <Link
        href={finalHref}
        className={cn(baseClasses, "group")}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, "group")} {...props}>
      {content}
    </button>
  );
}
