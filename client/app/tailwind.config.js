/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        main: "#00abf0",
        bgColor: "#081b29",
        secondBgColor: "#112e42",
        textColor: "#ededed",
        mainColor: "#00abf0",
        colorBlack: "#010001",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "600px",
        xm: "900px",
        xxs: "400px",
        ggg:"1630px",
        gg: " 1022px"
      },
      backgroundImage: {
        "hero-bg": "url('./images/5.jpg')",
      },
      backgroundVideo:{
        "hero-bg-video" : "url('./images/world.mp4')",
      }
    },
  },
  plugins: [],
};
