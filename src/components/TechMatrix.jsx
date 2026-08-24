import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  Database,
  Cloud,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { TECH_CATEGORIES } from "../data/content";
import { SectionHeading } from "./Services";
import Tilt3D from "./Tilt3D";

const CATEGORY_ICONS = {
  "Backend & Core": Cpu,
  "Frontend & UI/UX": Layers,
  "Database & Cache": Database,
  "Cloud, DevOps & Security": Cloud,
};

export default function TechMatrix() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section className="section-pad relative bg-bg-900/30 overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 right-1/4 h-80 w-80 rounded-full bg-accent-indigo/10 blur-[130px] pointer-events-none" />

      <SectionHeading
        eyebrow="// 05_arsitektur_teknologi"
        title="Dibangun dengan Standar Rekayasa Modern"
        desc="Kami hanya mengadopsi stack teknologi yang telah teruji stabilitasnya di skala enterprise untuk menjamin kecepatan, skalabilitas, dan proteksi jangka panjang."
      />

      <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start perspective-1500">
        {/* Left: Category Selector Tabs (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.category] || Layers;
            const isActive = activeCategoryIndex === idx;

            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
                  isActive
                    ? "border-accent-cyan/60 bg-accent-indigo/20 shadow-glow-cyan"
                    : "border-white/10 bg-bg-850/60 hover:bg-white/[0.04] text-slate-300"
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isActive
                      ? "bg-accent-indigo text-white shadow-md"
                      : "bg-white/[0.04] text-slate-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4
                    className={`text-sm sm:text-base font-display font-bold ${
                      isActive ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {cat.category}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cat.items.length} Teknologi Utama
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Interactive 3D Stack Showcase (8 cols) */}
        <div className="lg:col-span-8">
          <Tilt3D maxTilt={5} scale={1.01}>
            <div className="card-surface p-7 sm:p-9 border-white/15 bg-bg-850/90 shadow-2xl relative overflow-hidden min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div>
                      <span className="eyebrow text-accent-cyan">
                        Layer: {TECH_CATEGORIES[activeCategoryIndex].category}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mt-1">
                        Komponen &amp; Spesifikasi Engine
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Production Verified
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {TECH_CATEGORIES[activeCategoryIndex].items.map((item) => (
                      <div
                        key={item.name}
                        className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-accent-cyan/40 hover:bg-white/[0.04] transition-all"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-display font-bold text-white text-base">
                            {item.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-indigo/30 text-accent-cyan border border-accent-indigo/40">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Benchmark callout */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Zap className="h-4 w-4" />
                      <span>Optimasi Load Score 99/100 Core Web Vitals</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent-cyan">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Hardened Database &amp; Automated Backups</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Tilt3D>
        </div>
      </div>
    </section>
  );
}
