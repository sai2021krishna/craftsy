/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      kriviBase: "#FFFFFF",
      kriviBlack: "#303030",
      kriviSuccess: '#8ffc79',
      kriviWarning: '#fccc6d',
      kriviInfo: '#6dd6fc',
      kriviError: '#fa3425',
      kriviRed: '#ff695e'
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
  plugins: [],
};
