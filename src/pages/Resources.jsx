import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Video, Wrench as Tool, BookOpen } from "lucide-react";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/chrome/SectionHeading";
import GlassButton from "@/components/chrome/GlassButton";
import Footer from "@/components/chrome/Footer";

const RESOURCES_IMG = "https://media.base44.com/images/public/6a7568203549877e202984ed/22ffd1923_generated_f5dd11fd.png";

const FILTERS = ["All", "Guides", "Engineering", "Field Notes"];

const RESOURCES = [
  { type: "Guide", icon: FileText, title: "Forging Zero-Trust Infrastructure", desc: "A complete walkthrough of building cryptographic identity and isolation strata from the kernel up.", read: "18 min read" },
  { type: "Engineering", icon: Tool, title: "Sub-Millisecond Edge Routing", desc: "How our liquid routing logic achieves flow-state performance across 180+ regions.", read: "12 min read" },
  { type: "Field Notes", icon: BookOpen, title: "The Tension of Chrome & Glass", desc: "Inside the Liquid Industrialism design language and why contrast is the foundation.", read: "9 min read" },
  { type: "Guide", icon: FileText, title: "Observability Down to the Micron", desc: "Instrumenting every layer so the interior is as visible as the surface you touch.", read: "15 min read" },
  { type: "Engineering", icon: Video, title: "Autoscaling Strata at Scale", desc: "Video walkthrough of our autoscaling primitives under sustained load.", read: "22 min watch" },
  { type: "Field Notes", icon: BookOpen, title: "Why Software Should Feel Forged", desc: "An essay on craftsmanship, tolerance for error, and engineering as a discipline.", read: "7 min read" },
];

export default function Resources() {
  const [filter, setFilter] = React.useState("All");
  const list = filter === "All" ? RESOURCES : RESOURCES.filter((r) => r.type === filter);

  return (
    <>
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={RESOURCES_IMG} alt="Ethereal glass sheets in a dark void" className="w-full h-full object-cover opacity-30" fittingType="fill" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(8,8,10,0.6) 0%, #08080A 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Deep Scroll"
            title="Resources from the Void"
            subtitle="Field notes, engineering deep-dives, and forging guides — each emerges from the darkness through a glass haze."
          />
        </div>
      </section>

      {/* filters */}
      <section className="relative z-10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-400 ${
                filter === f ? "glass-button mercury-hover metallic-text-sm" : "border border-white/10 text-[#8A8A92] hover:text-[#E5E5E7] hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* grid */}
      <section className="relative z-10 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.article
                  key={r.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08 }}
                  className="group glass-surface rounded-2xl p-7 chrome-border-top mercury-hover hover:-translate-y-1 transition-transform duration-500 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl glass-button flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#E5E5E7]" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E6E76]">{r.type}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold metallic-text-sm leading-snug">{r.title}</h3>
                  <p className="mt-3 text-sm text-[#A0A0AB] leading-relaxed">{r.desc}</p>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-[#6E6E76]">{r.read}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8A8A92] group-hover:text-[#E5E5E7] group-hover:rotate-12 transition-all" />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* cta */}
      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold metallic-text">Want the forge notes delivered?</h2>
          <p className="mt-4 text-[#A0A0AB]">Join the strata dispatch — engineering field notes, monthly.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GlassButton to="/contact" variant="primary">Subscribe to Dispatch</GlassButton>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}