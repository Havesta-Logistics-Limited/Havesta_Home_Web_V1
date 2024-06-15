/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005231",
        harvestaYellow: "#FFC141",
<<<<<<< HEAD
        harvestaLightGreen: "#AEFFDF",
        harvestaDarkGreen: "#005231",
=======
        harvestaLightGreen: "#01BE72",
        harvestaDarkGreen: "#00150D",
        primaryHover: "#004827"
>>>>>>> 417c20323f1a64b66997490a8d2b70da76ac4a37
      },
      boxShadow: {
        "3xl": "-1px -6px 5px -1px rgba(0,0,0,0.75);",
      },

      fontFamily:{
        primary: ['Plus Jakarta Sans']
      }
    },
  },

  plugins: [],
};
