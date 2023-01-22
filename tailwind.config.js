const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

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
    },
    extend: {
      fontFamily: {
        sans: ['TWKEverett', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '2550px',
      },
    },
  },
  plugins: [],
};
