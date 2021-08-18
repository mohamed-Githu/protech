module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      grey: "#80949F",
      black: "#000",
      primary: {
        DEFAULT: "#59BBE9",
        dark: "#014260",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "800px" },
      sm: { max: "639px" },
      xs: { max: "455px" },
      "2xs": { max: "350px" },
    },
    letterSpacing: {
      wide: ".05em",
      wider: ".08em",
    },
    lineHeight: {
      56: "56px",
      31: "31px",
      29: "29px",
      26: "26px",
      22: "22px",
    },
    boxShadow: {
      1: "-2px 5px 15px rgba(0, 0, 0, 0.25)",
      2: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      3: "0px 4px 40px rgba(0, 0, 0, 0.25)",
      input: "0px 0 4px 1px #59BBE9",
    },
    borderRadius: {
      5: "5px",
      8: "8px",
      20: "20px",
      30: "30px",
      full: "9999px",
    },
    extend: {
      fontSize: {
        22: "22px",
      },
      maxWidth: {
        1180: "1180px",
      },
      backgroundImage: () => ({
        portfolio:
          "linear-gradient(to bottom, rgba(90, 188, 234, 0.1) 84.9%, rgba(255, 255, 255, 0) 100%)",
        contact: "linear-gradient(to bottom, #014260 0%, #59BBE9 30.92%)",
      }),
      gridTemplateColumns: {
        contact: "repeat(2, min-content)",
      },
      gridTemplateRows: {
        "contact-2": "repeat(2, min-content)",
        "contact-3": "repeat(3, min-content)",
      },
      spacing: {
        300: "300px",
        380: "380px",
        350: "350px",
        500: "500px",
        532: "532px",
        600: "600px",
        1110: "1110px",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "60%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        swipe: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        appear: "appear 1s ease",
        swipe: "swipe 500ms ease-in-out",
      },
      rotate: {
        30: "30deg",
        "-30": "-30deg",
      },
    },
  },
  variants: {
    display: ["children"],
  },
  plugins: [require("tailwindcss-children")],
};
