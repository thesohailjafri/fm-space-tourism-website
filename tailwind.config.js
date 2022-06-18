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
        170: '170px',
      },
      colors: {
        'my-blue': '#D0D6F9',
        'my-black': '#0B0D17',
      },
      boxShadow: {
        'explore-none': '0px 0px 0px 0px rgba(255,255,255,.12)',
        'explore-sm': '0px 0px 0px 20px rgba(255,255,255,.12)',
        'explore-md': '0px 0px 0px 40px rgba(255,255,255,.12)',
        'explore-lg': '0px 0px 0px 60px rgba(255,255,255,.12)',
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
