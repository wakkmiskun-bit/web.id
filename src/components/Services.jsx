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

const ICONS = {
  Building2,
  ShoppingCart,
  UserRound,
  Rocket,
  Server,
  CalendarCheck2,
};

export function SectionHeading({ eyebrow, title, desc, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
        <Sparkles className="h-4 w-4 text-accent-cyan" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
          {desc}
        </p>
      )}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="layanan" className="section-pad relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-accent-indigo/10 blur-[130px] pointer-events-none" />

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="h-full"
            >
              <Tilt3D maxTilt={9} scale={1.02} className="h-full">
                <div className="card-surface group h-full p-8 flex flex-col justify-between border border-white/10 hover:border-accent-cyan/50 hover:shadow-glow-card relative overflow-hidden">
                  {/* Subtle hover gradient background overlay */}
                  <div
                    className={`absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 pointer-events-none`}
                  />

                  <div>
                    {/* Header: Icon & Top Tag */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-accent-cyan/40 group-hover:bg-gradient-to-br group-hover:from-accent-indigo/30 group-hover:to-accent-cyan/20 transition-all duration-300 shadow-inner">
                        <Icon className="h-7 w-7 text-accent-cyan group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-6 text-xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Feature bullet list */}
                    <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                      {service.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-xs text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent-cyan shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer link to consultation */}
                  <a
                    href={serviceWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-between gap-2 pt-4 border-t border-white/10 text-xs font-semibold text-accent-cyan group-hover:text-white transition-colors"
                  >
                    <span>Konsultasikan Kebutuhan</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
