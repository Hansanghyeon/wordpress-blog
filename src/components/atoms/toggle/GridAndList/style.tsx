import styled, { css, keyframes } from 'styled-components';

type animation = {
  active: boolean;
};

const keyframe = {
  text: keyframes`
  0% {
      opacity: var(--o-active);
      transform: translateY(var(--y-active)) translateZ(0);
    }
    100% {
      opacity: var(--o-default);
      transform: translateY(var(--y-default)) translateZ(0);
    }
  `,
  textActive: keyframes`
    0% {
      opacity: var(--o-default);
      transform: translateY(var(--y-default)) translateZ(0);
    }
    100% {
      opacity: var(--o-active);
      transform: translateY(var(--y-active)) translateZ(0);
    }
  `,
  move: keyframes`
    50% {
      transform: translate(var(--x-middle, 0), var(--y-middle, 0)) scale(0.4);
    }
    100% {
      transform: translate(var(--x-end, 0), var(--y-end, 0)) scale(0.4);
    }
  `,
  back: keyframes`
    0%,
    15% {
      transform: translate(var(--x-end, 0), var(--y-end, 0)) scale(0.4);
    }
    50% {
      transform: translate(var(--x-back, 0), var(--y-back, 0)) scale(0.5);
    }
    100% {
      transform: translate(var(--x-back-end, 0), var(--y-back-end, 0)) scale(1);
    }
  `,
  scale: keyframes`
    100% {
      transform: translateY(20%) translateZ(0) scaleX(1);
    }
  `,
  scaleDown: keyframes`
    0% {
      transform: translateY(20%) translateZ(0) scaleX(1);
    }
    100% {
      transform: translateY(20%) translateZ(0) scaleX(0);
    }
  `,
};

const grisListActive = css`
  --lines-name: scale;
  --lines-duration: 0.15s;
  --lines-delay: 0.3s;
`;
export const GridList = styled.button<animation>`
  --color: ${({ theme }) => theme.palette.text[0]};
  --background: ${({ theme }) => theme.palette.bg[0]};
  --background-hover: ${({ theme }) => theme.palette.bg[0]};
  --icon-color: ${({ theme }) => theme.palette.primary};

  padding: 6px 12px 6px 8px;
  margin: 0;
  display: flex;
  outline: none !important;
  position: relative;
  border: none;
  border-radius: 9px;
  background: var(--b, var(--background));
  cursor: pointer;
  -webkit-appearence: none;
  -webkit-tap-highlight-color: transparent;
  transform: scale(var(--scale, 1)) translateZ(0);
  transition: transform 0.15s, background 0.4s;

  &:active {
    --scale: 0.95;
  }
  &:hover {
    --b: var(--background-hover);
  }
  ${({ active }) => active && grisListActive}
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;

export const Dots = styled.div<animation>`
  i {
    position: absolute;
    left: var(--left, 4px);
    top: var(--top, 4px);
    display: block;
    border-radius: 2px;
    width: var(--width, 7px);
    height: var(--height, 7px);
    background: var(--icon-color);
    animation: ${({ active }) => (active ? keyframe.move : keyframe.back)}
      var(--duration, var(--dots-duration, 0.5s))
      var(--easing, var(--dots-easing, linear)) forwards
      var(--delay, var(--dots-delay, 0s));
    &:nth-child(1) {
      --x-middle: -8px;
      --y-middle: 10px;
      --x-end: -2px;
      --y-end: 12px;
      --x-back: 10px;
      --y-back: 7px;
      --x-back-end: 9px;
      --y-back-end: 0;
    }
    &:nth-child(2) {
      --left: 13px;
      --x-middle: -12px;
      --y-middle: 5px;
      --x-end: -11px;
      --y-end: 7px;
      --x-back: -3px;
      --y-back: 1px;
      --x-back-end: -9px;
      --y-back-end: 0;
    }
    &:nth-child(3) {
      --top: 13px;
      --x-middle: 4px;
      --y-middle: -5px;
      --x-end: -2px;
      --y-end: -7px;
      --x-back: -5px;
      --y-back: 0;
      --x-back-end: 9px;
      --y-back-end: 0;
    }
    &:nth-child(4) {
      --left: 13px;
      --top: 13px;
      --x-middle: 0;
      --y-middle: -10px;
      --x-end: -11px;
      --y-end: -12px;
      --x-back: -14px;
      --y-back: -8px;
      --x-back-end: -9px;
      --y-back-end: 0;
    }
  }
`;

const lineActive = css`
  i {
    transform-origin: 100% 50%;
    &:nth-child(3),
    &:nth-child(4) {
      transform-origin: 0 50%;
    }
  }
`;
const lineAnimation = css`
  i {
    transform-origin: 0 50%;
    &:nth-child(3),
    &:nth-child(4) {
      transform-origin: 100% 50%;
    }
  }
`;
export const Line = styled.div<animation>`
  --name: var(--lines-name, none);
  --duration: var(--lines-duration, 0.15s);
  --easing: var(--lines-easing, linear);
  --delay: var(--lines-delay, 0s);
  i {
    --left: 9px;
    --top: 3px;
    --height: 2px;
    --width: 11px;
    transform: translateY(20%) translateZ(0) scaleX(0);
    position: absolute;
    left: var(--left, 4px);
    top: var(--top, 4px);
    display: block;
    border-radius: 2px;
    width: var(--width, 7px);
    height: var(--height, 7px);
    background: var(--icon-color);
    animation: ${({ active }) => (active ? keyframe.scale : keyframe.scaleDown)}
      var(--duration, var(--dots-duration, 0.5s))
      var(--easing, var(--dots-easing, linear)) forwards
      var(--delay, var(--dots-delay, 0s));
    &:nth-child(2) {
      --top: 8px;
    }
    &:nth-child(3) {
      --top: 13px;
    }
    &:nth-child(4) {
      --top: 18px;
    }
  }
  ${lineAnimation}
  ${({ active }) => active && lineActive}
`;

export const Text = styled.div<animation>`
  margin-left: 4px;
  position: relative;
  line-height: 24px;
  font-weight: 600;
  font-size: 14px;
  min-width: 28px;
  color: var(--color);
  span {
    --y-default: 0;
    --o-default: 1;
    --y-active: -12px;
    --o-active: 0;
    display: block;
    opacity: var(--o-default);
    transform: translateY(var(--y-default)) translateZ(0);
    animation: ${({ active }) => (active ? keyframe.textActive : keyframe.text)}
      0.4s ease forwards;
    &:last-child {
      --y-default: 12px;
      --o-default: 0;
      --y-active: 0;
      --o-active: 1;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;
