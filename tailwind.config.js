/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#060119",
        btncolor: "#7148f9",
        headColor: "#e4dcfe",
        card: "#090123",
        para: "#DDE6ED",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#7575757",
        mainBtn: "#19b6d2",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1080px",
      },
    },
  },
  plugins: [],
};
