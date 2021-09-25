/* eslint-disable quote-props */
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      orange: colors.orange,
      gray: colors.gray,
    },
    screens: {
      'xs': '368px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
