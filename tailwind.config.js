/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [], // Array vide = génère TOUT le CSS sans purging
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Plugin pour ajouter des utilitaires de font-smoothing
    function({ addUtilities }) {
      const newUtilities = {
        '.font-smooth': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        '.font-smooth-auto': {
          '-webkit-font-smoothing': 'auto',
          '-moz-osx-font-smoothing': 'auto',
        },
        '.font-smooth-subpixel': {
          '-webkit-font-smoothing': 'subpixel-antialiased',
          '-moz-osx-font-smoothing': 'auto',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
