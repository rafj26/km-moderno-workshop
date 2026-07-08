/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B1622",       // fondo base azul oscuro profundo
          surface: "#122032",  // paneles / cards
          surface2: "#1B3049", // hover / elevado
          border: "#24405C",
          text: "#EAF1F8",
          muted: "#93A7BC",
          orange: "#F2600C",   // acento "naranja mecánico"
          orangeDark: "#C94F09",
          green: "#25D366",    // verde WhatsApp oficial (reservado para CTAs de WhatsApp)
          teal: "#2FD4C9",     // acento "escáner / diagnóstico"
        },
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-120%)", opacity: "0.2" },
          "50%": { opacity: "0.9" },
          "100%": { transform: "translateY(220%)", opacity: "0.2" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.55)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37,211,102,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0)" },
        },
      },
      animation: {
        scanline: "scanline 3.2s ease-in-out infinite",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
