import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkle, Code, Database } from "lucide-react";
import { TEAM } from "../data/content";
import { SectionHeading } from "./Services";
import Tilt3D from "./Tilt3D";

export default function Team() {
  return (
    <section id="tim" className="section-pad relative bg-bg-900/40 overflow-hidden">
      {/* Background radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[45rem] rounded-full bg-accent-indigo/10 blur-[140px] pointer-events-none" />

      <SectionHeading
        eyebrow="// 08_insinyur_kami"
        title="Dua Spesialis di Balik Setiap Sistem yang Kami Bangun"
        desc="Kombinasi solid antara arsitektur backend berstandar enterprise dan rekayasa antarmuka pengguna modern berkecepatan tinggi."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-8 perspective-1500">
        {TEAM.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <Tilt3D maxTilt={6} scale={1.025} className="h-full">
              <div className="card-surface group h-full p-8 sm:p-10 flex flex-col justify-between border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(6,182,212,0.2)] relative overflow-hidden bg-slate-900/90 transition-all duration-300">
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-15 pointer-events-none" />

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkle className="h-4 w-4 text-cyan-400" />
                      <span className="eyebrow text-cyan-400">{`0${i + 1} / LEAD ENGINEER`}</span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div
                      className="relative h-24 w-24 rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className="h-full w-full rounded-2xl bg-[#06030F] flex items-center justify-center overflow-hidden">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="h-full w-full object-cover object-center rounded-2xl"
                          />
                        ) : (
                          <span className="font-display text-3xl font-extrabold text-white bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
                            {member.initials}
                          </span>
                        )}
                      </div>
                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 border-2 border-[#06030F]" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-mono text-cyan-400 font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio Description */}
                  <p className="mt-6 text-sm text-slate-300 leading-relaxed">
                    {member.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono text-slate-300 hover:border-cyan-500/40 hover:scale-105 hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer link to portfolio */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs sm:text-sm py-3 px-6 w-full justify-center group/btn hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <Github className="h-4 w-4 text-cyan-400" />
                    <span>Lihat Portofolio Personal</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>
            </Tilt3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
