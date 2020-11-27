import styled, { createGlobalStyle, css } from 'styled-components';
import { media } from 'styled-bootstrap-grid';
// Component
import { SidebarStatueType, SidebarStatueStyle } from '@module/MSB/style';

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
export const Main = styled.main`
  width: 100%;
  @media (max-width: 1106px) and (min-width: 993px) {
    max-width: calc(100% - 146px);
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
        > *:first-child {
          --color: ${({ theme }) => theme.color.primary};
        }
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
  * {
    box-sizing: border-box;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${_GlobalStyle};
`;
