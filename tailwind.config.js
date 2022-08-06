/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': {
        light: '#FAFAFA',
        DEFAULT: '#FFFFFF',
        dark: '#f7f7f7',
      },
      'primary': {
        light: '#5DD5C4',
      },
      'orange': {
        light: '#FF9F4B',
        dark: '#EA580C',
      },
      'black': {
        light: '#222222',
        DEFAULT: '#000000',
        neutrals: '#404343',
      },
      'gray':{
        100: '#ECEEED',
        300: '#D1D5DB',
        neutrals: '#808686',
      }
    },
    extend: {},
  },
  plugins: [],
}