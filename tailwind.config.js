const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      inherit: colors.inherit,
      gray: '#ededed',
      purple: '#5d32f5',
    },
    extend: {},
  },
  plugins: [],
};
