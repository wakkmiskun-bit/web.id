import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MessageCircleQuestion,
  Search,
  X,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { FAQ, WHATSAPP_LINK } from "../data/content";
import { SectionHeading } from "./Services";

const CATEGORIES = ["Semua", "Umum", "Biaya & Pengerjaan", "Teknis & Keamanan"];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQ = FAQ.filter((item) => {
    const matchesCategory =
      activeCategory === "Semua" || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="section-pad relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-10 h-96 w-96 rounded-full bg-accent-cyan/10 blur-[150px] pointer-events-none" />

      <SectionHeading
        eyebrow="// 09_tanya_jawab"
        title="Pertanyaan yang Sering Diajukan"
        desc="Transparansi total mengenai proses, garansi, kepemilikan source code, dan skema pengerjaan proyek di NexaCode Studio."
      />

      <div className="mt-12 max-w-4xl">
        {/* Search Bar & Category Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent-indigo text-white shadow-glow-indigo font-semibold"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent-cyan transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFAQ.length === 0 ? (
            <div className="p-8 text-center rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-sm text-slate-400">
                Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Semua");
                }}
                className="mt-3 text-xs text-accent-cyan underline"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            filteredFAQ.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-accent-indigo/50 bg-bg-850 shadow-lg"
                      : "border-white/10 bg-bg-900/60 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                  >
                    <span className="flex items-center gap-3.5">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          isOpen
                            ? "bg-accent-indigo text-white"
                            : "bg-white/[0.04] text-accent-cyan"
                        }`}
                      >
                        <MessageCircleQuestion className="h-4 w-4" />
                      </span>
                      <span className="font-display font-semibold text-white text-sm sm:text-base">
                        {item.q}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-slate-400"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-16 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                          <p>{item.a}</p>
                          <span className="inline-block mt-3 text-[11px] font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded">
                            Kategori: {item.category}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl border border-accent-cyan/20 bg-gradient-to-r from-accent-indigo/10 via-accent-blue/10 to-accent-cyan/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Masih memiliki pertanyaan spesifik seputar proyek Anda?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Konsultasikan gratis tanpa kewajiban dengan technical lead kami.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-3 px-6 shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4" />
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
