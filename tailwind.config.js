
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*.html","js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Roboto', 'system-ui', 'sans-serif'],
        'custom2': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

