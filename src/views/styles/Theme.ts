import StyleSystem, {
  DarkStyleSystem,
  LightStyleSystem,
} from '@model/StyleSystem';

const BasicTheme: StyleSystem = {
  color: {
    primary: '#0f4c81',
    bg: ['#fff'],
    text: ['#333'],
    grayscales: {
      // prefer scheme color
      dark: ['#232326', '#303437', '#2c2c2f'],
      light: ['#fff'],
    },
  },
};

export const DarkTheme: DarkStyleSystem = {
  color: {
    ...BasicTheme.color,
    bg: ['#232326'],
  },
};

export const LightTheme: LightStyleSystem = {
  color: {
    ...BasicTheme.color,
  },
};

export default BasicTheme;
