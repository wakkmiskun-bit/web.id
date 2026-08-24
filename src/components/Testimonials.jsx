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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="h-full"
          >
            <Tilt3D maxTilt={8} scale={1.02} className="h-full">
              <div className="card-surface h-full p-8 flex flex-col justify-between border border-white/10 hover:border-accent-cyan/40 hover:shadow-glow-card transition-all relative overflow-hidden">
                {/* Background Quote Icon */}
                <Quote className="absolute right-6 top-6 h-16 w-16 text-white/[0.03] pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      5.0 Verified Review
                    </span>
                  </div>

                  {/* Project Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-indigo/20 border border-accent-indigo/30 text-[11px] font-mono text-accent-cyan mb-4">
                    <CheckCircle2 className="h-3 w-3" />
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
                    className={`h-12 w-12 rounded-full bg-gradient-to-br ${item.avatarBg} flex items-center justify-center font-display font-bold text-white shadow-md text-base shrink-0`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm sm:text-base">
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
