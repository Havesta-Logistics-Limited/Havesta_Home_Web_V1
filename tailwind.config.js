/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#005231",
        harvestaYellow:'#FFC141',
        harvestaLightGreen: "#01BE72",
        harvestaDarkGreen: "#00150D"
      }
    },
  },

  plugins: [

  ],
};
