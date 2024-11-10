/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      kriviBase: "#FEFAE0",
      kriviPrimary: "#798645",
      kriviSecondary: "#F2EED7",
      kriviContrast: "#626F47",
      kriviBlack: "#181C14",
      kriviGrey: "#3C3D37",
    },
    extend: {
      fontFamily: {
        kriviMPlus1PFont: ["'M PLUS 1p'", "sans-serif"],
        kriviTangerineFont: ["Tangerine", "cursive"],
      },
      minWidth: {
        "1by10": "10%",
        "4by5" : "80%"
      }
    },
  },
  plugins: [],
};
