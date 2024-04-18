/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3E7FFF',
        'placeholder-grey': 'hsla(0, 0%, 78%, 0.682)',
        'light-grey': '#444444',
        'medium-grey': 'rgba(44, 44, 44, 0.74)',
        'dark-grey': 'rgba(0, 0, 0, 0.9)',
        'decorator-grey': '#3e3e3e',
        'glass-grey': '#4444448a',
        'shadow-grey': '#111111ac',
        'orange': '#FFA500',
        'pink': '#FF69B4',
        'green': '#00dc33',
        'red': '#ff2e2e',
      },
      screens: {
        "ultra-wide": "2056px",
      },
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
  },
  plugins: [],
};
