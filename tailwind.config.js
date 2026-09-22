/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roboflow: {
          purple: "#6D28D9",
          "purple-hover": "#5B21B6",
          "purple-light": "#F3E8FF",
          "purple-border": "#E9D5FF",
          dark: "#0F172A",
          slate: "#475569",
          border: "#E2E8F0",
          bg: "#FAFAFC"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
