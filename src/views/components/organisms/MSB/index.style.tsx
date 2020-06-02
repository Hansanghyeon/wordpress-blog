import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { transparentize } from 'polished';

import { rhythm } from '@style/typography';

type SideBar = {
  isActive?: boolean;
};
export const SideBar = styled.div<SideBar>`
  width: 200px;
  height: 100%;
  margin-top: -45px;
  padding: 0 ${rhythm(1 / 2)};
  font-family: 'Fira Code';
  position: absolute;
  left: ${({ isActive }) => (isActive ? 0 : '-100%')};
  z-index: 900;
  transition: left 0.5s ease-out;
  will-change: left;
  background-color: ${({ theme }) => transparentize(0.05, theme.color.bg[1])};

  ${media.xxl`
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 0;
    z-index: 200;
  `} ${media.md`
    display: block;
    position: sticky;
    left: auto;
    top: -45px;
    z-index: 0;
  `} .cat-text {
    font-size: 14px;
  }
`;

export const Main = styled.div`
  height: 100%;
  padding: ${rhythm(1)} 0;
`;

export const LogoLayout = styled.div`
  height: 45px;
  width: 100%;
  padding: ${rhythm(1 / 4)} 16px;
  * {
    height: 100%;
    width: auto;
  }
`;
