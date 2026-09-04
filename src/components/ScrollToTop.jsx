import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * ScrollToTop — Floating scroll-to-top button with circular SVG progress indicator,
 * glowing hover states, and smooth ease-up jump.
 */
export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setVisible(currentScroll > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 18; // radius 18
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 border border-white/15 text-slate-300 shadow-2xl backdrop-blur-xl hover:text-white hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] transition-all group cursor-pointer"
        >
          {/* Circular Progress SVG */}
          <svg className="absolute inset-0 h-full w-full -rotate-90 p-1" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
          </svg>

          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 text-accent-cyan" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
