import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Circle,
  Eye,
  X,
  Smartphone,
  Tablet,
  Laptop,
  Sparkles,
  TrendingUp,
  Layers,
} from "lucide-react";
import { PORTFOLIO } from "../data/content";
import { SectionHeading } from "./Services";
import Tilt3D from "./Tilt3D";

const CATEGORIES = ["Semua Proyek", "Company Profile", "Sistem Aplikasi Custom"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Proyek");
  const [previewProject, setPreviewProject] = useState(null);
  const [deviceView, setDeviceView] = useState("desktop"); // "desktop" | "tablet" | "mobile"

  const filteredPortfolio =
    selectedCategory === "Semua Proyek"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === selectedCategory);

  return (
    <section id="portofolio" className="section-pad relative bg-bg-900/40 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-accent-cyan/10 blur-[140px] pointer-events-none" />

      <SectionHeading
        eyebrow="// 02_portofolio_nyata"
        title="Karya Produksi Nyata &amp; Berdampak Terukur"
        desc="Seluruh proyek di bawah ini telah dirilis dan berjalan aktif di server produksi klien — bukan sekadar mockup Figma statis."
      />

      {/* Filter Tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-accent-indigo text-white shadow-glow-indigo font-semibold"
                : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1500">
        <AnimatePresence mode="popLayout">
          {filteredPortfolio.map((project, i) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="h-full"
            >
              <Tilt3D maxTilt={7} scale={1.015} className="h-full">
                <div className="group relative flex h-full flex-col rounded-2xl overflow-hidden border border-white/10 bg-bg-850/90 hover:border-accent-cyan/50 transition-all duration-300 shadow-xl hover:shadow-glow-card">
                  {/* Browser Mockup Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-bg-950/80 backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                      <Globe className="h-3 w-3 shrink-0 text-accent-cyan" />
                      {project.domain}
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Visual Header / Gradient Canvas */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center p-6`}
                  >
                    <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 mix-blend-overlay" />

                    {/* Interactive Overlay Button */}
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Layers className="h-7 w-7 text-accent-cyan" />
                      </div>
                      <span className="text-xs font-mono text-white/90 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                        {project.industry}
                      </span>
                    </div>

                    {/* Quick Preview Hover Button */}
                    <button
                      onClick={() => {
                        setPreviewProject(project);
                        setDeviceView("desktop");
                      }}
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm cursor-pointer z-20"
                    >
                      <Eye className="h-4 w-4 text-accent-cyan" />
                      Lihat Rincian &amp; Live View
                    </button>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Metric Tag Badge */}
                      {project.metrics && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 mb-3">
                          <TrendingUp className="h-3 w-3" />
                          <span>{project.metrics}</span>
                        </div>
                      )}

                      <h3 className="text-xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {project.name}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Tech badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Direct Live Link */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent-cyan hover:text-white transition-colors"
                      >
                        <Circle className="h-2 w-2 fill-emerald-400 text-emerald-400" />
                        Kunjungi Domain Live
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>

                      <button
                        onClick={() => {
                          setPreviewProject(project);
                          setDeviceView("desktop");
                        }}
                        className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Project Preview Modal with Device View Switcher */}
      <AnimatePresence>
        {previewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl rounded-3xl border border-white/20 bg-bg-900 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-bg-950">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <h4 className="font-display font-bold text-white text-base">
                      {previewProject.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-400">
                      {previewProject.domain}
                    </p>
                  </div>
                </div>

                {/* Device Viewport Selector */}
                <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
                  <button
                    onClick={() => setDeviceView("desktop")}
                    className={`p-1.5 rounded-md transition-colors ${
                      deviceView === "desktop"
                        ? "bg-accent-indigo text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                    title="Tampilan Desktop"
                  >
                    <Laptop className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setDeviceView("tablet")}
                    className={`p-1.5 rounded-md transition-colors ${
                      deviceView === "tablet"
                        ? "bg-accent-indigo text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                    title="Tampilan Tablet"
                  >
                    <Tablet className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setDeviceView("mobile")}
                    className={`p-1.5 rounded-md transition-colors ${
                      deviceView === "mobile"
                        ? "bg-accent-indigo text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                    title="Tampilan Mobile"
                  >
                    <Smartphone className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => setPreviewProject(null)}
                  className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Simulated Device Frame */}
                <div className="flex justify-center bg-bg-950/80 rounded-2xl p-4 border border-white/10 min-h-[300px] items-center">
                  <div
                    className={`transition-all duration-500 rounded-xl overflow-hidden border border-white/15 bg-gradient-to-br ${previewProject.gradient} p-8 text-center text-white flex flex-col items-center justify-center ${
                      deviceView === "desktop"
                        ? "w-full max-w-2xl h-64"
                        : deviceView === "tablet"
                        ? "w-80 h-72"
                        : "w-56 h-80"
                    }`}
                  >
                    <Globe className="h-12 w-12 text-white/40 mb-3" />
                    <p className="font-display text-lg font-bold text-white">
                      {previewProject.name}
                    </p>
                    <p className="text-xs text-slate-300 font-mono mt-1">
                      {previewProject.domain}
                    </p>
                    <p className="text-xs text-emerald-300 mt-3 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                      {previewProject.metrics}
                    </p>
                  </div>
                </div>

                {/* Details info */}
                <div className="grid sm:grid-cols-2 gap-6 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                  <div>
                    <h5 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-1">
                      Ikhtisar Proyek
                    </h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {previewProject.desc}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-1">
                      Fitur Utama &amp; Dampak
                    </h5>
                    <p className="text-sm text-slate-300 font-medium">
                      {previewProject.highlight}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {previewProject.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-accent-indigo/20 text-accent-cyan border border-accent-indigo/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => setPreviewProject(null)}
                    className="btn-secondary text-sm py-2.5 px-5"
                  >
                    Tutup
                  </button>
                  <a
                    href={previewProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2.5 px-6"
                  >
                    Buka Website Live di Tab Baru
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
