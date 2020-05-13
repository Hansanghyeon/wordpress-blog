import { breakpoints } from './Grid';

const respondTo = {
  hg: `@media (min-width: ${breakpoints.xl + 1}px)`,
  xl: `@media (min-width: ${breakpoints.xl + 1}px)`,
  lg: `@media (min-width: ${breakpoints.lg + 1}px)`,
  md: `@media (min-width: ${breakpoints.md + 1}px)`,
  sm: `@media (min-width: ${breakpoints.sm + 1}px)`,
  xs: `@media (min-width: ${breakpoints.xs + 1}px)`,
} as const;

export default respondTo;
