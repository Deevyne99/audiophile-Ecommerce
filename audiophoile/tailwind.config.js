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
        backgroundGray: '#F2F2F2',
      },
      letterSpacing: {
        wide: '10px',
      },
      backgroundImage: {
        wideImage: "url('/src/images/speaker-table.png')",
        mediumImage: "url('/src/images/tablet.png')",
        smallImage: "url('/src/images/mobile.png')",
        userImage: "url('/src/images/user.png')",
        userTab: "url('/src/images/user-tab.png')",
      },
    },
  },
  plugins: [],
}
