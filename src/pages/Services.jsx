import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/chrome/SectionHeading";
import GlassButton from "@/components/chrome/GlassButton";
import Footer from "@/components/chrome/Footer";

const SERVICES_IMG = "https://media.base44.com/images/public/6a7568203549877e202984ed/01b19aac7_generated_433e53dc.png";

const SERVICES = [
  {
    id: "infra",
    title: "Core Infrastructure",
    tag: "Stratum 01",
    summary: "Hardened, observable systems engineered to run indefinitely without drift.",
    body: "We architect the kernel layer — distributed runtimes, event meshes, and persistence cores built for deterministic behavior at any scale. Every node is observable down to the micron.",
    points: ["Distributed runtime design", "Event-driven mesh architecture", "Full-stack observability", "Zero-downtime migration"],
  },
  {
    id: "security",
    title: "Obsidian Security",
    tag: "Stratum 02",
    summary: "Zero-trust isolation forged in layers of chrome.",
    body: "Hardware-grade isolation, cryptographic identity, and continuous attestation. Your data is sealed in strata that cannot be crossed without leaving a trace.",
    points: ["Zero-trust identity", "Cryptographic attestation", "Threat modeling & audit", "Compliance engineering"],
  },
  {
    id: "edge",
    title: "Liquid Edge",
    tag: "Stratum 03",
    summary: "Sub-millisecond routing across a global edge mesh.",
    body: "We deploy your systems to the edge — 180+ regions, liquid routing, and flow-state performance with no perceptible latency for any user, anywhere.",
    points: ["Global edge deployment", "Liquid routing logic", "Performance profiling", "Autoscaling strata"],
  },
  {
    id: "surface",
    title: "Refractive Surface",
    tag: "Stratum 04",
    summary: "The glass layer — interfaces that feel forged, not coded.",
    body: "We craft the surface your users touch — frosted glass, liquid chrome, and kinetic interaction. The interior is as polished as the exterior demands.",
    points: ["Design system engineering", "Kinetic interaction design", "Accessibility at contrast", "Frontend performance"],
  },
];

export default function Services() {
  const [active, setActive] = useState(SERVICES[0].id);
  const current = SERVICES.find((s) => s.id === active);

  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service Strata"
            title="Layers of Engineered Capability"
            subtitle="Four strata, each a large-format pane with a liquid chrome crown. Select a layer to descend into its detail."
          />
        </div>
      </section>

      {/* hero image */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[21/9] rounded-3xl overflow-hidden glass-surface chrome-border-top"
          >
            <Image src={SERVICES_IMG} alt="Macro precision engineering components" className="w-full h-full" fittingType="fill" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, #08080A 100%)" }} />
          </motion.div>
        </div>
      </section>

      {/* interactive strata */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* selector */}
            <div className="lg:col-span-5 space-y-3">
              {SERVICES.map((s) => {
                const isActive = s.id === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`w-full text-left rounded-2xl p-6 transition-all duration-500 chrome-border-top ${
                      isActive ? "glass-surface" : "border border-white/5 hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#6E6E76]">{s.tag}</span>
                      {isActive ? <Minus className="w-4 h-4 text-[#E5E5E7]" /> : <Plus className="w-4 h-4 text-[#8A8A92]" />}
                    </div>
                    <h3 className={`mt-2 text-xl font-bold transition-colors ${isActive ? "metallic-text-sm" : "text-[#E5E5E7]"}`}>{s.title}</h3>
                    <p className="mt-2 text-sm text-[#A0A0AB] leading-relaxed">{s.summary}</p>
                  </button>
                );
              })}
            </div>

            {/* detail pane */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="glass-surface rounded-2xl p-8 sm:p-10 chrome-border-top h-full"
                >
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase metallic-text-sm">{current.tag}</span>
                  <h3 className="mt-2 text-3xl font-bold metallic-text">{current.title}</h3>
                  <p className="mt-4 text-[#A0A0AB] leading-relaxed">{current.body}</p>
                  <div className="mt-8 grid sm:grid-cols-2 gap-3">
                    {current.points.map((p) => (
                      <div key={p} className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E7] shadow-[0_0_8px_rgba(229,229,231,0.5)]" />
                        <span className="text-sm text-[#E5E5E7]">{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <GlassButton to="/contact" variant="primary">Engage This Layer <ArrowRight className="w-4 h-4" /></GlassButton>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}