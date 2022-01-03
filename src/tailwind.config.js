const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('./config/colors');

const colorReset = {
  color: null,
};

module.exports = {
  content: ['./app/**/*.php', './resources/**/*.{php,vue,js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      '#sm': { max: '639px' },
      '#md': { max: '767px' },
      '#lg': { max: '1023px' },
      '#xl': { max: '1279px' },
      '#xxl': { max: '1535px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      colors: colors.base,
      borderColor: colors.base,
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
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
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.position-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      });
    }),
  ],
};
