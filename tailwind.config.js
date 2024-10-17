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
        customDark: "#252525",
      },
      keyframes: {
        RightToLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        RightToLeft: "RightToLeft 150s linear infinite",
      },
    },
  },
  plugins: [],
};
