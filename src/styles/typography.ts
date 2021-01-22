import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  headerFontFamily: [
    'NanumSquareRound',
    'Nanum Gothic',
    'Noto Sans',
    'sans-serif',
  ],
  bodyFontFamily: ['Nanum Gothic', 'Noto Sans', 'sans-serif'],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
