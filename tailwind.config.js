/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['"Outfit"', ...defaultTheme.fontFamily.sans],
        'marker': ['"Permanent Marker"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}