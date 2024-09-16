/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*.html","js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

