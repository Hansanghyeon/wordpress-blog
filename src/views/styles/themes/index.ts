import StyleSystem, { DarkStyleSystem } from '@model/StyleSystem';

const DefaultTheme: StyleSystem = {
  color: {
    primary: '#0f4c81',
    bg: ['#f6f8ff', '#fff'],
    text: ['#333', '#000'],
    grayscales: {
      // prefer scheme color
      dark: ['#232326', '#303437', '#2c2c2f'],
      light: ['#fff'],
    },
  },
};

export const DarkTheme: DarkStyleSystem = {
  color: {
    ...DefaultTheme.color,
    bg: ['#232326', '#303437'],
    text: ['#f2f4f7', '#fff'],
  },
};

export default DefaultTheme;
