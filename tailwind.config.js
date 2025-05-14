/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {colors: {primary: '#030014', secondary: '#151312',
      light :{
        100: '#D6C6FF',
        200: '#ABB5D8',
        300: '#9CA4AB',
      },
      dark:{
        100: '#221f3d',
        200: '#0f0d23',
        300: '#3D3D4B',
      }
    }},
  },
  plugins: [],
};
