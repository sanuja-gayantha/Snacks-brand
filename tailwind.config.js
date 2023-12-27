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
        'primary-2': '#1f1437',
        'flavor1': '#a388b2',
        'flavor2': '#f8c37e',
        'footer':'#170f2b'
      },
    },
  },
  plugins: [],
}