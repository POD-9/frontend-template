/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      fontWeight: {
        light: 400,
        bold: 500,
        extrabold: 700
      }
    },
  },
  plugins: [],
}
