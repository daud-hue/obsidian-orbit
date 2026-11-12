import React from "react";
import { motion } from "framer-motion";
import CircleMenu from "@/components/chrome/CircleMenu";
import GlassButton from "@/components/chrome/GlassButton";

export default function NotFound() {

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
      {/* glitched backdrop */}
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(circle at 50% 45%, rgba(229,229,231,0.06), #050506 70%)" }} />
      <motion.div
        animate={{ rotate: [-1, 1, -1.5, 0.5, 0], x: [-2, 2, -1, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.04] pointer-events-none"
      >
        <div className="w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full border border-white/20" />
      </motion.div>

      <div className="relative z-10 text-center px-4">
        {/* shattered chrome 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[7rem] sm:text-[12rem] font-black leading-none metallic-text tracking-tighter"
          style={{ textShadow: "0 0 40px rgba(229,229,231,0.25)" }}
        >
          <span className="inline-block" style={{ transform: "skewX(-6deg)" }}>4</span>
          <span className="inline-block" style={{ transform: "skewX(4deg) translateY(-6px)" }}>0</span>
          <span className="inline-block" style={{ transform: "skewX(-3deg) translateY(4px)" }}>4</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-lg text-[#A0A0AB] max-w-md mx-auto"
        >
          The signal fractured. This stratum is misaligned — recalibrate by returning to the core.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <GlassButton to="/" variant="primary">Re-calibrate to Core</GlassButton>
          <GlassButton to="/contact" variant="ghost">Report the Fracture</GlassButton>
        </motion.div>
      </div>

      {/* glitched kinetic core */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 z-10"
        style={{ filter: "drop-shadow(0 0 30px rgba(229,229,231,0.1))" }}
      >
        <motion.div animate={{ rotate: [0, -3, 2, 0], x: [-4, 4, -2, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          <CircleMenu variant="dock" />
        </motion.div>
      </motion.div>
    </section>
  );
}