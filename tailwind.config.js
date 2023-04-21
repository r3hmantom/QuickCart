/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_red: "#E70B19",
        primary_black: "#2C2F3A",
        primary_gray: "#545761",
        primary_yellow: "#F3CC2F",
        secondary_red: "#FFF2F3",
        secondary_gray: "#91949B",
        dim_white: "#F6F9FB",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
