import { css } from 'styled-components';
import Grid from '@style/Grid';

const { breakpoints } = Grid;

const respondTo = (Object.keys(breakpoints) as Array<
  keyof typeof breakpoints
>).reduce(
  (accumulator: any, label) => {
    accumulator[label] = (...args: any[]) => css`
      @media (min-width: ${breakpoints[label] + 1}px) {
        /* FIXME  */
        ${css(...args)}
      }
    `;
    return accumulator;
  },
  {},
  // as typeof breakpoints[keyof typeof breakpoints][]
);

export default respondTo;
