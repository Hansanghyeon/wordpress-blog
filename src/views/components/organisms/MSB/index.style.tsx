import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

import { rhythm } from '@style/typography';

export const SideBar = styled.div`
  width: 200px;
  height: 100%;
  position: sticky;
  top: -45px;
  margin-top: -45px;
  padding: 0 ${rhythm(1 / 2)};
  font-family: 'Fira Code';
  display: none;
  ${media.xxl`
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 0;
    z-index: 200;
  `}
  ${media.md`
    display: block;
  `}
  .cat-text {
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
