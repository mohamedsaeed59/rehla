/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        sm: "15px",
        md: "30px",
        lg: "30px",
        xl: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg : "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        body: "#FFFFFF",
        mainColor: "#F3C800",
        activeIcon: "#F3C800",
        borderColor: "#CACACA",
        borderColor2:"#E3E0E0",
        textPlaceholder: "#B0B0B0",
        mainBlack: "#1E1E1E",
        black50:"#E6E6E6",
        primary: "#62ADCF",
        ryBackground: "#F7F7F7",
        ry3Text:"#7D7D7D",
        ry4Text:"#B0B0B0",
        red:"#FF3B30",
        locationBg:"#5F6368",
      },
      boxShadow: {
        shadow: "0px 1px 8px 0px #00000029",
      },
    },
  },
  plugins: [],
};
