/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/**/*.html'
  ],
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'bali': "url('../assets/img/bali.jpg')",
        'chicago': "url('../assets/img/chicago.jpg')",
        'exploreMore': "url('../assets/img/explore-more.jpg')",
        'LA': "url('../assets/img/los-angeles.jpg')",
        'miami': "url('../assets/img/miami.jpg')",
        'newYork': "url('../assets/img/new-york.jpg')",
        'norway': "url('../assets/img/norway.jpg')",
        'seattle': "url('../assets/img/seattle.jpg')",
        'suiza': "url('../assets/img/suiza.jpg')",
        'yosemite': "url('../assets/img/yosemite.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily: {
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
}

