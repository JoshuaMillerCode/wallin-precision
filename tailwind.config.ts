import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          dark: "#1c1c1e",
          darker: "#141416",
          silver: "#b0b4bc",
          "silver-dim": "#9ca3af",
          olive: "#8b9a4d",
          "olive-light": "#a3b05a",
          "flag-muted": "#e5e7eb",
        },
      },
      backgroundImage: {
        "stripes-subtle":
          "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
