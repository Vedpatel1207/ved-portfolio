import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        panel: "#10101a",
        card: "#12121d",
        border: "#1f1f2e",
        accent: "#6c63ff",
        accent2: "#00d4aa",
        text: "#e8e8f0",
        muted: "#9ca3b5",
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)",
        "brand-soft":
          "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(0,212,170,0.15) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(108, 99, 255, 0.35)",
        "glow-teal": "0 0 40px rgba(0, 212, 170, 0.25)",
        soft: "0 10px 30px rgba(0,0,0,0.4)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
