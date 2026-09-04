import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgressBar — A dynamic neon glowing gradient progress bar at the top
 * of the viewport indicating exact scroll progress smoothly.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-white/[0.04] pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="h-full origin-left bg-gradient-to-r from-accent-indigo via-accent-cyan to-accent-violet shadow-[0_0_12px_rgba(34,211,238,0.8)]"
      />
    </div>
  );
}
