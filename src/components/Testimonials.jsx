import { motion } from "framer-motion";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { SectionHeading } from "./Services";
import Tilt3D from "./Tilt3D";

export default function Testimonials() {
  return (
    <section id="testimoni" className="section-pad relative overflow-hidden">
      {/* Glow orb */}
      <div className="absolute -top-10 right-10 h-80 w-80 rounded-full bg-accent-cyan/10 blur-[130px] pointer-events-none" />

      <SectionHeading
        eyebrow="// 07_testimoni_klien"
        title="Apa Kata Mereka yang Telah Bermitra dengan Kami"
        desc="Kepercayaan klien adalah aset terbesar kami. Berikut pengalaman nyata mereka dalam mengembangkan solusi digital bersama NexaCode Studio."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1500">
        {TESTIMONIALS.map((item, i) => (
          <motion.div
            key={item.author}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <Tilt3D maxTilt={6} scale={1.03} className="h-full">
              <div className="card-surface group h-full p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(6,182,212,0.18)] transition-all duration-300 relative overflow-hidden">
                {/* Background Quote Icon */}
                <Quote className="absolute right-6 top-6 h-16 w-16 text-white/[0.03] group-hover:text-cyan-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform"
                      />
                    ))}
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      5.0 Verified Review
                    </span>
                  </div>

                  {/* Project Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-[11px] font-mono text-cyan-300 mb-4">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    <span>{item.project}</span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-full bg-gradient-to-br ${item.avatarBg} flex items-center justify-center font-display font-bold text-white shadow-md text-base shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                      {item.author}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role} · <span className="text-slate-300">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Tilt3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
