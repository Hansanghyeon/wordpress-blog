interface breakpoint {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

interface gridTheme {
  breakpoints: breakpoint;
  row: {
    padding: number;
  },
  col: {
    padding: number;
  },
  container: {
    padding: number;
    maxWidth: breakpoint;
  }
}

const gridTheme: gridTheme = {
  breakpoints: { // defaults below
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: { // defaults below
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

export default gridTheme;
