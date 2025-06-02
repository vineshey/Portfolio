/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00ff88",
        darkBg: "#1a1a2e",
        lightBg: "#f5f5f5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};