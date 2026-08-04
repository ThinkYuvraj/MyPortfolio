/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      mullish: ["Mulish", "sans-serif"],
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },

    colors: {
      primary: "#a855f7",
      dark: "#000000",
      card: "#050505",
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
    },
  },
},
  plugins: [],
}
