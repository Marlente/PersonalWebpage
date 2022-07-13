/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Webpage/**/*.{html, js, ts, vue}', 
    './Webpage/**/*'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito']
      }
    },
  },
  plugins: [],
}
