import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  ShieldCheck,
  Zap,
  Sparkles,
  Calculator,
} from "lucide-react";
import { STATS, waLink, TECH_STACK } from "../data/content";
import Tilt3D from "./Tilt3D";
import SystemStation from "./SystemStation";
import WordWriter from "./WordWriter";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const heroWa = waLink(
    "Halo NexaCode Studio, saya ingin mulai proyek pembuatan website/sistem aplikasi untuk bisnis saya."
  );

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-10 lg:px-20"
    >
      {/* Warm ambient glows — violet + emerald palette */}
      <div className="absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full pointer-events-none blur-[140px]"
        style={{background: "radial-gradient(circle, rgba(124,58,237,0.18), transparent)"}} />
      <div className="absolute top-1/3 -right-20 h-[26rem] w-[26rem] rounded-full pointer-events-none blur-[150px]"
        style={{background: "radial-gradient(circle, rgba(16,185,129,0.10), transparent)"}} />
      <div className="absolute -bottom-20 left-1/3 h-96 w-96 rounded-full pointer-events-none blur-[150px]"
        style={{background: "radial-gradient(circle, rgba(245,158,11,0.08), transparent)"}} />

      {/* Subtle grid with radial fade */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_25%,black,transparent)] pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left: Headline & Copy (7 cols) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-7 z-10"
        >
          {/* Main Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-[3.35rem] font-bold leading-[1.12] tracking-tight text-white"
          >
            Arsitektur Website &{" "}
            <span
              className="bg-clip-text text-transparent text-glow inline-block"
              style={{backgroundImage: "linear-gradient(135deg, #A78BFA 0%, #34D399 60%, #FCD34D 100%)"}}
            >
              Sistem Skala Enterprise
            </span>{" "}
            untuk Percepatan Bisnis Anda
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal"
          >
            NexaCode Studio merancang, membangun, dan merilis ekosistem digital berbasis Laravel & React. Bukan sekadar desain di atas template, kami memastikan keandalan database, kecepatan loading sub-detik, keamanan berstandar industri, dan konversi penjualan yang terukur nyata.
          </motion.p>

          {/* Action CTAs with Hover Zoom & Glow */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={heroWa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group text-sm sm:text-base px-7 py-4 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Sparkles className="h-4 w-4 text-amber-200 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Konsultasi Proyek Gratis</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#harga"
              className="btn-secondary text-sm sm:text-base px-6 py-4 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span>Lihat Paket Harga</span>
            </a>

            <a
              href="#portofolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/[0.04] hover:scale-105"
            >
              <Eye className="h-4 w-4 text-indigo-400" />
              <span>Lihat 5+ Live Demo</span>
            </a>
          </motion.div>

          {/* Stats Bar with Interactive Hover Zoom */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-white/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="relative group p-3 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.02] hover:scale-105 transition-all duration-300 cursor-default"
              >
                <p className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-br from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left">
                  {s.value}
                </p>
                <p className="text-xs font-semibold text-slate-300 mt-1">{s.label}</p>
                <p className="text-[11px] font-mono text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Code Station (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="w-full">
            <SystemStation />
          </div>

          {/* Floating Badge: Ultra-Fast Loading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute -bottom-5 -left-3 sm:-left-5 backdrop-blur-xl rounded-xl px-3.5 py-2.5 flex items-center gap-3 z-20 hover:scale-105 transition-transform duration-300"
            style={{
              background: "rgba(6,11,24,0.92)",
              border: "1px solid rgba(6,182,212,0.35)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(6,182,212,0.2)"
            }}
          >
            <div
              className="h-8 w-8 rounded-lg flex items-center justify-center border text-cyan-400"
              style={{background: "rgba(6,182,212,0.12)", borderColor: "rgba(6,182,212,0.3)"}}
            >
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-display font-bold text-white">
                Ultra-Fast Loading
              </p>
              <p className="text-[10px] font-mono flex items-center gap-1 text-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Core Web Vitals &gt; 98
              </p>
            </div>
          </motion.div>

          {/* Floating Badge: Enterprise Hardened */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute -top-4 -right-3 sm:-right-4 backdrop-blur-xl rounded-xl px-3.5 py-2.5 flex items-center gap-3 z-20 hover:scale-105 transition-transform duration-300"
            style={{
              background: "rgba(6,11,24,0.92)",
              border: "1px solid rgba(99,102,241,0.35)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(99,102,241,0.2)"
            }}
          >
            <div
              className="h-8 w-8 rounded-lg flex items-center justify-center border text-indigo-400"
              style={{background: "rgba(99,102,241,0.12)", borderColor: "rgba(99,102,241,0.3)"}}
            >
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-display font-bold text-white">
                OWASP Hardened
              </p>
              <p className="text-[10px] font-mono text-slate-300">
                CSRF / XSS / SQLi Protected
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Tech Marquee Bar */}
      <div className="relative mx-auto max-w-7xl w-full mt-20 pt-8 border-t border-white/[0.06]">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max gap-4 animate-marquee py-2 hover:[animation-play-state:paused]">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex items-center gap-2 rounded-xl border border-white/[0.07] px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-400 whitespace-nowrap transition-all duration-300 hover:text-white hover:border-cyan-500/40 hover:bg-white/[0.05] hover:scale-105 cursor-pointer"
                style={{background: "rgba(255,255,255,0.02)"}}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
