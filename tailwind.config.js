/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Webpage/**/*.{html, js, ts, vue}', './Projects/**/*.{html, js, ts, vue}',
    './Webpage/**/*', './Projects/**/*', './Blog Posts/**/*'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
