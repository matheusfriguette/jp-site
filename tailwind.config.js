/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'light-white': '#FAF9F8',
      white: '#FFFFFF',
      blue: '#0000BB',
      bg1: '#0000BB00',
      bg2: '#0000BB1F',
      pink: '#D71A6F',
      gray: '#818181',
      border: '#0000BB40'
    },
    fontFamily: {
      'poppins': ['\'Poppins\''],
      'inter': ['\'Inter\'']
    },
    extend: {
      boxShadow: {
        'DEFAULT': '1px 0px 14px -2px rgba(0, 0, 0, 0.25);',
      }
    },
  },
  plugins: [],
}

