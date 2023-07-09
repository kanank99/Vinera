/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  options: {
    safelist: ['hover-color-change'],
  },
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}

