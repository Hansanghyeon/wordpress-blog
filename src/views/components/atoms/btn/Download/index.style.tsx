import styled, { keyframes } from 'styled-components';

const aniSpan = keyframes`
  25% {
      transform: translateY(2px) scale(var(--s));
  }
  55% {
      transform: translateY(2px) scale(var(--s));
  }
  80%,
  100% {
      transform: translateY(0) scale(var(--s));
  }
`;
const aniArrow = keyframes`
38% {
        transform: translateY(100%);
        opacity: 1;
    }
    39% {
        transform: translateY(100%);
        opacity: 0;
    }
    40% {
        transform: translateY(-100%);
        opacity: 0;
    }
    41% {
        transform: translateY(-100%);
        opacity: 1;
    }
    100% {
        transform: translateY(-1px);
        opacity: 1;
    }
`;

export const Icon = styled.div`
  margin-right: 12px;
  line-height: 1;
  transform: translateY(2px);
  > div {
    width: 16px;
    height: 16px;
    position: relative;
  }
`;

type isClicked = {
  clicked: boolean;
};
export const SVG = {
  Arrow: styled.svg`
    fill: currentColor;
    color: ${({ theme }) => theme.color.bg[0]};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  `,
  Shape: styled.svg<isClicked>`
    fill: currentColor;
    color: ${({ theme, clicked }) =>
      clicked ? 'var(--success)' : theme.color.text[0]};
    transition: color 0.18ms;
    will-change: color;
  `,
  Span: styled.span<isClicked>`
    --s: 1;
    background-color: ${({ theme, clicked }) =>
      clicked ? 'var(--success)' : theme.color.text[0]};
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 2px;
    height: 6px;
    border-radius: 50%;
    display: block;
    transform: translateY(0) scale(var(--s));
    transition: background-color 0.18ms;
    will-change: background-color;
  `,
};

export const Box = {
  main: styled.div`
    --duration: 4000;
    --success: #16bf78;
    display: flex;
    align-items: center;
    line-height: 1;
    &:hover {
      ${SVG.Span} {
        animation: ${aniSpan} calc(var(--duration) * 0.18ms) linear 4
          calc(var(--duration) * 0.2ms);
      }
      ${SVG.Arrow} {
        animation: ${aniArrow} calc(var(--duration) * 0.18ms) linear 4
          calc(var(--duration) * 0.2ms);
      }
    }
  `,
  wrap: styled.div`
    display: flex;
  `,
  link: styled.div``,
};
