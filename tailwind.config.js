/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        logoShadow: "0 0 0.75rem rgba(0, 0, 0, 0.5",
        textShadow: "0 0 18px rgba(248, 190, 42, 0.8)",
      },
      boxShadow: {
        mealImgShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
        shareFormShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      animation: {
        "loading-animation": "loading 1.2s ease-in-out infinite",
        flash: "flash 1s ease-in-out infinite alternate",
        fadeInFrombottom: "fade-slide-in-from-bottom 1s ease-out forwards",
        fadeInFromRight: "fade-slide-in-from-right 1s ease-out forwards",
        fadeInFromLeft: "fade-slide-in-from-left 1s ease-out forwards",
      },
      keyframes: {
        loading: {
          "0%": { color: "#e9e9e9" },
          "50%": { color: "#b89b84" },
          "100%": { color: "#e9e9e9" },
        },
        "fade-slide-in-from-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "fade-slide-in-from-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "fade-slide-in-from-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        flash: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
