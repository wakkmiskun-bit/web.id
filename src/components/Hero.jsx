import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Terminal,
  Activity,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  Calculator,
} from "lucide-react";
import { WHATSAPP_LINK, STATS, waLink, TECH_STACK } from "../data/content";
import Tilt3D from "./Tilt3D";

const CODE_SNIPPETS = [
  { indent: 0, text: "<?php", color: "text-slate-500" },
  { indent: 0, text: "namespace App\\Services\\Enterprise;", color: "text-purple-400" },
  { indent: 0, text: "", color: "" },
  { indent: 0, text: "final class HighPerformanceCore {", color: "text-accent-cyan font-bold" },
  { indent: 1, text: "protected array $stack = ['Laravel 11', 'React 18', 'Redis'];", color: "text-slate-300" },
  { indent: 1, text: "protected string $security = 'OWASP_Hardened_Shield';", color: "text-emerald-400" },
  { indent: 1, text: "protected float $targetLatency = 18.4; // milliseconds", color: "text-accent-blue" },
  { indent: 0, text: "", color: "" },
  { indent: 1, text: "public function deployProduction(): SystemRelease {", color: "text-amber-300" },
  { indent: 2, text: "return new SystemRelease(", color: "text-slate-300" },
  { indent: 3, text: "status: 'PRODUCTION_READY',", color: "text-accent-cyan" },
  { indent: 3, text: "uptime: '99.99%',", color: "text-emerald-400" },
  { indent: 3, text: "scalability: 'Auto-Balanced'", color: "text-purple-300" },
  { indent: 2, text: ");", color: "text-slate-300" },
  { indent: 1, text: "}", color: "text-slate-300" },
  { indent: 0, text: "}", color: "text-slate-300" },
];

const ARCHITECTURE_NODES = [
  { name: "Client Browser / App", icon: Layers, color: "from-blue-500 to-indigo-500", desc: "React + Tailwind (Fluid UX)" },
  { name: "Edge Shield & CDN", icon: ShieldCheck, color: "from-cyan-500 to-blue-500", desc: "SSL / DDoS Filter / Caching" },
  { name: "Laravel Core Engine", icon: Server, color: "from-indigo-500 to-violet-600", desc: "Clean Architecture & API" },
  { name: "High-Speed DB & Redis", icon: Database, color: "from-emerald-500 to-teal-600", desc: "Sub-millisecond Queries" },
];

const METRICS_DATA = [
  { label: "Server Response Time", value: "18.4 ms", status: "Optimal", color: "text-emerald-400" },
  { label: "Core Web Vitals Score", value: "99 / 100", status: "Grade A+", color: "text-accent-cyan" },
  { label: "OWASP Security Rating", value: "A+ Verified", status: "Protected", color: "text-emerald-400" },
  { label: "Redis Cache Hit Ratio", value: "98.7%", status: "Active", color: "text-purple-400" },
  { label: "Concurrent User Throughput", value: "10,000+ req/s", status: "Auto-scaled", color: "text-amber-400" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState("code"); // "code" | "arch" | "metrics"
  const [metricsCount, setMetricsCount] = useState(0);

  const heroWa = waLink(
    "Halo NexaCode Studio, saya ingin mulai proyek pembuatan website/sistem aplikasi untuk bisnis saya."
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setMetricsCount((prev) => (prev + 1) % 1000);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-10 lg:px-20"
    >
      {/* Dynamic 3D ambient glows */}
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent-indigo/25 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/20 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-accent-violet/15 blur-[140px] pointer-events-none" />

      {/* Subtle grid with radial fade */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_25%,black,transparent)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left: Headline & Copy (7 cols) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 z-10"
        >
          {/* Availability pill badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/[0.07] px-4 py-1.5 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="eyebrow text-slate-200">
              Enterprise Software &amp; Web Studio
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-accent-cyan font-medium border-l border-white/15 pl-2">
              Slot Proyek Aktif
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.12] tracking-tight text-white"
          >
            Arsitektur Website &amp;{" "}
            <span className="bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-violet bg-clip-text text-transparent text-glow">
              Sistem Skala Enterprise
            </span>{" "}
            untuk Percepatan Bisnis Anda
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal"
          >
            NexaCode Studio merancang, membangun, dan merilis ekosistem digital
            berbasis <span className="text-accent-cyan font-semibold">Laravel &amp; React</span>.
            Bukan sekadar desain di atas template, kami memastikan keandalan
            database, kecepatan loading sub-detik, keamanan berstandar industri,
            dan konversi penjualan yang terukur nyata.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={heroWa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group text-sm sm:text-base px-7 py-4"
            >
              <Sparkles className="h-4 w-4 text-cyan-200 animate-spin" style={{ animationDuration: "8s" }} />
              Konsultasi Proyek Gratis
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a href="#kalkulator" className="btn-secondary text-sm sm:text-base px-6 py-4">
              <Calculator className="h-4 w-4 text-accent-cyan" />
              Hitung Estimasi Biaya
            </a>

            <a
              href="#portofolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              <Eye className="h-4 w-4 text-accent-blue" />
              Lihat 5+ Live Demo
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {STATS.map((s) => (
              <div key={s.label} className="relative group">
                <p className="text-2xl sm:text-3xl font-display font-bold text-white bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="text-xs font-semibold text-slate-300 mt-1">{s.label}</p>
                <p className="text-[11px] font-mono text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D Multi-Tab System Station (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="lg:col-span-5 relative perspective-1500"
        >
          <Tilt3D maxTilt={7} scale={1.01} className="w-full">
            <div className="relative rounded-2xl border border-white/15 bg-bg-900/95 shadow-3d-glass overflow-hidden">
              {/* Terminal Titlebar with Interactive Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-white/10 bg-bg-850/80 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80 border border-rose-400/40" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-black/40 rounded-lg p-1 border border-white/5 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                      activeTab === "code"
                        ? "bg-accent-indigo text-white shadow-sm font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Terminal className="h-3 w-3" />
                    <span>Core.php</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("arch")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                      activeTab === "arch"
                        ? "bg-accent-indigo text-white shadow-sm font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Cpu className="h-3 w-3" />
                    <span>Arsitektur</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                      activeTab === "metrics"
                        ? "bg-accent-indigo text-white shadow-sm font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Activity className="h-3 w-3" />
                    <span>Live Metrics</span>
                  </button>
                </div>
              </div>

              {/* Tab Content Body */}
              <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {/* TAB 1: CODE */}
                  {activeTab === "code" && (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-xs sm:text-[13px] leading-6 space-y-0.5 overflow-x-auto"
                    >
                      {CODE_SNIPPETS.map((line, idx) => (
                        <div
                          key={idx}
                          style={{ paddingLeft: `${line.indent * 1.15}rem` }}
                          className={`${line.color || "text-slate-300"} flex items-center`}
                        >
                          <span className="w-6 text-[10px] text-slate-600 select-none mr-2">
                            {idx + 1}
                          </span>
                          <span>{line.text}</span>
                        </div>
                      ))}
                      <div className="pt-2 flex items-center gap-2 text-slate-500 text-xs pl-8">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Ready for production build</span>
                        <span className="inline-block w-2 h-4 bg-accent-cyan animate-blink ml-1" />
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: ARCHITECTURE */}
                  {activeTab === "arch" && (
                    <motion.div
                      key="arch"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2 border-b border-white/5 pb-2">
                        <span>Pipeline Topologi Sistem</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> High Availability
                        </span>
                      </div>
                      {ARCHITECTURE_NODES.map((node, i) => {
                        const Icon = node.icon;
                        return (
                          <div
                            key={node.name}
                            className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-accent-cyan/40 transition-colors"
                          >
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${node.color} text-white shadow-md`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-display font-semibold text-white truncate">
                                {node.name}
                              </p>
                              <p className="text-xs text-slate-400 truncate">
                                {node.desc}
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 border border-white/10 rounded px-2 py-0.5">
                              0{i + 1}
                            </span>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}

                  {/* TAB 3: LIVE METRICS */}
                  {activeTab === "metrics" && (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2.5"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2 border-b border-white/5 pb-2">
                        <span>Live Production Telemetry</span>
                        <span className="text-accent-cyan flex items-center gap-1.5 font-bold">
                          <span className="h-2 w-2 rounded-full bg-accent-cyan animate-ping" />
                          Online
                        </span>
                      </div>
                      {METRICS_DATA.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2.5"
                        >
                          <span className="text-xs text-slate-300 font-medium">{metric.label}</span>
                          <div className="text-right">
                            <span className={`text-xs font-mono font-bold ${metric.color}`}>
                              {metric.value}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 ml-2">
                              [{metric.status}]
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Terminal Bottom Status Bar */}
              <div className="px-5 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>NexaEngine v4.2.0 · Ready</span>
                </div>
                <div className="text-slate-500">Latency: 18ms</div>
              </div>
            </div>
          </Tilt3D>

          {/* Floating 3D Micro-Badges around the station */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-5 -left-4 glass rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-xl border border-emerald-500/30 animate-float z-20"
          >
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-display font-semibold text-white">
                Ultra-Fast Loading
              </p>
              <p className="text-[10px] font-mono text-emerald-400">Core Web Vitals &gt; 98</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-xl border border-accent-indigo/30 animate-float-slow z-20"
          >
            <div className="h-8 w-8 rounded-lg bg-accent-indigo/20 flex items-center justify-center text-accent-cyan">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-display font-semibold text-white">
                Enterprise Hardened
              </p>
              <p className="text-[10px] font-mono text-slate-300">CSRF / XSS / SQLi Protected</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Tech Marquee Bar */}
      <div className="relative mx-auto max-w-7xl w-full mt-20 pt-8 border-t border-white/5">
        <p className="text-center text-xs font-mono tracking-widest text-slate-400 uppercase mb-6 flex items-center justify-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
          Ekosistem Teknologi Standar Industri Skala Global
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max gap-4 animate-marquee py-2">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-accent-cyan/40 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-300 whitespace-nowrap transition-all"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
