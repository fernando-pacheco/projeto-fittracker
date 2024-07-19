/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
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
      fontFamily: {
        sans: ['K2D', 'sans-serif'],
      },
      boxShadow: {
        'bottom-inner': 'inset 0 -2px 0 rgba(245, 158, 11, 0.05), inset 0 -4px 0 rgba(245, 158, 11, 0.04), inset 0 -6px 0 rgba(245, 158, 11, 0.03), inset 0 -8px 0 rgba(245, 158, 11, 0.02)',
        'left-inner': 'inset 2px 0 0 rgba(245, 158, 11, 0.05), inset 4px 0 0 rgba(245, 158, 11, 0.04), inset 6px 0 0 rgba(245, 158, 11, 0.03), inset 8px 0 0 rgba(245, 158, 11, 0.02)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
