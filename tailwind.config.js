/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#2D1B4E",
          DEFAULT: "#6B46C1",
          light: "#F5E8FF",
        },
        lavender: {
          light: "#F3E8FF",
          DEFAULT: "#E9D8FD",
          soft: "#F8FAFC",
        },
        rose: {
          soft: "#F9A8D4",
          accent: "#EC4899",
        },
        charcoal: {
          dark: "#27272A",
          DEFAULT: "#3F3F46",
        },
        gray: {
          veryLight: "#F8FAFC",
          light: "#F1F5F9",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}