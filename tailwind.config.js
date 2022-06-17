module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    fontFamily: {
      head: [' "Bellefair", serif'],
      subhead: ['"Barlow Condensed", sans-serif'],
      sans: ['"Barlow", sans-serif'],
    },

    extend: {
      borderWidth: {
        3: '3px',
      },
      colors: {
        'my-blue': '#D0D6F9',
        'my-black': '#0B0D17',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      // fontSize: {
      //   sm: '.938rem',
      // },
      letterSpacing: {
        wider: '0.1rem',
        widest: '0.2em',
      },
    },
  },
  plugins: [require('tailwindcss-filters')],
}
