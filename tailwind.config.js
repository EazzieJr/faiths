/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'SF Pro Text', '-apple-system', 'BlinkMacSystemFont',
        'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'
      ]
    },

    extend: {
      fontFamily: {
        kugile: ['Kugile']
      },
      spacing: {
        'mob-body': '1rem',
        '2xmob-body': '2rem',
        'body': '3.125rem',
        '2xbody': '6.25rem',
        '4xbody': '12.5rem'
      },
      backgroundImage: {
        'black-hero-star': "url('~/src/svg/hero-star-black.svg')",
        'white-hero-star': "url('~/src/svg/hero-star-white.svg')"
      }
    },
  },
  plugins: [],
}