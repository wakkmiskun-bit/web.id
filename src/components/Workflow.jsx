import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessagesSquare,
  PenTool,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { WORKFLOW } from "../data/content";
import { SectionHeading } from "./Services";
import Tilt3D from "./Tilt3D";

const ICONS = { MessagesSquare, PenTool, Code2, ShieldCheck };

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="alur-kerja" className="section-pad relative overflow-hidden">
      {/* Background glow orbs with subtle pulsing */}
      <div className="absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-accent-violet/15 blur-[140px] animate-pulse-glow pointer-events-none" />

      <SectionHeading
        eyebrow="// 04_alur_rekayasa"
        title="Alur Kerja Terstruktur, Transparan &amp; Tepat Waktu"
        desc="Metodologi Agile teruji yang memastikan setiap baris kode, arsitektur database, dan antarmuka dirilis tanpa friksi."
      />

      <div className="mt-16 relative">
        {/* Animated desktop connecting line */}
        <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-gradient-to-r from-indigo-500/30 via-cyan-400/40 to-emerald-400/30" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 perspective-1500">
          {WORKFLOW.map((item, i) => {
            const Icon = ICONS[item.icon];
            const isCurrent = activeStep === i;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveStep(i)}
                className="h-full"
              >
                <Tilt3D maxTilt={6} scale={1.03} className="h-full">
                  <div
                    className={`card-surface group p-7 h-full flex flex-col justify-between border transition-all duration-300 ${
                      isCurrent
                        ? "border-cyan-500/70 bg-gradient-to-b from-indigo-950/40 via-slate-900/90 to-slate-950 shadow-[0_10px_35px_rgba(6,182,212,0.2)]"
                        : "border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div>
                      {/* Top Step Badge & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                            isCurrent
                              ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] border-white/20"
                              : "bg-white/[0.04] border-white/10 text-cyan-400 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10"
                          }`}
                        >
                          <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <span className="font-mono text-2xl font-bold bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-300 transition-colors">
                          {item.step}
                        </span>
                      </div>

                      <span className="inline-block text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2 font-medium">
                        {item.badge}
                      </span>

                      <h3 className="text-lg font-display font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors duration-200">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Milestone Terverifikasi</span>
                    </div>
                  </div>
                </Tilt3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
