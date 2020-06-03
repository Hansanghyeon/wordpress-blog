import styled from 'styled-components';
import {
  media,
  Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';
import { transparentize } from 'polished';

import { rhythm } from '@style/typography';

type SideBar = {
  isActive?: boolean;
};
export const SideBar = styled.div<SideBar>`
  width: 200px;
  height: calc(100% - 45px);
  padding: ${rhythm(1)};
  font-family: 'Fira Code';
  position: fixed;
  left: ${({ isActive }) => (isActive ? 0 : '-100%')};
  z-index: 900;
  transition: left 0.5s ease-out;
  will-change: left;
  background-color: ${({ theme }) => transparentize(0.05, theme.color.bg[1])};

  ${media.xxl`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
  `};

  ${media.md`
    display: block;
    position: sticky;
    left: auto;
    height: 100%;
    top: -45px;
    margin-top: -45px;
    z-index: 0;
    background-color: transparent;
    padding: 0 ${rhythm(1)};
  `};

  .cat-text {
    font-size: 14px;
  }
`;

export const Main = styled(Container)`
  height: calc(100% - 45px - ${rhythm(1)});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  ${media.md`
    padding: ${rhythm(1)} 0;
  `}
`;

export const LogoLayout = styled.div`
  height: 45px;
  width: 100%;
  padding: ${rhythm(1 / 4)} 0;
  margin-bottom: ${rhythm(1)};
  ${media.md`
    margin-bottom: 0;
  `}
  * {
    height: 100%;
    width: auto;
  }
`;

export const Row = {
  def: styled(_Row)``,
  menu: styled(_Row)`
    ${media.md`
      margin-bottom: ${rhythm(1)};
      order: 0;
      `};
    order: 2;
  `,
};

export const Col = {
  def: styled(_Col)``,
};
