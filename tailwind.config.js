/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005231",
        harvestaYellow: "#FFC141",
        harvestaLightGreen: "#01BE72",
        harvestaDarkGreen: "#005231",
        primaryHover: "#004827",
        dim: "#00150D"
      },
      boxShadow: {
        "3xl": " 0 -10px 25px -10px rgba(0, 0, 0, 0.75)",
      },

      backgroundImage: {
        "faq-pattern":
          "url('https://res.cloudinary.com/dtc89xi2r/image/upload/v1717957971/Greencloud_bbihtg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },

      fontFamily: {
        primary: ["Plus Jakarta Sans"],

        secondary: ['Rubik Wet Paint'],
        rider: ['Helvetica'],
      },

      animation: {
        iconBounce: "iconBounce 1s ease-in-out infinite",
      },
      
      keyframes: {
        iconBounce: {
          "0%, 40%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-10%)" },
        },
      },
    },
  },

  plugins: [],
}   
