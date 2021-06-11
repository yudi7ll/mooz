module.exports = {
  mode: "jit",
  purge: [
    './views/**/*.ejs'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
