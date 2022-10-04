/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '780px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'hero': "url('./images/hero.jpg')"
      },
      colors: {
        'pinkinsh': "#EDAFB8",
        'beige' : '#F7E1D7',
        'greyBold' : '#DEDBD2',
        'greenAqua' : '#B0C4B1',
        'darkGrey' : '#4A5759'
      }
    },
  },
  plugins: [],
}
