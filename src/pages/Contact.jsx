import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import SectionHeading from "@/components/chrome/SectionHeading";
import Footer from "@/components/chrome/Footer";

const INFO = [
  { icon: Mail, label: "Email", value: "hello@strata.systems" },
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0190" },
  { icon: MapPin, label: "Forge", value: "San Francisco, CA" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Initiate Contact"
            title="Step Into the Orbit"
            subtitle="Connect with our engineering team. Every message is treated as a spec — read, weighed, and answered with precision."
          />
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* info */}
            <div className="lg:col-span-2 space-y-4">
              {INFO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-surface rounded-2xl p-6 chrome-border-top flex items-center gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl glass-button flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#E5E5E7]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E6E76]">{item.label}</div>
                      <div className="text-sm text-[#E5E5E7] mt-0.5">{item.value}</div>
                    </div>
                  </motion.div>
                );
              })}
              <div className="glass-surface rounded-2xl p-6 chrome-border-top">
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E6E76]">Response Window</div>
                <div className="mt-2 text-2xl font-bold metallic-text-sm">&lt; 24 hours</div>
                <p className="mt-2 text-sm text-[#A0A0AB]">Every inquiry is read by an engineer, not a queue.</p>
              </div>
            </div>

            {/* form */}
            <div className="lg:col-span-3">
              <form onSubmit={submit} className="glass-surface rounded-2xl p-8 chrome-border-top space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name">
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="w-full bg-transparent border-b border-white/15 focus:border-white/40 outline-none py-2 text-sm text-[#E5E5E7] placeholder:text-[#6E6E76] transition-colors"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className="w-full bg-transparent border-b border-white/15 focus:border-white/40 outline-none py-2 text-sm text-[#E5E5E7] placeholder:text-[#6E6E76] transition-colors"
                      placeholder="you@domain.com"
                    />
                  </Field>
                </div>
                <Field label="Message">
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full bg-transparent border-b border-white/15 focus:border-white/40 outline-none py-2 text-sm text-[#E5E5E7] placeholder:text-[#6E6E76] transition-colors resize-none"
                    placeholder="Describe the system you want to forge..."
                  />
                </Field>
                <button
                  type="submit"
                  disabled={sent}
                  className="glass-button mercury-hover metallic-text-sm px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-70"
                >
                  {sent ? (<><Check className="w-4 h-4" /> Transmission Received</>) : (<>Transmit <Send className="w-4 h-4" /></>)}
                </button>
                {sent && (
                  <p className="text-xs text-[#A0A0AB]">We'll respond within one rotation of the clock.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6E6E76]">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}