import styled, { keyframes } from 'styled-components';

const AlertBox = styled.div`
  position: relative;
  padding: 0.5em;
  border-radius: 0.25em;
  border: 1px solid;
  display: flex;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1em;
    transform: translate(-50%, 0);
    border-top: 1px solid;
    border-bottom: 2px solid;
    border-color: inherit;
    border-radius: 0 0 3px 3px;
  }
  @media (min-width: 576px) {
    padding: 0.55em 1em 0.57rem 1.25em;
    &:after {
      content: '';
      position: absolute;
      height: 1em;
      width: 0;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      border-left: 1px solid;
      border-right: 2px solid;
      border-color: inherit;
      border-radius: 0 3px 3px 0;
    }
  }
`;

export const AlertSuccess = styled(AlertBox)`
  border-color: #0ad406;
  color: #0ad406;
  display: inline-block;
`;

const WrapStyle = styled.div`
  span {
    line-height: 1;
  }
`;
export const Wrap = {
  Root: styled.div`
    position: relative;
    padding-top: 28px;
    @media (min-width: 576px) {
      padding-top: 0;
      padding-left: 28px;
      padding-right: 28px;
    }
  `,
  Inner: styled(WrapStyle)`
    display: flex;
    align-items: center;
    span {
      word-break: keep-all;
    }
  `,
};

const keyframesTada = keyframes`
  0% {
    transform: scale(1);
  }
  10%,
  20% {
    transform: scale(0.9) rotate(-8deg);
  }
  30%,
  50%,

  70% {
    transform: scale(1.3) rotate(8deg);
  }
  40%,
  60% {
    transform: scale(1.3) rotate(-8deg);
  }
  100%,
  80% {
    transform: scale(1) rotate(0);
  }
`;

export const TadaCheckIconWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  svg {
    animation: ${keyframesTada} 2s linear infinite;
  }

  @media (min-width: 576px) {
    top: 50%;
    transform: translateY(-43%);
  }
`;

const keyframesBlink = keyframes`
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
`;

export const TimesIconWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: inherit;
  box-sizing: unset;
  cursor: pointer;

  @media (min-width: 576px) {
    top: 50%;
    transform: translateY(-43%);
    svg {
      animation: ${keyframesBlink} 2s infinite both;
    }
  }
`;
