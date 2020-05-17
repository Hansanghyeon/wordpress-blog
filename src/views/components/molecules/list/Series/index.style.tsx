import styled, { css } from 'styled-components';
import { rhythm } from '@style/typography';

export const Img = styled.img`
  max-width: 32px;
`;

export const Wrap = styled.div`
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
  background-color: ${({ theme }) => theme.color.bg[1]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 1px inset;
  margin-bottom: 0.8rem;
  position: relative;
  width: 100%;
`;

export const Header = styled.div<{ toggle: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ toggle }) => toggle && 'margin-bottom: 1rem'};
`;
export const Title = styled.div`
  font-weight: bold;
`;

export const Body = styled.div<{ toggle: boolean }>`
  ${({ toggle }) => toggle && 'display: none'};
`;
export const Ol = styled.ol`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  counter-reset: item 0;
`;
export const Li = styled.li`
  &:before {
    content: counter(item) '. ';
    counter-increment: item 1;
    opacity: 0.5;
    font-style: italic;
    color: ${({ theme }) => theme.color.text[0]};
    margin-right: ${rhythm(1 / 6)};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  span {
    margin-left: ${rhythm(1 / 6)};
    margin-right: ${rhythm(1 / 6)};
  }
`;
export const Controller = styled.div`
  display: flex;
`;
export const MoreBtn = styled.button`
  color: inherit;
  background-color: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
`;

const DisableArrowBtn = css`
  cursor: default;
  color: ${({ theme }) => theme.color.bg[1]};
  &:hover {
    color: ${({ theme }) => theme.color.bg[1]};
    background-color: ${({ theme }) => theme.color.bg[0]};
  }
`;
export const ArrowBtn = styled.button<{ disable?: boolean }>`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${rhythm(1 / 6)};
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.bg[0]};
  border-radius: 999px;
  font-size: 0.6rem;
  width: 18px;
  height: 18px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px 1px;
  margin: 0 ${rhythm(1 / 6)};
  border: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.bg[0]};
    background-color: ${({ theme }) => theme.color.primary};
  }
  ${({ disable }) => disable && DisableArrowBtn}
`;

export const CurrentLi = styled(Li)`
  color: ${({ theme }) => theme.color.primary};
  font-weight: bold;
`;
