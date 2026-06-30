import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Skyclear — dark cinematic. Base = logo navy. Gold = "lit up" lighting glow,
        // clean blue = "crystal clear" glass/solar accent, warm white text.
        navy: {
          950: "#060A15", // logo navy — true base / nav / footer
          900: "#0A1322", // panel / alt section
          800: "#0F1B2E", // raised card
          700: "#16273f",
        },
        // clean glass blue (window + solar accent)
        sky: {
          500: "#5FB4E8",
          400: "#8AD0F4",
          300: "#B3E2F8",
        },
        // warm gold (permanent-lights accent + glow)
        amber: {
          500: "#E8B04B",
          400: "#F2C66E",
          300: "#F7D98F",
        },
        gold: "#E8B04B",
        hairline: "rgba(200,169,81,0.25)", // warm-gold nav border
        cream: "#FAFAF7", // warm white text / headings
        body: "#D5DEE6", // body paragraph text (AA on charcoal)
        // lighter charcoals for everything BELOW the hero
        char: "#11161D", // primary below-hero section
        char2: "#161C24", // alternating section
        mist: "#11161D", // legacy alias → charcoal
        slatey: "#9BA9B6", // secondary/caption text (AA on charcoal)
        ink: "#FAFAF7", // legacy alias → warm white
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.35em",
      },
      maxWidth: {
        content: "1240px",
      },
      backgroundImage: {
        "sky-radial":
          "radial-gradient(120% 120% at 50% 0%, #12608F 0%, #0B3D62 45%, #06182B 100%)",
        "glass-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        // soft pulsing bloom around a glowing light bulb
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.12)" },
        },
        // diagonal light streak sweeping across glass / cards
        shimmer: {
          "0%": { transform: "translateX(-150%) skewX(-20deg)" },
          "100%": { transform: "translateX(250%) skewX(-20deg)" },
        },
        // slow pan of a multi-stop gradient (dusk sky, gradient text)
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // gentle vertical float for fairy-light particles
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        // continuous color cycle for "party" lighting scene
        hue: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        // rotating solar rays
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        shimmer: "shimmer 3.5s ease-in-out infinite",
        "gradient-pan": "gradient-pan 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        hue: "hue 6s linear infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
