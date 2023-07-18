/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class
  options: {
    safelist: ['hover-color-change'],
  },
  theme: {
    // colors: {
    //   dayText: '#323536',
    //   nightText: '#f7f7f7',
    // },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}

