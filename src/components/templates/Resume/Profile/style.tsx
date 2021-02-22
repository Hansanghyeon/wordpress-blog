import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { readableColor } from 'polished';

export const Wrap = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const ProfilePhoto = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 576px) {
    margin-bottom: 0;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${media.sm`
    padding-left: 40px;
  `};
  li {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    svg {
      margin-right: 8px;
    }
    a {
      color: currentColor;
    }
    h3 {
      margin-top: 0;
    }
  }
`;

export const StackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 8px;
  }
`;

const isLightnessColor = (color: string): boolean =>
  readableColor(color) === '#000';
export const Code = styled.span<{ color?: string }>`
  display: inline-block;
  padding: 0.2em 0.4em;
  background-color: ${({ color, theme }) =>
    color
      ? isLightnessColor(color)
        ? theme.palette.grayscalesDark[0]
        : theme.palette.grayscalesLight[0]
      : '#EDEDEB'};
  color: ${({ color, theme }) => color || theme.palette.dimSpan};
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  line-height: 1;
  font-family: 'D2Coding';
  font-style: normal;
  font-weight: 400;
`;
