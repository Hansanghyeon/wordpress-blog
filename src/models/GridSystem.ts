interface breakpoint {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

interface GridSystem {
  breakpoints: breakpoint;
  row: {
    padding: number;
  };
  col: {
    padding: number;
  };
  container: {
    padding: number;
    maxWidth: breakpoint;
  };
}

export default GridSystem;
