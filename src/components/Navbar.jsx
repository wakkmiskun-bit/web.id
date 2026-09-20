import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  TerminalSquare,
  ArrowRight,
} from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // ScrollSpy: Deteksi section yang sedang aktif di viewport
      const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4 md:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        <div
          className={`rounded-2xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 border ${
            scrolled
              ? "bg-[#06030F]/85 border-white/[0.12] shadow-[0_10px_35px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
              : "bg-[#0A0518]/65 border-white/[0.08] backdrop-blur-xl shadow-lg"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105 shrink-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
              <TerminalSquare className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Nexa
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Code
              </span>
            </span>
          </a>

          {/* Desktop Navigation Link Pills (Hanya Section yang Ada di App.jsx) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 xl:px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 relative ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500/25 to-cyan-500/25 text-cyan-300 border border-cyan-400/35 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                      : "text-slate-300/85 hover:text-white hover:bg-white/[0.06] border border-transparent font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button: Konsultasi Proyek */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-4.5 font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Konsultasi Proyek</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            className="lg:hidden text-slate-200 p-2 rounded-xl hover:bg-white/5 transition-colors focus:outline-hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu navigasi"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden mt-2"
            >
              <div className="rounded-2xl flex flex-col gap-1 p-4 sm:p-5 border border-white/[0.12] bg-[#06030F]/95 shadow-2xl backdrop-blur-2xl">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-sm font-medium rounded-xl px-4 py-2.5 transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        )}
                        <span>{link.label}</span>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-500" />
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-white/10">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full text-xs py-3 justify-center shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Konsultasi via WhatsApp</span>
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
