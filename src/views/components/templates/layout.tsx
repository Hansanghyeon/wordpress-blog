import React from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css,
} from 'styled-components';
import { GridThemeProvider } from 'styled-bootstrap-grid';

import Grid from '@style/Grid';
import GNB from '@organism/GNB';
import FNB from '@organism/FNB';
import MSB from '@organism/MSB';

import DefaultTheme, { DarkTheme } from '@style/themes';

const MainWrapper = styled.div`
  --mt: 45px;
  margin-top: var(--mt);
  height: calc(100% - var(--mt));
  overflow-y: scroll;
  &::-webkit-scrollbar:vertical {
    width: 8px;
  }
`;
const PageWrap = styled.div`
  display: flex;
  min-height: 100%;
`;
const Main = styled.div`
  width: 100%;
`;

const _GlobalStyle = css`
  body {
    background-color: ${({ theme }) => theme.color.bg[1]};
    color: ${({ theme }) => theme.color.text[0]};
    a {
      color: ${({ theme }) => theme.color.text[0]};
      &:hover {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;
const GlobalStyle = createGlobalStyle`
  ${_GlobalStyle}
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
