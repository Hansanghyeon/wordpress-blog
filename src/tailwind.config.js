const defaultTheme = require('tailwindcss/defaultTheme');

const colorReset = {
  color: null,
};

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./app/**/*.php', './resources/**/*.{php,vue,js}'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'shuttle-gray': {
          50: '#f7f8f8',
          100: '#eff1f2',
          200: '#d8dbde',
          300: '#c1c5ca',
          400: '#929aa3',
          500: '#636e7b',
          600: '#59636f',
          700: '#4a535c',
          800: '#3b424a',
          900: '#31363c',
        },
        bombay: {
          50: '#fbfbfc',
          100: '#f7f8f9',
          200: '#ebedf0',
          300: '#dfe3e6',
          400: '#c7cdd4',
          500: '#afb8c1',
          600: '#9ea6ae',
          700: '#838a91',
          800: '#696e74',
          900: '#565a5f',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
            color: null,
            a: {
              color: null,
              '&:hover': colorReset,
            },
            strong: colorReset,
            blockquote: colorReset,
            h1: colorReset,
            h2: colorReset,
            h3: colorReset,
            h4: colorReset,
            h5: colorReset,
            h6: colorReset,
            pre: null,
            code: null,
            'code::after': null,
            'code::before': null,
            'pre code': null,
          },
        },
      },
      fontFamily: {
        sans: ['"Arita"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
