module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      head: [' "Bellefair", serif'],
      subhead: ['"Barlow Condensed", sans-serif'],
      sans: ['"Barlow", sans-serif'],
    },

    extend: {
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
