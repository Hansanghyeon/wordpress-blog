import styled, { css } from 'styled-components';
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
  height: 100%;
  padding: ${rhythm(1)};
  font-family: 'Fira Code';
  position: fixed;
  top: 0;
  transform: translateX(${({ isActive }) => (isActive ? 0 : '-100%')});
  z-index: 900;
  transition: transform 0.5s ease-out;
  will-change: transform;
  background-color: ${({ theme }) => transparentize(0.05, theme.color.bg[1])};

  ${media.md`
    height: 100%;
    background-color: transparent;
    padding: 0 ${rhythm(1)};
    transform: unset;
  `};

  ${media.xxl`
    transform: unset;
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
    display: block;
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

export interface SidebarStatueType {
  sidebarOpen: boolean;
}
export const SidebarStatueStyle = {
  def: css`
    transition: transform 0.5s ease-out;
    will-change: transform;
  `,
  open: css`
    transform: translateX(200px);
  `,
};
