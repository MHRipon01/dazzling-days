/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Monsieur:"'Monsieur La Doulaise', cursive",
        Cormorant: " 'Cormorant', serif",
        Crimson: "'Crimson Text', serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

