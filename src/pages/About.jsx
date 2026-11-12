import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/chrome/SectionHeading";
import GlassButton from "@/components/chrome/GlassButton";
import Footer from "@/components/chrome/Footer";

const ABOUT_IMG = "https://media.base44.com/images/public/6a7568203549877e202984ed/03f7222fb_generated_38bc9da6.png";

const VALUES = [
  { icon: Target, title: "Precision First", body: "We measure twice, forge once. Every decision is weighed against its tolerance for error." },
  { icon: Eye, title: "Radical Clarity", body: "Observability is not a feature — it is the substrate. You see every layer, always." },
  { icon: Award, title: "Craftsmanship", body: "We build like watchmakers. The interior is as polished as the surface you touch." },
  { icon: Users, title: "Partnership", body: "We forge alongside you, not above you. Your operation is the spec we engineer toward." },
];

const TIMELINE = [
  { year: "2019", title: "The First Forge", body: "Strata was founded in a workshop with a single principle: software should feel engineered, not assembled." },
  { year: "2021", title: "Edge Mesh", body: "Deployed our global edge network, bringing median latency below 15ms across four continents." },
  { year: "2023", title: "Liquid Industrialism", body: "Codified our design language — the tension between polished chrome and frosted glass." },
  { year: "2026", title: "Obsidian Age", body: "Now powering elite operations across 180+ regions with zero recorded breaches." },
];

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Ethos"
                align="left"
                title={<>The Cyber-Luxe<br />Monolith</>}
                subtitle="Strata was forged on a single conviction: that digital systems can possess the weight, precision, and beauty of a hand-finished timepiece. We engineer infrastructure that feels forged rather than coded."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <GlassButton to="/services" variant="primary">What We Forge</GlassButton>
                <GlassButton to="/contact" variant="ghost">Work With Us</GlassButton>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-surface"
            >
              <Image src={ABOUT_IMG} alt="Abstract chrome monolith" className="w-full h-full" fittingType="fill" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Principles" title="What We Forge Toward" subtitle="Four principles that govern every layer we build." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-surface rounded-2xl p-6 chrome-border-top mercury-hover"
                >
                  <div className="w-11 h-11 rounded-xl glass-button flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#E5E5E7]" />
                  </div>
                  <h3 className="text-base font-bold metallic-text-sm">{v.title}</h3>
                  <p className="mt-2 text-sm text-[#A0A0AB] leading-relaxed">{v.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Timeline" title="Forged Over Time" />
          <div className="mt-16 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full glass-button mercury-hover flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E7] shadow-[0_0_12px_rgba(229,229,231,0.6)]" />
                  </div>
                  <div className="text-xs font-bold tracking-[0.2em] uppercase metallic-text-sm">{t.year}</div>
                  <h3 className="mt-1 text-lg font-bold text-[#E5E5E7]">{t.title}</h3>
                  <p className="mt-1 text-sm text-[#A0A0AB] leading-relaxed">{t.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}