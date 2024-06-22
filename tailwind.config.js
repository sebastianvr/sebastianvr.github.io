/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.65rem', // Define el tamaño de texto 'xxs' (10px)
      },
      padding: {
        '0.25': '0.0625rem', // Define el padding '0.25' (1px)
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

