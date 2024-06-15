/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005231",
        harvestaYellow: "#FFC141",
        harvestaLightGreen: "#AEFFDF",
        harvestaDarkGreen: "#005231",
      },
      boxShadow: {
        "3xl": "2px 3px 18px 8px rgba(0,0,0,0.65)",
      },
    },
  },

  plugins: [],
};
