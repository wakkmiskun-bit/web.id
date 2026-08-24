import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  TerminalSquare,
  Mail,
  Instagram,
  Github,
  Check,
  Copy,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { WHATSAPP_LINK, NAV_LINKS } from "../data/content";
import Tilt3D from "./Tilt3D";

export default function CTAFooter() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "hello@nexacode.studio";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* 3D CTA Banner Section */}
      <section className="px-6 md:px-10 lg:px-20 pb-24 relative perspective-1500">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tilt3D maxTilt={4} scale={1.008}>
            <div className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-br from-bg-800 via-bg-900 to-bg-950 px-8 py-16 md:px-16 md:py-20 text-center shadow-3d-glass">
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)] pointer-events-none" />
              <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-accent-indigo/30 blur-[130px] animate-pulse-glow pointer-events-none" />
              <div className="absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-accent-cyan/25 blur-[120px] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-6 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-accent-cyan" />
                  <span className="eyebrow">// konsolidasi_solusi_digital</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
                  Siap Membangun Ekosistem Digital Berkecepatan Tinggi untuk Bisnis Anda?
                </h2>

                <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Diskusikan spesifikasi kebutuhan Anda secara gratis dan langsung dengan tim rekayasa software kami. Dapatkan arsitektur terbaik tanpa spekulasi teknis.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm sm:text-base px-8 py-4 shadow-glow-cyan"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Mulai Konsultasi WhatsApp Gratis
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="btn-secondary text-sm sm:text-base px-6 py-4"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">
                          Email Disalin ({emailAddress})
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-accent-cyan" />
                        <span>Salin Email Studio</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Tilt3D>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-10 lg:px-20 py-14 bg-bg-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#top" className="flex items-center gap-2.5 group">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-indigo to-accent-blue shadow-glow-indigo">
                <TerminalSquare className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Nexa<span className="text-accent-cyan">Code</span>{" "}
                <span className="text-xs font-mono text-slate-500 uppercase">Studio</span>
              </span>
            </a>
            <p className="text-xs font-mono text-slate-500 max-w-xs text-center md:text-left">
              Enterprise Software &amp; Full-Stack Custom Systems Architecture.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-accent-cyan/50 hover:bg-white/[0.04] transition-all"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${emailAddress}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-accent-cyan/50 hover:bg-white/[0.04] transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-accent-cyan/50 hover:bg-white/[0.04] transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-accent-cyan/50 hover:bg-white/[0.04] transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} NexaCode Studio. Seluruh hak cipta dilindungi undang-undang.</p>
          <p className="flex items-center gap-1">
            Dirancang dengan presisi &amp; standar rekayasa modern.
          </p>
        </div>
      </footer>
    </>
  );
}
