import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Eye,
  X,
  Smartphone,
  Tablet,
  Laptop,
  TrendingUp,
  ArrowUpRight,
  ImageOff,
} from "lucide-react";
import { PORTFOLIO } from "../data/content";
import { SectionHeading } from "./Services";
import Tilt3D from "./Tilt3D";

const CATEGORIES = ["Semua Proyek", "Company Profile", "Sistem Aplikasi Custom"];

// Mapping screenshot untuk setiap proyek (Opsi 1)
// Simpan file gambar Anda di folder "public/screenshots/" lalu masukkan path-nya di sini:
const PROJECT_SCREENSHOTS = {
  "BYD Cirebon": null, // contoh: "/screenshots/bydcirebon.png"
  "Mariposas Indonesia": null, // contoh: "/screenshots/mariposas.png"
  "Sistem Perpustakaan Digital": null, // contoh: "/screenshots/perpustakaan.png"
  "TaskMate Project Hub": null, // contoh: "/screenshots/taskmate.png"
  "Siladata — SI Akreditasi": null, // contoh: "/screenshots/siladata.png"
};

function ProjectImage({ project, className = "" }) {
  const [imgError, setImgError] = useState(false);
  const screenshot = project.image || PROJECT_SCREENSHOTS[project.name];

  if (screenshot && !imgError) {
    return (
      <img
        src={screenshot}
        alt={`Screenshot ${project.name}`}
        onError={() => setImgError(true)}
        className={`w-full h-full object-cover object-top ${className}`}
      />
    );
  }

  // Fallback: gradient placeholder saat belum ada screenshot
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${project.gradient} ${className}`}>
      <div className="flex flex-col items-center gap-3 opacity-80">
        <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Globe className="h-6 w-6 text-white/70" />
        </div>
        <div className="text-center">
          <p className="text-xs font-mono text-white/60">{project.domain}</p>
          <p className="text-[10px] text-white/40 mt-1">Screenshot belum tersedia</p>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Proyek");
  const [previewProject, setPreviewProject] = useState(null);
  const [deviceView, setDeviceView] = useState("desktop");

  const filteredPortfolio =
    selectedCategory === "Semua Proyek"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === selectedCategory);

  return (
    <section id="portofolio" className="section-pad relative overflow-hidden" style={{background: "linear-gradient(180deg, #020617 0%, #080f1e 50%, #020617 100%)"}}>
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]" style={{background: "radial-gradient(circle, #22d3ee, transparent)"}} />
        <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full opacity-8 blur-[100px]" style={{background: "radial-gradient(circle, #6366f1, transparent)"}} />
      </div>

      <SectionHeading
        eyebrow="// 02_portofolio_nyata"
        title="Karya Produksi Nyata & Berdampak Terukur"
        desc="Seluruh proyek di bawah ini telah dirilis dan berjalan aktif di server produksi klien — bukan sekadar mockup Figma statis."
      />

      {/* Filter Tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-2.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
              selectedCategory === cat
                ? "text-white font-semibold shadow-lg"
                : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
            }`}
            style={selectedCategory === cat ? {
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              boxShadow: "0 4px 20px -3px rgba(6,182,212,0.45)"
            } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 perspective-1500">
        <AnimatePresence mode="popLayout">
          {filteredPortfolio.map((project, i) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Tilt3D maxTilt={5} scale={1.025} className="h-full">
                <div className="group relative flex h-full flex-col rounded-2xl overflow-hidden border border-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 bg-[#080f1e]">

                  {/* Browser chrome bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#060d1a]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1 text-[11px] font-mono text-slate-400 truncate max-w-[180px] border border-white/[0.04]">
                      <Globe className="h-3 w-3 shrink-0 text-slate-400" />
                      {project.domain}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[9px] font-mono text-emerald-400 font-semibold">live</span>
                    </div>
                  </div>

                  {/* Screenshot / Image area */}
                  <div className="relative h-52 overflow-hidden bg-[#040914]">
                    <ProjectImage project={project} />

                    {/* Overlay gradient at bottom for smooth transition */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{background: "linear-gradient(to top, #080f1e, transparent)"}} />

                    {/* Hover preview button with zoom */}
                    <button
                      onClick={() => {
                        setPreviewProject(project);
                        setDeviceView("desktop");
                      }}
                      className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                      style={{background: "rgba(6, 12, 28, 0.75)", backdropFilter: "blur(4px)"}}
                    >
                      <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-200 shadow-lg">
                        <Eye className="h-4 w-4 text-cyan-400" />
                        Lihat Detail
                      </span>
                    </button>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Metrics badge */}
                      {project.metrics && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-3 text-[11px] font-medium"
                          style={{background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#34d399"}}>
                          <TrendingUp className="h-3 w-3" />
                          {project.metrics}
                        </div>
                      )}

                      <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Tech badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-400 border border-white/[0.06] hover:border-cyan-500/30 transition-colors"
                            style={{background: "rgba(255,255,255,0.03)"}}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:scale-105 active:scale-95 transition-all duration-200 group/link origin-left"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span>Kunjungi Website</span>
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>

                      <button
                        onClick={() => {
                          setPreviewProject(project);
                          setDeviceView("desktop");
                        }}
                        className="text-xs text-slate-400 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                      >
                        Detail →
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {previewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewProject(null)}
              className="absolute inset-0"
              style={{background: "rgba(2,6,23,0.85)", backdropFilter: "blur(12px)"}}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl rounded-2xl border border-white/10 overflow-hidden z-10 flex flex-col max-h-[90vh]"
              style={{background: "linear-gradient(180deg, #0b1220 0%, #060d1a 100%)", boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)"}}
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07]" style={{background: "#060d1a"}}>
                <div className="flex items-center gap-3">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <div>
                    <h4 className="font-display font-bold text-white text-base">
                      {previewProject.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-500">
                      {previewProject.domain}
                    </p>
                  </div>
                </div>

                {/* Device Switcher */}
                <div className="hidden sm:flex items-center gap-1 rounded-lg p-1 border border-white/[0.06]"
                  style={{background: "rgba(255,255,255,0.03)"}}>
                  {[
                    { id: "desktop", Icon: Laptop, label: "Desktop" },
                    { id: "tablet", Icon: Tablet, label: "Tablet" },
                    { id: "mobile", Icon: Smartphone, label: "Mobile" },
                  ].map(({ id, Icon, label }) => (
                    <button
                      key={id}
                      onClick={() => setDeviceView(id)}
                      title={`Tampilan ${label}`}
                      className={`p-1.5 rounded-md transition-all ${
                        deviceView === id
                          ? "text-white"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                      style={deviceView === id ? {background: "linear-gradient(135deg, #6366f1, #3b82f6)"} : {}}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setPreviewProject(null)}
                  className="rounded-full p-2 text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5">
                {/* Device Preview Frame */}
                <div className="flex justify-center rounded-xl p-5 border border-white/[0.05]"
                  style={{background: "#040a14"}}>
                  <div
                    className={`transition-all duration-500 rounded-xl overflow-hidden border border-white/10 ${
                      deviceView === "desktop"
                        ? "w-full max-w-2xl h-72"
                        : deviceView === "tablet"
                        ? "w-80 h-80"
                        : "w-52 h-96"
                    }`}
                  >
                    {previewProject.image || PROJECT_SCREENSHOTS[previewProject.name] ? (
                      <img
                        src={previewProject.image || PROJECT_SCREENSHOTS[previewProject.name]}
                        alt={previewProject.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${previewProject.gradient} flex flex-col items-center justify-center gap-3`}>
                        <Globe className="h-10 w-10 text-white/30" />
                        <div className="text-center">
                          <p className="font-display font-bold text-white text-base">{previewProject.name}</p>
                          <p className="text-xs font-mono text-white/50 mt-1">{previewProject.domain}</p>
                        </div>
                        {previewProject.metrics && (
                          <span className="text-xs text-emerald-300 mt-1 px-3 py-1 rounded-full border border-emerald-500/20"
                            style={{background: "rgba(16,185,129,0.08)"}}>
                            {previewProject.metrics}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid sm:grid-cols-2 gap-5 rounded-xl p-5 border border-white/[0.05]"
                  style={{background: "rgba(255,255,255,0.015)"}}>
                  <div>
                    <h5 className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest mb-2">
                      Ikhtisar Proyek
                    </h5>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {previewProject.desc}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest mb-2">
                      Fitur Utama & Dampak
                    </h5>
                    <p className="text-sm text-slate-300 font-medium mb-3">
                      {previewProject.highlight}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {previewProject.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono text-accent-cyan border border-accent-indigo/25"
                          style={{background: "rgba(99,102,241,0.12)"}}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer actions */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-1">
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
                    Buka Website Live
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
