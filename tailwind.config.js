/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Webpage/**/*.{html, js, ts, vue}', './Projects/**/*.{html, js, ts, vue}',
    './Webpage/**/*', './Projects/**/*', './blogposts/softwareengineering/**/*', './blogposts/softwareengineering/**/*.{html, js, ts, vue}'],
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
