interface Grayscales {
  dark: string[];
  light: string[];
}

interface Colors {
  primary: string;
  bg: string[];
  text: string[];
  grayscales: Grayscales;
}

// interface DarkColors extends Colors {}
interface StyleSystem {
  color: Colors;
}

// interface DarkStyleSystem extends StyleSystem {
//   color: DarkColors;
// }

export const lightTheme: StyleSystem = {
  color: {
    primary: '#0f4c81',
    bg: ['#fff', '#E1EBF2'],
    text: ['#333', '#4A4F57', '#868E96', '#dcdcdc'],
    grayscales: {
      dark: ['#12171f', '#161a23', '#181c27', '#1f2330', '#252836', '#303645'],
      light: ['#ffffff', '#e6ecf8', '#9ba4b7', '#6d7484', '#404655'],
    },
  },
};

export const darkTheme: StyleSystem = {
  color: {
    ...lightTheme.color,
    primary: '#fff46a',
    bg: ['#2C2F33', '#232326'],
    text: ['#C2BFB9', '#C2BFB9', '#9ba4b7', '#515151'],
  },
};
