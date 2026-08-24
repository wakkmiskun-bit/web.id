import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "../data/content";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds of user visiting
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Interactive Tooltip Chat Balloon */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="relative glass rounded-2xl p-3.5 pr-8 shadow-2xl border border-emerald-500/40 bg-bg-900/95 max-w-xs text-left"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 rounded-full"
              aria-label="Tutup pesan"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                Konsultasi WhatsApp Aktif
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              Halo! 👋 Ada yang bisa kami bantu mengenai pembuatan website atau sistem aplikasi Anda?
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>Mulai Chat Sekarang</span>
              <span>→</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button with 3D ping */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami via WhatsApp"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 shadow-[0_10px_35px_rgba(16,185,129,0.5)] border border-emerald-300/30"
      >
        <span className="absolute inset-0 rounded-2xl bg-emerald-500 animate-ping-soft" />
        <MessageCircle className="relative h-7 w-7 text-white" fill="currentColor" />
      </motion.a>
    </div>
  );
}
