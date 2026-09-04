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
  ArrowRight,
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
      {/* CTA Banner */}
      <section className="px-6 md:px-10 lg:px-20 pb-24 relative perspective-1500">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tilt3D maxTilt={4} scale={1.015}>
            <div
              className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center shadow-2xl border border-white/10"
              style={{background: "linear-gradient(135deg, #090e1f 0%, #131b38 35%, #0d1e2b 70%, #060914 100%)"}}
            >
              {/* Mesh glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{background: "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(99,102,241,0.25) 0%, transparent 70%), radial-gradient(ellipse 55% 45% at 80% 100%, rgba(6,182,212,0.18) 0%, transparent 65%)"}}
              />
              <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-15 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] pointer-events-none" />

              {/* Glow orbs */}
              <div
                className="absolute -top-24 left-1/4 h-72 w-72 rounded-full opacity-25 blur-[100px] pointer-events-none"
                style={{background: "radial-gradient(circle, #6366f1, transparent)"}}
              />
              <div
                className="absolute -bottom-20 right-1/3 h-64 w-64 rounded-full opacity-20 blur-[90px] pointer-events-none"
                style={{background: "radial-gradient(circle, #06b6d4, transparent)"}}
              />
              <div
                className="absolute top-1/2 -right-10 h-48 w-48 rounded-full opacity-15 blur-[80px] pointer-events-none"
                style={{background: "radial-gradient(circle, #f59e0b, transparent)"}}
              />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
                  Siap Membangun Ekosistem Digital{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{backgroundImage: "linear-gradient(135deg, #a78bfa 0%, #38bdf8 50%, #34d399 100%)"}}
                  >
                    Berkecepatan Tinggi
                  </span>{" "}
                  untuk Bisnis Anda?
                </h2>

                <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Diskusikan spesifikasi kebutuhan Anda secara gratis dan langsung dengan tim rekayasa software kami. Dapatkan arsitektur terbaik tanpa spekulasi teknis.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm sm:text-base px-8 py-4 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Mulai Konsultasi WhatsApp Gratis</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Tilt3D>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-white/[0.08] px-6 md:px-10 lg:px-20 py-14 backdrop-blur-xl"
        style={{background: "rgba(5,8,18,0.92)"}}
      >
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#top" className="flex items-center gap-2.5 group hover:scale-105 transition-transform duration-300">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                style={{background: "linear-gradient(135deg, #6366f1, #06b6d4)", boxShadow: "0 0 20px rgba(99,102,241,0.4)"}}
              >
                <TerminalSquare className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Nexa<span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Code</span>{" "}
                <span className="text-xs font-mono text-slate-400 uppercase">Studio</span>
              </span>
            </a>
            <p className="text-xs font-mono text-slate-400 max-w-xs text-center md:text-left">
              Enterprise Software & Full-Stack Custom Systems Architecture.
            </p>
          </div>

          {/* Nav Links with Hover Zoom */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white hover:scale-105 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links with Hover Zoom */}
          <div className="flex items-center gap-3">
            {[
              { href: WHATSAPP_LINK, icon: MessageCircle, label: "WhatsApp", external: true },
              { href: `mailto:${emailAddress}`, icon: Mail, label: "Email", external: false },
              { href: "https://instagram.com", icon: Instagram, label: "Instagram", external: true },
              { href: "https://github.com", icon: Github, label: "GitHub", external: true },
            ].map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:scale-115 active:scale-90 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} NexaCode Studio. Seluruh hak cipta dilindungi undang-undang.</p>
          <p>Dirancang dengan presisi & standar rekayasa modern.</p>
        </div>
      </footer>
    </>
  );
}
