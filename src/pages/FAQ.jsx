import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/chrome/SectionHeading";
import GlassButton from "@/components/chrome/GlassButton";
import Footer from "@/components/chrome/Footer";

const FAQS = [
  {
    q: "What does Liquid Industrialism mean?",
    a: "It is our design language — the tension between the weight of polished chrome and the ethereal lightness of frosted glass. We engineer systems that feel forged rather than coded, where every layer is as refined as the surface.",
  },
  {
    q: "How quickly can we go live?",
    a: "Most engagements reach a forged MVP within 6–8 weeks. The edge mesh and core infrastructure deploy in days; the refractive surface is where the craftsmanship time is spent.",
  },
  {
    q: "What is your uptime guarantee?",
    a: "99.99% SLA, backed by our global edge network across 180+ regions. Median latency sits below 15ms for any user, anywhere — we measure ourselves to the micron.",
  },
  {
    q: "How do you handle security?",
    a: "Zero-trust from the kernel up. Hardware-grade isolation, cryptographic identity, and continuous attestation. We have recorded zero breaches since inception — a record we engineer toward deliberately.",
  },
  {
    q: "Do you work with existing infrastructure?",
    a: "Yes. We specialize in zero-downtime migration — forging new strata around your existing systems and gradually migrating load without perceptible disruption to your users.",
  },
  {
    q: "What does engagement look like?",
    a: "Partnership, not vendorship. We forge alongside your team, with full observability at every layer. You see the interior as clearly as the surface. Engineering-led, not queue-led.",
  },
];

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="glass-surface rounded-2xl chrome-border-top overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className={`text-base font-semibold transition-colors ${isOpen ? "metallic-text-sm" : "text-[#E5E5E7]"}`}>
          {item.q}
        </span>
        <div className="w-8 h-8 rounded-full glass-button flex items-center justify-center shrink-0">
          {isOpen ? <Minus className="w-4 h-4 text-[#E5E5E7]" /> : <Plus className="w-4 h-4 text-[#8A8A92]" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 text-sm text-[#A0A0AB] leading-relaxed">{item.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Calibration"
            title="Frequently Asked"
            subtitle="Answers to the questions that surface most often. If yours isn't here, the team responds within a single rotation."
          />
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4">
          {FAQS.map((item, i) => (
            <Item key={i} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold metallic-text">Question not in the strata?</h2>
          <p className="mt-4 text-[#A0A0AB]">Reach the engineering team directly — every message is read by a human who builds.</p>
          <div className="mt-8 flex justify-center">
            <GlassButton to="/contact" variant="primary">Ask the Team</GlassButton>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}