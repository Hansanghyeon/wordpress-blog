import StyleSystem, { DarkStyleSystem } from '@model/StyleSystem';

const DefaultTheme: StyleSystem = {
  color: {
    primary: '#0f4c81',
    bg: ['#fff', '#f6f8ff'],
    text: ['#333', '#4A4F57', '#868E96'],
    grayscales: {
      dark: ['#12171f', '#161a23', '#181c27', '#1f2330', '#252836', '#303645'],
      light: ['#ffffff', '#e6ecf8', '#9ba4b7', '#6d7484', '#404655'],
    },
  },
};

export const DarkTheme: DarkStyleSystem = {
  color: {
    ...DefaultTheme.color,
    bg: ['#303437', '#232326'],
    text: ['#f2f4f7', '#e6ecf8', '#9ba4b7'],
  },
};

export default DefaultTheme;
