import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * CursorGlow — A subtle, smooth interactive spotlight that follows the user's cursor,
 * casting a gentle cyan/indigo neon ambient aura over buttons, cards, and text.
 */
export default function CursorGlow() {
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    // Only enable on pointer-capable devices (not touch screens)
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 pointer-events-none z-20 w-[450px] h-[450px] rounded-full will-change-transform"
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(99,102,241,0.08) 32%, rgba(124,58,237,0.03) 55%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
