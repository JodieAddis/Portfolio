/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BlueCharcoal: "#02111B",
        CaribbeanGreen: "#70D2CC",
        Purple: "#A102BB",
        Pink: "#D40775",
        Pistachio: "#A1BB02",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Kumbh: "Kumbh",
      },
    },
  },
  plugins: [],
};
