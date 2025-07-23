/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-800': '#1e3a8a',
        'navy-900': '#1e40af',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // <-- TAMBAHKAN BARIS INI
  ],
}