/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kode: ['Kode Mono', "sans-serif"],
        bric: ['Bricolage Grotesque', "sans-serif"],
      }
    },
  },
  plugins: [],
}