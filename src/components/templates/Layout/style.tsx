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
  /* ${SidebarStatueStyle.Def}; */
  ${({ sidebarOpen }) => sidebarOpen && SidebarStatueStyle.Open};

  ${({ msbType }) => msbType !== 'hidden' && DefaultMainWrapper};
  ${media.xxl`
    margin-left: auto;
  `};
`;
export const Main = styled.main`
  width: 100%;
  margin: auto;
  @media (max-width: 1106px) and (min-width: 993px) {
    max-width: calc(100% - 146px);
  }
`;

const _GlobalStyle = css`
  body {
    background-color: ${({ theme }) => theme.colors.bg[1]};
    color: ${({ theme }) => theme.colors.text[0]};
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text[0]};
      &:hover,
      &.active {
        color: ${({ theme }) => theme.colors.primary};
        > *:first-child {
          --color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  * {
    box-sizing: border-box;
  }
`;
const GlobalVariable = css`
  body {
    --gnb-height: 45px;
    --fnb-height: 71px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${_GlobalStyle};
  ${GlobalVariable};
`;
