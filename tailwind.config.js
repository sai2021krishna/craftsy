/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      kriviBase: "#FFFFFF",
      kriviBlack: "#303030",
    },
    extend: {
      fontFamily: {
        kriviCourierFont: ["Courier New", "Courier", "monospace"],
        kriviCenturyFont: ["Century Gothic", "sans-serif"],
      },
      minWidth: {
        "1by10": "10%",
        "4by5" : "80%"
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
