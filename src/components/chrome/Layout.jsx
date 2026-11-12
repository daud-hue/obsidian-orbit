import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/chrome/Header";
import CircleMenu from "@/components/chrome/CircleMenu";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen obsidian-bg text-[#E5E5E7] relative">
      {/* ambient chrome glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full" style={{ background: "radial-gradient(circle, rgba(229,229,231,0.06), transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-[-10%] right-[10%] w-[35vw] h-[35vw] rounded-full" style={{ background: "radial-gradient(circle, rgba(160,160,171,0.05), transparent 70%)", filter: "blur(50px)" }} />
      </div>

      <Header />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* dock circle menu on internal pages */}
      {!isHome && (
        <div className="fixed bottom-6 right-6 z-40">
          <CircleMenu variant="dock" />
        </div>
      )}
    </div>
  );
}