import React from "react";
import { Link } from "react-router-dom";
import { Hexagon, Mail, MapPin, Phone } from "lucide-react";

const COLS = [
  {
    title: "Navigate",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Resources", to: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <Hexagon className="w-6 h-6 text-[#E5E5E7] group-hover:rotate-90 transition-transform duration-700" />
              <span className="text-lg font-bold tracking-[0.2em] uppercase metallic-text">Strata</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-[#8A8A92] leading-relaxed">
              Precision-engineered digital systems forged in chrome and obsidian. We build the infrastructure that powers elite operations.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[#A0A0AB]">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@strata.systems</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (415) 555-0190</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> San Francisco, CA</div>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase metallic-text-sm mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-[#8A8A92] hover:text-[#E5E5E7] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6E6E76]">© {new Date().getFullYear()} Strata Systems. Forged with precision.</p>
          <div className="flex items-center gap-6 text-xs text-[#6E6E76]">
            <Link to="/about" className="hover:text-[#E5E5E7] transition-colors">Privacy</Link>
            <Link to="/about" className="hover:text-[#E5E5E7] transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-[#E5E5E7] transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}