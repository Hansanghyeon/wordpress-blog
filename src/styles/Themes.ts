import { DefaultTheme } from 'styled-components';
export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#0f4c81',
    bg: ['#fff', '#E1EBF2'],
    text: ['#333', '#4A4F57', '#868E96', '#dcdcdc'],
    grayscalesDark: [
      '#12171f',
      '#161a23',
      '#181c27',
      '#1f2330',
      '#252836',
      '#303645',
    ],
    grayscalesLight: ['#ffffff', '#e6ecf8', '#9ba4b7', '#6d7484', '#404655'],
    codeBg: '#E1EBF2',
    codeColor: '#5e6687',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    ...lightTheme.colors,
    primary: '#fff46a',
    bg: ['#2C2F33', '#232326'],
    text: ['#C2BFB9', '#C2BFB9', '#9ba4b7', '#515151'],
    codeBg: '#1d1f21',
    codeColor: '#f92672',
  },
};
