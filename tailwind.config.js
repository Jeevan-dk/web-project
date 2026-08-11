/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: '#1DB954',
          black: '#121212',
          dark: '#181818',
          gray: '#282828',
          lightgray: '#3e3e3e',
          text: '#ffffff',
          subtext: '#a7a7a7'
        }
      }
    },
  },
  plugins: [],
}
