/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        harvestaYellow:'#FFC141'
      }
    },
  },
  prefix: "tw-",
  important: true,
  plugins: [

  ],
};
