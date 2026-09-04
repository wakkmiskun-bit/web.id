/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          950: "#06030F",
          900: "#0D0818",
          850: "#110C1E",
          800: "#180F28",
          700: "#221533",
          600: "#2E1D45",
        },
        accent: {
          violet: "#7C3AED",
          purple: "#9333EA",
          fuchsia: "#D946EF",
          emerald: "#10B981",
          amber: "#F59E0B",
          rose: "#F43F5E",
          // kept for backward compat mapping
          indigo: "#7C3AED",
          blue: "#9333EA",
          cyan: "#10B981",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
        "mesh-glow":
          "radial-gradient(at 0% 0%, rgba(124, 58, 237, 0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.15) 0px, transparent 50%)",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-sm": "24px 24px",
      },
      boxShadow: {
        "glow-indigo": "0 0 40px -10px rgba(124, 58, 237, 0.5)",
        "glow-violet": "0 0 40px -10px rgba(124, 58, 237, 0.5)",
        "glow-cyan": "0 0 40px -10px rgba(16, 185, 129, 0.45)",
        "glow-emerald": "0 0 40px -10px rgba(16, 185, 129, 0.45)",
        "glow-amber": "0 0 40px -10px rgba(245, 158, 11, 0.4)",
        "glow-card": "0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 30px -10px rgba(124, 58, 237, 0.2)",
        "3d-glass": "0 30px 60px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
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
          "50%": { opacity: 0.8, transform: "scale(1.08)" },
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
