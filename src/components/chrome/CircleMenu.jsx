import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Home as HomeIcon, Info, Wrench, BookOpen, Mail, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { label: "Home", to: "/", icon: HomeIcon },
  { label: "About", to: "/about", icon: Info },
  { label: "Services", to: "/services", icon: Wrench },
  { label: "Resources", to: "/resources", icon: BookOpen },
  { label: "FAQ", to: "/faq", icon: HelpCircle },
  { label: "Contact", to: "/contact", icon: Mail },
];

/* A single orb — extracted so useTransform runs at top level of a component. */
function Orb({ item, index, activeIndex, hovered, setHovered, radius, size, orbSize, isDock, rotation, navigate }) {
  const angle = (index / ITEMS.length) * 360;
  const rad = (angle * Math.PI) / 180;
  const cx = Math.cos(rad) * radius + size / 2;
  const cy = Math.sin(rad) * radius + size / 2;
  const isActive = index === activeIndex;
  const isHovered = hovered === index;
  const Icon = item.icon;
  const counterRotate = useTransform(rotation, (r) => -r);

  return (
    <motion.button
      key={item.label}
      className="absolute z-10"
      style={{ left: cx, top: cy, x: "-50%", y: "-50%" }}
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered(null)}
      onClick={(e) => {
        e.stopPropagation();
        navigate(item.to);
      }}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-1 rounded-full glass-button mercury-hover"
        style={{
          width: orbSize,
          height: orbSize,
          rotate: counterRotate,
          scale: isActive || isHovered ? 1.18 : 1,
        }}
        animate={{
          boxShadow: isActive
            ? "0px 24px 48px rgba(0,0,0,0.85), 0px 0px 24px rgba(229,229,231,0.5), inset 0 1px 0 rgba(255,255,255,0.25)"
            : "0px 20px 40px rgba(0,0,0,0.8), 0px 0px 8px rgba(229,229,231,0.2), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        <Icon className={cn(isDock ? "w-4 h-4" : "w-6 h-6", "text-[#E5E5E7]")} />
        {!isDock && (
          <span
            className={cn(
              "text-[9px] font-semibold tracking-wide transition-opacity",
              isActive || isHovered ? "metallic-text-sm opacity-100" : "text-[#8A8A92] opacity-70"
            )}
          >
            {item.label}
          </span>
        )}
      </motion.div>
    </motion.button>
  );
}

/**
 * CircleMenu — the Kinetic Core. A floating ring of glass orbs.
 * variant: "hero" (center-stage, large) | "dock" (bottom-right, compact)
 */
export default function CircleMenu({ variant = "hero" }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isDock = variant === "dock";
  const radius = isDock ? 92 : 188;
  const size = isDock ? 220 : 480;
  const orbSize = isDock ? 46 : 92;

  const rotation = useMotionValue(0);
  const [hovered, setHovered] = useState(null);
  const dragState = useRef({ x: 0, r: 0, t: 0, dragging: false });

  const activeIndex = ITEMS.findIndex((it) => {
    if (it.to === "/") return location.pathname === "/";
    return location.pathname.startsWith(it.to);
  });

  // auto-rotate with inertial pause on hover/drag
  useEffect(() => {
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (hovered === null && !dragState.current.dragging) {
        rotation.set(rotation.get() + dt * 6);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hovered, rotation]);

  const handlePointerDown = (e) => {
    dragState.current = { x: e.clientX, r: rotation.get(), t: performance.now(), dragging: true };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!dragState.current.dragging) return;
    const dx = e.clientX - dragState.current.x;
    rotation.set(dragState.current.r + dx * 0.6);
  };
  const handlePointerUp = (e) => {
    if (!dragState.current.dragging) return;
    const elapsed = Math.max(1, performance.now() - dragState.current.t);
    const dx = e.clientX - dragState.current.x;
    const velocity = (dx / elapsed) * 1000 * 0.6;
    dragState.current.dragging = false;
    animate(rotation, rotation.get() + velocity * 0.6, {
      type: "inertia",
      velocity,
      power: 0.5,
      timeConstant: 350,
    });
  };

  return (
    <motion.div
      className="relative select-none cursor-grab active:cursor-grabbing"
      style={{ width: size, height: size }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{ border: "0.5px solid rgba(255,255,255,0.10)", boxShadow: "inset 0 0 60px rgba(229,229,231,0.05), 0px 30px 80px rgba(0,0,0,0.7)" }} />
      <div className="absolute rounded-full pointer-events-none spin-slow" style={{ inset: "8%", border: "0.5px dashed rgba(229,229,231,0.08)" }} />
      <div className="absolute rounded-full pointer-events-none spin-slow-rev" style={{ inset: "18%", border: "0.5px solid rgba(255,255,255,0.06)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ inset: "38%", background: "radial-gradient(circle, rgba(229,229,231,0.22), transparent 70%)", filter: "blur(8px)" }} />

      {/* center hub — go home */}
      <button
        onClick={(e) => { e.stopPropagation(); navigate("/"); }}
        className="absolute rounded-full glass-button mercury-hover flex items-center justify-center group z-20"
        style={{ width: isDock ? 44 : 86, height: isDock ? 44 : 86, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        aria-label="Home"
      >
        <HomeIcon className={cn(isDock ? "w-4 h-4" : "w-7 h-7", "text-[#E5E5E7] group-hover:scale-110 transition-transform")} />
      </button>

      <motion.div className="absolute inset-0" style={{ rotate: rotation }}>
        {ITEMS.map((item, i) => (
          <Orb
            key={item.label}
            item={item}
            index={i}
            activeIndex={activeIndex}
            hovered={hovered}
            setHovered={setHovered}
            radius={radius}
            size={size}
            orbSize={orbSize}
            isDock={isDock}
            rotation={rotation}
            navigate={navigate}
          />
        ))}
      </motion.div>

      {isDock && hovered !== null && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full glass-surface text-[10px] font-semibold metallic-text-sm">
          {ITEMS[hovered].label}
        </div>
      )}
    </motion.div>
  );
}