/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Pacifico", "cursive"],
        display: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
