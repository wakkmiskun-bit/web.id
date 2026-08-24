import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Tilt3D — Mengemas komponen anak ke dalam efek 3D tilt fisik dengan specular glare
 * dan preserve-3d context untuk kedalaman visual maksimal (layering Z-axis).
 */
export default function Tilt3D({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
  scale = 1.02,
  perspective = 1200,
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 22, mass: 0.6 };

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  const glareX = useTransform(x, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["10%", "90%"]);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: perspective,
        transformStyle: "preserve-3d",
      }}
      className={`relative preserve-3d transition-shadow duration-300 ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18), rgba(99,102,241,0.05) 30%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}

