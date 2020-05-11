import React from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css,
} from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { isMobile } from 'react-device-detect';
// COMPONENTS
import Grid from '@style/Grid';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';
import MSB from '@organism/MSB';

import DefaultTheme, { DarkTheme } from '@style/themes';

const MainWrapper = styled.div``;
const PageWrap = styled.div`
  display: flex;
`;
const Main = styled.div`
  width: 100%;
`;

const scrollControl = css`
  html,
  body,
  #___gatsby {
    height: 100vh;
    overflow: hidden;
  }
  #gatsby-focus-wrapper {
    --gnb-height: 45px;
    --fnb-height: 71px;
    margin-top: var(--gnb-height);
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
`;
const GlobalStyle = createGlobalStyle`
  ${_GlobalStyle};
  ${!isMobile && scrollControl}
`;

interface props {
  children: React.ReactNode;
  isDark?: boolean;
}
const Layout = ({ children, isDark }: props) => {
  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : DefaultTheme}>
        <GlobalStyle />
        <GridThemeProvider gridTheme={Grid}>
          <>
            <GNB />
            <MainWrapper>
              <PageWrap>
                <MSB />
                <Main className={`layout_main ${isDark ? 'dark' : 'light'}`}>
                  {children}
                </Main>
              </PageWrap>
              <FNB />
            </MainWrapper>
          </>
        </GridThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;
