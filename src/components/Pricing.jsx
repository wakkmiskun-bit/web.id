import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Lock,
  ShieldCheck,
  Zap,
  Sparkles,
  Code2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { PRICING, TRUST_BADGES, waLink } from "../data/content";
import { SectionHeading } from "./Services";
import Tilt3D from "./Tilt3D";

const BADGE_ICONS = { Lock, ShieldCheck, Zap, Code2 };

export default function Pricing() {
  return (
    <section id="harga" className="section-pad relative bg-bg-900/40 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full bg-accent-indigo/10 blur-[150px] pointer-events-none" />

      <SectionHeading
        eyebrow="// 06_investasi_transparan"
        title="Paket Investasi Transparan, Tanpa Biaya Tersembunyi"
        desc="Seluruh paket mencakup hak milik penuh atas kode sumber, domain & hosting, serta garansi bug resmi pasca-peluncuran."
      />

      {/* Pricing Cards Grid */}
      <div className="mt-14 grid lg:grid-cols-3 gap-8 items-stretch perspective-1500">
        {PRICING.map((plan, i) => {
          const planWa = waLink(
            `Halo NexaCode Studio, saya tertarik untuk mengambil paket "${plan.name} — ${plan.subtitle}" (${plan.price}). Boleh dibantu konsultasi prosesnya?`
          );

          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`h-full ${plan.highlight ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              <Tilt3D maxTilt={7} scale={plan.highlight ? 1.02 : 1.01} className="h-full">
                <div
                  className={`relative flex h-full flex-col justify-between rounded-3xl p-8 sm:p-9 border transition-all duration-300 ${
                    plan.highlight
                      ? "border-accent-cyan/80 bg-gradient-to-b from-accent-indigo/20 via-bg-850 to-bg-900 shadow-glow-indigo"
                      : "border-white/10 bg-gradient-to-b from-bg-850/80 to-bg-900/80 hover:border-white/20"
                  }`}
                >
                  {/* Highlight Ribbon */}
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-indigo via-accent-blue to-accent-cyan px-4 py-1.5 text-xs font-bold text-white shadow-lg tracking-wide uppercase">
                      <Sparkles className="h-3.5 w-3.5" />
                      Pilihan Paling Populer
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="eyebrow text-accent-cyan">{plan.name}</span>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-display font-bold text-white">
                      {plan.subtitle}
                    </h3>

                    {/* Price */}
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                        {plan.period}
                      </span>
                      <p className="mt-1 text-3xl sm:text-4xl font-display font-extrabold text-white">
                        {plan.price}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="mt-8 space-y-3.5">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-300"
                        >
                          <div className="h-5 w-5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-3.5 w-3.5 text-accent-cyan" />
                          </div>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-10 pt-6 border-t border-white/10">
                    <a
                      href={planWa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full text-center text-sm sm:text-base py-4 font-semibold ${
                        plan.highlight ? "btn-primary" : "btn-secondary"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-4"
      >
        {TRUST_BADGES.map((badge) => {
          const Icon = BADGE_ICONS[badge.icon] || ShieldCheck;
          return (
            <div
              key={badge.label}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-md shadow-sm hover:border-accent-cyan/40 transition-colors"
            >
              <Icon className="h-4 w-4 text-accent-cyan" />
              <span>{badge.label}</span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
