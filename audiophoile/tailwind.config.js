/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#131313',
        orange: '#D87D4A',
        lightBlack: '#191919',
        footerColor: '#101010',
        heroColor: '#0E0E0E',
        grayColor: '#F1F1F1',
      },
      letterSpacing: {
        wide: '10px',
      },
    },
  },
  plugins: [],
}
