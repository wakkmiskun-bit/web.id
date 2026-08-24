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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="h-full"
          >
            <Tilt3D maxTilt={7} scale={1.015} className="h-full">
              <div className="card-surface h-full p-8 sm:p-10 flex flex-col justify-between border border-white/10 hover:border-accent-cyan/50 hover:shadow-glow-card relative overflow-hidden bg-bg-850/90">
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-15 pointer-events-none" />

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkle className="h-4 w-4 text-accent-cyan" />
                      <span className="eyebrow">{`0${i + 1} / LEAD ENGINEER`}</span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div
                      className={`relative h-24 w-24 rounded-2xl p-[2px] bg-gradient-to-br ${member.ring} shadow-xl shrink-0`}
                    >
                      <div className="h-full w-full rounded-2xl bg-bg-950 flex items-center justify-center">
                        <span className="font-display text-3xl font-extrabold text-white bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                          {member.initials}
                        </span>
                      </div>
                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 border-2 border-bg-950" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-mono text-accent-cyan font-semibold">
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
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-mono text-slate-300"
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
                    className="btn-secondary text-xs sm:text-sm py-3 px-6 w-full justify-center group"
                  >
                    <Github className="h-4 w-4 text-accent-cyan" />
                    <span>Lihat Portofolio Personal</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
