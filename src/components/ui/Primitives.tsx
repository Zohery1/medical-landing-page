import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "narrow" && "max-w-4xl",
        size === "default" && "max-w-6xl",
        size === "wide" && "max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BrassRule({ className, diamond = true }: { className?: string; diamond?: boolean }) {
  return (
    <div className={cn("rule-ornament my-6 py-2", className)}>
      {diamond && (
        <span className="inline-block w-2 h-2 rotate-45 bg-[var(--color-gold)] opacity-80" />
      )}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
  variant = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "white" | "terracotta";
}) {
  return (
    <div
      className={cn(
        "eyebrow tracking-wide font-medium py-1 px-3 rounded-full text-xs inline-flex items-center gap-1.5 w-fit border",
        variant === "gold" && "border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 text-[var(--color-gold-deep)]",
        variant === "white" && "border-white/30 bg-white/10 text-white",
        variant === "terracotta" && "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rotate-45 bg-current opacity-75 inline-block" />
      {children}
    </div>
  );
}
