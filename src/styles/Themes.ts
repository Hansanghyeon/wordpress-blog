export const lightTheme = {
  color: {
    primary: '#0f4c81',
    bg: ['#fff', '#E1EBF2'],
    text: ['#333', '#4A4F57', '#868E96', '#dcdcdc'],
    grayscales: {
      dark: ['#12171f', '#161a23', '#181c27', '#1f2330', '#252836', '#303645'],
      light: ['#ffffff', '#e6ecf8', '#9ba4b7', '#6d7484', '#404655'],
    },
  },
  code: {
    bg: '#f5f7ff',
    color: '#5e6687',
  },
} as const;

export const darkTheme = {
  color: {
    ...lightTheme.color,
    primary: '#fff46a',
    bg: ['#2C2F33', '#232326'],
    text: ['#C2BFB9', '#C2BFB9', '#9ba4b7', '#515151'],
  },
  code: {
    bg: '#1d1f21',
    color: '#f92672',
  },
} as const;
