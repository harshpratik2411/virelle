/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#cecece',
        'lime-bright': '#d6ff4e',
        'gray-medium': '#cfcfcf',
        'violet-deep': '#622feb',
      }, 
       fontFamily: {
           rubik: ['Rubik', 'sans-serif'], 
        outfit: ['Outfit', 'sans-serif'],          
      },
    },
  },
  plugins: [],
}
