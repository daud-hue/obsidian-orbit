import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Resources", to: "/resources" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

/** Magnetic chrome sign-in pill — glyph "hones" on hover. */
function SignInPill() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * 0.35, y: y * 0.35 });
  };
  const reset = () => {
    setPos({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <Link
      to="/contact"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onMouseEnter={() => setHovered(true)}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full glass-button mercury-hover group"
      aria-label="Sign in"
    >
      <motion.span
        animate={{ x: pos.x, y: pos.y, rotate: hovered ? 0 : -8 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="flex items-center"
      >
        <LogIn className="w-4 h-4 text-[#E5E5E7] group-hover:scale-110 transition-transform" />
      </motion.span>
      <span className="text-xs font-semibold metallic-text-sm hidden sm:inline">Sign In</span>
    </Link>
  );
}

export default function Header() {
  const location = useLocation();
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl glass-surface px-4 sm:px-6 py-3">
          {/* brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <Hexagon className="w-5 h-5 text-[#E5E5E7] group-hover:rotate-90 transition-transform duration-700" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase metallic-text">Strata</span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors rounded-full",
                    active ? "metallic-text-sm" : "text-[#8A8A92] hover:text-[#E5E5E7]"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10"
                      transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <SignInPill />
        </div>
      </div>
    </header>
  );
}