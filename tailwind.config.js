/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#4ade80",
          muted: "#22c55e",
          glow: "rgba(74, 222, 128, 0.25)",
        },
        surface: {
          DEFAULT: "#121212",
          elevated: "#1a1a1a",
        },
      },
      fontFamily: {
        quicksand: ['Urbanist', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 0 40px rgba(74, 222, 128, 0.12)",
        "glow-strong": "0 0 48px rgba(74, 222, 128, 0.22)",
      },
    },
  },
  plugins: [],
};
