import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        globalPrimary: "#00DBBA",
        globalSecondary: "#DB0001",
        globalTertiary: "#454545"
      },
      fontSize: {
        h1: "48px",
        h3: "32px",
        h5: "20px",
        h6: "18px",
        p2: "14px",
        p3: "12px"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config