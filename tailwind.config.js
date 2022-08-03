/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': {
        light: '#fcfcfc',
        DEFAULT: '#FFFFFF',
        dark: '#f7f7f7',
      },
      'primary': {
        light: '#5dd5c4',
      },
      'orange': {
        light: '#ff9f4b',
      },
      'black': {
        light: '#222222',
      },
      'gray':{
        300: '#D1D5DB',
      }
    },
    extend: {},
  },
  plugins: [],
}