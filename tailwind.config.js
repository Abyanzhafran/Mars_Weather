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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
