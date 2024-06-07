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
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
