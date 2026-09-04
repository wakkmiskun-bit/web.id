import { motion } from "framer-motion";

/**
 * WordWriter — Animasi menulis teks per-kata dengan efek fluid typography,
 * soft blur fade-in, dan transisi mulus saat di-scroll.
 */
export default function WordWriter({
  text,
  children,
  className = "",
  as = "span",
  delay = 0,
  stagger = 0.035,
  once = true,
  amount = 0.15,
}) {
  const Component = motion[as] || motion.span;

  // Extract raw string or handle string children
  const rawContent = text || (typeof children === "string" ? children : null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1], // Smooth organic deceleration curve
      },
    },
  };

  // If raw string is provided
  if (rawContent) {
    const words = rawContent.split(" ");

    return (
      <Component
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={containerVariants}
        className={`inline-block ${className}`}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className="inline-block whitespace-pre mr-[0.26em]"
          >
            {word}
          </motion.span>
        ))}
      </Component>
    );
  }

  // If complex JSX children (e.g. contains spans with gradient colors)
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={containerVariants}
      className={`inline-block ${className}`}
    >
      {Array.isArray(children) ? (
        children.map((child, idx) => {
          if (typeof child === "string") {
            const words = child.split(" ");
            return words.map((w, wIdx) => (
              <motion.span
                key={`str-${idx}-${wIdx}`}
                variants={wordVariants}
                className="inline-block whitespace-pre mr-[0.26em]"
              >
                {w}
              </motion.span>
            ));
          }
          // Wrap JSX node
          return (
            <motion.span
              key={`node-${idx}`}
              variants={wordVariants}
              className="inline-block mr-[0.26em]"
            >
              {child}
            </motion.span>
          );
        })
      ) : (
        <motion.span variants={wordVariants} className="inline-block">
          {children}
        </motion.span>
      )}
    </Component>
  );
}
