/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00086D",
        primaryLight: "#33398A",
        primaryDark: "#000450",

        secondary: "#EF3401",
        secondaryLight: "#FF5722",
        secondaryDark: "#C41F00",

        headingColor: "#333333",
        textColor: "#777777",
        lightGray: "#F7F7F7",

        facebookBg: "#365493",
        instagramBg: "#774430",
        youtubeBg: "#CB2027",
        whatsappBg: "#1EBEA5",
        tiktokBg: "#010101",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        text: ["Lato", "sans-serif"],
      },

      screens: {
        mobiles: "320px",
        mobilem: "375px",
        mobilel: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopl: "1440px",
      },
    },
  },
  plugins: [],
};
