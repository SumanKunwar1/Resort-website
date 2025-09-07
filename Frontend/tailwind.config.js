/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#8B0000',
        navy: '#000080', 
        golden: '#D4AF37'
      }
    },
  },
  plugins: [],
};