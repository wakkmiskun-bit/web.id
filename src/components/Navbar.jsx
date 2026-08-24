import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  TerminalSquare,
  Sparkles,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4 md:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
        <div
          className={`glass rounded-2xl flex items-center justify-between px-5 md:px-6 py-3 border transition-all duration-300 ${
            scrolled
              ? "bg-bg-950/85 border-white/15 shadow-2xl backdrop-blur-2xl"
              : "bg-bg-900/60 border-white/10"
          }`}
        >
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-indigo to-accent-blue shadow-glow-indigo transition-transform duration-300 group-hover:scale-105">
              <TerminalSquare className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Nexa<span className="text-accent-cyan">Code</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent-indigo to-accent-cyan transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#kalkulator"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Calculator className="h-3.5 w-3.5 text-accent-cyan" />
              Estimasi
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-4 font-semibold"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Konsultasi Proyek
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="xl:hidden text-slate-200 p-2 rounded-xl hover:bg-white/5 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu navigasi"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden overflow-hidden mt-2"
            >
              <div className="glass rounded-2xl flex flex-col gap-1 p-5 border border-white/15 bg-bg-950/95 shadow-2xl backdrop-blur-2xl">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
                  </a>
                ))}

                <div className="pt-3 mt-2 border-t border-white/10 space-y-2">
                  <a
                    href="#kalkulator"
                    onClick={() => setOpen(false)}
                    className="btn-secondary w-full text-xs py-3 justify-center"
                  >
                    <Calculator className="h-4 w-4 text-accent-cyan" />
                    Hitung Estimasi Biaya
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-xs py-3 justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Konsultasi via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
