/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          950: "#020617",
          900: "#0B1220",
          850: "#0E172A",
          800: "#111B2E",
          700: "#1B2740",
          600: "#28395C",
        },
        accent: {
          indigo: "#6366F1",
          blue: "#3B82F6",
          cyan: "#22D3EE",
          violet: "#8B5CF6",
          emerald: "#10B981",
          amber: "#F59E0B",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
        "mesh-glow":
          "radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(34, 211, 238, 0.15) 0px, transparent 50%)",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-sm": "24px 24px",
      },
      boxShadow: {
        "glow-indigo": "0 0 40px -10px rgba(99, 102, 241, 0.45)",
        "glow-cyan": "0 0 40px -10px rgba(34, 211, 238, 0.45)",
        "glow-card": "0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(99, 102, 241, 0.2)",
        "3d-glass": "0 30px 60px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(-1deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.08)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "ping-soft": {
          "75%, 100%": { transform: "scale(1.9)", opacity: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        "ping-soft": "ping-soft 2.2s cubic-bezier(0,0,0.2,1) infinite",
        marquee: "marquee 26s linear infinite",
        shimmer: "shimmer 2.5s infinite",
        scanline: "scanline 8s linear infinite",
        orbit: "orbit 20s linear infinite",
      },
      perspective: {
        500: "500px",
        1000: "1000px",
        1500: "1500px",
        2000: "2000px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".preserve-3d": { transformStyle: "preserve-3d" },
        ".perspective-500": { perspective: "500px" },
        ".perspective-1000": { perspective: "1000px" },
        ".perspective-1500": { perspective: "1500px" },
        ".perspective-2000": { perspective: "2000px" },
        ".backface-hidden": { backfaceVisibility: "hidden" },
        ".transform-3d": { transform: "translateZ(0)" },
        ".translate-z-10": { transform: "translateZ(10px)" },
        ".translate-z-20": { transform: "translateZ(20px)" },
        ".translate-z-30": { transform: "translateZ(30px)" },
        ".translate-z-40": { transform: "translateZ(40px)" },
        ".translate-z-50": { transform: "translateZ(50px)" },
      });
    },
  ],
};
