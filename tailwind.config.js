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
      backgroundImage: {
        'hero-pattern': "url('/assets/images/image2.svg')",
      },      
      colors: {
        'primary': '#48d9b6',

      },
    },
  },
  plugins: [],
}