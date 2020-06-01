export const breakpoints = {
  xxl: 1441,
  xl: 1201,
  lg: 993,
  md: 769,
  sm: 577,
  xs: 576,
  // or you can use aliases
  // veryGiant: 1440,
  // giant: 1200,
  // desktop: 992,
  // tablet: 768,
  // phone: 576,
  // smaller: 575,
} as const;

const Grid = {
  breakpoints,
  row: {
    padding: 15, // default 15
  },
  col: {
    padding: 15, // default 15
  },
  container: {
    padding: 15, // default 15
    maxWidth: {
      // defaults below
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
      // or you can use aliases
      // veryGiant: 1141,
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
};

export default Grid;
