const plugin = require('tailwindcss/plugin');

const token = {
  '4xs': '0.25rem', // 4px
  '3xs': '0.5rem', // 8px
  '2xs': '0.6875rem', // 11px
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '2.5rem', // 40px
  '6xl': '3rem', // 48px
};

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      grey: {
        900: '#111827',
        800: '#282F3C',
        700: '#3D4350',
        600: '#565C67',
        500: '#737882',
        400: '#9FA3AB',
        300: '#BCC0C6',
        200: '#DBDEE3',
        100: '#EDF0F4',
        50: '#F8F9FB',
      },
      blue: {
        900: '#013194',
        800: '#0740AF',
        700: '#0E4FCA',
        600: '#145EE4',
        500: '#1A6DFF',
        400: '#4589FF',
        300: '#71A4FF',
        200: '#9CC0FF',
        100: '#C8DBFF',
        50: '#F3F7FF',
      },
      green: '#00D69A',
      alert: '#D68000',
      danger: '#FF5E60',
    },
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
      fontSize: token,
      padding: token,
      gap: token,
      width: token,
      height: token,
      borderRadius: token,
      // https://tailwindcss.com/docs/theme#spacing
      /**
       * padding
       * margin
       * width
       * height
       * maxHeight
       * flex-basis
       * gap
       * inset
       * space
       * translate
       * scrollMargin
       * scrollPadding
       * and textIndent
       **/
      spacing: token,
      typography: (theme) => ({}),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },

        '.scrollbar-default': {
          /* IE and Edge */
          '-ms-overflow-style': 'auto',

          /* Firefox */
          'scrollbar-width': 'auto',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'block',
          },
        },
      });
    }),
  ],
};
