import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Shield, Gauge, Layers } from "lucide-react";
import { Image } from "@/components/ui/image";
import GlassButton from "@/components/chrome/GlassButton";
import CircleMenu from "@/components/chrome/CircleMenu";
import SectionHeading from "@/components/chrome/SectionHeading";
import Footer from "@/components/chrome/Footer";

const HERO_IMG = "https://media.base44.com/images/public/6a7568203549877e202984ed/4d0206049_generated_9c47d8b7.png";

const FEATURES = [
  { icon: Cpu, title: "Precision Engineered", body: "Every system is architected to micron tolerance — deterministic, observable, and built to outlast the platform it runs on." },
  { icon: Shield, title: "Obsidian Security", body: "Zero-trust infrastructure with hardware-grade isolation. Your data is sealed in layers of forged chrome." },
  { icon: Gauge, title: "Liquid Performance", body: "Sub-millisecond routing across a global edge mesh. Flow state at any scale, with no perceptible latency." },
  { icon: Layers, title: "Strata Architecture", body: "Composable layers that stack cleanly — from the core kernel to the refractive glass surface your users touch." },
];

const STATS = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "12ms", label: "Median Latency" },
  { value: "180+", label: "Edge Regions" },
  { value: "0", label: "Data Breaches" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO MONOLITH ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* chrome 3D backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt="Abstract liquid mercury suspended in zero gravity"
            className="w-full h-full object-cover"
            fittingType="fill"
          />
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, transparent 0%, #08080A 88%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,8,10,0.4) 0%, rgba(8,8,10,0.2) 40%, #08080A 100%)" }} />
        </div>

        {/* headline */}
        <div className="relative z-10 text-center px-4 max-w-4xl mb-[34rem] sm:mb-[30rem]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-surface text-[10px] font-bold tracking-[0.25em] uppercase metallic-text-sm mb-6"
          >
            Liquid Industrialism
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight leading-[0.95] metallic-text"
          >
            Forged in Chrome.<br />Built for the Obsidian Age.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 text-base sm:text-lg text-[#A0A0AB] max-w-2xl mx-auto leading-relaxed"
          >
            Elite digital infrastructure engineered like a precision timepiece. Navigate the strata through the kinetic core below.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <GlassButton to="/services" variant="primary">
              Explore Services <ArrowRight className="w-4 h-4" />
            </GlassButton>
            <GlassButton to="/about" variant="ghost">Our Ethos</GlassButton>
          </motion.div>
        </div>

        {/* kinetic core — center stage circle menu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 z-10 origin-bottom scale-[0.62] sm:scale-75 md:scale-100"
        >
          <CircleMenu variant="hero" />
        </motion.div>

        {/* scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#6E6E76] text-[10px] tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.div>
      </section>

      {/* ── STATS STRATA ── */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-surface rounded-2xl p-6 text-center chrome-border-top"
              >
                <div className="text-3xl sm:text-4xl font-bold metallic-text">{s.value}</div>
                <div className="mt-2 text-xs tracking-wide uppercase text-[#8A8A92]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Strata"
            title="Layers of Engineered Precision"
            subtitle="Four foundational layers, each forged to interlock seamlessly — from the hardened core to the refractive surface."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass-surface rounded-2xl p-8 chrome-border-top mercury-hover hover:-translate-y-1 transition-transform duration-500"
                >
                  <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#E5E5E7]" />
                  </div>
                  <h3 className="text-xl font-bold metallic-text-sm">{f.title}</h3>
                  <p className="mt-3 text-sm text-[#A0A0AB] leading-relaxed">{f.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative glass-surface rounded-3xl p-12 sm:p-16 text-center overflow-hidden chrome-border-top">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(229,229,231,0.08), transparent 60%)" }} />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold metallic-text leading-tight">Begin the Calibration</h2>
              <p className="mt-4 text-[#A0A0AB] max-w-xl mx-auto">
                Step into the orbit. Connect with our engineering team and forge the system your operation demands.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <GlassButton to="/contact" variant="primary">Initiate Contact <ArrowRight className="w-4 h-4" /></GlassButton>
                <GlassButton to="/resources" variant="ghost">Read Resources</GlassButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}