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
    "inline-flex items-center justify-center gap-2.5 font-medium min-h-[44px] cursor-pointer select-none rounded-full transition-[transform,background-color,border-color,box-shadow] duration-160 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 active:scale-[0.97]",
    size === "sm" && "px-3.5 py-2 text-xs",
    size === "default" && "px-5 py-2.5 sm:px-6 sm:py-3 text-sm",
    size === "lg" && "px-7 py-3 sm:px-8 sm:py-3.5 text-base font-semibold",
    variant === "terracotta" &&
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-sm shadow-[var(--color-accent)]/20 hover:shadow-md",
    variant === "dark" &&
      "bg-[#161514] text-white hover:bg-[#2b2926] shadow-sm",
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
      {isWhatsApp && <MessageCircle className="w-4 h-4 shrink-0 fill-current opacity-90" />}
      <span className="font-display font-medium tracking-tight">{children}</span>
      {withArrow && (
        <span
          className={cn(
            "w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1",
            variant === "terracotta" && "bg-white/20 text-white",
            variant === "dark" && "bg-white/15 text-white",
            variant === "gold" && "bg-white/25 text-white",
            variant === "outline" && "bg-[var(--color-bg-sunken)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/15",
            variant === "ghost" && "bg-[var(--color-bg-sunken)] text-[var(--color-ink)]"
          )}
          aria-hidden="true"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[2.2]" />
        </span>
      )}
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
