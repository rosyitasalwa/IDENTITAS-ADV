/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customMochaBrown: '#6D4C41',
        customTaupe: '#A59D84',
        customBeigeMuda: '#D7D3BF',
        customMaroon: '#490000',
        customBrown: '#D9D7B3',
      },
      fontFamily: {
        kalnia: ['Kalnia',],
        dancing: ['Dancing Script', 'cursive'], 
      },
    },
  },
  plugins: [],
}