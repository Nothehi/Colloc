/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        patua: ['Patua One', 'cursive'],
        anton: ['Anton', 'sans-serif'],
      },
      boxShadow: {
        'neuburtal-sm': '.125rem .125rem 0rem #000000',
        'neuburtal': '.25rem .25rem 0rem #000000',
        'neuburtal-md': '.375rem .375rem 0rem #000000',
        'neuburtal-lg': '.5rem .5rem 0rem #000000',
      },
    },
  },
  plugins: [],
}
