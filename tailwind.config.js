/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      }),

      variants: {
        extend: {
          backgroundImage: ["hover", "focus"],
        },
      },
      fontFamily: {
        Monsieur: "'Monsieur La Doulaise', cursive",
        Cormorant: " 'Cormorant', serif",
        Crimson: "'Crimson Text', serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
