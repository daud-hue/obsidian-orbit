import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

/**
 * GlassButton — frosted glass surface with light shadow + metallic font.
 * Variants: "primary" (filled chrome pill), "ghost" (outline only).
 */
export default function GlassButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  ...props
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group overflow-hidden";

  const variants = {
    primary:
      "glass-button mercury-hover metallic-text-sm",
    ghost:
      "bg-transparent border border-white/15 text-[#E5E5E7] hover:bg-white/[0.04] hover:border-white/30 text-shadow-chrome",
  };

  const cls = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}