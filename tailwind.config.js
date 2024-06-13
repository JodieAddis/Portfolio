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
    animation: {
      meteor: "meteor 5s linear infinite",
    },
    keyframes: {
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
        "70%": { opacity: 1 },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: 0,
        },
      },
    },
  },
  plugins: [],
};
