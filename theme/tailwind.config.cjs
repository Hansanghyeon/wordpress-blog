// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const card = plugin(({ addComponents, theme }) => {
  const cardBase = {
    borderRadius: '6px',
    border: '1px',
    'padding-top': theme('padding.4'),
    'padding-bottom': theme('padding.4'),
    'padding-left': theme('padding.4'),
    'padding-right': theme('padding.4'),
    'text-decoration': 'none',
    'word-break': 'keep-all',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // mediaquery sm
    [`@media (min-width: ${theme('screens.sm')})`]: {
      '--tw-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      '--tw-shadow-colored': '0 1px 2px 0 var(--tw-shadow-color)',
      'box-shadow':
        'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
    },
  }
  const newComponents = {
    '.card': {
      ...cardBase,
      backgroundColor: theme('colors.light.foreground'),
      borderColor: theme('colors.gray.50'),
      color: theme('colors.light.base'),
    },
    '.dark .card': {
      ...cardBase,
      backgroundColor: theme('colors.dark.foreground'),
      borderColor: theme('colors.gray.400'),
      color: theme('colors.dark.base'),
    },
  }
  addComponents(newComponents)
})

/** @type {import('tailwindcss').Config} config */
module.exports = {
  darkMode: 'class',
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#d0d7de',
          100: '#adbac7',
          200: '#909dab',
          300: '#768390',
          400: '#636e7b',
          500: '#545d68',
          600: '#444c56',
          700: '#373e47',
          800: '#2d333b',
          900: '#22272e',
        },
        disabled: '#adbac7',
        light: {
          primary: '#0f4c81',
          background: '#e7e7e7',
          foreground: '#ffffff',
          text: '#333333',
          base: '#0c0c0c',
        },
        dark: {
          primary: '#fff46a',
          background: '#22272e',
          foreground: '#2d333b',
          text: '#768390',
          base: '#adbac7',
        },
      },
      fontFamily: {
        dokdo: ['East Sea Dokdo', 'cursive'],
      },
    },
  },
  plugins: [
    require('@workspaces/project-tailwindcss-config'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animated'),
    require('@hyeon/mac-scrollbar'),
    require('@hyeon/tailwindcss-layer-shadow'),
    card,
  ],
}
