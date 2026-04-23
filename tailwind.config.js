/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-border': 'spin-cw 4s linear infinite',
      },
      keyframes: {
        'spin-cw': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },  
      screens: {
        'xs': '375px',
        '422': '422px',   
      }, 
      
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