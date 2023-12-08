import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} config */
const config = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    container: {
      // 패딩값까지 고려해야함.
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '32px',
        lg: '50px',
        xl: '50px',
        '2xl': '50px',
        '3xl': '50px',
        '4xl': '50px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0056a5',
          50: '#f0f7ff',
          100: '#dfeeff',
          200: '#b9ddfe',
          300: '#7bc4fe',
          400: '#34a5fc',
          500: '#0a8bed',
          600: '#006ccb',
          700: '#0056a5',
          800: '#054a87',
          900: '#0a3d70',
          950: '#07274a',
        },
        line: '#707070',
      }, // Extend Tailwind's default colors
      fontFamily: {
        sans: [
          'Pretendard Variable',
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
          'sans-serif',
        ],
        mon: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animated'),
  ],
}

const plugins = plugin(() => {}, config)

export default plugins
