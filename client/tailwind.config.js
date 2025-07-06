/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFB",
        surface: "#FFFFFF",
        primary: "#6952e0",
        "primary-dark": "#6952e0",
        accent: "#EEF2FF",
        border: "#E5E7EB",
        text: "#111827",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        burnr: ['var(--font-burnr)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
