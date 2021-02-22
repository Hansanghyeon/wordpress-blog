import styled, { css } from 'styled-components';
import {
  media,
  Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';
import { transparentize } from 'polished';

import { rhythm } from '@style/typography';

const DefaultSideBar = css`
  ${media.md`
    transform: unset;
  `};
  ${media.xxl`
    transform: unset;
  `};
`;
const mdHiddenSideBar = css`
  ${media.md`
    transform: translateX(-100%);
  `};
  ${media.xxl`
    transform: translateX(-100%);
  `};
`;

type SideBarProps = {
  isActive?: boolean;
  type?: string;
};
const RSideBar = styled.div`
  ${media.md`
    height: 100%;
    background-color: transparent;
    padding: 0 ${rhythm(1 / 2)};
  `};
`;
export const SideBar = styled(RSideBar)<SideBarProps>`
  width: 200px;
  height: 100%;
  padding: calc(${rhythm(1)} + 45px) ${rhythm(1 / 2)} ${rhythm(1)};
  position: fixed;
  top: 0;
  transform: translateX(${({ isActive }) => (isActive ? 0 : '-100%')});
  z-index: 900;
  transition: transform 0.5s ease-out;
  will-change: transform;
  background-color: ${({ theme }) => transparentize(0.05, theme.palette.bg[1])};

  overflow-y: scroll;
  &::-webkit-scrollbar {
    all: unset;
  }
  &::-webkit-scrollbar-track {
    all: unset;
  }
  &::-webkit-scrollbar-thumb {
    all: unset;
  }

  /* TODO: type 추가 */
  ${({ type }) => (type !== 'hidden' ? DefaultSideBar : mdHiddenSideBar)}

  .cat-text {
    font-size: 14px;
  }
`;

export const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.md`
    padding-top: calc(${rhythm(1)} + 45px);
    padding-bottom: ${rhythm(1)};
    display: block;
  `}
`;

const Row = styled(_Row)`
  margin-bottom: ${rhythm(1 / 2)};
` as typeof _Row & {
  Menu: typeof _Row;
};
Row.Menu = styled(_Row)`
  ${media.md`
    margin-bottom: ${rhythm(1)};
    order: 0;
  `};
  order: 2;
`;
export { Row };

const Col = styled(_Col)`` as typeof _Col & {};
export { Col };

export interface SidebarStatueType {
  sidebarOpen?: boolean;
}
export const SidebarStatueStyle = {
  Def: css`
    > div {
      transition: transform 0.5s ease-out;
    }
  `,
  Open: css`
    > div {
      transform: translateX(200px);
    }
  `,
};
