import styled, { createGlobalStyle, css } from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { isMobile } from 'react-device-detect';
// Component
import {
  SidebarStatueType,
  SidebarStatueStyle,
} from '@organism/MSB/index.style';

interface MainWrapperType extends SidebarStatueType {
  msbType: string;
}
const DefaultMainWrapper = css`
  ${media.md`
    margin-left: 200px;
  `};
`;
export const MainWrapper = styled.div<MainWrapperType>`
  ${SidebarStatueStyle.Def};
  ${({ sidebarOpen }) => sidebarOpen && SidebarStatueStyle.Open};

  ${({ msbType }) => msbType !== 'hidden' && DefaultMainWrapper};
  ${media.xxl`
    margin-left: auto;
  `};
`;
export const Main = styled.div`
  width: 100%;
  @media (max-width: 1106px) and (min-width: 993px) {
    max-width: calc(100% - 146px);
  }
`;

const scrollControl = css`
  html,
  body,
  #___gatsby {
    height: 100vh;
    overflow: hidden;
  }
  #gatsby-focus-wrapper {
    --fnb-height: 71px;
    height: calc(100vh - var(--gnb-height));
    overflow: auto;
  }
`;
const _GlobalStyle = css`
  body {
    background-color: ${({ theme }) => theme.color.bg[1]};
    color: ${({ theme }) => theme.color.text[0]};
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.text[0]};
      &:hover,
      &.active {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
  .tl-wrapper--unmount {
    box-shadow: inset rgba(0, 0, 0, 0.13) 0px 0px 100px 10px !important;
  }
  #gatsby-focus-wrapper {
    --gnb-height: 45px;
    margin-top: var(--gnb-height);
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${_GlobalStyle};
  ${!isMobile && scrollControl}
`;
