/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005231",
        harvestaYellow: "#FFC141",
        harvestaLightGreen: "#01BE72",
        harvestaDarkGreen: "#00150D",
        primaryHover: "#004827",
      },
      boxShadow: {
        "3xl": "1px -2px 5px 0px rgba(0,0,0,0.75);",
      },

      backgroundImage: {
        "faq-pattern":
          "url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1717957971/Greencloud_bbihtg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },

      fontFamily: {
        primary: ["Plus Jakarta Sans"],
      },
    },
  },

  plugins: [],
};
