import { motion } from "framer-motion";
import {
  Building2,
  ShoppingCart,
  UserRound,
  Rocket,
  Server,
  CalendarCheck2,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SERVICES, waLink } from "../data/content";
import Tilt3D from "./Tilt3D";
import WordWriter from "./WordWriter";

const ICONS = {
  Building2,
  ShoppingCart,
  UserRound,
  Rocket,
  Server,
  CalendarCheck2,
};

export function SectionHeading({ eyebrow, title, desc, align = "left", once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className={`flex items-center gap-2 mb-2 ${align === "center" ? "justify-center" : ""}`}>
        <Sparkles className="h-4 w-4" style={{color: "#10B981"}} />
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
        <WordWriter text={title} as="span" once={once} stagger={0.035} />
      </h2>

      {desc && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
          <WordWriter text={desc} as="span" once={once} delay={0.12} stagger={0.02} />
        </p>
      )}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="layanan" className="section-pad relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-0 h-96 w-96 rounded-full blur-[130px] animate-pulse-glow pointer-events-none opacity-20"
        style={{background: "radial-gradient(circle, #7C3AED, transparent)"}}
      />
      <div
        className="absolute top-1/3 right-0 h-72 w-72 rounded-full blur-[120px] pointer-events-none opacity-10"
        style={{background: "radial-gradient(circle, #10B981, transparent)"}}
      />

      <SectionHeading
        eyebrow="// 01_layanan_unggulan"
        title="Solusi Rekayasa Digital yang Presisi & Skalabel"
        desc="Kami tidak sekadar membuat website, kami merekayasa infrastruktur digital berkecepatan tinggi yang dirancang khusus untuk memenangkan persaingan bisnis Anda."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1500">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon];
          const serviceWa = waLink(
            `Halo NexaCode Studio, saya tertarik untuk konsultasi layanan "${service.title}". Boleh jelaskan alur dan biayanya?`
          );

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Tilt3D maxTilt={6} scale={1.03} className="h-full">
                <div className="card-surface group h-full p-8 flex flex-col justify-between border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(6,182,212,0.18)] relative overflow-hidden transition-all duration-300">
                  {/* Hover gradient background aura */}
                  <div
                    className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 pointer-events-none`}
                  />

                  <div>
                    {/* Header: Icon & Tag */}
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: "rgba(255,255,255,0.1)"
                        }}
                      >
                        <Icon className="h-7 w-7 transition-all duration-300 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105" />
                      </div>
                      <span
                        className="font-mono text-xs text-slate-400 uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/[0.06] group-hover:border-cyan-500/30 transition-colors"
                        style={{background: "rgba(255,255,255,0.03)"}}
                      >
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-6 text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Feature list */}
                    <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-2.5">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <a
                    href={serviceWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-between gap-2 pt-4 border-t border-white/[0.07] text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-200 group/link hover:scale-[1.02] origin-left"
                  >
                    <span>Konsultasikan Kebutuhan</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>
              </Tilt3D>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
