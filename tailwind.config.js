/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BlueCharcoal: "#02111B",
        Charm: "#d35d8d",
        VinRouge: "#943b73",
        Bossanova: "#473162",
        Downriver: "#0b2152",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Kumbh: "Kumbh",
      },
    },
  },
  plugins: [],
};
