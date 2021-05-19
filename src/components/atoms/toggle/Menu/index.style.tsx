import styled, { css } from 'styled-components';

export const Menu = styled.button`
  --color: ${({ theme }) => theme.palette.primary};
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  outline: none;
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
`;

const ActivePath = css`
  path {
    --offset: 57px;
    &:nth-child(1),
    &:nth-child(3) {
      --delay: 0.15s;
      --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
    }
    &:nth-child(2) {
      --duration: 0.4s;
      --offset: 2px;
      --array-1: 1px;
    }
    &:nth-child(3) {
      --offset: 58px;
    }
  }
`;

type SvgType = {
  isActive: boolean;
};
export const Svg = styled.svg<SvgType>`
  width: 48px;
  height: 48px;
  top: -6px;
  left: -14px;
  stroke: var(--color);
  stroke-width: 4px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  display: block;
  position: absolute;
  path {
    transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease)
        var(--delay, 0s),
      stroke-dashoffset var(--duration, 0.85s) var(--easing, ease)
        var(--delay, 0s);
    stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
    stroke-dashoffset: var(--offset, 126px);
    transform: translateZ(0);
    &:nth-child(2) {
      --duration: 0.7s;
      --easing: ease-in;
      --offset: 100px;
      --array-2: 74px;
    }
    &:nth-child(3) {
      --offset: 133px;
      --array-2: 107px;
    }
  }
  ${({ isActive }) => isActive && ActivePath}
`;
