/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'darkBlue': 'rgb(158, 158, 158)',
        'darkGrayishBlue': 'hsl(231, 77%, 90%)',
        'darkBg': 'hsl(0, 0%, 100%, 0.1)',


      },
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow': ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
