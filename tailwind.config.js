/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        comforter: ["Comforter", "cursive"],
        modak: ["Modak", "cursive"],
        asap: ["Asap", "sans-serif"],
      },
      backgroundColor: {
        customDark: '#252525',
      },
    },
  },
  plugins: [],
};
